import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SignupForm from "@/components/SignupForm";
import { ClosingLine, Eyebrow, PageHero, PageShell, Section, SectionHead, StageBadge, TEXT_LINK } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { COURSE_SESSIONS } from "@/content/proof";
import { usePageTitle } from "@/hooks/use-page-title";
import { INTRO_CALL_URL } from "@/lib/links";

const FACTS = [
  ["Format", "4 live sessions of 90 minutes over 3 weeks: 6 live hours"],
  ["Schedule", "Week 1: one session. Week 2: one session. Week 3: two sessions, the last one is demo day."],
  ["When", "Daytime sessions, Berlin time. No late evenings."],
  ["Group", "Max 20 people, so everyone gets feedback on their build"],
  ["Language", "English first, a German cohort to follow"],
  ["You need", "A laptop, a problem and about 2 hours a week for your own project. No code."],
  ["Price", "€990. Founding cohort €690."],
];

const Course = () => {
  usePageTitle(
    "Spectator to Builder",
    "A 3-week live cohort for up to 20 people: 4 sessions, 6 live hours. From a problem in your work to a prototype you have tested with real users. €990, founding cohort €690.",
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="The course · 3-week live cohort · 6 live hours"
        title={
          <>
            Spectator
            <br />
            to Builder
          </>
        }
        lead="For anyone who works on products or wants to: product managers, product owners, designers, analysts and people switching careers. You bring one real problem from your work. You leave with something built, tested and running."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#waitlist" className={buttonVariants({ variant: "brand", size: "lg" })}>
            Join the waitlist
          </a>
          <Link to="/self-check" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Is it for me? Take the self-check
          </Link>
        </div>
      </PageHero>

      <Section>
        <div className="max-w-3xl">
          <SectionHead eyebrow="The facts" title="Three weeks, 6 live hours, one real problem." />
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
          eyebrow="The three weeks"
          title="Every session ends with something you made."
          lead="Week 1 meets you at stage 1 and week 2 at stage 2. Week 3 takes you to stage 3: you build, judge what you built, and show it on demo day."
        />
        <ol className="border-t-2 border-ink">
          {[1, 2, 3].map((week) => (
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
                    <p className="text-[0.95rem] text-ink/70">{s.body}</p>
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

      {/* Close: the founding cohort waitlist */}
      <Section id="waitlist" className="scroll-mt-4">
        <div className="max-w-xl">
          <ClosingLine>Join the founding cohort.</ClosingLine>
          <div className="mt-8 rounded-3xl border border-ink bg-white p-6 md:p-8">
            <Eyebrow>Founding cohort waitlist</Eyebrow>
            <p className="mt-3 text-2xl font-extrabold tabular-nums tracking-tight">
              €690 <span className="text-base font-medium text-ink/50 line-through">€990</span>
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
              The first cohort pays €690 instead of €990. The waitlist hears about dates first.
            </p>
            <SignupForm list="cohort-waitlist" label="Your email" button="Join the waitlist" primary className="mt-5" />
          </div>
          <a href={INTRO_CALL_URL} target="_blank" rel="noopener noreferrer" className={`${TEXT_LINK} mt-4`}>
            Questions first? Book a free 20-min intro call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </PageShell>
  );
};

export default Course;
