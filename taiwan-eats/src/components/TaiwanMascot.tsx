// Floating boba tea cup mascot — homepage only, purely decorative
export default function TaiwanMascot() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group select-none">

      {/* Speech bubble — fades in on hover */}
      <div
        aria-hidden="true"
        className="absolute bottom-full right-0 mb-3 pointer-events-none
                   opacity-0 translate-y-1
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-200 ease-out"
      >
        <div
          className="bg-white text-ink text-[0.7rem] font-sans font-semibold
                     px-3 py-1.5 rounded-2xl shadow-md border border-parchment-border
                     whitespace-nowrap leading-snug"
        >
          吃了嗎？Have you eaten? 🍜
        </div>
        {/* Downward tail */}
        <div
          className="absolute -bottom-[5px] right-5 w-2.5 h-2.5 bg-white
                     border-r border-b border-parchment-border rotate-45"
        />
      </div>

      {/* Mascot — gently bobs */}
      <div className="mascot-float drop-shadow-xl">
        <svg
          width="72"
          height="88"
          viewBox="0 0 80 100"
          overflow="visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="TaiwanEats mascot — a cheerful boba tea cup"
        >
          {/* ── Straw ────────────────────────────────────────── */}
          <rect x="37" y="1" width="6" height="26" rx="3" fill="#4A7860" />

          {/* ── Cup body ─────────────────────────────────────── */}
          <path d="M15 24 L65 24 L60 82 Q40 90 20 82 Z" fill="#C03A2B" />

          {/* Subtle shine strip */}
          <path
            d="M21 30 L17 67"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* ── Boba pearls ──────────────────────────────────── */}
          <circle cx="27" cy="74" r="5.5" fill="#2D1A0A" />
          <circle cx="40" cy="77" r="5.5" fill="#2D1A0A" />
          <circle cx="53" cy="74" r="5.5" fill="#2D1A0A" />
          <circle cx="33" cy="66" r="4.5" fill="#2D1A0A" />
          <circle cx="47" cy="66" r="4.5" fill="#2D1A0A" />

          {/* ── Face ─────────────────────────────────────────── */}
          {/* Warm glow behind face */}
          <ellipse cx="40" cy="45" rx="16" ry="15" fill="rgba(255,215,185,0.18)" />

          {/* Eyes */}
          <ellipse cx="33" cy="42" rx="3.5" ry="4" fill="#1A1714" />
          <ellipse cx="47" cy="42" rx="3.5" ry="4" fill="#1A1714" />
          {/* Eye shine spots */}
          <circle cx="34.5" cy="40.5" r="1.3" fill="white" />
          <circle cx="48.5" cy="40.5" r="1.3" fill="white" />

          {/* Smile */}
          <path
            d="M34 51 Q40 57 46 51"
            stroke="#1A1714"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Rosy cheeks */}
          <ellipse cx="26" cy="49" rx="5" ry="3" fill="#F08090" opacity="0.36" />
          <ellipse cx="54" cy="49" rx="5" ry="3" fill="#F08090" opacity="0.36" />

          {/* ── Arms ─────────────────────────────────────────── */}
          {/* Left arm — hanging down */}
          <path
            d="M16 43 Q5 49 4 58"
            stroke="#9B2F23"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="4" cy="61" r="6" fill="#9B2F23" />

          {/* Right arm — waving! (animated) */}
          <g className="mascot-wave">
            <path
              d="M64 43 Q73 34 76 23"
              stroke="#9B2F23"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="76" cy="20" r="6" fill="#9B2F23" />
          </g>

          {/* ── Lid ──────────────────────────────────────────── */}
          <ellipse cx="40" cy="24" rx="25" ry="6" fill="#9B2F23" />
          {/* Dome tint */}
          <path
            d="M15 24 Q16 12 40 10 Q64 12 65 24"
            fill="rgba(210,240,230,0.22)"
          />
        </svg>
      </div>
    </div>
  );
}
