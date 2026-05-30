/**
 * Patch script for @cloudflare/next-on-pages compatibility with Next.js 15.
 *
 * Problem: next-on-pages auto-ignores the _not-found function ONLY when _error.func
 * is not also flagged as invalid. Next.js 15 generates _error.func with Node.js runtime,
 * which causes both to land in invalidFunctions, blocking the auto-fix.
 *
 * Fix: delete _error.func (and .rsc variant) from the vercel output so the
 * _not-found auto-fix can trigger cleanly.
 */
const fs = require("fs");
const path = require("path");

const functionsDir = ".vercel/output/functions";
const toDelete = ["_error.func", "_error.rsc.func"];

for (const target of toDelete) {
  const fullPath = path.join(functionsDir, target);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`patch-cf: removed ${target}`);
  }
}
console.log("patch-cf: done");
