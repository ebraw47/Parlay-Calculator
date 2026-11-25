import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog — Parlay Calculator Guides",
  description:
    "Educational parlay betting guides: how odds combine, payouts, same-game parlays, round robins, and parlay vs straight bets.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Blog — Parlay Calculator Guides",
    description: "Parlay betting articles for bettors who use parlaycalculator.app.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Parlay Calculator blog" }],
  },
};

const posts = [
  {
    href: "/blog/how-to-calculate-parlay-odds",
    title: "How to Calculate Parlay Odds (American, Decimal & Fractional)",
    excerpt:
      "Step-by-step formulas to convert legs and multiply decimal multipliers—without adding American prices.",
    date: "November 2026",
    read: "11 min",
    image: BRAND_HERO,
    alt: "How to calculate parlay odds guide",
  },
  {
    href: "/blog/what-is-a-parlay-bet",
    title: "What Is a Parlay Bet? Rules, Payouts & Examples",
    excerpt:
      "Define parlays, explain all-or-nothing settlement, and show when they beat or lose to straight bets.",
    date: "November 2026",
    read: "10 min",
    image: BRAND_FEATURE_2,
    alt: "What is a parlay bet explained",
  },
  {
    href: "/blog/parlay-odds-explained",
    title: "Parlay Odds Explained: Combined Lines & Implied Probability",
    excerpt:
      "Why stacked favorites still carry risk, how combined American odds are built, and what implied probability means.",
    date: "November 2026",
    read: "9 min",
    image: BRAND_FEATURE_3,
    alt: "Parlay odds explained",
  },
  {
    href: "/blog/same-game-parlay-explained",
    title: "Same-Game Parlay Explained (SGP)",
    excerpt:
      "Correlated legs, sportsbook pricing models, and when multiplication overstates or understates SGP value.",
    date: "November 2026",
    read: "10 min",
    image: BRAND_FEATURE_4,
    alt: "Same game parlay explained",
  },
  {
    href: "/blog/round-robin-betting-explained",
    title: "Round Robin Betting Explained",
    excerpt:
      "How combo sizes work, total stake on multiple tickets, and when round robins beat one big parlay.",
    date: "November 2026",
    read: "9 min",
    image: BRAND_FEATURE_2,
    alt: "Round robin betting explained",
  },
  {
    href: "/blog/parlay-vs-straight-bet",
    title: "Parlay vs Straight Bet: Variance, EV & Bankroll",
    excerpt:
      "Compare hit rates, hold, and entertainment value when you stack legs instead of betting singles.",
    date: "November 2026",
    read: "10 min",
    image: BRAND_HERO,
    alt: "Parlay vs straight bet comparison",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">
          Parlay Calculator blog
        </h1>
        <p className="mb-10 text-lg text-white/80">
          Guides that match real search intent: parlay odds math, SGPs, round robins, and straight-bet
          comparisons—paired with the{" "}
          <Link href="/" className="font-semibold text-gold underline">
            free calculator
          </Link>
          .
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block overflow-hidden rounded-2xl border border-gold/20 bg-[#121212] transition-colors hover:border-gold/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <article>
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/45">
                    {post.date} · {post.read}
                  </p>
                  <h2 className="font-display text-xl font-bold text-white group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}