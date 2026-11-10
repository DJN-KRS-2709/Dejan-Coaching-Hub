import { Link } from "react-router-dom";
import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { PageHero, PageShell, Section, SectionHead } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { OFFER_GROUPS, offersIn } from "@/content/offers";
import { PRINCIPLES } from "@/content/proof";
import { usePageTitle } from "@/hooks/use-page-title";

const STEPS = [
  {
    title: "Free 20-min intro call",
    body: "Tell me where you or your team are. I will tell you the next step, even if it is not with me.",
  },
  {
    title: "A one-page proposal",
    body: "The outcome, the format and a fixed price. Teams pay by invoice.",
  },
  {
    title: "Work on your real work",
    body: "Every session runs on your problems, your backlog and your product.",
  },
  {
    title: "Your next stage",
    body: "We finish with what changed, and what the next step is.",
  },
];

const group = (id: string) => OFFER_GROUPS.find((g) => g.id === id)!;

const GroupHead = ({ id }: { id: string }) => (
  <div className="mb-6 grid max-w-2xl gap-2">
    <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[2.25rem]">{group(id).title}</h2>
    <p className="text-base text-ink/70">{group(id).lead}</p>
  </div>
);

const WorkWithMe = () => {
  usePageTitle(
    "Work with me",
    "Packages, not hourly sessions: a free masterclass, the Spectator to Builder course, 1:1 coaching, team diagnostics, workshops, the Builder program, advisory and keynotes.",
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="Work with me"
        title="Packages, not hourly sessions."
        lead="Every offer is the next step from where you or your team are today. Fixed prices. Paid work starts with a free 20-minute intro call, so we both know it fits."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <IntroCallLink size="lg" />
          <Link to="/self-check" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Find your stage
          </Link>
        </div>
      </PageHero>

      <Section id="you">
        <GroupHead id="you" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offersIn("you").map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </Section>

      <Section id="team">
        <GroupHead id="team" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offersIn("team").map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </Section>

      <Section id="leaders">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-6">
          <div>
            <GroupHead id="leaders" />
            {offersIn("leaders").map((o) => (
              <OfferCard key={o.id} offer={o} />
            ))}
          </div>
          <div id="speaking" className="scroll-mt-24">
            <GroupHead id="speaking" />
            {offersIn("speaking").map((o) => (
              <OfferCard key={o.id} offer={o} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="How it works" title="Four steps, no surprises." />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="grid content-start gap-2 border-t-2 border-ink pt-4">
              <span className="font-display text-3xl leading-none text-brand">{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-[0.95rem] text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead eyebrow="How I teach" title="Four rules that run through everything." />
        <div className="grid border-t-2 border-ink md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.title}
              className={`grid gap-2 border-b border-ink/10 py-6 md:py-7 ${i % 2 === 0 ? "md:border-r md:pr-8" : "md:pl-8"}`}
            >
              <p className="font-display text-3xl md:text-4xl">{p.title}</p>
              <p className="text-[0.95rem] text-ink/70">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)]">Not sure which fits?</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            Book 20 minutes. Tell me where you are, and I will tell you the next step.
          </p>
          <div className="mt-8">
            <IntroCallLink size="lg" />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default WorkWithMe;
