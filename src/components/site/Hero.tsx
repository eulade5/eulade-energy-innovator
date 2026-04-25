import portrait from "@/assets/eulade-portrait.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        {/* Left column — copy */}
        <div className="md:col-span-7 lg:col-span-7">
          <div
            className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-px w-10 bg-foreground/40" />
            Engineer · Founder · Rwanda
          </div>

          <h1
            className="font-display text-balance text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem] animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Electrical Engineer{" "}
            <span className="italic text-muted-foreground">&amp;</span> Founder
            building{" "}
            <span className="italic">energy solutions</span> for Africa.
          </h1>

          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Focused on scalable energy systems, infrastructure, and innovative
            solutions for emerging markets.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild size="lg" variant="default">
              <a href="#projects">
                View Projects
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/23058395166"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        {/* Right column — portrait */}
        <div className="md:col-span-5 lg:col-span-5">
          <div
            className="relative animate-reveal"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-foreground/30" />
            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b border-r border-foreground/30" />
            <img
              src={portrait}
              alt="Portrait of Eulade, electrical engineer and founder"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full grayscale object-cover"
            />
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>Eulade — 2025</span>
              <span>Portrait / 01</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-20 border-y border-border py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-12 gap-y-3 px-6 text-xs uppercase tracking-[0.25em] text-muted-foreground md:px-10">
          <span>Power Engineering</span>
          <span className="hidden md:inline">·</span>
          <span>Solar &amp; Storage</span>
          <span className="hidden md:inline">·</span>
          <span>Infrastructure</span>
          <span className="hidden md:inline">·</span>
          <span>Energy Audits</span>
          <span className="hidden md:inline">·</span>
          <span>Consulting</span>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 right-6 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
