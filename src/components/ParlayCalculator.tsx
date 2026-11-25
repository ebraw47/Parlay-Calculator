"use client";

import { useMemo, useState } from "react";
import {
  OddsFormat,
  ParlayLeg,
  calculateParlay,
  createLeg,
  formatAmerican,
  formatDecimal,
  formatMoney,
} from "@/lib/parlayMath";
import { useCalcTheme } from "@/hooks/useCalcTheme";
import CalcThemeToggle from "@/components/CalcThemeToggle";

const formatHints: Record<OddsFormat, string> = {
  american: "Examples: -110, +150, -200",
  decimal: "Examples: 1.91, 2.50, 3.00",
  fractional: "Examples: 10/11, 3/2, 5/1",
};

export default function ParlayCalculator({
  id = "calculator",
  title = "Parlay Calculator",
  defaultFormat = "american" as OddsFormat,
  defaultOdds = "-110",
  initialLegs = 3,
}: {
  id?: string;
  title?: string;
  defaultFormat?: OddsFormat;
  defaultOdds?: string;
  initialLegs?: number;
}) {
  const { theme, setTheme, isDay } = useCalcTheme("night");
  const [format, setFormat] = useState<OddsFormat>(defaultFormat);
  const [stake, setStake] = useState("100");
  const [legs, setLegs] = useState<ParlayLeg[]>(() =>
    Array.from({ length: Math.max(2, initialLegs) }, () => createLeg(defaultOdds))
  );

  const stakeNumber = Number(stake) || 0;

  const result = useMemo(
    () => calculateParlay(legs, stakeNumber, format),
    [legs, stakeNumber, format]
  );

  const updateLeg = (legId: string, odds: string) => {
    setLegs((prev) => prev.map((leg) => (leg.id === legId ? { ...leg, odds } : leg)));
  };

  const addLeg = () => {
    if (legs.length >= 20) return;
    setLegs((prev) => [...prev, createLeg(defaultOdds)]);
  };

  const removeLeg = (legId: string) => {
    setLegs((prev) => (prev.length <= 2 ? prev : prev.filter((leg) => leg.id !== legId)));
  };

  const reset = () => {
    setFormat(defaultFormat);
    setStake("100");
    setLegs(Array.from({ length: Math.max(2, initialLegs) }, () => createLeg(defaultOdds)));
  };

  const shell = isDay
    ? "border-gold/40 bg-[#f4efe3] shadow-[0_28px_70px_-30px_rgba(184,150,46,0.35)]"
    : "border-gold/30 bg-[#0c0c0c] shadow-[0_28px_70px_-30px_rgba(212,175,55,0.45)]";
  // Solid hex colors — avoid text-black/* opacity utils (inherit poorly against site light foreground)
  const panel = isDay ? "bg-[#fffaf0] text-[#1c1917]" : "bg-[#111111] text-white";
  const titleText = isDay ? "text-[#1c1917]" : "text-white";
  const muted = isDay ? "text-[#44403c]" : "text-white/60";
  const label = isDay ? "text-[#292524]" : "text-white/80";
  const hint = isDay ? "text-[#57534e]" : "text-white/40";
  const field = isDay
    ? "calc-input w-full rounded-2xl border border-[#d6d3d1] bg-white px-4 py-3.5 text-base font-semibold text-[#1c1917] outline-none transition placeholder:text-[#a8a29e] hover:border-gold/50 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/20"
    : "calc-input w-full rounded-2xl border border-gold/25 bg-[#141414] px-4 py-3.5 text-base font-semibold text-white outline-none transition placeholder:text-white/30 hover:border-gold/40 focus:border-gold/70 focus:bg-[#1a1a1a] focus:ring-4 focus:ring-gold/15";
  const idleBtn = isDay
    ? "border-[#d6d3d1] bg-white text-[#292524] hover:border-gold/50 hover:text-[#1c1917]"
    : "border-white/10 bg-white/5 text-white/65 hover:border-white/20";
  const resetBtn = isDay
    ? "border-[#d6d3d1] bg-white text-[#292524] hover:border-gold/50 hover:text-[#1c1917]"
    : "border-white/10 bg-white/5 text-white/70 hover:border-gold/40 hover:text-white";
  const removeBtn = isDay
    ? "border-[#d6d3d1] text-[#57534e] hover:border-red-400 hover:text-red-700"
    : "border-white/10 text-white/50 hover:border-red-400/40 hover:text-red-300";
  const resultsPanel = isDay
    ? "border-gold/40 bg-gradient-to-br from-[#fef3c7] via-[#fff7e6] to-white"
    : "border-gold/25 bg-gradient-to-br from-gold/15 via-[#161616] to-[#101010]";
  const glowA = isDay ? "bg-gold/25" : "bg-gold/15";
  const glowB = isDay ? "bg-amber-200/40" : "bg-white/5";
  const disclaimer = isDay ? "text-[#78716c]" : "text-white/35";
  const meta = isDay ? "text-[#44403c]" : "text-white/55";
  const errorText = isDay ? "text-amber-800" : "text-amber-300/90";
  const activeFormat = isDay
    ? "border-[#b45309] bg-[#fef3c7] text-[#92400e]"
    : "border-gold bg-gold/20 text-gold";

  return (
    <div
      id={id}
      data-calc-theme={theme}
      className={`calc-shell relative scroll-mt-24 overflow-hidden rounded-[1.75rem] border p-1 transition-colors duration-300 ${shell}`}
    >
      <div className={`pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl ${glowA}`} />
      <div className={`pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full blur-3xl ${glowB}`} />

      <div className={`relative rounded-[1.4rem] p-4 transition-colors duration-300 sm:p-6 md:p-7 ${panel}`}>
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Live payout engine
            </p>
            <h2 className={`mt-1 font-display text-2xl font-bold sm:text-[1.7rem] ${titleText}`}>
              {title}
            </h2>
            <p className={`mt-1 max-w-xl text-sm ${muted}`}>
              Stack two or more legs, pick your odds format, and see combined odds, total payout,
              and profit update instantly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <CalcThemeToggle theme={theme} onChange={setTheme} />
            <button
              type="button"
              onClick={reset}
              className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${resetBtn}`}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mb-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label className={`mb-2 block text-sm font-semibold ${label}`}>Odds format</label>
            <div className="grid grid-cols-3 gap-2">
              {(["american", "decimal", "fractional"] as OddsFormat[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFormat(item)}
                  className={`rounded-xl border px-3 py-2.5 text-sm font-semibold capitalize transition ${
                    format === item ? activeFormat : idleBtn
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className={`mt-2 text-xs ${hint}`}>{formatHints[format]}</p>
          </div>
          <div>
            <label htmlFor="stake" className={`mb-2 block text-sm font-semibold ${label}`}>
              Stake ($)
            </label>
            <input
              id="stake"
              type="number"
              min="0"
              step="1"
              inputMode="decimal"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              className={field}
              placeholder="100"
            />
          </div>
        </div>

        <div className="mb-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className={`text-sm font-semibold ${label}`}>Parlay legs</h3>
            <button
              type="button"
              onClick={addLeg}
              disabled={legs.length >= 20}
              className="rounded-xl border border-gold/40 bg-gold/15 px-3 py-1.5 text-sm font-semibold text-gold transition hover:bg-gold/25 disabled:opacity-40"
            >
              + Add leg
            </button>
          </div>
          {legs.map((leg, index) => (
            <div key={leg.id} className="flex items-center gap-2">
              <span className="w-14 shrink-0 text-xs font-semibold uppercase tracking-wide text-gold/80">
                Leg {index + 1}
              </span>
              <input
                type="text"
                value={leg.odds}
                onChange={(e) => updateLeg(leg.id, e.target.value)}
                className={field}
                placeholder={defaultOdds}
                aria-label={`Odds for leg ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeLeg(leg.id)}
                disabled={legs.length <= 2}
                className={`shrink-0 rounded-xl border px-3 py-3 text-sm font-semibold transition disabled:opacity-30 ${removeBtn}`}
                aria-label={`Remove leg ${index + 1}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className={`grid gap-3 rounded-2xl border p-4 sm:grid-cols-2 lg:grid-cols-4 sm:p-5 ${resultsPanel}`}>
          <ResultStat
            isDay={isDay}
            label="Combined American"
            value={result.valid ? formatAmerican(result.americanOdds) : "—"}
          />
          <ResultStat
            isDay={isDay}
            label="Combined decimal"
            value={result.valid ? formatDecimal(result.decimalOdds) : "—"}
          />
          <ResultStat
            isDay={isDay}
            label="Total payout"
            value={result.valid ? formatMoney(result.payout) : "—"}
            emphasize
          />
          <ResultStat
            isDay={isDay}
            label="Profit"
            value={result.valid ? formatMoney(result.profit) : "—"}
            emphasize
          />
        </div>

        {result.valid ? (
          <p className={`mt-3 text-sm ${meta}`}>
            Implied win probability for this ticket:{" "}
            <span className="font-semibold text-gold">
              {result.impliedProbability.toFixed(2)}%
            </span>{" "}
            · Fractional: {result.fractionalOdds} · {result.legCount} legs
          </p>
        ) : (
          <p className={`mt-3 text-sm ${errorText}`}>{result.error}</p>
        )}

        <p className={`mt-4 text-xs leading-relaxed ${disclaimer}`}>
          Independent odds math for educational use. Same-game parlays (SGPs) use correlated pricing
          from sportsbooks and will not always match multiplicative parlays. Always confirm final
          prices with your book. 21+ where applicable. Gamble responsibly.
        </p>
      </div>
    </div>
  );
}

function ResultStat({
  label,
  value,
  emphasize = false,
  isDay,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
  isDay: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-3 py-3 ${
        isDay ? "border-[#e7e5e4] bg-white" : "border-white/5 bg-black/30"
      }`}
    >
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
          isDay ? "text-[#57534e]" : "text-white/45"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-1 font-display text-xl font-bold tabular-nums ${
          emphasize
            ? isDay
              ? "text-[#b45309]"
              : "text-gold"
            : isDay
              ? "text-[#1c1917]"
              : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
