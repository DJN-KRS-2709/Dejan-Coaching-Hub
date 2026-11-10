import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SignupForm from "@/components/SignupForm";
import { ClosingLine, Eyebrow, PageHero, PageShell, Section, SectionHead, StageBadge, TEXT_LINK } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { COURSE_WEEKS } from "@/content/proof";
import { usePageTitle } from "@/hooks/use-page-title";
import { INTRO_CALL_URL } from "@/lib/links";

const FACTS = [
  ["Format", "One 2-hour live session a week, office hours and recordings"],
  ["Group", "20 people, so everyone gets feedback on their build"],
  ["Language", "English first, a German cohort to follow"],
  ["You need", "A laptop, a problem and about 4 hours a week. No code."],
  ["Price", "€990. Founding cohort €690."],
];

const Course = () => {
  usePageTitle(
    "Spectator to Builder",
    "A 6-week live cohort for 20 people. From a problem in your work to a tested prototype and a workflow that runs without you. €990, founding cohort €690.",
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="The course · 6-week live cohort"
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
          <SectionHead eyebrow="The facts" title="Six weeks, 20 people, one real problem." />
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
          eyebrow="The six weeks"
          title="Every week ends with something you made."
          lead="Weeks 1 to 3 meet you at stages 1 and 2. Weeks 4 to 6 take you to stage 3: building, and judging what you built."
        />
        <ol className="border-t-2 border-ink">
          {COURSE_WEEKS.map((w) => (
            <li key={w.week} className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-ink/10 py-5 md:grid-cols-[7rem_1fr]">
              <div className="grid content-start justify-items-start gap-2">
                <span className="text-2xl font-bold leading-none">W{w.week}</span>
                <StageBadge>Stage {w.stage}</StageBadge>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{w.title}</h3>
                <p className="mt-1 text-[0.95rem] text-ink/70">{w.body}</p>
                <p className="mt-3 inline-block rounded-md bg-muted px-2.5 py-1 text-sm font-semibold text-ink ring-1 ring-inset ring-ink/10">
                  You leave with: {w.leave}
                </p>
              </div>
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
