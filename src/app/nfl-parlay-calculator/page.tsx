import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ParlayCalculator from "@/components/ParlayCalculator";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "NFL Parlay Calculator — Spreads, Totals & Sunday Cards",
  description:
    "NFL parlay calculator for Sunday tickets: price spreads at -110, totals, and moneylines together. See payout before kickoff.",
  alternates: { canonical: `${SITE_ORIGIN}/nfl-parlay-calculator` },
  openGraph: {
    title: "NFL Parlay Calculator",
    description: "Build and price NFL parlays with spreads, totals, and moneylines.",
    url: `${SITE_ORIGIN}/nfl-parlay-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "NFL parlay calculator" }],
  },
};

const faqs = [
  {
    question: "What odds should I enter for NFL spread legs?",
    answer:
      "Most mainstream NFL spreads and totals price near -110 on each side. Enter -110 per spread leg unless your book shows a different line (e.g. -105 or -115).",
  },
  {
    question: "Can I mix NFL spreads and moneylines in one parlay?",
    answer:
      "Sportsbook rules vary. Many books allow spreads + totals + moneylines on the same NFL card. Some restrict same-game combinations—use same-game parlay (SGP) builders for correlated NFL props.",
  },
  {
    question: "How do bye weeks and flex windows affect parlays?",
    answer:
      "Bye weeks remove games from the slate—your parlay simply includes the teams that play. Flex windows (e.g. Sunday Night Football) matter for timing, not math. Re-price if lines move after injury reports.",
  },
  {
    question: "Should I use teasers instead of NFL parlays?",
    answer:
      "Teasers adjust point spreads and pay fixed charts. This tool prices standard fixed-odds parlays. Teaser math is different; do not enter teased lines as normal spreads.",
  },
];

export default function NflParlayCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "NFL Parlay Calculator" },
        ]}
      />
      <div className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl pt-6">
          <header className="mx-auto mb-8 max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              NFL Parlay Calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              NFL weekend cards are where parlay volume spikes: four early spreads, an over on the
              late window, a small underdog moneyline for juice. This page keeps default -110 legs—
              typical for NFL sides and totals—so you can sketch a Sunday ticket, then swap in live
              prices as inactives and weather reports move numbers.
            </p>
          </header>

          <ParlayCalculator title="NFL Parlay Calculator" defaultOdds="-110" initialLegs={4} />

          <section className="mt-14 space-y-6">
            <article className="rounded-2xl border border-gold/20 bg-[#121212] p-6">
              <h2 className="font-display text-2xl font-bold text-white">
                Common NFL parlay building blocks
              </h2>
              <ul className="mt-4 space-y-3 text-white/70">
                <li>
                  <strong className="text-gold">Spread legs:</strong> -110 on favorites and dogs;
                  three -110 spreads combine to roughly +595, not “+330 from adding.”
                </li>
                <li>
                  <strong className="text-gold">Totals:</strong> overs and unders at standard juice;
                  treat alt totals like any other American price.
                </li>
                <li>
                  <strong className="text-gold">Moneylines:</strong> short favorites in division
                  games vs live underdogs—see the{" "}
                  <Link
                    href="/moneyline-parlay-calculator"
                    className="font-semibold text-gold underline"
                  >
                    moneyline parlay calculator
                  </Link>
                  .
                </li>
              </ul>
            </article>
            <article className="rounded-2xl border border-gold/20 bg-[#121212] p-6">
              <h2 className="font-display text-2xl font-bold text-white">
                Same-game parlays vs multi-game NFL cards
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Correlated SGPs (QB yards + team total + spread) are priced by the book’s model, not
                pure multiplication. Use this calculator for independent multi-game tickets; treat SGP
                quotes as the source of truth for single-game stacks. Read{" "}
                <Link
                  href="/blog/same-game-parlay-explained"
                  className="font-semibold text-gold underline"
                >
                  same-game parlay explained
                </Link>
                .
              </p>
            </article>
          </section>

          <FaqSection title="NFL parlay FAQs" items={faqs} />
        </div>
      </div>
    </>
  );
}