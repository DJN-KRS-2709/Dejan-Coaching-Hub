import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IntroCallLink from "@/components/IntroCallLink";
import { ClosingLine, Eyebrow, PageHero, PageShell, Section, SectionHead, StageBadge, TEXT_LINK } from "@/components/site";
import { COURSE_PRICE, COURSE_PRICE_LINE, COURSE_PRICE_NOTE } from "@/content/offers";
import { COURSE_SESSIONS } from "@/content/proof";
import { usePageTitle } from "@/hooks/use-page-title";

const FACTS = [
  ["For", "Entry level. You know some product management but are not confident with AI yet, or you want to become an AI product person."],
  ["Format", "4 live sessions of 2 hours over 2 weeks: 8 live hours"],
  ["Schedule", "Two sessions a week. Week 1: your idea, the spec and the build. Week 2: deploy, test and show."],
  ["When", "Daytime sessions, Berlin time. No late evenings."],
  ["Group", "Max 20 people, so everyone gets feedback on their build"],
  ["Language", "English first, a German cohort to follow"],
  ["You need", "A laptop and one real problem from your work. No coding experience."],
  ["Price", COURSE_PRICE_LINE],
];

const PARTS = [
  {
    title: "AI product management basics",
    body: "How AI works, what is worth building, and how to write the spec you build from.",
  },
  {
    title: "Vibe coding to a working product",
    body: "Build from your spec with AI, then deploy it, so you have a working product at a link you can share.",
  },
  {
    title: "Light evals",
    body: "Check your product against a simple rubric, so you know whether it does its job before you show it.",
  },
];

const Course = () => {
  usePageTitle(
    "Prompt to Product",
    "Ship a real AI product in 14 days. A 2-week live cohort for up to 20 people: 4 sessions of 2 hours, 8 live hours. AI product management basics, vibe coding to a working, deployed product, and light evals. $700 early bird until 14 days before the start, $795 after that.",
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="Prompt to Product · 2-week live cohort · 8 live hours"
        title="Ship a real AI product in 14 days"
        lead="In 14 days from idea to your own AI product."
      >
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
          For people with some product management knowledge who are not confident with AI yet, and for anyone who
          wants to become an AI product person. You bring one real problem from your work.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
          <IntroCallLink size="lg" />
          <Link to="/self-check" className={TEXT_LINK}>
            Is it for me? Take the self-check <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <Section>
        <SectionHead eyebrow="What you learn" title="Three parts, one product of your own." />
        <ol className="grid gap-4 md:grid-cols-3">
          {PARTS.map((p, i) => (
            <li key={p.title} className="grid content-start gap-2 border-t-2 border-ink pt-4">
              <span className="text-2xl font-bold leading-none text-ink">{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="text-base text-ink/70">{p.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-ink/60">Not covered: AI agents.</p>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <SectionHead eyebrow="The facts" title="Two weeks, 8 live hours, one real problem." />
          <dl className="grid gap-0">
            {FACTS.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-t border-ink/10 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="font-semibold text-ink">{k}</dt>
                <dd className="text-ink/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="The two weeks"
          title="Every session ends with something you made."
          lead="Week 1: your idea, the spec and the build. Week 2: deploy, test and show. You put your product live with a real AI model, check it with evals and demo it to the group."
        />
        <ol className="border-t-2 border-ink">
          {[1, 2].map((week) => (
            <li key={week} className="grid gap-3 border-b border-ink/10 py-6 md:grid-cols-[8rem_1fr] md:gap-4">
              <span className="text-2xl font-bold leading-none">Week {week}</span>
              <ol className="grid gap-6">
                {COURSE_SESSIONS.filter((s) => s.week === week).map((s) => (
                  <li key={s.session} className="grid gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-ink/60">Session {s.session}</span>
                      <StageBadge>Stage {s.stage}</StageBadge>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="max-w-[65ch] text-base text-ink/70">{s.body}</p>
                    <p className="mt-2 justify-self-start rounded-md bg-muted px-2.5 py-1 text-sm font-semibold text-ink ring-1 ring-inset ring-ink/10">
                      You leave with: {s.leave}
                    </p>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Section>

      {/* Close: one action, the free intro call */}
      <Section id="join" className="scroll-mt-4">
        <div className="max-w-xl">
          <ClosingLine>Want a seat?</ClosingLine>
          <div className="mt-8 rounded-3xl border border-ink bg-white p-6 md:p-8">
            <Eyebrow>Price</Eyebrow>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3 tabular-nums tracking-tight">
              <span className="text-4xl font-extrabold">{COURSE_PRICE}</span>
              <span className="text-base font-medium text-ink/70">{COURSE_PRICE_NOTE}</span>
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Book a free 20-minute intro call. We check the course fits your work, and I tell you the next dates.
            </p>
            <IntroCallLink size="lg" className="mt-5" />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default Course;
