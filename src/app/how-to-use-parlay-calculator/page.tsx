import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import ParlayCalculator from "@/components/ParlayCalculator";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "How to Use the Parlay Calculator — Step-by-Step",
  description:
    "Learn how to use the Parlay Calculator: pick odds format, enter stake and legs, read combined odds, payout, profit, and implied probability.",
  alternates: { canonical: `${SITE_ORIGIN}/how-to-use-parlay-calculator` },
  openGraph: {
    title: "How to Use the Parlay Calculator",
    description: "Step-by-step guide to pricing multi-leg sports bets on parlaycalculator.app.",
    url: `${SITE_ORIGIN}/how-to-use-parlay-calculator`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "How to use parlay calculator" }],
  },
};

const steps = [
  {
    title: "Choose American, decimal, or fractional",
    body: "Match the format shown on your sportsbook screen so you do not mistype prices.",
  },
  {
    title: "Enter your stake",
    body: "This is the total dollars you risk on the entire parlay—not per leg.",
  },
  {
    title: "Fill in each leg’s odds",
    body: "Start with two legs minimum. Use Add leg for more—up to twenty selections.",
  },
  {
    title: "Review combined odds & payout",
    body: "Combined American/decimal, total payout, profit, and implied probability update live.",
  },
  {
    title: "Adjust and compare",
    body: "Remove a leg or change stake to stress-test before you bet at the book.",
  },
];

const faqs = [
  {
    question: "Do I need an account to use the Parlay Calculator?",
    answer: "No. The tool runs free in your browser on parlaycalculator.app with no signup.",
  },
  {
    question: "Can I switch odds format mid-ticket?",
    answer:
      "Yes. Switching format re-parses leg inputs—re-enter odds if the display changes between American and decimal.",
  },
  {
    question: "Where is the reset button?",
    answer:
      "Use Reset on the calculator card to return stake, legs, and format to defaults for this page.",
  },
];

export default function HowToUseParlayCalculatorPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "How to Use" },
        ]}
      />
      <div className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl pt-6">
          <header className="mx-auto mb-8 max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              How to Use the Parlay Calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              This guide walks through the same live tool on the homepage—optimized for bettors who
              want a checklist before game time. Follow the steps below, then practice on the embedded
              calculator.
            </p>
          </header>

          <ParlayCalculator title="Parlay Calculator" />

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Step-by-step instructions
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {steps.map((step, i) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-gold/20 bg-[#121212] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{step.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-gold/20 bg-[#121212] p-6">
            <h2 className="font-display text-2xl font-bold text-white">Related tools</h2>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>
                <Link href="/parlay-odds-calculator" className="font-semibold text-gold underline">
                  Parlay odds calculator
                </Link>{" "}
                — conversion focus
              </li>
              <li>
                <Link href="/parlay-payout-calculator" className="font-semibold text-gold underline">
                  Parlay payout calculator
                </Link>{" "}
                — stake and return
              </li>
              <li>
                <Link href="/round-robin-calculator" className="font-semibold text-gold underline">
                  Round robin calculator
                </Link>{" "}
                — combo tickets
              </li>
            </ul>
          </section>

          <FaqSection title="How-to FAQs" items={faqs} />
        </div>
      </div>
    </>
  );
}