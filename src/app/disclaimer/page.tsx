import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${SITE_NAME} at ${SITE_DOMAIN}.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Disclaimer", href: "/disclaimer" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Disclaimer</h1>
        <div className="space-y-5 leading-relaxed text-white/80">
          <p>Last updated: November 26, 2026</p>
          <p>
            {SITE_NAME} on {SITE_DOMAIN} is an <strong className="text-white">educational odds and
            payout tool</strong>. It is not a sportsbook, does not accept wagers, and does not
            facilitate real-money betting.
          </p>
          <p>
            We are not affiliated with, endorsed by, or sponsored by DraftKings, FanDuel, BetMGM,
            Caesars Sportsbook, ESPN BET, or any other gambling operator. Sportsbook names are used
            only for clarity in examples.
          </p>
          <p>
            Calculator output is for informational purposes. Lines, payouts, and house rules vary by
            book and jurisdiction. Always confirm prices and terms with your licensed sportsbook
            before placing a bet.
          </p>
          <p>
            <strong className="text-white">Responsible gambling:</strong> You must be of legal betting
            age in your location (often 21+ in the United States). Never gamble with money you cannot
            afford to lose. If you or someone you know has a gambling problem, call the National
            Problem Gambling Helpline at <strong className="text-white">1-800-GAMBLER</strong> (US) or
            contact your local responsible gambling resources.
          </p>
          <p>
            Content on this site does not guarantee profits or outcomes. Past results do not predict
            future results. Use the tools to learn odds math—not as financial advice.
          </p>
          <p>
            Questions? Contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}