import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type Zone = "Ambiguity" | "Clarity" | "Confidence";

const zoneStyles: Record<Zone, string> = {
  Ambiguity: "bg-muted text-ink/60",
  Clarity: "bg-blue-100 text-accent2",
  Confidence: "bg-accent2 text-white",
};

const moves: { title: string; body: string; zone: Zone }[] = [
  {
    title: "Start from a real friction",
    body: "Not a feature request. The everyday problem people actually work around.",
    zone: "Ambiguity",
  },
  {
    title: "A hypothesis you can be wrong about",
    body: "Name the riskiest assumption and a kill switch: the result that would end the bet.",
    zone: "Ambiguity",
  },
  {
    title: "A working tool, not a mockup",
    body: "Build it with AI in days, not a sprint of tickets. Then try to break it yourself.",
    zone: "Clarity",
  },
  {
    title: "Earn the right to ship",
    body: "Name the real risk (compliance, safety, brand), add the guardrail and prove it with evals.",
    zone: "Clarity",
  },
  {
    title: "Into real hands",
    body: "Five real customers or one skeptical exec. What they do is your evidence, and your next hypothesis.",
    zone: "Confidence",
  },
];

const bands = [
  { name: "Basics", stages: "Stages 01 and 02", stuck: "Stuck in old ways of working.", good: "One way of doing product, with AI in the daily work." },
  { name: "Advanced", stages: "Stages 03 and 04", stuck: "Building, but not at scale yet.", good: "Prototypes every week, and agents doing real work." },
  { name: "Expert", stages: "Stage 05", stuck: "Answering for AI in production.", good: "AI you can measure, explain and defend." },
];

const stages = [
  {
    name: "Building the foundation",
    tagline: "One way of doing product, across every team.",
    today: "Every team does product its own way, and waits on approvals.",
    next: "Small teams own the problem from discovery to launch.",
    outcome: "One way to find problems, prioritize and ship.",
    focus: ["Find the problem behind the workaround", "Turn metrics into testable hypotheses", "Sequence the roadmap", "Positioning, pricing and launch", "Pick the right experiment"],
  },
  {
    name: "Using AI reactively",
    tagline: "From chat on the side to AI in the work.",
    today: "AI is a side chat, with one-off prompts nobody can rerun.",
    next: "AI is in the daily work, and prompts become reusable skills.",
    outcome: "AI in the daily work, and features worth keeping.",
    focus: ["Save prompts as reusable skills", "Prototype the idea worth building", "Write an AI PRD engineers can build from", "Score AI output with a rubric", "Prove the feature is worth keeping"],
  },
  {
    name: "Building with AI",
    tagline: "A prototype every week, not a PRD every month.",
    today: "Ideas wait a month for a static PRD.",
    next: "PMs bring a working prototype, not a document.",
    outcome: "A working prototype every week.",
    focus: ["A working prototype in one session", "Prompts that give stable output", "From prototype to production spec", "Real data and a live deploy", "Workflows that run without you"],
  },
  {
    name: "Running on agents",
    tagline: "Agents doing real work, inside bounds you set.",
    today: "Nobody has decided what an agent may do, see or change.",
    next: "Agents do real work, and small teams review and ship it.",
    outcome: "Agents doing real work, with autonomy widened as trust is earned.",
    focus: ["Decide what an agent may do", "Turn a prompt into a worker", "Choose what each step may see", "Bound the agent and check its path", "Widen autonomy as trust is earned"],
  },
  {
    name: "AI-native",
    tagline: "AI in production, measured and trusted.",
    today: "Something is live and failing, and nobody can explain why.",
    next: "Evals are built into how you ship, and leaders back AI bets with evidence.",
    outcome: "AI that is measured, trusted and owned by leaders.",
    focus: ["Define what good looks like", "Eval suites and a release gate", "Evals on live traffic", "AI cost against price", "The AI bet, ready for the board"],
  },
];

const process = [
  { title: "Find your stage", body: "We start with where you really are, not where the org chart says. Blind spots flagged, no judgment." },
  { title: "Agree on success", body: "You, or your leaders, set the bar. We write down what good looks like before we start." },
  { title: "Practice on your own work", body: "Your products, your tools, your data. No toy examples." },
  { title: "Review what changed", body: "A candid readout: what moved, and your next step on the curve." },
];

