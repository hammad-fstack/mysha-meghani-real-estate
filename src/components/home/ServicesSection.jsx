
import Link from "next/link";
import {
  KeyRound,
  Building2,
  HardHat,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Property for Rent",
    description:
      "Explore rental properties to find a place that suits your lifestyle and needs.",
    link: "/rent",
    linkText: "Explore Rentals",
    Icon: KeyRound,
  },
  {
    number: "02",
    title: "Property for Sale",
    description:
      "Discover properties for sale and take the next step towards owning your space.",
    link: "/buy",
    linkText: "Browse Properties",
    Icon: Building2,
  },
  {
    number: "03",
    title: "Real Estate Development",
    description:
      "Discover development projects focused on thoughtful planning and lasting value.",
    link: "/developments",
    linkText: "View Developments",
    Icon: HardHat,
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-[var(--color-background)]">
      <div className="container-width">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-teal)]">
            What We Do
          </p>

          <h2 className="font-serif text-3xl leading-tight text-[var(--color-navy)] sm:text-4xl">
            Real Estate Solutions for Every Step
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Whether you are looking to rent, buy or explore a development
            project, we help you move forward with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map(({ number, title, description, link, linkText, Icon }) => (
            <article
              key={number}
              className="group border border-[var(--color-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-teal)] hover:shadow-xl sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-[#e7f5f3] text-[var(--color-teal)]">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <span className="text-sm font-medium text-[var(--color-gold)]">
                  {number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                {title}
              </h3>

              <p className="mt-3 min-h-[84px] text-sm leading-7 text-[var(--color-muted)]">
                {description}
              </p>

              <Link
                href={link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition-colors group-hover:text-[var(--color-teal)]"
              >
                {linkText}
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
