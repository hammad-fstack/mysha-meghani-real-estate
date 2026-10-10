import { projects } from "@/data/projects";

export const metadata = {
  title: "Developments & Projects",
};

export default function DevelopmentsPage() {
  return (
    <div className="section-padding container-width">
      <h1 className="font-serif text-4xl text-[var(--color-navy)] mb-2">Our Developments</h1>
      <p className="text-[var(--color-muted)] mb-8">Discover our ongoing and completed real estate projects.</p>
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="overflow-hidden border border-[var(--color-border)] bg-white transition hover:shadow-xl">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <span className="absolute left-4 top-4 bg-[var(--color-gold)] px-3 py-1 text-xs font-semibold text-[var(--color-navy)]">
                {project.status}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold text-[var(--color-teal)] mb-2">{project.location}</p>
              <h3 className="text-2xl font-serif text-[var(--color-navy)] mb-3">{project.title}</h3>
              <p className="text-sm leading-6 text-[var(--color-muted)] mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.features.map(feature => (
                  <span key={feature} className="px-2 py-1 bg-gray-100 text-xs text-[var(--color-navy)] rounded-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
