import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { ClosingLine, PageHero, PageShell, Section, SectionHead } from "@/components/site";
import { offer } from "@/content/offers";
import type { Offer } from "@/content/offers";
import { usePageTitle } from "@/hooks/use-page-title";

// Gulf / Middle East: English only, no German version. The same 1:1 coaching and team offers
// as /work-with-me, with the same prices (from src/content/offers.ts), delivered remotely in
// English. No client names and no claims beyond the offers themselves.

// Workshops are remote and in English here, so the card says so instead of "on site in DACH".
const GULF_BODY: Record<string, string> = {
  workshops: "A shared language for product and AI, or a first hands-on build on your own backlog. Remote, in English.",
};

const gulfOffer = (id: string): Offer => {
  const o = offer(id);
  return GULF_BODY[id] ? { ...o, body: GULF_BODY[id] } : o;
};

const FOR_YOU = ["coaching"];
const FOR_TEAMS = ["diagnostic", "workshops", "builder-program"];

const STEPS = [
  {
    title: "Free 20-min intro call",
    body: "Tell me where you or your team are today. We look at what fits and find session times that work for your week.",
  },
  {
    title: "Remote and live, in English",
    body: "Every session is live on video, in English, and runs on your real work: your problems, your backlog, your product.",
  },
  {
    title: "Fixed price, paid by invoice",
    body: "The prices below are the same as on every offer, in euros. Teams pay by invoice.",
  },
];

const Gulf = () => {
  usePageTitle(
    "Gulf / Middle East",
    "1:1 AI product coaching for leaders and fixed-price AI training for product teams in the Gulf. Delivered remotely, live and in English, inside your working day.",
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="Gulf / Middle East"
        title="AI coaching and team training, for the Gulf."
        lead="1:1 coaching for product leaders and fixed-price training for product teams in the Gulf. Delivered remotely, live and in English, inside your working day."
      >
        <div className="mt-8">
          <IntroCallLink size="lg" />
        </div>
      </PageHero>

      <Section>
        <SectionHead
          eyebrow="Time zones"
          title="Your working day, not mine."
          lead="Gulf time (UTC+4) is three hours ahead of Berlin in winter and two hours ahead in summer. A normal Berlin working day overlaps with your late morning and afternoon. We pick session times together in the intro call."
        />
      </Section>

      <Section id="leaders" className="border-t-0 pt-0 md:pt-0">
        <div className="mb-6 grid max-w-2xl gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[2.25rem]">For product leaders</h2>
          <p className="text-base text-ink/70">
            For leaders who already build with AI and want to take their people with them.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FOR_YOU.map((id) => (
            <OfferCard key={id} offer={gulfOffer(id)} compact />
          ))}
        </div>
      </Section>

      <Section id="teams">
        <div className="mb-6 grid max-w-2xl gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[2.25rem]">For product teams</h2>
          <p className="text-base text-ink/70">
            Fixed prices, paid by invoice. Every team engagement starts with a free intro call.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FOR_TEAMS.map((id) => (
            <OfferCard key={id} offer={gulfOffer(id)} compact />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="How it works" title="Three steps, all remote." />
        <ol className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="grid content-start gap-2 border-t-2 border-ink pt-4">
              <span className="text-2xl font-bold leading-none text-ink">{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="max-w-[48ch] text-base text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <ClosingLine>Leading a team in the Gulf?</ClosingLine>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink/75">
            Book 20 minutes. Tell me where your team is today, and I will tell you the next step.
          </p>
          <div className="mt-8">
            <IntroCallLink size="lg" />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default Gulf;
