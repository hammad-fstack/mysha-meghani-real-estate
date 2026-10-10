import { SITE_ASSETS } from "@/config/site-assets";

export const projects = [
  {
    id: 1,
    title: "The Horizon Towers",
    slug: "the-horizon-towers",
    location: "Business District",
    status: "Under Construction",
    description: "A state-of-the-art commercial and residential complex offering premium amenities and panoramic views.",
    image: SITE_ASSETS.construction,
    features: ["Smart Home Integration", "Infinity Pool", "24/7 Security", "Retail Podium"],
  },
  {
    id: 2,
    title: "Oasis Villas",
    slug: "oasis-villas",
    location: "Suburban Greens",
    status: "Completed",
    description: "An exclusive gated community featuring modern architectural designs and sustainable living.",
    image: SITE_ASSETS.construction,
    features: ["Solar Powered", "Private Gardens", "Community Center", "Park Access"],
  }
];
