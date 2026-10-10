import { propertyService } from "@/lib/services/PropertyService";
import PropertyCard from "@/components/property/PropertyCard";

export const metadata = {
  title: "Properties for Rent",
};

export default function RentPage() {
  const propertiesForRent = propertyService.getRentProperties();

  return (
    <div className="section-padding container-width">
      <h1 className="font-serif text-4xl text-[var(--color-navy)] mb-2">Properties for Rent</h1>
      <p className="text-[var(--color-muted)] mb-8">Explore rental properties that suit your lifestyle.</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {propertiesForRent.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
        {propertiesForRent.length === 0 && (
          <p className="text-[var(--color-muted)]">No properties available for rent at the moment.</p>
        )}
      </div>
    </div>
  );
}
