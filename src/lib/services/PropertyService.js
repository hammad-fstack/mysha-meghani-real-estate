import { properties } from "@/data/properties";

// Strategy Pattern for filtering properties
class SaleFilterStrategy {
  filter(items) {
    return items.filter((p) => p.purpose === "For Sale");
  }
}

class RentFilterStrategy {
  filter(items) {
    return items.filter((p) => p.purpose === "For Rent");
  }
}

class AllFilterStrategy {
  filter(items) {
    return items;
  }
}

// Singleton Service and Facade Pattern for accessing property data
class PropertyService {
  constructor() {
    if (PropertyService.instance) {
      return PropertyService.instance;
    }
    this.properties = properties;
    PropertyService.instance = this;
  }

  getProperties(strategy = new AllFilterStrategy()) {
    return strategy.filter(this.properties);
  }

  getSaleProperties() {
    return this.getProperties(new SaleFilterStrategy());
  }

  getRentProperties() {
    return this.getProperties(new RentFilterStrategy());
  }

  getPropertyBySlug(slug) {
    return this.properties.find((p) => p.slug === slug) || null;
  }
}

export const propertyService = new PropertyService();
