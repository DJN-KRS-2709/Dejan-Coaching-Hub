import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { STAGE_FILL } from "@/content/stages";
import type { Mode } from "@/content/stages";
import { cn } from "@/lib/utils";

// Small building blocks shared by every page.

export const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col bg-canvas text-ink">
    <Navbar />
    <main id="main" className="flex-1 pt-16">
      {children}
    </main>
    <Footer />
  </div>
);

export const Eyebrow = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("text-xs font-semibold uppercase tracking-[0.09em] text-ink/50", className)}>{children}</p>
);

export const Section = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) => (
  <section id={id} className={cn("border-t border-ink/10 py-14 md:py-24", className)}>
    <div className="container px-4 md:px-6">{children}</div>
  </section>
);

export const SectionHead = ({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) => (
  <div className="mb-8 grid max-w-3xl gap-4 md:mb-12">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-[2.5rem]">{title}</h2>
    {lead && <p className="text-base leading-relaxed text-ink/70 md:text-lg">{lead}</p>}
    {children}
  </div>
);

export const PageHero = ({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) => (
  <section className="pb-12 pt-12 md:pb-16 md:pt-20">
    <div className="container px-4 md:px-6">
      <div className="max-w-4xl animate-fade-in">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-[clamp(2.75rem,9vw,6rem)] text-ink">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">{lead}</p>}
        {children}
      </div>
    </div>
  </section>
);

// Stage chips: small numbered squares in the stage shades, e.g. 1 2 3 for "stages 1 to 3".
export const StageChips = ({ from, to }: { from: number; to: number }) => {
  const label = from === 1 && to === 5 ? "Any stage" : from === to ? `Stage ${from}` : `Stages ${from} to ${to}`;
  const nums = Array.from({ length: to - from + 1 }, (_, i) => from + i);
  return (
    <p className="flex flex-wrap items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-ink/70">
      <span className="inline-flex gap-[3px]" aria-hidden="true">
        {nums.map((n) => (
          <span
            key={n}
            className={cn(
              "inline-grid h-5 w-5 place-items-center rounded-[5px] text-[0.68rem] font-extrabold ring-1 ring-inset ring-ink/10",
              STAGE_FILL[n],
            )}
          >
            {n}
          </span>
        ))}
      </span>
      {label}
    </p>
  );
};

export const StageBadge = ({ n, children }: { n: number; children: ReactNode }) => (
  <span
    className={cn(
      "inline-flex items-center whitespace-nowrap rounded-md px-2.5 py-1.5 text-[0.68rem] font-bold uppercase leading-none tracking-[0.05em] ring-1 ring-inset ring-ink/10",
      STAGE_FILL[n],
    )}
  >
    {children}
  </span>
);

// The "For me / For my team" switch.
export const ModeSwitch = ({
  mode,
  onChange,
  label = "Show the path for",
}: {
  mode: Mode;
  onChange: (mode: Mode) => void;
  label?: string;
}) => (
  <div role="group" aria-label={label} className="inline-flex gap-1 rounded-full border border-ink/10 bg-muted p-1">
    {(
      [
        ["person", "For me"],
        ["team", "For my team"],
      ] as const
    ).map(([value, text]) => (
      <button
        key={value}
        type="button"
        aria-pressed={mode === value}
        onClick={() => onChange(value)}
        className={cn(
          "rounded-full px-4 py-2.5 text-sm font-semibold leading-none transition-colors",
          mode === value ? "bg-ink text-white" : "text-ink/70 hover:text-ink",
        )}
      >
        {text}
      </button>
    ))}
  </div>
);
