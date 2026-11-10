import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SignupForm from "@/components/SignupForm";
import { Staircase } from "@/components/StagePath";
import { Eyebrow, ModeSwitch, TEXT_LINK } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { QUESTIONS, STAGES, scoreStage } from "@/content/stages";
import type { Mode } from "@/content/stages";
import { INTRO_CALL_LABEL, INTRO_CALL_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

interface Props {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

// The AI-readiness self-check: four questions, scored in the browser. Nothing is stored
// unless the visitor asks for the readout by email.
const SelfCheck = ({ mode, onModeChange }: Props) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const resultRef = useRef<HTMLDivElement>(null);
  useEffect(() => setAnswers({}), [mode]);

  const questions = QUESTIONS[mode];
  const values = Object.values(answers);
  const answered = values.length;
  const done = answered === questions.length;
  const stage = done ? STAGES[scoreStage(values) - 1] : null;
  const next = stage ? stage[mode].help[0] : null;

  const answer = (qi: number, value: number) => {
    const wasDone = Object.keys(answers).length === questions.length;
    const nextAnswers = { ...answers, [qi]: value };
    setAnswers(nextAnswers);
    // On a phone the result sits below the questions: bring it into view once complete.
    if (!wasDone && Object.keys(nextAnswers).length === questions.length && window.innerWidth < 1024) {
      window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <ModeSwitch mode={mode} onChange={onModeChange} label="Take the check for" />
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_1fr]">
        <form className="grid min-w-0 gap-4" aria-label="Self-check questions" onSubmit={(e) => e.preventDefault()}>
          {/* Slim progress bar, pinned under the header on phones. */}
          <div className="sticky top-[65px] z-30 -mx-4 bg-canvas/95 px-4 py-3 backdrop-blur md:-mx-6 md:px-6 lg:static lg:mx-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <div className="mb-1.5 flex justify-between text-xs font-semibold text-ink/60">
              <span>{answered === 0 ? "Four questions" : "Your progress"}</span>
              <span aria-live="polite">{answered > 0 && `${answered}/${questions.length}`}</span>
            </div>
            <div
              role="progressbar"
              aria-label="Questions answered"
              aria-valuemin={0}
              aria-valuemax={questions.length}
              aria-valuenow={answered}
              className="h-1.5 overflow-hidden rounded-full bg-ink/10"
            >
              <div
                className="h-full rounded-full bg-ink transition-[width] duration-300 motion-reduce:transition-none"
                style={{ width: `${(answered / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {questions.map((q, qi) => (
            // The card is a plain div around a borderless fieldset, so the question (the legend)
            // sits inside the card instead of being drawn on the card's border.
            <div key={`${mode}-${qi}`} className="rounded-3xl border border-ink/10 bg-white px-4 pb-4 pt-5 md:px-5">
              <fieldset className="m-0 min-w-0 border-0 p-0">
              <legend className="px-2 text-base font-bold leading-snug text-ink">
                {qi + 1}. {q.q}
              </legend>
              <div className="mt-2 grid gap-0.5">
                {q.a.map((a, ai) => {
                  const id = `q-${mode}-${qi}-${ai}`;
                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex min-h-[44px] cursor-pointer items-start gap-3 rounded-xl px-2 py-2.5 text-[0.95rem] leading-snug text-ink/80 hover:bg-muted"
                    >
                      <input
                        type="radio"
                        id={id}
                        name={`${mode}-q${qi}`}
                        value={ai + 1}
                        checked={answers[qi] === ai + 1}
                        onChange={() => answer(qi, ai + 1)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#0a0a0a]"
                      />
                      <span>{a}</span>
                    </label>
                  );
                })}
              </div>
              </fieldset>
            </div>
          ))}
        </form>

        <div
          ref={resultRef}
          aria-live="polite"
          className="grid min-w-0 scroll-mt-24 gap-5 rounded-3xl border border-ink/10 bg-white p-6 md:p-7 lg:sticky lg:top-24"
        >
          {!stage || !next ? (
            <>
              <Eyebrow>Your stage</Eyebrow>
              <p className="text-2xl font-bold tracking-tight text-ink">Your stage appears here</p>
              <Staircase variant="empty" />
              <p className="text-sm text-ink/60">
                Answer all four questions to see where {mode === "team" ? "your team is" : "you are"} and what the next
                step looks like.
              </p>
            </>
          ) : (
            <>
              <Eyebrow>{mode === "team" ? "Your team is at" : "You are at"}</Eyebrow>
              <p className="text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-4xl">
                Stage {stage.n}: {stage.name}
              </p>
              <Staircase variant="mini" active={stage.n - 1} />
              <p className="text-ink/80">
                <strong className="text-ink">Next step:</strong> {stage[mode].next}
              </p>
              <div className="grid justify-items-start gap-1">
                <Link to={next.to} className={buttonVariants({ variant: "brand" })}>
                  {next.label} <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={INTRO_CALL_URL} target="_blank" rel="noopener noreferrer" className={cn(TEXT_LINK, "text-sm")}>
                  Or {INTRO_CALL_LABEL.charAt(0).toLowerCase() + INTRO_CALL_LABEL.slice(1)}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="border-t border-ink/10 pt-5">
                <SignupForm
                  list="self-check"
                  label="Get your readout by email, with the next steps for your stage"
                  button="Send my readout"
                  stage={stage.n}
                  mode={mode}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfCheck;
