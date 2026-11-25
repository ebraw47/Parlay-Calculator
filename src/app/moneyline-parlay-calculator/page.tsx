import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ParlayCalculator from "@/components/ParlayCalculator";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Moneyline Parlay Calculator — Favorite & Underdog Legs",
  description:
    "Moneyline parlay calculator for +odds underdogs and -odds favorites. Stack ML legs and see combined price, payout, and profit.",
  alternates: { canonical: `${SITE_ORIGIN}/moneyline-parlay-calculator` },
  openGraph: {
    title: "Moneyline Parlay Calculator",
    description: "Price moneyline parlays with positive and negative American odds.",
    url: `${SITE_ORIGIN}/moneyline-parlay-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Moneyline parlay calculator" }],
  },
};

const faqs = [
  {
    question: "Can you parlay moneylines only?",
    answer:
      "Yes. A moneyline parlay is still a standard parlay—every leg must win. You can mix favorites (-odds) and underdogs (+odds) on one ticket as long as your sportsbook allows those markets together.",
  },
  {
    question: "Why do heavy favorites shrink parlay payouts?",
    answer:
      "Each -200 or -300 leg contributes a decimal multiplier barely above 1.00. Stacking three big favorites may pay less than a single +150 underdog straight bet once variance is considered.",
  },
  {
    question: "How do +odds legs affect a moneyline parlay?",
    answer:
      "Positive odds legs carry multipliers above 2.00 when the price is +100 or better. One dog leg can lift the entire ticket—but it also adds a fragile outcome that busts the card if it loses.",
  },
  {
    question: "Are moneyline parlays the same as spread parlays?",
    answer:
      "The math is identical; only the markets differ. Spreads at -110 behave like near-even moneylines with juice. This page defaults to moneyline-style examples (+150 openers).",
  },
];

export default function MoneylineParlayCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Moneyline Parlay Calculator" },
        ]}
      />
      <div className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl pt-6">
          <header className="mx-auto mb-8 max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              Moneyline Parlay Calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Moneyline bettors think in winners and losers, not points. This calculator opens with
              +150 sample legs—typical underdog moneylines—so you can model dog stacks, favorite
              ladders, or mixed tickets. Enter -180 favorites on other legs to see how chalk compresses
              combined odds.
            </p>
          </header>

          <ParlayCalculator
            title="Moneyline Parlay Calculator"
            defaultOdds="+150"
            initialLegs={3}
          />

          <section className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-gold/20 bg-[#121212] p-6">
              <h2 className="font-display text-2xl font-bold text-white">+odds underdog stacks</h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Try +140, +150, and +220 on three underdogs. Combined decimal odds climb fast, but
                implied probability falls just as fast. Use the live panel to see whether the payout
                matches the realistic chance all three dogs win on the same slate.
              </p>
            </article>
            <article className="rounded-2xl border border-gold/20 bg-[#121212] p-6">
              <h2 className="font-display text-2xl font-bold text-white">-odds favorite ladders</h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Replace legs with -150, -200, and -250 favorites. Notice combined American odds may
                still look “juicy” while implied win rate stays modest. Chalk parlays are a common
                trap: they feel safe until one upset ends the ticket.
              </p>
            </article>
          </section>

          <p className="mt-8 text-white/70">
            Learn more in{" "}
            <Link href="/blog/parlay-odds-explained" className="font-semibold text-gold underline">
              parlay odds explained
            </Link>{" "}
            or price NFL moneylines on the{" "}
            <Link href="/nfl-parlay-calculator" className="font-semibold text-gold underline">
              NFL parlay calculator
            </Link>
            .
          </p>

          <FaqSection title="Moneyline parlay FAQs" items={faqs} />
        </div>
      </div>
    </>
  );
}