import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const slug = "how-to-calculate-parlay-odds";
const title = "How to Calculate Parlay Odds (American, Decimal & Fractional)";
const description =
  "Learn how to calculate parlay odds: convert American and fractional legs to decimal, multiply, and translate back to combined prices.";
const datePublished = "2026-11-18";

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

export default function HowToCalculateParlayOddsPost() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={datePublished}
        image={`${SITE_ORIGIN}${OG_IMAGE}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: title },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-8">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Published {datePublished} · Parlay Calculator
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
          <p className="mt-4 text-lg text-white/70">{description}</p>
        </header>

        <div className="prose-parlay space-y-6 text-white/75 leading-relaxed">
          <p>
            Calculating parlay odds is the same operation every time: turn each leg into a decimal
            multiplier, multiply those decimals together, then—if you prefer American or fractional
            displays—convert the product back. What trips people up is skipping the conversion step.
            You cannot add +150 and -110, and you cannot multiply them as raw integers either. This
            guide walks through the math in all three common formats and shows where sportsbooks hide
            extra variance in long cards.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Start with decimal odds</h2>
          <p>
            Decimal odds (European style) include stake in the number. A $100 bet at 2.50 decimal pays
            $250 total ($150 profit). For parlays, decimal is the native language: leg A × leg B × leg C
            = combined decimal odds. Example: 1.91 × 2.00 × 1.83 ≈ 7.00 combined decimal. A $50 stake
            returns about $350 total and $300 profit.
          </p>
          <p>
            If your book already shows decimals, your job is multiplication only. Use our{" "}
            <Link href="/parlay-odds-calculator" className="text-gold underline font-semibold">
              parlay odds calculator
            </Link>{" "}
            to avoid rounding errors on long tickets.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">
            Convert American odds first
          </h2>
          <p>
            For positive American odds (+150): decimal = 1 + (odds / 100). So +150 → 2.50. For negative
            American odds (−110): decimal = 1 + (100 / |odds|). So −110 → 1 + 100/110 ≈ 1.909.
          </p>
          <p>
            Three standard −110 NFL spreads multiply to roughly 1.909³ ≈ 6.95 decimal—about +595
            American combined, not “+330” from naive addition. That gap is why bettors search “parlay
            odds calculator” before they submit a Sunday card.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Fractional accumulators</h2>
          <p>
            Fractional odds (5/2, 10/11) express profit relative to stake. Convert each fraction to
            decimal: decimal = (numerator / denominator) + 1. A 10/11 leg is (10/11) + 1 ≈ 1.909, the
            same as −110 American. Multiply decimals as usual.
          </p>
          <p>
            UK-style accumulators use the same engine as U.S. parlays; only the display differs. When
            mixing formats on one ticket, convert everything to decimal once, then convert the final
            product to the display you prefer.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">
            From combined decimal back to American
          </h2>
          <p>
            If combined decimal D is 2.00 or greater: American ≈ (D − 1) × 100, shown as +odds. If D is
            below 2.00: American ≈ −100 / (D − 1). These are approximations sportsbooks round to the
            nearest cent or five-cent line.
          </p>
          <p>
            Implied probability is simply 1 / D (for decimal that includes stake). A 7.00 decimal ticket
            implies about 14.3% break-even hit rate—useful when you compare a flashy payout to realistic
            win chance.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Worked example</h2>
          <p>
            Leg 1: −110 → 1.909. Leg 2: +130 → 2.30. Leg 3: −105 → 1.952. Product: 1.909 × 2.30 ×
            1.952 ≈ 8.57 decimal. On $25 stake, payout ≈ $214.25, profit ≈ $189.25. Enter the same legs in
            the{" "}
            <Link href="/" className="text-gold underline font-semibold">
              Parlay Calculator
            </Link>{" "}
            to verify.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Common mistakes</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Multiplying American numbers without conversion</li>
            <li>Confusing payout with profit when reading sportsbook slips</li>
            <li>Using fixed-odds charts for non -110 legs (alt spreads, moneylines)</li>
            <li>Assuming same-game parlays multiply like independent legs</li>
          </ul>

          <p>
            For SGP nuance see{" "}
            <Link href="/blog/same-game-parlay-explained" className="text-gold underline font-semibold">
              same-game parlay explained
            </Link>
            . For payout framing see{" "}
            <Link href="/parlay-payout-calculator" className="text-gold underline font-semibold">
              parlay payout calculator
            </Link>
            .
          </p>
        </div>

        <div className="mt-10">
          <CtaButton href="/#calculator">TRY THE CALCULATOR</CtaButton>
        </div>
      </article>
    </>
  );
}