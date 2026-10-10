import { propertyService } from "@/lib/services/PropertyService";
import PropertyCard from "@/components/property/PropertyCard";

export const metadata = {
  title: "Properties for Sale",
};

export default function BuyPage() {
  const propertiesForSale = propertyService.getSaleProperties();

  return (
    <div className="section-padding container-width">
      <h1 className="font-serif text-4xl text-[var(--color-navy)] mb-2">Properties for Sale</h1>
      <p className="text-[var(--color-muted)] mb-8">Discover properties available for sale.</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {propertiesForSale.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
        {propertiesForSale.length === 0 && (
          <p className="text-[var(--color-muted)]">No properties available for sale at the moment.</p>
        )}
      </div>
    </div>
  );
}
