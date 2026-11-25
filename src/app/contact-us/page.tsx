import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us — Parlay Calculator",
  description:
    "Contact the Parlay Calculator team for questions, feedback, or corrections about our free odds and payout tools on parlaycalculator.app.",
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: "Contact Us — Parlay Calculator",
    description: `Reach the ${SITE_NAME} team.`,
    url: `${SITE_ORIGIN}/contact-us`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: SITE_NAME }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact-us" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-white md:text-4xl">Contact us</h1>
        <p className="mb-8 text-lg text-white/80">
          Feature ideas, odds math questions, or guide corrections for{" "}
          <strong className="text-white">Parlay Calculator</strong>? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold underline">
            {CONTACT_EMAIL}
          </a>{" "}
          or use the form below. We do not accept wagers and cannot adjust sportsbook tickets.
        </p>
        <ContactForm />
      </div>
    </>
  );
}