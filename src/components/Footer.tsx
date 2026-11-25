import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_TAGLINE } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-gold/20 bg-black pt-8 pb-2 px-4 text-ink md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 font-display text-xl font-bold text-white">{SITE_NAME}</h2>
            <p className="mb-4 text-sm text-white/60">{SITE_TAGLINE}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-gold underline hover:no-underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Tools</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/65 hover:text-gold hover:underline">Parlay Calculator</Link></li>
              <li><Link href="/parlay-odds-calculator" className="text-white/65 hover:text-gold hover:underline">Parlay Odds Calculator</Link></li>
              <li><Link href="/parlay-payout-calculator" className="text-white/65 hover:text-gold hover:underline">Parlay Payout Calculator</Link></li>
              <li><Link href="/parlay-bet-calculator" className="text-white/65 hover:text-gold hover:underline">Parlay Bet Calculator</Link></li>
              <li><Link href="/moneyline-parlay-calculator" className="text-white/65 hover:text-gold hover:underline">Moneyline Parlay</Link></li>
              <li><Link href="/nfl-parlay-calculator" className="text-white/65 hover:text-gold hover:underline">NFL Parlay Calculator</Link></li>
              <li><Link href="/round-robin-calculator" className="text-white/65 hover:text-gold hover:underline">Round Robin Calculator</Link></li>
              <li><Link href="/how-to-use-parlay-calculator" className="text-white/65 hover:text-gold hover:underline">How to use</Link></li>
              <li><Link href="/features" className="text-white/65 hover:text-gold hover:underline">Features</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/what-is-a-parlay-bet" className="text-white/65 hover:text-gold hover:underline">What is a parlay bet?</Link></li>
              <li><Link href="/blog/how-to-calculate-parlay-odds" className="text-white/65 hover:text-gold hover:underline">How to calculate parlay odds</Link></li>
              <li><Link href="/blog/parlay-odds-explained" className="text-white/65 hover:text-gold hover:underline">Parlay odds explained</Link></li>
              <li><Link href="/blog/same-game-parlay-explained" className="text-white/65 hover:text-gold hover:underline">Same-game parlays</Link></li>
              <li><Link href="/blog/round-robin-betting-explained" className="text-white/65 hover:text-gold hover:underline">Round robin explained</Link></li>
              <li><Link href="/blog/parlay-vs-straight-bet" className="text-white/65 hover:text-gold hover:underline">Parlay vs straight bet</Link></li>
              <li><Link href="/about-us" className="text-white/65 hover:text-gold hover:underline">About</Link></li>
              <li><Link href="/contact-us" className="text-white/65 hover:text-gold hover:underline">Contact</Link></li>
              <li><Link href="/privacy" className="text-white/65 hover:text-gold hover:underline">Privacy</Link></li>
              <li><Link href="/disclaimer" className="text-white/65 hover:text-gold hover:underline">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Price your ticket</h2>
            <p className="mb-4 text-sm text-white/60">
              Add legs, choose American, decimal, or fractional odds, and see payout + profit before you bet.
            </p>
            <CtaButton
              href="/#calculator"
              size="sm"
              ariaLabel="Open the free Parlay Calculator"
              icon="arrow"
            >
              OPEN CALCULATOR
            </CtaButton>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 pb-3 text-center text-sm text-white/45">
          <p className="mb-0">
            © 2026 {SITE_NAME}. All rights reserved. |{' '}
            <Link href="/" className="underline hover:no-underline text-white/70">{SITE_DOMAIN}</Link>
          </p>
          <p className="mt-2 text-xs text-white/35">
            Educational odds tool only. Not a sportsbook. 21+ where applicable. Gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
