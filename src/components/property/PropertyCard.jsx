
import Link from "next/link";
import { MapPin, BedDouble, Bath, MoveUpRight } from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <article className="overflow-hidden border border-[var(--color-border)] bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/properties/${property.slug}`}
        className="relative block h-60 overflow-hidden bg-gray-100"
      >
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-[var(--color-teal)] px-3 py-1 text-xs font-semibold text-white">
          {property.purpose}
        </span>
      </Link>

      <div className="p-5">
        <p className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
          <MapPin size={14} /> {property.location}
        </p>

        <h3 className="mt-3 text-lg font-semibold text-[var(--color-navy)]">
          {property.title}
        </h3>

        <p className="mt-2 text-lg font-bold text-[var(--color-teal)]">
          {property.price}
        </p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-[var(--color-border)] pt-4 text-xs text-[var(--color-muted)]">
          <span className="flex items-center gap-1">
            <BedDouble size={15} /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath size={15} /> {property.baths} Baths
          </span>
          <span>{property.area}</span>
        </div>

        <Link
          href={`/properties/${property.slug}`}
          className="mt-5 flex items-center justify-between border-t border-[var(--color-border)] pt-4 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-teal)]"
        >
          View Property <MoveUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
