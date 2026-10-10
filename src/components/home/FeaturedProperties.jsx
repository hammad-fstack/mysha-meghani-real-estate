
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/property/PropertyCard";

export default function FeaturedProperties() {
  const featured = properties.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-teal)]">
              Selected Listings
            </p>
            <h2 className="font-serif text-3xl text-[var(--color-navy)] sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              Explore a selection of homes and properties to match your next move.
            </p>
          </div>

          <Link
            href="/buy"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)]"
          >
            View All Properties <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
