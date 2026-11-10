import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { ClientCases, Testimonials, WorkedWith } from "@/components/Proof";
import SignupForm from "@/components/SignupForm";
import StagePath from "@/components/StagePath";
import { Eyebrow, ModeSwitch, PageShell, Section, SectionHead } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { offer } from "@/content/offers";
import type { Mode } from "@/content/stages";
import { usePageTitle } from "@/hooks/use-page-title";
import { YEARS } from "@/lib/links";
import { cn } from "@/lib/utils";

const OFFERS_FOR: Record<Mode, string[]> = {
  person: ["masterclass", "course", "coaching", "advisory"],
  team: ["diagnostic", "workshops", "builder-program", "keynotes"],
};

const Index = () => {
  usePageTitle(
    "AI builders, not AI spectators",
    "Dejan Krstic, independent AI product leadership coach. I take people and product teams from first steps to AI-native, one stage at a time, on their own work.",
  );
  // Links like /?for=team&stage=3#path (from the self-check result) open the path at that stage.
  const [params] = useSearchParams();
  const [mode, setMode] = useState<Mode>("person");
  const [active, setActive] = useState(0);
  useEffect(() => {
    const audience = params.get("for");
    if (audience === "team" || audience === "person") setMode(audience);
    const stage = Number(params.get("stage"));
    if (stage >= 1 && stage <= 5) setActive(stage - 1);
  }, [params]);

  return (
    <PageShell>
      {/* Hero */}
      <section className="pb-12 pt-12 md:pb-20 md:pt-24">
        <div className="container px-4 md:px-6">
          <div className="animate-fade-in">
            <Eyebrow>Independent AI product leadership coach</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(3.1rem,11vw,8.4rem)] text-ink">
              AI builders,
              <br />
              not AI <span className="text-brand">spectators.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75 md:text-xl">
              I take people and product teams from first steps to AI-native, one stage at a time, on their own work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/self-check" className={buttonVariants({ variant: "brand", size: "lg" })}>
                Find your stage
              </Link>
              <IntroCallLink variant="outline" size="lg" />
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-ink/10 pt-6">
            <Eyebrow className="basis-full">{YEARS} years building products</Eyebrow>
            <span className="font-semibold text-ink">Ex-CPO Product School</span>
            <span className="font-semibold text-ink">Spotify</span>
            <span className="font-semibold text-ink">SoundCloud</span>
          </div>
        </div>
      </section>

      {/* The path */}
      <Section id="path">
        <SectionHead
          eyebrow="The path"
          title={
            <>
              Five stages from curious to <span className="whitespace-nowrap">AI-native.</span> The same path for a
              person and for a whole team.
            </>
          }
          lead="Most AI training assumes you are already a product person, or already technical. I start where you are and teach the next step. Pick a stage to see what that step is."
        />
        <StagePath mode={mode} onModeChange={setMode} active={active} onActiveChange={setActive} />
      </Section>

      {/* Free first step */}
      <Section id="start">
        <SectionHead
          eyebrow="Start free"
          title="Your first step costs nothing."
          lead="Find your stage, build something live with me once a month, or get one build and one lesson in your inbox every two weeks."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <article className="grid content-start gap-3 rounded-3xl border border-ink/10 bg-white p-6 md:p-7">
            <h3 className="text-xl font-semibold tracking-tight">AI-readiness self-check</h3>
            <p className="text-[0.95rem] leading-relaxed text-ink/70">
              Four questions, two minutes. See your stage, or your team's, and the next step.
            </p>
            <Link
              to={`/self-check?for=${mode}`}
              className={cn(buttonVariants({ variant: "brand", size: "sm" }), "mt-2 justify-self-start")}
            >
              Take the self-check
            </Link>
          </article>
          <article className="grid content-start gap-3 rounded-3xl border border-ink/10 bg-white p-6 md:p-7">
            <h3 className="text-xl font-semibold tracking-tight">Free monthly masterclass</h3>
            <p className="text-[0.95rem] leading-relaxed text-ink/70">
              Build something real in one hour, live, with me on screen. A new problem every month.
            </p>
            <SignupForm list="masterclass" label="Get the next date" button="Send me the date" className="mt-2" />
          </article>
          <article className="grid content-start gap-3 rounded-3xl border border-ink/10 bg-white p-6 md:p-7">
            <h3 className="text-xl font-semibold tracking-tight">Newsletter</h3>
            <p className="text-[0.95rem] leading-relaxed text-ink/70">
              One build and one lesson, every two weeks. What I made, and what it taught me.
            </p>
            <SignupForm list="newsletter" label="Your email" button="Subscribe" className="mt-2" />
          </article>
        </div>
      </Section>

      {/* Offers */}
      <Section id="offers">
        <SectionHead
          eyebrow="Ways to work together"
          title="Packages with a clear outcome, not hourly sessions."
          lead="Every offer is the next step from where you are. Paid work starts with a free 20-minute intro call or a waitlist."
        >
          <div>
            <ModeSwitch mode={mode} onChange={setMode} label="Show offers for" />
          </div>
        </SectionHead>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {OFFERS_FOR[mode].map((id) => (
            <OfferCard key={id} offer={offer(id)} compact />
          ))}
        </div>
        <Link
          to="/work-with-me"
          className="mt-8 inline-flex items-center gap-1 font-semibold text-ink hover:text-brand-ink"
        >
          See every offer and price <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {/* Course */}
      <section className="bg-ink py-14 text-white md:py-24">
        <div className="container grid gap-8 px-4 md:grid-cols-[1.1fr_1fr] md:items-end md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.09em] text-white/60">The course</p>
            <h2 className="mt-4 font-display text-[clamp(2.8rem,8vw,5.5rem)] text-white">
              Spectator
              <br />
              to Builder
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="text-lg leading-relaxed text-white/80">
              Six weeks, 20 people, one real problem from your work. You leave with a prototype you have tested with
              real users and a workflow that runs without you. No code needed.
            </p>
            <p className="text-2xl font-extrabold tabular-nums">
              €990 <span className="text-base font-medium text-white/60">Founding cohort €690</span>
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/course#waitlist" className={buttonVariants({ variant: "light" })}>
                Join the waitlist
              </Link>
              <Link to="/course" className={buttonVariants({ variant: "outlineLight" })}>
                See the six weeks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <Section id="proof" className="border-t-0">
        <SectionHead
          eyebrow="Proof"
          title="From students who had never written a spec to teams shipping AI."
        />
        <WorkedWith />
        <div className="mt-8">
          <ClientCases />
        </div>
        <h3 className="mb-4 mt-12 text-xl font-semibold tracking-tight">What clients say</h3>
        <Testimonials />
      </Section>

      {/* Final CTA */}
      <Section id="contact">
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(3rem,9vw,6.5rem)] text-ink">Start where you are.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Take the self-check, or book 20 minutes with me. Tell me where you or your team are today, and I will tell
            you the next step, even if it is not with me.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <IntroCallLink size="lg" />
            <Link to="/self-check" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Find your stage
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default Index;
