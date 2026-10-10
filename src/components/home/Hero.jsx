
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SITE_ASSETS } from "@/config/site-assets";
import { SITE_CONFIG } from "@/config/site-config";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[590px] overflow-hidden bg-[var(--color-navy)] sm:min-h-[650px]">
      <img
        src={SITE_ASSETS.hero}
        alt="Contemporary luxury residence"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#09263b]/95 via-[#09263b]/75 to-[#09263b]/15" />

      <div className="container-width flex min-h-[590px] items-center py-20 sm:min-h-[650px]">
        <div className="max-w-2xl text-white">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#e2bc66] sm:text-sm">
            Real Estate · Properties · Development
          </p>

          <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            Find Your Place.
            <br />
            <span className="text-[#62d1c7]">
              Build Your Future.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            Discover exceptional properties, explore rental opportunities
            and experience thoughtful real estate development with {SITE_CONFIG.brandName}.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/buy"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--color-teal)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#087f82]"
            >
              Explore Properties
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/developments"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-navy)]"
            >
              Our Developments
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6">
            <div className="flex items-center gap-2 text-sm text-white/90">
              <CheckCircle2 size={17} className="text-[#62d1c7]" />
              Personalized Service
            </div>

            <div className="flex items-center gap-2 text-sm text-white/90">
              <CheckCircle2 size={17} className="text-[#62d1c7]" />
              Quality Properties
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden border-l-2 border-[var(--color-gold)] pl-4 text-[10px] uppercase leading-6 tracking-[0.24em] text-white/90 lg:block">
        Quality
        <br />
        Trust
        <br />
        Value
      </div>
    </section>
  );
}
