import { propertyService } from "@/lib/services/PropertyService";
import { MapPin, BedDouble, Bath, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const property = propertyService.getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };
  return { title: property.title };
}

export default function PropertyDetailPage({ params }) {
  const property = propertyService.getPropertyBySlug(params.slug);
  
  if (!property) {
    notFound();
  }

  return (
    <div className="section-padding container-width">
      <Link href={property.purpose === "For Sale" ? "/buy" : "/rent"} className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-teal)] mb-6">
        <ArrowLeft size={16} /> Back to Listings
      </Link>
      
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden bg-gray-100 rounded-lg">
          <img src={property.image} alt={property.title} className="w-full h-auto object-cover" />
        </div>
        
        <div>
          <div className="inline-block bg-[var(--color-teal)] text-white text-xs font-semibold px-3 py-1 mb-4">
            {property.purpose}
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[var(--color-navy)] mb-3">{property.title}</h1>
          <p className="flex items-center gap-2 text-[var(--color-muted)] mb-6">
            <MapPin size={18} /> {property.location}
          </p>
          
          <p className="text-3xl font-bold text-[var(--color-gold)] mb-8">{property.price}</p>
          
          <div className="grid grid-cols-2 gap-4 border-y border-[var(--color-border)] py-6 mb-8">
            <div className="flex items-center gap-3 text-[var(--color-navy)]">
              <BedDouble size={24} className="text-[var(--color-teal)]" />
              <div>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider">Bedrooms</p>
                <p className="font-semibold">{property.beds}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[var(--color-navy)]">
              <Bath size={24} className="text-[var(--color-teal)]" />
              <div>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider">Bathrooms</p>
                <p className="font-semibold">{property.baths}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[var(--color-navy)] col-span-2 mt-2">
              <div>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider">Area</p>
                <p className="font-semibold">{property.area}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--color-navy)] mb-3">Description</h2>
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              This is a beautiful {property.type.toLowerCase()} located in the heart of {property.location}. It offers a perfect blend of modern architecture and comfortable living spaces. Contact us today to schedule a viewing or for more information.
            </p>
          </div>
          
          <Link href="/contact" className="inline-block bg-[var(--color-navy)] text-white px-8 py-4 text-sm font-semibold hover:bg-[#1a3d5e] transition">
            Contact Agent
          </Link>
        </div>
      </div>
    </div>
  );
}
