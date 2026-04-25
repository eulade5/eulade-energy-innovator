import { useReveal } from "@/hooks/use-reveal";

interface Props {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function SectionHeader({ index, eyebrow, title, description }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal-on-scroll grid gap-8 md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="font-mono">{index}</span>
          <span className="h-px w-8 bg-foreground/30" />
          {eyebrow}
        </div>
      </div>
      <div className="md:col-span-8">
        <h2 className="font-display text-balance text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
