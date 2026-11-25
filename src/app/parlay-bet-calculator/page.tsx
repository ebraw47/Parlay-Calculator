import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ParlayCalculator from "@/components/ParlayCalculator";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Parlay Bet Calculator — Stake Sizing & Risk Check",
  description:
    "Use a parlay bet calculator to size stakes responsibly, compare profit vs implied probability, and stress-test multi-leg tickets before you bet.",
  alternates: { canonical: `${SITE_ORIGIN}/parlay-bet-calculator` },
  openGraph: {
    title: "Parlay Bet Calculator",
    description: "Size parlay bets with clear payout, profit, and implied probability on parlaycalculator.app.",
    url: `${SITE_ORIGIN}/parlay-bet-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Parlay bet calculator" }],
  },
};

const faqs = [
  {
    question: "How much should I bet on a parlay?",
    answer:
      "There is no universal stake. Use implied probability from combined odds as a sanity check: if a ticket shows 8% implied win rate, a large stake is high variance. Many bettors cap parlay stakes below straight bets because one miss loses the entire wager.",
  },
  {
    question: "What does implied probability mean on a parlay?",
    answer:
      "Implied probability is the break-even hit rate suggested by the combined price (roughly 1 ÷ decimal odds). It helps you ask whether your edge—if any—justifies the stake.",
  },
  {
    question: "Should I use parlays for bankroll growth?",
    answer:
      "Parlays are entertainment-plus products for most recreational bettors: high upside, low hit rate. This calculator is educational—it does not recommend stakes. Never bet money you cannot afford to lose.",
  },
  {
    question: "Is a round robin safer than one big parlay?",
    answer:
      "Round robins spread risk across smaller combo tickets. One miss may not zero the entire card. Compare structures with our round robin calculator before choosing stake.",
  },
];

export default function ParlayBetCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Parlay Bet Calculator" },
        ]}
      />
      <div className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl pt-6">
          <header className="mx-auto mb-8 max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              Parlay Bet Calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              “Parlay bet calculator” searches often mean sizing and risk—not just raw payout. This
              page keeps the same live engine as our main tool but frames decisions around stake,
              variance, and implied probability so you can decide whether the ticket matches your
              bankroll plan.
            </p>
          </header>

          <ParlayCalculator title="Parlay Bet Calculator" />

          <section className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Set stake deliberately",
                body: "Type the dollars you are willing to lose entirely if any leg fails. Parlays are all-or-nothing unless you use round robins.",
              },
              {
                title: "Read implied probability",
                body: "Watch how each added leg collapses implied win rate even when payout jumps. That tension is the core parlay risk tradeoff.",
              },
              {
                title: "Compare profit, not hype",
                body: "Profit excludes returned stake. Use it for journal entries and unit tracking instead of gross payout alone.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-gold/20 bg-[#121212] p-5"
              >
                <h2 className="font-display text-xl font-bold text-white">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{card.body}</p>
              </article>
            ))}
          </section>

          <section className="mt-10 rounded-2xl border border-gold/20 bg-[#121212] p-6">
            <h2 className="font-display text-2xl font-bold text-white">
              Stress-test before you bet
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Remove the weakest leg and note how profit and probability change. Swap a -300 favorite
              for a +140 underdog and see variance explode. Read{" "}
              <Link
                href="/blog/parlay-vs-straight-bet"
                className="font-semibold text-gold underline"
              >
                parlay vs straight bet
              </Link>{" "}
              for when straight wagers may fit better, and{" "}
              <Link href="/how-to-use-parlay-calculator" className="font-semibold text-gold underline">
                how to use the calculator
              </Link>{" "}
              for a full walkthrough.
            </p>
            <div className="mt-5">
              <CtaButton href="#calculator" size="sm">
                OPEN BET CALCULATOR
              </CtaButton>
            </div>
          </section>

          <FaqSection title="Parlay bet sizing FAQs" items={faqs} />
        </div>
      </div>
    </>
  );
}