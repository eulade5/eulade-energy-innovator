import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/sibomana05/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="font-display text-5xl font-light tracking-tight md:text-7xl">
              Eulade<span className="text-muted-foreground">.</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
              Building practical solutions for real-world challenges.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="underline-grow">About</a></li>
              <li><a href="#projects" className="underline-grow">Projects</a></li>
              <li><a href="#services" className="underline-grow">Services</a></li>
              <li><a href="#contact" className="underline-grow">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Connect
            </div>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:bg-foreground hover:text-background"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/23058395166"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm underline-grow"
            >
              wa.me/23058395166
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Eulade — All rights reserved.</span>
          <span className="font-mono">v1.0 · Rwanda / Africa</span>
        </div>
      </div>
    </footer>
  );
}
