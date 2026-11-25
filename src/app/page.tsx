import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import ParlayCalculator from "@/components/ParlayCalculator";
import CtaButton from "@/components/CtaButton";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { FIXED_ODDS_PAYOUT_TABLE } from "@/lib/parlayMath";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_RATING,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Parlay Calculator — Free Odds & Payout Tool",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free Parlay Calculator. Add legs in American, decimal, or fractional odds to get combined odds, total payout, profit, and implied probability. No signup.",
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "Parlay Calculator — Free Odds & Payout Tool",
    description:
      "Stack legs, pick your odds format, and see payout + profit instantly on parlaycalculator.app.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 800,
        alt: "Parlay Calculator — free sports betting odds and payout tool",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is a Parlay Calculator?",
    answer:
      "A Parlay Calculator multiplies the decimal odds of every leg on your ticket, then applies your stake to show combined odds, total payout, and profit. It saves the manual conversion work when you bet American or fractional odds.",
  },
  {
    question: "How do you calculate parlay odds?",
    answer:
      "Convert every leg to decimal odds, multiply those decimals together, then multiply by your stake. American odds cannot be multiplied as written—negative and positive prices must be converted first. Our calculator does that conversion automatically.",
  },
  {
    question: "What happens if one leg of a parlay loses?",
    answer:
      "If any leg loses, the entire traditional parlay loses. That all-or-nothing structure is why payouts climb quickly as you add legs—and why stake size matters.",
  },
  {
    question: "What happens if a parlay leg pushes or is canceled?",
    answer:
      "Most sportsbooks treat a push or canceled/voided leg as 1.00 decimal odds—that leg is removed and the remaining legs settle as a smaller parlay. Always check your book’s house rules.",
  },
  {
    question: "Can I use American, decimal, and fractional odds?",
    answer:
      "Yes. Switch formats in the tool. Enter -110 or +150 for American, 1.91 or 2.50 for decimal, or fractions like 10/11 and 3/2.",
  },
  {
    question: "Does this work for same-game parlays (SGPs)?",
    answer:
      "Use it for a quick estimate, but SGP prices are correlated and priced by the sportsbook—they are not always equal to multiplying independent legs. Confirm the live SGP price at your book.",
  },
  {
    question: "What is the difference between a parlay and a round robin?",
    answer:
      "A parlay is one ticket that needs every leg to win. A round robin builds every 2-leg, 3-leg, or larger combination from your picks so a single miss does not erase the entire stake. Try our round robin calculator for those tickets.",
  },
  {
    question: "Are online parlays the same as Vegas fixed-odds parlays?",
    answer:
      "Not always. Many online books multiply true odds for each leg. Some retail books still publish fixed payout charts for standard -110 spreads and totals. Compare both methods before you assume a price.",
  },
  {
    question: "Is the Parlay Calculator free on parlaycalculator.app?",
    answer:
      "Yes. The core calculator runs free in your browser—no account, no download, and no paywall for payout math.",
  },
  {
    question: "Does this tool place bets for me?",
    answer:
      "No. Parlay Calculator is an educational odds and payout tool only. It is not a sportsbook and does not accept wagers.",
  },
];

const howToSteps = [
  {
    title: "Choose your odds format",
    body: "Pick American, decimal, or fractional so every leg is parsed the way your sportsbook displays prices.",
  },
  {
    title: "Enter your stake",
    body: "Type the amount you plan to risk. Payout and profit scale directly from this number.",
  },
  {
    title: "Add each parlay leg",
    body: "Fill in the odds for leg 1, leg 2, and beyond. Add more legs anytime—up to twenty.",
  },
  {
    title: "Read payout + profit",
    body: "Combined American/decimal odds, total return, profit, and implied probability update live as you edit.",
  },
];

