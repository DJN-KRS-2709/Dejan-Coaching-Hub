import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Eyebrow, ModeSwitch, StageBadge } from "@/components/site";
import { STAGES, STAGE_FILL, STAGE_TOP_BORDER } from "@/content/stages";
import type { Mode } from "@/content/stages";
import { cn } from "@/lib/utils";

interface Props {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  active: number;
  onActiveChange: (index: number) => void;
}

// The five-stage path as a staircase. Pick a stage to see where you are and the next step.
const StagePath = ({ mode, onModeChange, active, onActiveChange }: Props) => {
  const stage = STAGES[active];
  const view = stage[mode];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <ModeSwitch mode={mode} onChange={onModeChange} />
        <p className="text-sm text-ink/60">
          Not sure where you are?{" "}
          <Link to={`/self-check?for=${mode}`} className="font-semibold text-brand-ink underline-offset-2 hover:underline">
            Take the two-minute self-check.
          </Link>
        </p>
      </div>

      <div role="group" aria-label="The five stages" className="flex flex-col gap-1.5 md:h-[300px] md:flex-row md:items-end md:gap-2">
        {STAGES.map((s, i) => (
          <button
            key={s.n}
            type="button"
            aria-pressed={i === active}
            onClick={() => onActiveChange(i)}
            style={{ "--w": `${46 + i * 13.5}%`, "--h": `${112 + i * 42}px` } as CSSProperties}
            className={cn(
              "flex w-[var(--w)] min-w-0 items-baseline gap-3 rounded-l-[4px] rounded-r-xl px-4 py-3 text-left ring-1 ring-inset ring-ink/10 transition-transform duration-150 hover:translate-x-0.5",
              "md:h-[var(--h)] md:w-auto md:flex-1 md:flex-col md:items-start md:gap-1 md:rounded-b-[4px] md:rounded-t-xl md:p-4 md:hover:-translate-y-0.5 md:hover:translate-x-0",
              "motion-reduce:transition-none motion-reduce:hover:transform-none",
              STAGE_FILL[s.n],
              i === active && "outline outline-2 outline-offset-2 outline-ink",
            )}
          >
            <span className="font-display text-2xl leading-none md:text-4xl">{s.n}</span>
            <span className="text-[0.95rem] font-bold leading-tight">{s.name}</span>
            <span className="hidden text-xs leading-snug opacity-80 md:block">{s.sub}</span>
          </button>
        ))}
      </div>
      <div className="mt-2 hidden justify-between text-xs text-ink/50 md:flex" aria-hidden="true">
        <span>Just starting</span>
        <span>AI-native</span>
      </div>

      <div
        aria-live="polite"
        className={cn(
          "mt-6 grid gap-6 rounded-3xl border border-ink/10 border-t-[6px] bg-white p-6 md:p-8",
          STAGE_TOP_BORDER[stage.n],
        )}
      >
        <div className="grid justify-items-start gap-3">
          <StageBadge n={stage.n}>
            Stage {stage.n} · {stage.name} · {mode === "team" ? "for teams" : "for you"}
          </StageBadge>
          <Eyebrow>{mode === "team" ? "Your team might say" : "You might say"}</Eyebrow>
          <p className="text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl">"{view.says}"</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="grid content-start gap-2">
            <Eyebrow>You are here if</Eyebrow>
            <ul className="grid list-disc gap-1.5 pl-5 text-[0.95rem] text-ink/75">
              {view.here.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="grid content-start gap-2">
            <Eyebrow>Your next step</Eyebrow>
            <p className="text-[0.95rem] text-ink/75">{view.next}</p>
          </div>
          <div className="grid content-start gap-2">
            <Eyebrow>How I help</Eyebrow>
            <div className="flex flex-wrap gap-2">
              {view.help.map((h) => (
                <Link
                  key={h.label}
                  to={h.to}
                  className="rounded-full bg-brand-bg px-3 py-1.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand hover:text-white"
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
