import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { ClosingLine, PageHero, PageShell, Section, SectionHead } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { OFFER_GROUPS, offersIn } from "@/content/offers";
import type { OfferGroup } from "@/content/offers";
import { PRINCIPLES } from "@/content/proof";
import { usePageTitle } from "@/hooks/use-page-title";
import { cn } from "@/lib/utils";

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

const TABS: { id: OfferGroup; label: string }[] = [
  { id: "you", label: "You" },
  { id: "team", label: "Team" },
  { id: "leaders", label: "Leaders" },
  { id: "speaking", label: "Talks" },
];

// Sections sit below the fixed header and the sticky tabs, so they need extra room on top.
const UNDER_TABS = "scroll-mt-16";

const group = (id: OfferGroup) => OFFER_GROUPS.find((g) => g.id === id)!;

const GroupHead = ({ id }: { id: OfferGroup }) => (
  <div className="mb-6 grid max-w-2xl gap-2">
    <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[2.25rem]">{group(id).title}</h2>
    <p className="text-base text-ink/70">{group(id).lead}</p>
  </div>
);

// Segmented tabs that stay under the header and jump to each group of offers.
const OfferTabs = () => {
  const [active, setActive] = useState<OfferGroup>("you");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: OfferGroup = "you";
      for (const tab of TABS) {
        const el = document.getElementById(tab.id);
        if (el && el.getBoundingClientRect().top <= 170) current = tab.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="sticky top-[65px] z-40 border-y border-ink/10 bg-canvas/95 backdrop-blur-md">
      <div className="container px-4 py-2 md:px-6">
        <nav aria-label="Offers" className="flex w-full gap-1 rounded-full border border-ink/10 bg-muted p-1 sm:inline-flex sm:w-auto">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              aria-current={active === tab.id ? "location" : undefined}
              className={cn(
                "flex min-h-[44px] flex-1 items-center justify-center rounded-full px-4 text-sm font-semibold transition-colors sm:flex-none sm:px-5",
                active === tab.id ? "bg-ink text-white" : "text-ink/70 hover:text-ink",
              )}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

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
        <div className="mt-8">
          <Link to="/self-check" className={buttonVariants({ variant: "brand", size: "lg" })}>
            Find your stage
          </Link>
        </div>
      </PageHero>

      <OfferTabs />

      <Section id="you" className={cn(UNDER_TABS, "border-t-0")}>
        <GroupHead id="you" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offersIn("you").map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </Section>

      <Section id="how-it-works" className={UNDER_TABS}>
        <SectionHead eyebrow="How it works" title="Four steps, no surprises." />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="grid content-start gap-2 border-t-2 border-ink pt-4">
              <span className="text-2xl font-bold leading-none text-ink">{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-[0.95rem] text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="team" className={UNDER_TABS}>
        <GroupHead id="team" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offersIn("team").map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </Section>

      <Section id="leaders" className={UNDER_TABS}>
        <GroupHead id="leaders" />
        <div className="max-w-2xl">
          {offersIn("leaders").map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </Section>

      <Section id="speaking" className={UNDER_TABS}>
        <GroupHead id="speaking" />
        <div className="max-w-2xl">
          {offersIn("speaking").map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="How I teach" title="Four rules that run through everything." />
        <div className="grid border-t-2 border-ink md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.title}
              className={`grid gap-2 border-b border-ink/10 py-6 md:py-7 ${i % 2 === 0 ? "md:border-r md:pr-8" : "md:pl-8"}`}
            >
              <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{p.title}</h3>
              <p className="text-[0.95rem] text-ink/70">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <ClosingLine>Not sure which fits?</ClosingLine>
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
