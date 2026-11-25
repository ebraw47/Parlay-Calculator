import { SITE_ORIGIN } from "@/lib/siteConfig";

function imageLoc(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const LASTMOD = "2026-11-26";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/hero-logo.png"),
        title: "Parlay Calculator logo",
        caption: "Brand mark for parlaycalculator.app",
      },
      {
        loc: imageLoc("/hero-logo-clean.webp"),
        title: "Parlay Calculator",
        caption: "Free parlay odds and payout calculator",
      },
    ],
  },
  {
    path: "/features",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/how-to-use-parlay-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/parlay-odds-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/parlay-payout-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/parlay-bet-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/moneyline-parlay-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/nfl-parlay-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/round-robin-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
  },
  {
    path: "/about-us",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/blog/how-to-calculate-parlay-odds",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/blog/what-is-a-parlay-bet",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/blog/parlay-odds-explained",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/blog/same-game-parlay-explained",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/blog/round-robin-betting-explained",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/blog/parlay-vs-straight-bet",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/contact-us",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}
