import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IntroCallLink from "@/components/IntroCallLink";
import { Staircase } from "@/components/StagePath";
import { Eyebrow, ModeSwitch, TEXT_LINK } from "@/components/site";
import { scoreStage } from "@/content/stages";
import { useContent } from "@/content/useContent";
import { useLang, useLocalize } from "@/lib/i18n";
import type { Mode } from "@/content/stages";
import { cn } from "@/lib/utils";

interface Props {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

// The AI-readiness self-check: four questions, scored in the browser. Nothing is sent or stored.
const SelfCheck = ({ mode, onModeChange }: Props) => {
  const { questions: QUESTIONS, stages: STAGES } = useContent();
  const de = useLang() === "de";
  const lp = useLocalize();
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
        <ModeSwitch mode={mode} onChange={onModeChange} label={de ? "Selbstcheck für" : "Take the check for"} />
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_1fr]">
        <form className="grid min-w-0 gap-4" aria-label={de ? "Fragen zum Selbstcheck" : "Self-check questions"} onSubmit={(e) => e.preventDefault()}>
          {/* Slim progress bar, pinned under the header on phones. */}
          <div className="sticky top-[65px] z-30 bg-canvas/95 py-3 backdrop-blur lg:static lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <div className="mb-1.5 flex justify-between text-xs font-semibold text-ink/60">
              <span>{answered === 0 ? (de ? "Vier Fragen" : "Four questions") : de ? "Ihr Fortschritt" : "Your progress"}</span>
              <span aria-live="polite">{answered > 0 && `${answered}/${questions.length}`}</span>
            </div>
            <div
              role="progressbar"
              aria-label={de ? "Beantwortete Fragen" : "Questions answered"}
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
            <div key={`${mode}-${qi}`} className="min-w-0 rounded-3xl border border-ink/10 bg-white px-4 pb-4 pt-5 md:px-5">
              <fieldset className="m-0 min-w-0 border-0 p-0">
              <legend className="max-w-full px-2 text-base [overflow-wrap:anywhere] [hyphens:auto] font-bold leading-snug text-ink">
                {qi + 1}. {q.q}
              </legend>
              <div className="mt-2 grid gap-0.5">
                {q.a.map((a, ai) => {
                  const id = `q-${mode}-${qi}-${ai}`;
                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex min-h-[44px] cursor-pointer items-start gap-3 rounded-xl px-2 py-2.5 text-base leading-snug text-ink/80 hover:bg-muted"
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
                      <span className="min-w-0 [overflow-wrap:anywhere] [hyphens:auto]">{a}</span>
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
              <Eyebrow>{de ? "Ihre Stufe" : "Your stage"}</Eyebrow>
              <p className="text-2xl font-bold tracking-tight text-ink">
                {de ? "Hier erscheint Ihre Stufe" : "Your stage appears here"}
              </p>
              <Staircase variant="empty" />
              <p className="text-sm text-ink/60">
                {de
                  ? `Beantworten Sie alle vier Fragen, dann sehen Sie, wo ${mode === "team" ? "Ihr Team steht" : "Sie stehen"} und wie der nächste Schritt aussieht.`
                  : `Answer all four questions to see where ${mode === "team" ? "your team is" : "you are"} and what the next step looks like.`}
              </p>
            </>
          ) : (
            <>
              <Eyebrow>
                {mode === "team" ? (de ? "Ihr Team steht auf" : "Your team is at") : de ? "Sie stehen auf" : "You are at"}
              </Eyebrow>
              <p className="text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-4xl">
                {de ? "Stufe" : "Stage"} {stage.n}: {stage.name}
              </p>
              <Staircase variant="mini" active={stage.n - 1} />
              <p className="text-ink/80">
                <strong className="text-ink">{de ? "Nächster Schritt:" : "Next step:"}</strong> {stage[mode].next}
              </p>
              <div className="grid justify-items-start gap-1">
                <IntroCallLink />
                <Link to={lp(next.to)} className={cn(TEXT_LINK, "text-sm")}>
                  {de ? `Mehr zu ${next.label}` : `See ${next.label}`} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfCheck;
