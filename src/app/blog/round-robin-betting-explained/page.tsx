import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const slug = "round-robin-betting-explained";
const title = "Round Robin Betting Explained";
const description =
  "Round robin betting explained: parlay sizes, number of tickets, total stake, and when round robins beat one parlay.";
const datePublished = "2026-11-22";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${slug}` },
  openGraph: {
    title,
    description,
    url: `${SITE_ORIGIN}/blog/${slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: title }],
  },
};

export default function RoundRobinBettingExplainedPost() {
  return (
    <>
      <BlogPostSchema title={title} description={description} slug={slug} datePublished={datePublished} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Round Robin Betting" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-8">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Published {datePublished}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
          <p className="mt-4 text-lg text-white/70">{description}</p>
        </header>

        <div className="space-y-6 text-white/75 leading-relaxed">
          <p>
            Round robin betting is a packaging choice, not a new odds format. You supply a set of picks
            and choose parlay sizes—commonly 2-leg and 3-leg combos. The sportsbook (or your spreadsheet)
            generates every combination of that size, and you stake each mini-parlay separately. One miss
            might destroy a 4-leg straight parlay but still leave paying 2-leg tickets in a round robin.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">How many tickets fire?</h2>
          <p>
            Combinations grow quickly. Four picks, round robin by 2s: C(4,2) = 6 two-leg parlays. Five
            picks by 2s: 10 tickets. Add 3-leg sizing and you add C(n,3) more tickets. Each ticket uses the
            same parlay math: multiply decimal odds of its legs, apply stake per combo.
          </p>
          <p>
            Model your card with the{" "}
            <Link href="/round-robin-calculator" className="font-semibold text-gold underline">
              round robin calculator
            </Link>{" "}
            on parlaycalculator.app—toggle sizes, enter stake per parlay, and see total exposure.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Stake math</h2>
          <p>
            If you enter $10 per parlay and the structure creates 20 combos, total risk is $200—not $10.
            Bettors often mistake “unit size” on the slip for whole-card risk. Always multiply stake ×
            number of tickets before you submit.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Round robin vs single parlay</h2>
          <p>
            Single parlay: max payout, max fragility. Round robin: lower peak payout on any one combo,
            but partial success pays. You pay for that insurance with higher aggregate stake and more
            compounding vig across tickets.
          </p>
          <p>
            Compare philosophically in{" "}
            <Link href="/blog/parlay-vs-straight-bet" className="font-semibold text-gold underline">
              parlay vs straight bet
            </Link>
            —variance tradeoffs rhyme, even though round robins are still parlay-family products.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Example slate</h2>
          <p>
            Four NFL sides at -110 each. One 4-leg parlay at $100 stakes $100 total. A 2-leg round robin
            at $25 per combo creates six tickets → $150 total risk. Go 3-1 on the day: the straight
            parlay loses entirely; the round robin may still cash multiple two-leg winners at smaller
            returns.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">When round robins make sense</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>You like four dogs but fear one bad beat.</li>
            <li>You want structured exposure without hand-building six separate tickets.</li>
            <li>You accept higher total stake for smoother outcomes.</li>
          </ul>
          <p>
            When they make less sense: you are confident in a tiny card and want maximum leverage—in that
            case a standard{" "}
            <Link href="/parlay-bet-calculator" className="font-semibold text-gold underline">
              parlay bet
            </Link>{" "}
            may fit better.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Odds formats</h2>
          <p>
            Round robins inherit leg prices in American, decimal, or fractional form. Conversion happens
            per combo, same as any parlay. Read{" "}
            <Link href="/blog/how-to-calculate-parlay-odds" className="font-semibold text-gold underline">
              how to calculate parlay odds
            </Link>{" "}
            for the underlying multiplication.
          </p>
        </div>

        <div className="mt-10">
          <CtaButton href="/round-robin-calculator">OPEN ROUND ROBIN TOOL</CtaButton>
        </div>
      </article>
    </>
  );
}