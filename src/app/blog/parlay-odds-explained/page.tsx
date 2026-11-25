import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const slug = "parlay-odds-explained";
const title = "Parlay Odds Explained: Combined Lines & Implied Probability";
const description =
  "Parlay odds explained: how books build combined lines, why favorites stack oddly, and what implied probability tells you.";
const datePublished = "2026-11-20";

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

export default function ParlayOddsExplainedPost() {
  return (
    <>
      <BlogPostSchema title={title} description={description} slug={slug} datePublished={datePublished} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Parlay Odds Explained" },
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
            “Parlay odds” usually means the single price attached to your entire multi-leg ticket—the
            combined American line, the combined decimal multiplier, or the fixed payout chart at a
            retail window. Under the hood, every version is the same: multiply decimal odds for each leg,
            then present the result in the format you read on screen. Understanding that pipeline explains
            why chalk stacks feel “safe” while implied probability tells a sterner story.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Combined American vs true price</h2>
          <p>
            Sportsbooks display combined American odds for convenience. A +1200 ticket might tempt a
            small stake, but implied probability could be under 8%. Combined American is not “how much
            better each leg got”—it is the translation of one big decimal product into the U.S. quoting
            style.
          </p>
          <p>
            When you compare tickets, compare decimals or implied probability, not gut feel. Our{" "}
            <Link href="/parlay-odds-calculator" className="font-semibold text-gold underline">
              parlay odds calculator
            </Link>{" "}
            shows American, decimal, and implied % together.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Why stacking favorites is tricky</h2>
          <p>
            Each heavy favorite contributes a multiplier just above 1.0. Three −300 moneylines multiply
            to a decimal still below many two-leg underdog tickets. Bettors overweight how often all
            favorites win on the same day; books already baked vig into each leg. Combined probability is
            the product of individual implied probabilities (ignoring correlation)—so variance stays real
            even when every side looks “should win.”
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Implied probability on parlays</h2>
          <p>
            For decimal odds D (stake included), implied probability ≈ 1 / D. A 10.0 decimal parlay
            implies ~10% break-even rate. Use that number as a discipline check, not a prediction of your
            personal edge. If you would not take a 10% proposition as a straight bet at fair odds, a
            parlay showing 10% implied is the same hurdle with one ticket.
          </p>
          <p>
            Vig stacks leg by leg. Parlays can still be “fair” entertainment products, but the house edge
            compounds compared to betting the same legs as singles—see{" "}
            <Link href="/blog/parlay-vs-straight-bet" className="font-semibold text-gold underline">
              parlay vs straight bet
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Fixed payout charts vs online multiplication</h2>
          <p>
            Some brick-and-mortar books publish fixed parlay payouts for -110 legs only. Online products
            multiply whatever prices you actually get—-105, +120 moneylines, alt totals. Always enter real
            legs into a calculator instead of assuming “6-team pays 40-1.”
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Round robins change the question</h2>
          <p>
            Round robin odds are not one combined line—they are a basket of smaller parlays, each with its
            own combined price. You pay more total stake for partial coverage. Explained in full:{" "}
            <Link href="/blog/round-robin-betting-explained" className="font-semibold text-gold underline">
              round robin betting explained
            </Link>{" "}
            and the{" "}
            <Link href="/round-robin-calculator" className="font-semibold text-gold underline">
              round robin calculator
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Quick checklist before you bet</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Convert every leg to decimal (or let the tool do it).</li>
            <li>Multiply decimals; confirm combined American matches the book.</li>
            <li>Read implied probability and decide if stake fits your plan.</li>
            <li>Separate payout (with stake) from profit (without).</li>
            <li>Re-check after line moves—injury news shifts legs fast on NFL slates.</li>
          </ol>

          <p>
            For formulas step-by-step, read{" "}
            <Link href="/blog/how-to-calculate-parlay-odds" className="font-semibold text-gold underline">
              how to calculate parlay odds
            </Link>
            .
          </p>
        </div>

        <div className="mt-10">
          <CtaButton href="/parlay-odds-calculator">CALCULATE COMBINED ODDS</CtaButton>
        </div>
      </article>
    </>
  );
}