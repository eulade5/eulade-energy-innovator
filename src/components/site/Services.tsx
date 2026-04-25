import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { Sun, Gauge, Wind, Camera, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar & Electrical Installations",
    description:
      "Design, supply and commissioning of PV systems and full electrical installations.",
  },
  {
    icon: Gauge,
    title: "Energy Audits & Optimization",
    description:
      "Site audits, load profiling and recommendations to reduce consumption and cost.",
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    description:
      "Heating, ventilation and air-conditioning — sized and integrated for efficiency.",
  },
  {
    icon: Camera,
    title: "CCTV & Smart Systems",
    description:
      "Surveillance, access control and connected building systems with remote monitoring.",
  },
  {
    icon: Briefcase,
    title: "Engineering Consulting",
    description:
      "Technical advisory, feasibility studies and project development for energy ventures.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-foreground py-24 text-background md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-background/60">
              <span className="font-mono">03</span>
              <span className="h-px w-8 bg-background/40" />
              Services
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-balance text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Practical engineering,{" "}
              <span className="italic text-background/60">
                delivered end-to-end
              </span>
              .
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 border-t border-background/15 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-background/70">
            Have a project, building, or site that needs reliable energy and
            electrical infrastructure? Let's scope it together.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-background text-foreground hover:bg-background/90"
          >
            <a
              href="https://wa.me/23058395166"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a Service
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal-on-scroll group/card relative bg-foreground p-8 transition-colors duration-500 hover:bg-background hover:text-foreground"
    >
      <div className="flex items-start justify-between">
        <Icon className="h-6 w-6" strokeWidth={1.25} />
        <span className="font-mono text-[10px] text-current/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-10 font-display text-2xl font-light leading-tight tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-current/70">
        {description}
      </p>
    </div>
  );
}
