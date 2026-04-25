import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: "MEng", label: "Electrical Power Engineering" },
  { value: "5+", label: "Years in the field" },
  { value: "3", label: "Energy ventures in building" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={
            <>
              An engineer with an{" "}
              <span className="italic text-muted-foreground">
                entrepreneur's lens
              </span>
              .
            </>
          }
        />

        <div
          ref={ref}
          className="reveal-on-scroll mt-16 grid gap-12 md:grid-cols-12"
        >
          <div className="space-y-6 text-base leading-relaxed text-foreground/80 md:col-span-7 md:col-start-5 md:text-lg">
            <p>
              I'm Eulade — an Electrical Power Engineer focused on the systems
              that move modern economies: generation, distribution, solar, and
              the infrastructure layer that quietly holds it all together.
            </p>
            <p>
              My work sits at the intersection of engineering rigour and
              real-world enterprise. From simulating power systems to designing
              installations and energy audits on the ground, I build solutions
              meant to be deployed — not theorised.
            </p>
            <p>
              Today, I'm channelling that practice into LANGO Energy, a venture
              creating scalable solar and cold-storage infrastructure for
              emerging African markets where reliable energy unlocks everything
              else.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background p-6 transition-colors hover:bg-foreground hover:text-background md:p-8"
            >
              <div className="font-display text-4xl font-light tracking-tight md:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-current">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
