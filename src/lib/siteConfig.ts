export const SITE_NAME = "Parlay Calculator";
export const SITE_SHORT_NAME = "Parlay Calculator";
export const SITE_ORIGIN = "https://parlaycalculator.app";
export const SITE_DOMAIN = "parlaycalculator.app";
export const SITE_TAGLINE =
  "Free Parlay Calculator — add legs in American, decimal, or fractional odds and see total payout, profit, and combined odds instantly.";

export const CONTACT_EMAIL = "support@parlaycalculator.app";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261126-pc1";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public */
export const BRAND_LOGO = "/hero-logo.png";
export const BRAND_LOGO_MARK = "/favicon-48x48.png";
export const BRAND_LOGO_HORIZONTAL = "/header-logo.png";
export const BRAND_LOGO_HORIZONTAL_CLEAN = "/header-logo-clean.webp";
export const BRAND_HERO = "/hero-logo-clean.webp";
export const BRAND_FEATURE_2 = "/hero-logo.png";
export const BRAND_FEATURE_3 = "/header-logo.png";
export const BRAND_FEATURE_4 = "/hero-logo-clean.webp";
export const OG_IMAGE = metaAsset("/og-image.png");
export const TWITTER_IMAGE = metaAsset("/og-image.png");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.9",
  ratingCount: "12840",
  bestRating: "5",
  worstRating: "1",
} as const;
