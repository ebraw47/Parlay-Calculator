import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ParlayCalculator from "@/components/ParlayCalculator";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Parlay Odds Calculator — Combined American, Decimal & Fractional",
  description:
    "Free parlay odds calculator: convert American, decimal, and fractional legs, multiply them correctly, and see combined ticket odds instantly.",
  alternates: { canonical: `${SITE_ORIGIN}/parlay-odds-calculator` },
  openGraph: {
    title: "Parlay Odds Calculator",
    description: "Stack legs in any odds format and get accurate combined parlay odds on parlaycalculator.app.",
    url: `${SITE_ORIGIN}/parlay-odds-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Parlay odds calculator" }],
  },
};

const faqs = [
  {
    question: "Can you multiply American odds directly for a parlay?",
    answer:
      "No. American prices like -110 and +150 must be converted to decimal multipliers first, then multiplied. Multiplying the raw American numbers produces nonsense. Our parlay odds calculator handles conversion automatically.",
  },
  {
    question: "What are combined decimal odds on a parlay?",
    answer:
      "Combined decimal odds are the product of every leg’s decimal multiplier. Example: 1.91 × 2.50 = 4.775. That number represents total return per $1 staked, including the original stake.",
  },
  {
    question: "How do fractional odds work on a parlay?",
    answer:
      "Fractional odds show profit relative to stake (e.g. 10/11 means win $10 on an $11 bet). We convert each fraction to decimal, multiply, then display American and decimal combined prices for easy comparison with your sportsbook.",
  },
  {
    question: "Is this the same as a payout calculator?",
    answer:
      "Odds and payout are linked: once combined odds are known, payout equals stake × combined decimal. Use the parlay payout calculator page if you want copy focused on stake, profit, and return.",
  },
];

export default function ParlayOddsCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Parlay Odds Calculator" },
        ]}
      />
      <div className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl pt-6">
          <header className="mx-auto mb-8 max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              Parlay Odds Calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Competitor tools often accept only American odds or show a payout without the true
              combined line. This page is built for conversion clarity: enter each leg in American,
              decimal, or fractional format, and the engine converts every price to decimal,
              multiplies correctly, and reports combined American, decimal, and implied probability.
            </p>
          </header>

          <ParlayCalculator title="Parlay Odds Calculator" />

          <section className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-gold/20 bg-[#121212] p-6">
              <h2 className="font-display text-2xl font-bold text-white">
                American odds conversion
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Positive American odds show profit on a $100 bet (+150 → win $150 on $100). Negative
                odds show stake required to win $100 (-110 → risk $110 to win $100). For parlays, each
                leg becomes a decimal multiplier: +150 → 2.50, -110 → 1.909… Multiply those decimals,
                never the raw +150 and -110 values.
              </p>
              <p className="mt-3 text-white/70 leading-relaxed">
                A three-leg card at -110, -110, -110 is about +595 American combined—not +330 from
                adding prices. Enter the legs below to see the real ticket line before you submit.
              </p>
            </article>
            <article className="rounded-2xl border border-gold/20 bg-[#121212] p-6">
              <h2 className="font-display text-2xl font-bold text-white">
                Decimal & fractional parlays
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Decimal odds are the clearest for multiplication: 2.10 × 1.85 × 3.40 gives the
                all-in return multiplier. Fractional accumulators (UK-style) use the same math after
                conversion—5/6, 11/10, and 2/1 legs each become decimals before they meet.
              </p>
              <p className="mt-3 text-white/70 leading-relaxed">
                Switch formats in the calculator to sanity-check screenshots from DraftKings, FanDuel,
                BetMGM, or offshore books that display different conventions.
              </p>
            </article>
          </section>

          <section className="mt-10 rounded-2xl border border-gold/20 bg-[#121212] p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-white">
              Why combined odds matter more than “gut feel”
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-white/70 leading-relaxed">
              Adding a fourth -200 favorite does not add a small slice of risk—it crushes implied
              win rate while barely moving payout. Combined odds expose that tradeoff. Pair this tool
              with our{" "}
              <Link href="/parlay-payout-calculator" className="font-semibold text-gold underline">
                payout calculator
              </Link>{" "}
              for stake sizing, or read{" "}
              <Link
                href="/blog/how-to-calculate-parlay-odds"
                className="font-semibold text-gold underline"
              >
                how to calculate parlay odds
              </Link>{" "}
              for step-by-step formulas.
            </p>
            <div className="mt-6">
              <CtaButton href="#calculator" size="sm">
                CALCULATE ODDS NOW
              </CtaButton>
            </div>
          </section>

          <FaqSection title="Parlay odds FAQs" items={faqs} />
        </div>
      </div>
    </>
  );
}