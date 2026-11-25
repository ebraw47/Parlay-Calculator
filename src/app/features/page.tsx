import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_FEATURE_2, OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Features — Parlay Calculator Tools",
  description:
    "Parlay Calculator features: multi-format odds, live payout & profit, implied probability, round robin companion, NFL and moneyline views, and free browser tools.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Features — Parlay Calculator",
    description: "Everything included in the free Parlay Calculator on parlaycalculator.app.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Parlay Calculator features" }],
  },
};

const features = [
  {
    title: "American, decimal, and fractional odds",
    text: "Enter legs in the format your sportsbook displays. The engine converts internally so combined prices stay accurate.",
  },
  {
    title: "Live combined odds",
    text: "See combined American and decimal lines update as you add, remove, or edit legs—no manual multiplication.",
  },
  {
    title: "Payout and profit split",
    text: "Total return and net profit are labeled separately so bankroll math never confuses stake-included payout.",
  },
  {
    title: "Implied probability",
    text: "Every ticket shows the break-even win rate implied by the combined price—useful before you size a stake.",
  },
  {
    title: "Up to twenty legs",
    text: "Stress-test long-shot cards or trim to a tight two-leg play without leaving the page.",
  },
  {
    title: "Round robin companion",
    text: "Build 2-leg, 3-leg, and larger combo tickets when you want coverage if one pick misses.",
  },
  {
    title: "Intent-specific routes",
    text: "Dedicated pages for odds conversion, payout, bet sizing, moneylines, and NFL slates match how people search.",
  },
  {
    title: "Free in the browser",
    text: "No account, no download, no paywall for core payout math on parlaycalculator.app.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
        ]}
      />
      <div className="container mx-auto max-w-5xl px-4 pb-12 pt-8">
        <h1 className="font-display text-4xl font-bold text-white">Parlay Calculator features</h1>
        <p className="mt-3 max-w-3xl text-lg text-white/70">
          Built for real ticket decisions: convert odds correctly, multiply legs once, and read payout,
          profit, and implied probability before you lock a bet at the sportsbook.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gold/20 bg-black">
          <Image
            src={BRAND_FEATURE_2}
            alt="Parlay Calculator features"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <li
              key={f.title}
              className="rounded-2xl border border-gold/20 bg-[#121212] p-5"
            >
              <h2 className="font-display text-xl font-bold text-gold">{f.title}</h2>
              <p className="mt-2 text-white/70">{f.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <CtaButton href="/#calculator">OPEN CALCULATOR</CtaButton>
          <Link
            href="/how-to-use-parlay-calculator"
            className="inline-flex items-center rounded-2xl border border-gold/30 px-6 py-3.5 text-base font-semibold text-white"
          >
            How to use
          </Link>
        </div>
      </div>
    </>
  );
}