const featureCards = [
  {
    title: "True multiplicative odds",
    body: "Legs are converted to decimal, multiplied, then translated back so American and fractional bettors get accurate ticket prices.",
  },
  {
    title: "Payout and profit split",
    body: "See total return and net profit separately so you never confuse stake-included payout with winnings.",
  },
  {
    title: "Implied probability",
    body: "Every ticket shows the break-even win rate implied by the combined odds—useful for stake discipline.",
  },
  {
    title: "Round robin companion",
    body: "Need coverage if one pick fails? Jump to the round robin tool and price every combo ticket.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_ORIGIN,
  description:
    "Free Parlay Calculator to price multi-leg sports bets with American, decimal, or fractional odds.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_ORIGIN}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to use the Parlay Calculator",
  description:
    "Enter stake and leg odds to calculate combined parlay odds, payout, and profit.",
  step: howToSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const softwareSchema = {
  "@context": "https://schema.org",
  ...WEB_APPLICATION_JSON_LD,
  description:
    "Browser-based Parlay Calculator that multiplies leg odds and returns payout, profit, and implied probability.",
  screenshot: {
    "@type": "ImageObject",
    url: `${SITE_ORIGIN}${BRAND_HERO}`,
    width: 800,
    height: 800,
    ...imageObjectLicensing,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden px-4 pb-8 pt-8 sm:px-6 md:px-8 md:pb-10 md:pt-12">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl hero-glow" />
        <div className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-gold-soft/10 blur-3xl hero-glow" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="mx-auto flex max-w-3xl flex-col items-center animate-fade-up text-center">
            <Image
              src={BRAND_HERO}
              alt="Parlay Calculator brand mark"
              width={220}
              height={220}
              priority
              className="mb-5 h-auto w-36 sm:w-44 md:w-52"
            />
            <h1 className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-[3.25rem]">
              <span className="brand-gradient-text">Parlay Calculator</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70 sm:text-xl">
              Add legs in American, decimal, or fractional odds. Get combined odds, total payout,
              profit, and implied probability—free in your browser.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <ParlayCalculator />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="trust-chip" aria-label={`${SITE_RATING.ratingValue} out of 5 stars`}>
              <span className="font-semibold text-gold">{SITE_RATING.ratingValue}★</span>
              <span>({Number(SITE_RATING.ratingCount).toLocaleString()} ratings)</span>
            </span>
            <span className="trust-chip">Free · Web · No signup</span>
            <span className="trust-chip">American · Decimal · Fractional</span>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              How the Parlay Calculator works
            </h2>
            <p className="mt-3 text-lg text-white/65">
              Every sportsbook price is a multiplier. Convert legs to decimal, multiply them, then
              apply your stake. That is the entire engine—presented live so you can stress-test a
              ticket before you lock it.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {howToSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-gold/20 bg-[#121212] p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-white/50">
            Prefer a longer walkthrough? Read{" "}
            <Link href="/how-to-use-parlay-calculator" className="font-semibold text-gold underline">
              how to use the Parlay Calculator
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                What is a parlay bet?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                A parlay (also called an accumulator) combines two or more selections into one
                ticket. Instead of collecting separate wins, you risk a single stake for a larger
                payout—because every leg must win. Add a third, fourth, or fifth leg and the
                combined odds climb fast.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                That upside is the appeal. The tradeoff is variance: one wrong pick voids the
                ticket. Pricing the ticket honestly is the first step toward deciding whether the
                juice is worth the squeeze.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                How parlay odds are calculated
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                With decimal odds, multiply every leg. Example: 1.91 × 2.30 = 4.393. A $100 stake
                returns about $439.30 total ($339.30 profit). American odds like −110 and +130 must
                be converted first—our tool handles that conversion so you never multiply the wrong
                numbers.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Need the formulas spelled out? See{" "}
                <Link
                  href="/blog/how-to-calculate-parlay-odds"
                  className="font-semibold text-gold underline"
                >
                  how to calculate parlay odds
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/parlay-odds-explained"
                  className="font-semibold text-gold underline"
                >
                  parlay odds explained
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Built for real ticket decisions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Competitor tools stop at a payout number. We surface combined American and decimal
              odds, profit vs return, and implied probability so you can compare a 3-leg favorite
              stack against a 2-leg dog ticket with clear math—not vibes.
            </p>
            <ul className="mt-6 space-y-3 text-white/75">
              {featureCards.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gold" />
                  <span>
                    <strong className="text-white">{item.title}.</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/50">
              Explore the full feature list on the{" "}
              <Link href="/features" className="font-semibold text-gold underline">
                features page
              </Link>{" "}
              or jump to the{" "}
              <Link href="/parlay-odds-calculator" className="font-semibold text-gold underline">
                parlay odds calculator
              </Link>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-gold/25 bg-black">
            <Image
              src={BRAND_FEATURE_2}
              alt="Parlay Calculator premium gold brand mark"
              width={800}
              height={800}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[1.75rem] border border-gold/20 bg-[#121212] p-6 shadow-sm md:p-8">
            <h2 className="font-display text-3xl font-bold text-white">
              Fixed-odds parlay payout chart
            </h2>
            <p className="mt-3 max-w-3xl text-white/65">
              Some retail sportsbooks still publish fixed payouts for standard −110 spreads and
              totals. Online books usually multiply true odds instead. Use this chart as a
              reference—not a guarantee of your book’s price.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white/45">
                    <th className="py-2 pr-3 font-semibold">Teams</th>
                    <th className="py-2 pr-3 font-semibold">Typical fixed payout</th>
                    <th className="py-2 font-semibold">Approx. decimal (incl. stake)</th>
                  </tr>
                </thead>
                <tbody>
                  {FIXED_ODDS_PAYOUT_TABLE.map((row) => (
                    <tr key={row.teams} className="border-b border-white/5">
                      <td className="py-2.5 pr-3 font-semibold text-gold">{row.teams}-team</td>
                      <td className="py-2.5 pr-3 text-white/75">{row.payoutToOne}</td>
                      <td className="py-2.5 text-white/75">{row.decimalApprox.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1.75rem] border border-gold/25 bg-black order-2 lg:order-1">
            <Image
              src={BRAND_FEATURE_3}
              alt="Parlay Calculator horizontal logo"
              width={600}
              height={150}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-contain p-8"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Same-game parlays, pushes, and honest limits
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Same-game parlays (SGPs) let you combine correlated outcomes from one contest. Books
              price those tickets with their own models—multiplying independent legs can
              over- or under-state the true SGP number. Treat calculator output as a baseline, then
              compare the live SGP quote.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Pushes and cancellations usually reduce the ticket rather than void it entirely. One
              losing leg still kills a traditional parlay. For more nuance, read{" "}
              <Link
                href="/blog/same-game-parlay-explained"
                className="font-semibold text-gold underline"
              >
                same-game parlays explained
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/parlay-vs-straight-bet"
                className="font-semibold text-gold underline"
              >
                parlay vs straight bet
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Practical ways to use a parlay calculator
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-white/65">
            Use the tool as a pre-bet checklist: size the stake, test removing a soft leg, and
            compare payout against the implied win rate before you submit.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Stress-test leg count",
                body: "Add a fifth leg and watch profit jump—then notice how implied probability collapses. Bigger is not always better.",
              },
              {
                title: "Compare formats",
                body: "Paste the same ticket in American and decimal to verify sportsbook screenshots and avoid entry typos.",
              },
              {
                title: "Price moneyline stacks",
                body: "Favorites at −180 and −200 look “safe” until the math shows a thin payout. Check with the moneyline parlay page.",
              },
              {
                title: "Build NFL weekend tickets",
                body: "Sketch Sunday parlays before lines move, then re-price when openers shift. Use the NFL-focused calculator view.",
              },
              {
                title: "Switch to round robins",
                body: "If one dog scares you, convert the card into 2-leg and 3-leg combos so a single miss still leaves live tickets.",
              },
              {
                title: "Separate payout from profit",
                body: "Payout includes your stake. Profit is what you actually clear. Our results panel shows both so bankroll math stays honest.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-gold/20 bg-[#121212] p-5 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/round-robin-calculator" className="font-semibold text-gold underline">
              Round robin calculator
            </Link>
            <Link href="/nfl-parlay-calculator" className="font-semibold text-gold underline">
              NFL parlay calculator
            </Link>
            <Link href="/blog" className="font-semibold text-gold underline">
              All guides
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Odds formats, moneyline parlays, and payouts
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              American odds dominate U.S. sportsbooks. Decimal is clearer for multiplication.
              Fractional remains common with UK-style accumulators. Whatever your screen shows,
              convert once, multiply once, stake once—that is the whole workflow on
              parlaycalculator.app.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Dedicated views keep intent clean:{" "}
              <Link href="/parlay-payout-calculator" className="font-semibold text-gold underline">
                payout calculator
              </Link>
              ,{" "}
              <Link href="/parlay-bet-calculator" className="font-semibold text-gold underline">
                bet calculator
              </Link>
              , and{" "}
              <Link
                href="/moneyline-parlay-calculator"
                className="font-semibold text-gold underline"
              >
                moneyline parlays
              </Link>
              .
            </p>
            <div className="mt-6">
              <CtaButton href="/#calculator" size="sm" ariaLabel="Return to Parlay Calculator">
                TRY IT NOW
              </CtaButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-gold/25 bg-black">
            <Image
              src={BRAND_HERO}
              alt="Parlay Calculator app brand visual"
              width={800}
              height={800}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <FaqSection title="Parlay Calculator FAQs" items={faqs} includeSchema={false} />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-gold/30 bg-gradient-to-br from-gold/20 via-[#121212] to-black p-8 md:p-10">
          <h2 className="font-display text-3xl font-bold text-white">
            Ready to price your next ticket?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/70">
            Open the free Parlay Calculator, stack your legs, and turn a vague “this hits big”
            feeling into clear payout, profit, and probability—before the bet is locked.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href="/#calculator">OPEN CALCULATOR</CtaButton>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-2xl border border-gold/30 bg-black/40 px-6 py-3.5 text-base font-semibold text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
