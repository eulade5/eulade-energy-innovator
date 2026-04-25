import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    n: "01",
    title: "LANGO Energy",
    tag: "Venture · 2024 →",
    description:
      "A solar-powered cold-storage concept built to extend the cold chain for agricultural producers in off-grid African regions. Combines PV generation, smart battery management, and modular cold rooms.",
  },
  {
    n: "02",
    title: "Power System Simulations",
    tag: "Research · MATLAB / Simulink",
    description:
      "Simulation studies on load flow, fault analysis, and stability of modern distribution networks — applying engineering models to evaluate grid resilience under variable renewable input.",
  },
  {
    n: "03",
    title: "Electrical & Energy Solutions",
    tag: "Practice · Ongoing",
    description:
      "End-to-end installations, energy audits and optimisation work for residential, commercial and small-industrial clients — from single-line diagrams to commissioning and monitoring.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="02"
          eyebrow="Selected Work"
          title={
            <>
              Projects shaping how energy{" "}
              <span className="italic text-muted-foreground">
                gets to people
              </span>
              .
            </>
          }
        />

        <div className="mt-16 border-t border-border">
          {projects.map((p) => (
            <ProjectRow key={p.n} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  n,
  title,
  tag,
  description,
}: (typeof projects)[number]) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal-on-scroll group/row border-b border-border"
    >
      <div className="grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
        <div className="md:col-span-1">
          <span className="font-mono text-xs text-muted-foreground">{n}</span>
        </div>
        <div className="md:col-span-4">
          <h3 className="font-display text-3xl font-light tracking-tight md:text-4xl">
            {title}
          </h3>
          <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {tag}
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="text-base leading-relaxed text-foreground/75">
            {description}
          </p>
        </div>
        <div className="md:col-span-2 md:text-right">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all"
          >
            <span className="underline-grow">View Details</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
