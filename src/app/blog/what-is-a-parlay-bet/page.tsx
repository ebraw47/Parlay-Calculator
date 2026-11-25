import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const slug = "what-is-a-parlay-bet";
const title = "What Is a Parlay Bet? Rules, Payouts & Examples";
const description =
  "What is a parlay bet? Learn rules, how payouts work, pushes, and examples for spreads, totals, and moneylines.";
const datePublished = "2026-11-19";

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

export default function WhatIsAParlayBetPost() {
  return (
    <>
      <BlogPostSchema title={title} description={description} slug={slug} datePublished={datePublished} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "What Is a Parlay Bet?" },
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
            A parlay bet—sometimes called an accumulator or combo—ties two or more individual
            selections into one wager. You risk a single stake. If every selection wins, you collect a
            multiplied payout. If any selection loses, the entire parlay loses (in standard parlay
            rules). That all-or-nothing structure is the defining feature and the reason payouts can
            jump dramatically when you add legs.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Parlay rules in plain language</h2>
          <p>
            Most U.S. sportsbooks allow parlays across spreads, totals, moneylines, and many props, subject
            to correlation rules. You cannot always combine certain legs from the same game unless you use
            a same-game parlay (SGP) product. Multi-game parlays are the classic “Sunday lottery” ticket:
            four favorites, one underdog, one over.
          </p>
          <p>
            Minimum legs: typically two. Maximum legs: varies by book—often 10–20 selections. Each leg
            must be a distinct outcome; duplicate bets on the same line may be rejected at submission.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">How parlay payouts work</h2>
          <p>
            Payout scales with the product of decimal odds, not the sum. Adding a third −110 leg does not
            add another “even money” slice—it multiplies the entire ticket again by ~1.909. That is why a
            three-team card at standard juice pays near +595, while a two-team pays near +264.
          </p>
          <p>
            Price your ticket with the{" "}
            <Link href="/parlay-payout-calculator" className="font-semibold text-gold underline">
              parlay payout calculator
            </Link>{" "}
            before you assume a memorized chart matches your book.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Pushes, ties, and void legs</h2>
          <p>
            When a leg pushes (lands exactly on the spread or total) or is voided (postponed game rules),
            most books remove that leg and settle the rest as a smaller parlay. Example: a 4-leg parlay
            with one push becomes a 3-leg parlay at reduced odds. One losing leg still kills the ticket.
          </p>
          <p>
            Policies differ on canceled games and player props. Read your sportsbook’s house rules; the
            calculator assumes standard multiplicative odds on active legs.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Examples by market</h2>
          <p>
            <strong className="text-white">Spread parlay:</strong> Chiefs -3.5, Bills -6.5, Eagles -2.5—all
            at -110. Combined odds near +595 on $100 stake → about $695 payout if all cover.
          </p>
          <p>
            <strong className="text-white">Moneyline parlay:</strong> Three underdogs at +150, +140, +200.
            Higher variance, higher combined decimal multiplier. See the{" "}
            <Link href="/moneyline-parlay-calculator" className="font-semibold text-gold underline">
              moneyline parlay calculator
            </Link>
            .
          </p>
          <p>
            <strong className="text-white">NFL Sunday card:</strong> Mix sides and totals; use the{" "}
            <Link href="/nfl-parlay-calculator" className="font-semibold text-gold underline">
              NFL parlay calculator
            </Link>{" "}
            with -110 defaults.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Parlay vs other bet types</h2>
          <p>
            A straight bet wins or loses on one outcome. A teaser moves spreads but uses a fixed payout
            chart. A round robin buys many smaller parlays from the same picks. Compare structures in{" "}
            <Link href="/blog/parlay-vs-straight-bet" className="font-semibold text-gold underline">
              parlay vs straight bet
            </Link>{" "}
            and{" "}
            <Link href="/blog/round-robin-betting-explained" className="font-semibold text-gold underline">
              round robin betting explained
            </Link>
            .
          </p>

          <p>
            Parlays are entertainment and high-variance products for most recreational bettors. This site
            does not place bets; use math to understand risk, bet only where legal, and gamble
            responsibly.
          </p>
        </div>

        <div className="mt-10">
          <CtaButton href="/#calculator">OPEN PARLAY CALCULATOR</CtaButton>
        </div>
      </article>
    </>
  );
}