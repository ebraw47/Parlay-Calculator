import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_LOGO, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us — Parlay Calculator",
  description:
    "About Parlay Calculator on parlaycalculator.app: a free browser tool that multiplies sports betting leg odds and shows payout, profit, and combined prices.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Us — Parlay Calculator",
    description: `Independent parlay odds toolkit at ${SITE_DOMAIN}.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: SITE_NAME }],
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }]} />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-gold/20 bg-[#121212]">
            <Image
              src={BRAND_LOGO}
              alt="Parlay Calculator logo"
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              About {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              We build one clear thing: a free{" "}
              <strong className="text-white">Parlay Calculator</strong> that converts American,
              decimal, and fractional odds, multiplies legs correctly, and shows payout, profit, and
              implied probability. We operate at{" "}
              <strong className="text-white">{SITE_DOMAIN}</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-5 leading-relaxed text-white/80">
          <p>
            Parlays are easy to misunderstand—American odds cannot be multiplied as printed, and payout
            is not the same as profit. Our calculator runs entirely in your browser so you can price a
            ticket in seconds without creating an account or sending odds to a server for basic math.
          </p>
          <p>
            We are not a sportsbook and not affiliated with DraftKings, FanDuel, BetMGM, Caesars, or
            any other wagering operator. This is an independent educational tool for bettors who want
            honest numbers before they decide whether to place a wager elsewhere.
          </p>
          <h2 className="font-display text-2xl font-bold text-white">What we publish</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The live{" "}
              <Link href="/" className="text-gold underline">
                Parlay Calculator
              </Link>{" "}
              and specialized views (odds, payout, NFL, moneyline)
            </li>
            <li>
              A{" "}
              <Link href="/round-robin-calculator" className="text-gold underline">
                round robin calculator
              </Link>{" "}
              for combo tickets
            </li>
            <li>
              Guides on{" "}
              <Link href="/blog" className="text-gold underline">
                parlay odds, SGPs, and round robins
              </Link>
            </li>
            <li>Clear disclaimers: 21+ where required, gamble responsibly, no betting placement</li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-white">Contact</h2>
          <p>
            Questions or corrections? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or use the{" "}
            <Link href="/contact-us" className="text-gold underline">
              contact page
            </Link>
            .
          </p>
          <div className="pt-2">
            <CtaButton href="/#calculator" size="sm">
              OPEN CALCULATOR
            </CtaButton>
          </div>
        </div>
      </div>
    </>
  );
}