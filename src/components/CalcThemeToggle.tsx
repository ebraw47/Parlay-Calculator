"use client";

import type { CalcTheme } from "@/hooks/useCalcTheme";

export default function CalcThemeToggle({
  theme,
  onChange,
}: {
  theme: CalcTheme;
  onChange: (theme: CalcTheme) => void;
}) {
  const isDay = theme === "day";

  return (
    <div
      className={`inline-flex items-center rounded-xl border p-1 ${
        isDay ? "border-[#d6d3d1] bg-[#f5f5f4]" : "border-white/10 bg-white/5"
      }`}
      role="group"
      aria-label="Calculator appearance"
    >
      <button
        type="button"
        onClick={() => onChange("day")}
        aria-pressed={isDay}
        className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
          isDay
            ? "bg-white text-[#1c1917] shadow-sm"
            : "text-white/55 hover:text-white"
        }`}
      >
        <SunIcon />
        Day
      </button>
      <button
        type="button"
        onClick={() => onChange("night")}
        aria-pressed={!isDay}
        className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
          !isDay
            ? "bg-gold/20 text-gold"
            : "text-[#57534e] hover:text-[#1c1917]"
        }`}
      >
        <MoonIcon />
        Night
      </button>
    </div>
  );
}

function SunIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
