import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowUpRight, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const ref = useReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const message = data.get("message") as string;
    const text = encodeURIComponent(
      `Hi Eulade, I'm ${name}.\n\n${message}`,
    );
    window.open(`https://wa.me/23058395166?text=${text}`, "_blank");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="font-mono">04</span>
              <span className="h-px w-8 bg-foreground/30" />
              Contact
            </div>

            <h2 className="mt-6 font-display text-balance text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Let's build{" "}
              <span className="italic text-muted-foreground">something</span>{" "}
              that powers people.
            </h2>

            <div className="mt-10 space-y-6">
              <a
                href="https://wa.me/23058395166"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 transition-colors hover:border-foreground"
              >
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-display text-2xl font-light">
                    +230 5839 5166
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="border-b border-border py-4">
                <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Based in
                </span>
                <span className="mt-1 block font-display text-2xl font-light">
                  Rwanda — Working with Africa
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div ref={ref} className="reveal-on-scroll md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 border border-border p-8 md:p-12"
            >
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Message" name="message" textarea required />

              <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  Submitting will open WhatsApp with your message pre-filled.
                </p>
                <Button type="submit" size="lg" variant="default">
                  {sent ? (
                    <>
                      Sent <Check />
                    </>
                  ) : (
                    <>
                      Send Message <ArrowUpRight />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "peer w-full border-0 border-b border-border bg-transparent px-0 pt-6 pb-2 text-base text-foreground placeholder-transparent focus:border-foreground focus:outline-none focus:ring-0 transition-colors";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          placeholder={label}
          required={required}
          className={base + " resize-none"}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          required={required}
          className={base}
        />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-0 top-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.25em] peer-focus:text-foreground"
      >
        {label}
      </label>
    </div>
  );
}
