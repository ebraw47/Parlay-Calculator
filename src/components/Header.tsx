'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import { BRAND_LOGO_HORIZONTAL_CLEAN, SITE_NAME } from '@/lib/siteConfig';

const navLinks = [
  { href: '/', label: 'Calculator' },
  { href: '/parlay-odds-calculator', label: 'Odds' },
  { href: '/parlay-payout-calculator', label: 'Payout' },
  { href: '/round-robin-calculator', label: 'Round robin' },
  { href: '/nfl-parlay-calculator', label: 'NFL' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-black/85 py-2.5 px-3 backdrop-blur-xl sm:py-3 sm:px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center min-w-0 group">
          <div className="relative h-10 w-[150px] sm:h-11 sm:w-[180px] flex-shrink-0 overflow-hidden">
            <Image
              src={BRAND_LOGO_HORIZONTAL_CLEAN}
              alt={`${SITE_NAME} logo`}
              width={180}
              height={44}
              className="h-full w-full object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative rounded-lg px-2.5 py-1.5 font-medium transition-colors text-sm ${
                isActive(href)
                  ? 'bg-gold/15 font-semibold text-gold'
                  : 'text-white/65 hover:bg-white/5 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/#calculator"
            className="inline-flex items-center rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-black shadow-[0_10px_28px_-12px_rgba(212,175,55,0.7)] transition hover:bg-gold-soft"
          >
            Open calculator
          </Link>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