// The five steps of the curve: bar height on desktop, bar width on mobile.
const steps = [
  { short: "No shared way of doing product yet.", height: "60px", width: "20%" },
  { short: "AI is a chat tool for one-off tasks.", height: "115px", width: "40%" },
  { short: "A prototype every week, not a PRD every month.", height: "175px", width: "60%" },
  { short: "Agents doing real work, inside bounds you set.", height: "235px", width: "80%" },
  { short: "AI in production, measured and trusted.", height: "235px", width: "100%" },
];

const Eyebrow = ({ children, dark = false }: { children: string; dark?: boolean }) => (
  <span
    className={`inline-block rounded-full px-4 py-1.5 text-xs font-medium mb-8 ${
      dark ? "bg-white text-ink" : "bg-ink text-white"
    }`}
  >
    {children}
  </span>
);

const Frameworks = () => (
  <div className="flex min-h-screen flex-col bg-canvas text-ink">
    <Navbar />
    <main className="flex-1 pt-16">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl animate-fade-in">
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-6">Frameworks</p>
            <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] text-ink">
              From ambiguity to clarity
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink/60 max-w-2xl leading-relaxed">
              One line runs through everything I teach:{" "}
              <span className="text-accent2 font-medium">the Confidence Line</span>. Whether you are a PM
              finding your feet or a leader taking a whole organization to AI-native, I meet you where
              you are and help you at every step. Every stage ends in an outcome you can see.
            </p>
          </div>
        </div>
      </section>

      {/* The Confidence Line */}
      <section className="py-16 md:py-24 border-t border-ink/10">
        <div className="container px-4 md:px-6">
          <Eyebrow>The Confidence Line</Eyebrow>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] text-ink max-w-4xl">
            Building stopped being the bottleneck. Believing did.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base md:text-lg text-ink/60 leading-relaxed">
            <p>
              AI can turn a spec into working software in minutes. So the scarce skill in product work
              moved. It is no longer "can we build it?" It is "do we know we should?"
            </p>
            <p>
              The Confidence Line is the distance between gut feel and evidence. My job is to move you
              along it, from ambiguity to clarity to confidence, one honest step at a time.
            </p>
          </div>

          <div className="mt-14 rounded-3xl bg-white border border-ink/10 p-6 md:p-10">
            {/* Ends and zones of the line */}
            <div className="hidden md:grid grid-cols-5 gap-4 mb-4 text-xs font-medium uppercase tracking-widest">
              <span className="col-span-2 text-ink/40">Ambiguity · gut feel</span>
              <span className="col-span-2 text-accent2/80 text-center">Clarity</span>
              <span className="text-accent2 text-right">Confidence · evidence</span>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="hidden md:block absolute left-0 right-0 top-[18px] h-1.5 rounded-full bg-gradient-to-r from-ink/15 via-accent2/50 to-accent2"
              />
              <ol className="relative grid md:grid-cols-5 gap-8 md:gap-4">
                {moves.map((move, i) => (
                  <li key={move.title} className="flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-white font-display text-base ${zoneStyles[move.zone]}`}
                      >
                        0{i + 1}
                      </span>
                      <span className="md:hidden text-xs font-medium uppercase tracking-widest text-ink/40">
                        {move.zone}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight mb-2">{move.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{move.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <blockquote className="mt-10 max-w-3xl font-display text-2xl md:text-4xl text-ink leading-tight">
            "The hypothesis is the product. The code is just the test."
          </blockquote>
        </div>
      </section>

      {/* The maturity curve */}
      <section className="py-16 md:py-24 border-t border-ink/10">
        <div className="container px-4 md:px-6">
          <Eyebrow>The maturity curve</Eyebrow>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] text-ink max-w-4xl">
            Five stages to AI-native. One clear outcome each.
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-ink/60 leading-relaxed">
            The same path works for one person and for a whole organization. Find your stage, then take
            the next step, with no skipping to the top because a room likes the word AI. At every stage
            the Confidence Line repeats: a new kind of ambiguity, the same path to clarity.
          </p>

          {/* Curve: five rising steps */}
          <ol className="mt-14 grid md:grid-cols-5 gap-6 md:gap-4" aria-label="Five stages to AI-native">
            {stages.map((stage, i) => (
              <li key={stage.name} className="flex flex-col">
                <div className="flex md:h-[235px] md:items-end">
                  <div
                    aria-hidden="true"
                    className={`h-4 md:h-[var(--bar-h)] w-[var(--bar-w)] md:w-full rounded-full md:rounded-2xl ${
                      i === steps.length - 1
                        ? "bg-gradient-to-br from-accent2 to-indigo-700"
                        : "bg-blue-100"
                    }`}
                    style={{ "--bar-h": steps[i].height, "--bar-w": steps[i].width } as CSSProperties}
                  />
                </div>
                <span className="mt-4 text-xs font-medium tracking-widest text-accent2">0{i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{stage.name}</h3>
                <p className="mt-1 text-sm text-ink/60 leading-relaxed">{steps[i].short}</p>
              </li>
            ))}
          </ol>

          {/* Bands */}
          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {bands.map((band) => (
              <div key={band.name} className="rounded-3xl bg-white border border-ink/10 p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-3">{band.stages}</p>
                <h3 className="font-display text-3xl mb-4">{band.name}</h3>
                <p className="text-sm text-ink/50 mb-2">{band.stuck}</p>
                <p className="text-base font-medium text-ink">{band.good}</p>
              </div>
            ))}
          </div>

          {/* Stages */}
          <div className="mt-12 divide-y divide-ink/10 border-t border-b border-ink/10">
            {stages.map((stage, i) => (
              <div key={stage.name} className="grid lg:grid-cols-12 gap-6 py-10">
                <div className="lg:col-span-4">
                  <span className="font-display text-2xl text-accent2">0{i + 1}</span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">{stage.name}</h3>
                  <p className="mt-2 text-base text-ink/60">{stage.tagline}</p>
                </div>
                <div className="lg:col-span-8">
                  <dl className="grid sm:grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-ink/[0.03] p-5">
                      <dt className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-2">Today</dt>
                      <dd className="text-sm text-ink/70 leading-relaxed">{stage.today}</dd>
                    </div>
                    <div className="rounded-2xl bg-ink/[0.03] p-5">
                      <dt className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-2">Next</dt>
                      <dd className="text-sm text-ink/70 leading-relaxed">{stage.next}</dd>
                    </div>
                    <div className="rounded-2xl bg-accent2/10 p-5">
                      <dt className="text-xs font-medium uppercase tracking-widest text-accent2 mb-2">Outcome</dt>
                      <dd className="text-sm font-medium text-ink leading-relaxed">{stage.outcome}</dd>
                    </div>
                  </dl>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`What we work on in ${stage.name}`}>
                    {stage.focus.map((item) => (
                      <li key={item} className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs text-ink/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 font-display text-2xl md:text-4xl text-ink">
            Everyone becomes a builder, one stage at a time.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="py-16 md:py-24 border-t border-ink/10">
        <div className="container px-4 md:px-6">
          <Eyebrow>How I work</Eyebrow>
          <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] text-ink max-w-4xl">
            I meet you where you are. Then I help you at every step.
          </h2>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, i) => (
              <li key={step.title} className="rounded-3xl bg-white border border-ink/10 p-6 md:p-8">
                <span className="font-display text-2xl text-ink/25 block mb-4">0{i + 1}</span>
                <h3 className="text-xl font-semibold tracking-tight mb-2">{step.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-ink/10">
        <div className="container px-4 md:px-6">
          <div className="rounded-3xl bg-ink text-white p-8 md:p-14">
            <Eyebrow dark>Your next step</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl mb-4 max-w-3xl">Where are you on the curve?</h2>
            <p className="text-white/60 mb-8 max-w-xl">
              Book a session. We find your stage, agree what good looks like and take the next step
              together.
            </p>
            <Link to="/booking">
              <Button variant="secondary" size="lg">Book a Coaching Session</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Frameworks;
