import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const slug = "same-game-parlay-explained";
const title = "Same-Game Parlay Explained (SGP)";
const description =
  "Same-game parlay explained: correlation, how sportsbooks price SGPs, and when a standard parlay calculator estimate helps.";
const datePublished = "2026-11-21";

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

export default function SameGameParlayExplainedPost() {
  return (
    <>
      <BlogPostSchema title={title} description={description} slug={slug} datePublished={datePublished} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Same-Game Parlay" },
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
            A same-game parlay (SGP) combines multiple bets from a single game into one ticket—spread
            plus team total plus player touchdown, for example. The outcomes are often correlated: a
            quarterback’s 300-yard day boosts the team total and may relate to the moneyline. Independent
            multiplication (leg × leg × leg) assumes no correlation, so sportsbooks price SGPs with
            proprietary models and display a single SGP quote that may differ from naive math.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Correlation in plain terms</h2>
          <p>
            Positive correlation: if one leg is more likely to hit, another leg on the same game also
            becomes more likely (favorite wins big → over hits). Negative correlation: one leg hitting
            makes another less likely. Books adjust SGP prices so they are not simply the product of fair
            independent odds.
          </p>
          <p>
            That is why a standard{" "}
            <Link href="/" className="font-semibold text-gold underline">
              Parlay Calculator
            </Link>{" "}
            is an estimate for SGPs, not a guarantee of the cashier number. Use it to sanity-check how
            far the book moved the price—if SGP is dramatically better than multiplied legs, correlation
            may be friendly; if worse, the book penalized overlap.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">SGP vs multi-game parlays</h2>
          <p>
            Multi-game parlays treat games as roughly independent (weather and injuries aside). SGPs live
            inside one event graph. NFL Sunday cards mixing four different games fit the multi-game model;
            a Chiefs game with ML + Mahomes yards + Kelce TDs is SGP territory.
          </p>
          <p>
            Build NFL multi-game tickets with the{" "}
            <Link href="/nfl-parlay-calculator" className="font-semibold text-gold underline">
              NFL parlay calculator
            </Link>
            . Use the in-app SGP builder at your sportsbook for single-game stacks.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">What bettors search for</h2>
          <p>
            Common SGP themes: “QB passing yards + team total + spread,” “star player TD + game over,”
            “underdog ML + live totals.” Search interest is high because payouts look large in the SGP UI.
            Always compare SGP implied probability to a straight bet on your strongest single leg—you may
            be paying variance for narrative, not edge.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">House rules and voids</h2>
          <p>
            Player props can void if a player does not play. Some books refund the whole SGP; others drop
            the leg. Injury reporting before kickoff matters more in SGPs than in a single spread bet.
          </p>

          <h2 className="font-display text-2xl font-bold text-white">Practical workflow</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Sketch legs in the Parlay Calculator as if they were independent.</li>
            <li>Open the book’s SGP tool and enter the same legs.</li>
            <li>Compare combined decimal / implied % between estimate and quoted SGP.</li>
            <li>Decide stake using profit and implied probability, not storyline alone.</li>
          </ol>

          <p>
            Learn standard parlay math in{" "}
            <Link href="/blog/what-is-a-parlay-bet" className="font-semibold text-gold underline">
              what is a parlay bet
            </Link>{" "}
            and{" "}
            <Link href="/blog/parlay-odds-explained" className="font-semibold text-gold underline">
              parlay odds explained
            </Link>
            .
          </p>
        </div>

        <div className="mt-10">
          <CtaButton href="/#calculator">PRICE A BASELINE PARLAY</CtaButton>
        </div>
      </article>
    </>
  );
}