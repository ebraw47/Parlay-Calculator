'use client';

const categories = [
  { name: 'How to calculate parlay odds', href: '/blog/how-to-calculate-parlay-odds' },
  { name: 'What is a parlay bet?', href: '/blog/what-is-a-parlay-bet' },
  { name: 'Parlay odds explained', href: '/blog/parlay-odds-explained' },
  { name: 'Same-game parlays', href: '/blog/same-game-parlay-explained' },
  { name: 'Round robin explained', href: '/blog/round-robin-betting-explained' },
  { name: 'Parlay vs straight bet', href: '/blog/parlay-vs-straight-bet' },
];

export default function BlogCategoryDropdown() {
  return (
    <label className="block text-sm text-white/70">
      <span className="mb-1 block font-semibold text-white/80">Jump to guide</span>
      <select
        className="w-full rounded-xl border border-gold/25 bg-[#141414] px-3 py-2.5 text-white outline-none focus:border-gold/60"
        defaultValue=""
        onChange={(e) => {
          if (e.target.value) window.location.href = e.target.value;
        }}
      >
        <option value="" disabled>
          Choose an article
        </option>
        {categories.map((item) => (
          <option key={item.href} value={item.href}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}
