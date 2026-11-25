import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ParlayCalculator from "@/components/ParlayCalculator";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Parlay Payout Calculator — Stake, Return & Profit",
  description:
    "Calculate parlay payout and profit from your stake. See total return, net winnings, and combined odds for multi-leg sports bets.",
  alternates: { canonical: `${SITE_ORIGIN}/parlay-payout-calculator` },
  openGraph: {
    title: "Parlay Payout Calculator",
    description: "Enter stake and leg odds to see parlay payout and profit instantly.",
    url: `${SITE_ORIGIN}/parlay-payout-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Parlay payout calculator" }],
  },
};

const faqs = [
  {
    question: "What is the difference between payout and profit on a parlay?",
    answer:
      "Payout is the total amount returned if the ticket wins, including your original stake. Profit is payout minus stake—the money you actually gained. A $100 stake at 4.00 decimal pays $400 total and $300 profit.",
  },
  {
    question: "How do I calculate parlay payout from American odds?",
    answer:
      "Convert each leg to decimal, multiply the decimals together, then multiply by stake. The calculator does this live so you can compare against the sportsbook cashier before locking the bet.",
  },
  {
    question: "Do parlay payouts include the stake in the displayed number?",
    answer:
      "Sportsbooks usually show ‘to win’ (profit) and ‘payout’ (stake + profit) separately. We label both so bankroll tracking stays accurate.",
  },
  {
    question: "What stake should I use for a payout estimate?",
    answer:
      "Use the amount you plan to risk—not your bankroll total. Change stake in the tool and every leg scales proportionally; combined odds stay the same.",
  },
];

export default function ParlayPayoutCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Parlay Payout Calculator" },
        ]}
      />
      <div className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl pt-6">
          <header className="mx-auto mb-8 max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              Parlay Payout Calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Many generic “parlay calculators” stop at a single dollar return. Bettors searching for
              payout math usually want three things at once: stake in, total return out, and profit
              after the stake comes back. This view emphasizes that payout breakdown—while still showing
              combined odds and implied win probability behind the number.
            </p>
          </header>

          <ParlayCalculator title="Parlay Payout Calculator" />

          <section className="mt-14 space-y-6">
            <article className="rounded-2xl border border-gold/20 bg-[#121212] p-6">
              <h2 className="font-display text-2xl font-bold text-white">
                Stake → payout workflow
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Enter your risk amount first. Add each leg’s price in the format your book displays.
                The results panel updates payout (stake included), profit (stake excluded), combined
                American and decimal odds, and implied probability—the break-even hit rate the ticket
                needs to be fair at those prices.
              </p>
              <p className="mt-3 text-white/70 leading-relaxed">
                Example: $25 on a 6.50 decimal three-leg parlay returns $162.50 total and $137.50
                profit. Bump the stake to $50 and every output doubles; the odds line does not change.
              </p>
            </article>
            <article className="rounded-2xl border border-gold/20 bg-[#121212] p-6">
              <h2 className="font-display text-2xl font-bold text-white">
                Fixed charts vs true parlay payouts
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Retail sportsbooks sometimes publish fixed payout tables for standard -110 legs.
                Online books typically multiply true prices on each selection—including moneylines and
                alt lines. Always price your actual legs; do not assume a memorized “6-team pays 40-1”
                chart matches your ticket.
              </p>
              <p className="mt-3 text-white/70 leading-relaxed">
                For combined-line detail, use the{" "}
                <Link href="/parlay-odds-calculator" className="font-semibold text-gold underline">
                  parlay odds calculator
                </Link>
                . For bet sizing discipline, try the{" "}
                <Link href="/parlay-bet-calculator" className="font-semibold text-gold underline">
                  parlay bet calculator
                </Link>
                .
              </p>
            </article>
          </section>

          <div className="mt-10">
            <CtaButton href="#calculator" size="sm">
              PRICE YOUR PAYOUT
            </CtaButton>
          </div>

          <FaqSection title="Parlay payout FAQs" items={faqs} />
        </div>
      </div>
    </>
  );
}