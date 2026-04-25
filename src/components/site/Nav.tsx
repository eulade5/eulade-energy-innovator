import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-xl tracking-tight">
          Eulade<span className="text-muted-foreground">.</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline-grow text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/23058395166"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-10 items-center rounded-full bg-foreground px-5 text-xs font-medium uppercase tracking-widest text-background transition-transform duration-300 hover:scale-[1.02] md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            className={cn(
              "absolute left-2 right-2 top-1/2 h-px bg-foreground transition-all",
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "absolute left-2 right-2 top-1/2 h-px bg-foreground transition-all",
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background md:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-500 ease-in-out",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-3 font-display text-2xl"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/23058395166"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-foreground text-sm font-medium uppercase tracking-widest text-background"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
