import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist. Return to Parlay Calculator.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl font-bold text-white">404</h1>
      <p className="mt-4 text-lg text-white/70">
        That page no longer exists or never did. Head back to the Parlay Calculator to price your
        next ticket.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-gold px-5 py-3 font-semibold text-black hover:bg-gold-soft"
      >
        Open Parlay Calculator
      </Link>
    </div>
  );
}
