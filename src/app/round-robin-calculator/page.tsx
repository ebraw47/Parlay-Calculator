import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RoundRobinCalculator from "@/components/RoundRobinCalculator";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Round Robin Calculator — Parlay Combos & Payout",
  description:
    "Free round robin calculator: build 2-leg and 3-leg (and larger) parlay combos from your picks, stake per combo, and see max win exposure.",
  alternates: { canonical: `${SITE_ORIGIN}/round-robin-calculator` },
  openGraph: {
    title: "Round Robin Calculator",
    description: "Price round robin bets with multiple parlay sizes from one pick sheet.",
    url: `${SITE_ORIGIN}/round-robin-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Round robin calculator" }],
  },
};

const faqs = [
  {
    question: "What is a round robin bet?",
    answer:
      "A round robin takes your selections and creates every parlay of a chosen size—usually 2-leg and 3-leg combos from four or more picks. You stake each mini-parlay separately.",
  },
  {
    question: "How is round robin stake calculated?",
    answer:
      "You pay stake × number of combo tickets. Four picks in 2-leg round robins creates six two-team parlays—$10 per combo costs $60 total risk.",
  },
  {
    question: "When is a round robin better than one parlay?",
    answer:
      "When you like the picks but fear one miss killing the whole card. A single loss on a 4-team round robin may still leave winning 2-leg and 3-leg tickets alive.",
  },
  {
    question: "Does this round robin calculator support American odds?",
    answer:
      "Yes. Enter American, decimal, or fractional prices per leg—the same conversion engine as our parlay calculator multiplies each combo correctly.",
  },
];

export default function RoundRobinCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Round Robin Calculator" },
        ]}
      />
      <div className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl pt-6">
          <header className="mx-auto mb-8 max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              Round Robin Calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Round robins trade maximum upside for survival: instead of one lottery ticket, you buy a
              bundle of smaller parlays. Toggle 2-leg and 3-leg (or larger) sizes, enter stake per
              combo, and see how many tickets fire—and what happens if one or two legs miss.
            </p>
          </header>

          <RoundRobinCalculator />

          <section className="mt-14 rounded-2xl border border-gold/20 bg-[#121212] p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-white">How round robins work</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Start with four teams you like. A single 4-leg parlay needs a perfect 4-0. A 2× round
              robin by 2s creates six separate two-team parlays—any pair that hits pays, even if another
              team loses. Add 3-leg sizes and you buy more coverage at higher total stake.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Deep dive:{" "}
              <Link
                href="/blog/round-robin-betting-explained"
                className="font-semibold text-gold underline"
              >
                round robin betting explained
              </Link>
              . Need a single ticket instead? Use the{" "}
              <Link href="/" className="font-semibold text-gold underline">
                main parlay calculator
              </Link>
              .
            </p>
          </section>

          <FaqSection title="Round robin FAQs" items={faqs} />
        </div>
      </div>
    </>
  );
}