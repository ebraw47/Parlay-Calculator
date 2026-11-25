"use client";

import { useMemo, useState } from "react";
import {
  OddsFormat,
  ParlayLeg,
  calculateRoundRobin,
  createLeg,
  formatMoney,
} from "@/lib/parlayMath";
import { useCalcTheme } from "@/hooks/useCalcTheme";
import CalcThemeToggle from "@/components/CalcThemeToggle";

export default function RoundRobinCalculator({
  id = "round-robin",
  title = "Round Robin Calculator",
}: {
  id?: string;
  title?: string;
}) {
  const { theme, setTheme, isDay } = useCalcTheme("night");
  const [format, setFormat] = useState<OddsFormat>("american");
  const [stake, setStake] = useState("10");
  const [legs, setLegs] = useState<ParlayLeg[]>(() =>
    Array.from({ length: 4 }, () => createLeg("-110"))
  );
  const [sizes, setSizes] = useState<number[]>([2, 3]);

  const result = useMemo(
    () => calculateRoundRobin(legs, Number(stake) || 0, format, sizes),
    [legs, stake, format, sizes]
  );

  const toggleSize = (size: number) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size].sort((a, b) => a - b)
    );
  };

  const shell = isDay
    ? "border-gold/40 bg-[#f4efe3] shadow-[0_28px_70px_-30px_rgba(184,150,46,0.35)]"
    : "border-gold/30 bg-[#0c0c0c] shadow-[0_28px_70px_-30px_rgba(212,175,55,0.45)]";
  const panel = isDay ? "bg-[#fffaf0] text-[#1c1917]" : "bg-[#111111] text-white";
  const titleText = isDay ? "text-[#1c1917]" : "text-white";
  const muted = isDay ? "text-[#44403c]" : "text-white/60";
  const label = isDay ? "text-[#292524]" : "text-white/80";
  const field = isDay
    ? "calc-input w-full rounded-2xl border border-[#d6d3d1] bg-white px-4 py-3.5 text-base font-semibold text-[#1c1917] outline-none transition placeholder:text-[#a8a29e] hover:border-gold/50 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/20"
    : "calc-input w-full rounded-2xl border border-gold/25 bg-[#141414] px-4 py-3.5 text-base font-semibold text-white outline-none transition placeholder:text-white/30 hover:border-gold/40 focus:border-gold/70 focus:bg-[#1a1a1a] focus:ring-4 focus:ring-gold/15";
  const idleBtn = isDay
    ? "border-[#d6d3d1] bg-white text-[#292524]"
    : "border-white/10 bg-white/5 text-white/65";
  const activeFormat = isDay
    ? "border-[#b45309] bg-[#fef3c7] text-[#92400e]"
    : "border-gold bg-gold/20 text-gold";
  const removeLast = isDay
    ? "border-[#d6d3d1] text-[#44403c]"
    : "border-white/10 text-white/60";
  const tableWrap = isDay ? "border-[#d6d3d1]" : "border-white/10";
  const thead = isDay ? "bg-[#f5f5f4] text-[#57534e]" : "bg-white/5 text-white/50";
  const trow = isDay ? "border-t border-[#e7e5e4] text-[#1c1917]" : "border-t border-white/5 text-white/85";
  const errorText = isDay ? "text-amber-800" : "text-amber-300/90";

  return (
    <div
      id={id}
      data-calc-theme={theme}
      className={`calc-shell relative scroll-mt-24 overflow-hidden rounded-[1.75rem] border p-1 transition-colors duration-300 ${shell}`}
    >
      <div className={`relative rounded-[1.4rem] p-4 transition-colors duration-300 sm:p-6 md:p-7 ${panel}`}>
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Multi-ticket builder
            </p>
            <h2 className={`mt-1 font-display text-2xl font-bold ${titleText}`}>{title}</h2>
            <p className={`mt-1 max-w-2xl text-sm ${muted}`}>
              A round robin turns your selections into every possible 2-leg, 3-leg, or larger parlay
              combination so one miss does not wipe the whole ticket.
            </p>
          </div>
          <CalcThemeToggle theme={theme} onChange={setTheme} />
        </div>

        <div className="mb-4 grid gap-4 sm:grid-cols-2">
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
          </div>
          <div>
            <label className={`mb-2 block text-sm font-semibold ${label}`}>
              Stake per parlay ($)
            </label>
            <input
              type="number"
              min="0"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              className={field}
            />
          </div>
        </div>

        <div className="mb-4 space-y-3">
          {legs.map((leg, index) => (
            <div key={leg.id} className="flex items-center gap-2">
              <span className="w-20 text-xs font-semibold uppercase text-gold/80">
                Pick {index + 1}
              </span>
              <input
                type="text"
                value={leg.odds}
                onChange={(e) =>
                  setLegs((prev) =>
                    prev.map((l) => (l.id === leg.id ? { ...l, odds: e.target.value } : l))
                  )
                }
                className={field}
              />
            </div>
          ))}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setLegs((prev) => [...prev, createLeg("-110")])}
              className="rounded-xl border border-gold/40 bg-gold/15 px-3 py-2 text-sm font-semibold text-gold"
            >
              + Add pick
            </button>
            <button
              type="button"
              onClick={() => setLegs((prev) => (prev.length > 3 ? prev.slice(0, -1) : prev))}
              className={`rounded-xl border px-3 py-2 text-sm font-semibold ${removeLast}`}
            >
              Remove last
            </button>
          </div>
        </div>

        <div className="mb-5">
          <p className={`mb-2 text-sm font-semibold ${label}`}>Parlay sizes to include</p>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => toggleSize(size)}
                disabled={size > legs.length}
                className={`rounded-xl border px-3 py-2 text-sm font-semibold disabled:opacity-30 ${
                  sizes.includes(size) ? activeFormat : idleBtn
                }`}
              >
                {size}-leg
              </button>
            ))}
          </div>
        </div>

        {result.valid ? (
          <div className={`overflow-x-auto rounded-2xl border ${tableWrap}`}>
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className={thead}>
                <tr>
                  <th className="px-4 py-3 font-semibold">Size</th>
                  <th className="px-4 py-3 font-semibold">Tickets</th>
                  <th className="px-4 py-3 font-semibold">Total stake</th>
                  <th className="px-4 py-3 font-semibold">Payout if all hit</th>
                  <th className="px-4 py-3 font-semibold">Profit if all hit</th>
                </tr>
              </thead>
              <tbody>
                {result.bundles.map((bundle) => (
                  <tr key={bundle.size} className={trow}>
                    <td className="px-4 py-3 font-semibold text-gold">{bundle.size}-leg</td>
                    <td className="px-4 py-3">{bundle.count}</td>
                    <td className="px-4 py-3">{formatMoney(bundle.totalStake)}</td>
                    <td className="px-4 py-3">{formatMoney(bundle.totalPayoutIfAllHit)}</td>
                    <td className="px-4 py-3 text-gold">{formatMoney(bundle.totalProfitIfAllHit)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={`text-sm ${errorText}`}>{result.error}</p>
        )}
      </div>
    </div>
  );
}
