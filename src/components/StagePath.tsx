import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Eyebrow, FOCUS_RING, ModeSwitch, StageBadge } from "@/components/site";
import { useContent } from "@/content/useContent";
import { useLang, useLocalize } from "@/lib/i18n";
import type { Mode } from "@/content/stages";
import { cn } from "@/lib/utils";

// Bars are warm white with dark text. Only the active stage is blue.
const BAR = "bg-white text-ink ring-1 ring-inset ring-ink/10";
const BAR_ACTIVE = "bg-brand text-white ring-0";

interface StaircaseProps {
  // Index of the active stage, or -1 for none.
  active?: number;
  // "mini": a small row of numbered bars. "empty": the same row as dashed outlines.
  // "preview": the large row in the home hero.
  variant: "mini" | "empty" | "preview";
  className?: string;
}

// A non-interactive staircase of the five stages, used in the self-check and the hero.
export const Staircase = ({ active = -1, variant, className }: StaircaseProps) => {
  const { stages: STAGES } = useContent();
  const preview = variant === "preview";
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-end", preview ? "h-[360px] gap-2" : "h-28 gap-1.5", className)}
    >
      {STAGES.map((s, i) => (
        <div
          key={s.n}
          style={{ height: preview ? `${150 + i * 52}px` : `${36 + i * 19}px` }}
          className={cn(
            "flex min-w-0 flex-1 flex-col items-start gap-1 rounded-b-[4px] rounded-t-xl",
            preview ? "p-4" : "p-2",
            variant === "empty"
              ? "border border-dashed border-ink/25 text-ink/60"
              : i === active
                ? BAR_ACTIVE
                : BAR,
          )}
        >
          <span className={cn("font-bold leading-none", preview ? "text-3xl" : "text-sm")}>{s.n}</span>
          {preview && (
            <>
              <span className="text-base font-bold leading-tight">{s.name}</span>
              <span className="text-xs leading-snug text-ink/60">{s.sub}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

interface Props {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  active: number;
  onActiveChange: (index: number) => void;
}

// The five-stage path. Pick a stage to see where you are and the next step.
const StagePath = ({ mode, onModeChange, active, onActiveChange }: Props) => {
  const { stages: STAGES } = useContent();
  const de = useLang() === "de";
  const lp = useLocalize();
  const stage = STAGES[active];
  const view = stage[mode];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <ModeSwitch mode={mode} onChange={onModeChange} />
        <p className="text-sm text-ink/60">
          {de ? "Nicht sicher, wo Sie stehen?" : "Not sure where you are?"}{" "}
          <Link
            to={lp(`/self-check?for=${mode}`)}
            className={cn("inline-flex min-h-[44px] items-center font-semibold text-ink underline underline-offset-4", FOCUS_RING)}
          >
            {de ? "Machen Sie den Selbstcheck in zwei Minuten." : "Take the two-minute self-check."}
          </Link>
        </p>
      </div>

      <div role="group" aria-label={de ? "Die fünf Stufen" : "The five stages"} className="flex flex-col gap-1.5 md:h-[300px] md:flex-row md:items-end md:gap-2">
        {STAGES.map((s, i) => (
          <button
            key={s.n}
            type="button"
            aria-pressed={i === active}
            onClick={() => onActiveChange(i)}
            style={{ "--w": `${46 + i * 13.5}%`, "--h": `${112 + i * 42}px` } as CSSProperties}
            className={cn(
              FOCUS_RING,
              "flex w-[var(--w)] min-w-0 items-baseline gap-3 rounded-l-[4px] rounded-r-xl px-4 py-3 text-left transition-transform duration-150 hover:translate-x-0.5",
              "md:h-[var(--h)] md:w-auto md:flex-1 md:flex-col md:items-start md:gap-1 md:rounded-b-[4px] md:rounded-t-xl md:p-4 md:hover:-translate-y-0.5 md:hover:translate-x-0",
              "motion-reduce:transition-none motion-reduce:hover:transform-none",
              i === active ? BAR_ACTIVE : BAR,
            )}
          >
            <span className="text-2xl font-bold leading-none md:text-3xl">{s.n}</span>
            <span className="text-base font-bold leading-tight">{s.name}</span>
            <span className={cn("hidden text-xs leading-snug md:block", i === active ? "text-white" : "text-ink/60")}>
              {s.sub}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-2 hidden justify-between text-xs text-ink/60 md:flex" aria-hidden="true">
        <span>{de ? "Ganz am Anfang" : "Just starting"}</span>
        <span>{de ? "KI-nativ" : "AI-native"}</span>
      </div>

      <div
        aria-live="polite"
        className="mt-6 grid gap-6 rounded-3xl border border-ink/10 border-t-[6px] border-t-ink bg-white p-6 md:p-8"
      >
        <div className="grid justify-items-start gap-3">
          <StageBadge>
            {de ? "Stufe" : "Stage"} {stage.n} · {stage.name} ·{" "}
            {mode === "team" ? (de ? "für Teams" : "for teams") : de ? "für Sie" : "for you"}
          </StageBadge>
          <Eyebrow>
            {mode === "team" ? (de ? "Ihr Team sagt vielleicht" : "Your team might say") : de ? "Sie sagen vielleicht" : "You might say"}
          </Eyebrow>
          <p className="text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl">{de ? `„${view.says}“` : `"${view.says}"`}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="grid content-start gap-2">
            <Eyebrow>{de ? "Sie sind hier, wenn" : "You are here if"}</Eyebrow>
            <ul className="grid list-disc gap-1.5 pl-5 text-base text-ink/75">
              {view.here.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="grid content-start gap-2">
            <Eyebrow>{de ? "Ihr nächster Schritt" : "Your next step"}</Eyebrow>
            <p className="text-base text-ink/75">{view.next}</p>
          </div>
          <div className="grid content-start gap-2">
            <Eyebrow>{de ? "Wie ich helfe" : "How I help"}</Eyebrow>
            <div className="flex flex-wrap gap-x-5">
              {view.help.map((h) => (
                <Link
                  key={h.label}
                  to={lp(h.to)}
                  className={cn("inline-flex min-h-[44px] items-center text-sm font-semibold text-ink underline underline-offset-4 hover:decoration-2", FOCUS_RING)}
                >
                  {h.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StagePath;
