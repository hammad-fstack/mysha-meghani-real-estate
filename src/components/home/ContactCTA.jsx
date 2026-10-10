
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="flex flex-col justify-between gap-7 bg-[#eaf4f2] p-7 sm:p-12 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-teal)]">
              Let&apos;s Find Your Next Property
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[var(--color-navy)] sm:text-4xl">
              Your Next Chapter Starts Here
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Tell us what you are looking for and explore the right property
              opportunities for your needs.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">Call Us Directly</span>
              <span className="text-lg font-bold text-[var(--color-navy)]">03332314334</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
