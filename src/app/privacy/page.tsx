import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME} at ${SITE_DOMAIN}.`,
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-white">Privacy policy</h1>
        <div className="space-y-5 leading-relaxed text-white/80">
          <p>Last updated: November 26, 2026</p>
          <p>
            {SITE_NAME} (“we”) operates {SITE_DOMAIN}. This policy explains what information we
            handle when you use the Parlay Calculator and the rest of the site.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">Information we collect</h2>
          <p>
            Odds and stake values you enter into the parlay and round robin calculators are processed
            in your browser to show payout results; we do not create user accounts for those inputs
            and do not need to store your ticket on our servers for basic math. If you contact us, we
            receive the email address and message you send. Server logs or analytics may include IP
            address, browser type, and pages visited.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">How we use information</h2>
          <p>
            Contact messages are used to reply to support and feedback. Aggregated analytics help us
            improve performance and content. We do not sell personal data.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">Cookies and analytics</h2>
          <p>
            We may use first-party cookies or privacy-respecting measurement tools. You can control
            cookies in your browser settings.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">Third parties</h2>
          <p>
            Hosting and infrastructure providers may process technical data needed to deliver the
            site. We are not affiliated with any sportsbook or gambling operator. This site does not
            place bets on your behalf.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">Your choices</h2>
          <p>
            You can browse and use the calculators without contacting us. To request deletion of a
            support email thread, write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <h2 className="font-display text-xl font-semibold text-white">Contact</h2>
          <p>
            Privacy questions:{" "}
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