import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IntroCallLink from "@/components/IntroCallLink";
import SignupForm from "@/components/SignupForm";
import { ModeSwitch } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { QUESTIONS, STAGES, scoreStage } from "@/content/stages";
import type { Mode } from "@/content/stages";
import { cn } from "@/lib/utils";

const METER_ON: Record<number, string> = {
  1: "bg-stage-1",
  2: "bg-stage-2",
  3: "bg-stage-3",
  4: "bg-stage-4",
  5: "bg-stage-5",
};

const Meter = ({ stage }: { stage: number }) => (
  <div className="grid grid-cols-5 gap-1" aria-hidden="true">
    {[1, 2, 3, 4, 5].map((i) => (
      <i key={i} className={cn("h-2 rounded-sm", i <= stage ? METER_ON[i] : "bg-white/20")} />
    ))}
  </div>
);

interface Props {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

// The AI-readiness self-check: four questions, scored in the browser. Nothing is stored
// unless the visitor asks for the readout by email.
const SelfCheck = ({ mode, onModeChange }: Props) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  useEffect(() => setAnswers({}), [mode]);

  const questions = QUESTIONS[mode];
  const values = Object.values(answers);
  const done = values.length === questions.length;
  const stageNo = done ? scoreStage(values) : 0;
  const stage = done ? STAGES[stageNo - 1] : null;

  return (
    <div>
      <div className="mb-6">
        <ModeSwitch mode={mode} onChange={onModeChange} label="Take the check for" />
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_1fr]">
        <form className="grid min-w-0 gap-4" aria-label="Self-check questions" onSubmit={(e) => e.preventDefault()}>
          {questions.map((q, qi) => (
            <fieldset key={`${mode}-${qi}`} className="rounded-3xl border border-ink/10 bg-white px-4 pb-4 pt-3 md:px-5">
              <legend className="px-1 text-base font-bold text-ink">
                {qi + 1}. {q.q}
              </legend>
              <div className="mt-1 grid gap-0.5">
                {q.a.map((a, ai) => {
                  const id = `q-${mode}-${qi}-${ai}`;
                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex cursor-pointer items-start gap-3 rounded-xl px-2 py-2 text-[0.95rem] leading-snug text-ink/80 hover:bg-muted"
                    >
                      <input
                        type="radio"
                        id={id}
                        name={`${mode}-q${qi}`}
                        value={ai + 1}
                        checked={answers[qi] === ai + 1}
                        onChange={() => setAnswers((prev) => ({ ...prev, [qi]: ai + 1 }))}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#2b59ff]"
                      />
                      <span>{a}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </form>

        <div aria-live="polite" className="grid min-w-0 gap-4 rounded-3xl bg-ink p-6 text-white md:p-7 lg:sticky lg:top-24">
          {!stage ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.09em] text-white/60">Your stage</p>
              <p className="font-display text-5xl leading-[0.95]">
                {values.length} of {questions.length}
              </p>
              <p className="text-white/80">
                Answer all four questions to see where {mode === "team" ? "your team is" : "you are"} and what the next
                step looks like.
              </p>
              <Meter stage={0} />
            </>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.09em] text-white/60">
                {mode === "team" ? "Your team is at" : "You are at"}
              </p>
              <p className="font-display text-5xl leading-[0.95] md:text-6xl">
                Stage {stage.n}
                <br />
                {stage.name}
              </p>
              <Meter stage={stage.n} />
              <p className="text-white/85">
                <strong className="text-white">Next step:</strong> {stage[mode].next}
              </p>
              <Link
                to={`/?for=${mode}&stage=${stage.n}#path`}
                className={cn(buttonVariants({ variant: "light", size: "sm" }), "justify-self-start")}
              >
                See stage {stage.n} on the path
              </Link>
              <div className="mt-2 border-t border-white/15 pt-5">
                <SignupForm
                  list="self-check"
                  label="Get your readout by email, with the next steps for your stage"
                  button="Send my readout"
                  stage={stage.n}
                  mode={mode}
                  dark
                />
              </div>
              <div className="border-t border-white/15 pt-5">
                <p className="mb-3 text-sm text-white/80">
                  {mode === "team"
                    ? "Want to go through it for your whole team? Talk it through with me."
                    : "Rather talk it through?"}
                </p>
                <IntroCallLink variant="brand" size="sm" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfCheck;
