
import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { SITE_ASSETS } from "@/config/site-assets";

export default function DevelopmentSection() {
  return (
    <section className="section-padding bg-[var(--color-navy)] text-white">
      <div className="container-width grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#62d1c7]">
            Built With Vision
          </p>

          <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
            Shaping Spaces.
            <br />
            Creating Possibilities.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Explore development projects designed around thoughtful planning,
            quality construction and long-term value.
          </p>

          <Link
            href="/developments"
            className="mt-8 inline-flex items-center gap-3 bg-[var(--color-teal)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#087f82]"
          >
            Explore Developments <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px]">
          <img
            src={SITE_ASSETS.construction}
            alt="Modern architectural development"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102c46]/80 to-transparent" />

          <div className="absolute bottom-6 left-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center bg-[var(--color-gold)] text-[var(--color-navy)]">
              <Building2 size={24} />
            </div>
            <div>
              <p className="font-semibold">Development Projects</p>
              <p className="mt-1 text-xs text-white/75">Vision · Planning · Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
