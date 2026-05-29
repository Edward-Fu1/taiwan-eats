"use client";
import { useEffect, useState } from "react";

// Thin lantern-red progress bar fixed to the very top of the viewport.
// Only rendered on article pages — import where needed.
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled  = window.scrollY;
      const total     = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min((scrolled / total) * 100, 100) : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="reading-progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}
