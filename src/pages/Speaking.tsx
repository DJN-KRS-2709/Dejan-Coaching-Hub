import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { CaseCard } from "@/components/Proof";
import { PageHero, PageShell, Section, SectionHead } from "@/components/site";
import { offer } from "@/content/offers";
import { CLIENT_CASES, TALKS } from "@/content/proof";
import { usePageTitle } from "@/hooks/use-page-title";

const Speaking = () => {
  usePageTitle(
    "Speaking",
    "Keynotes on building with AI for conferences, leadership offsites and kickoffs, followed by a live demo. In English or German. From €2,500.",
  );
  const keynote = { ...offer("keynotes"), cta: { kind: "intro" as const } };
  const prague = CLIENT_CASES.find((c) => c.who.startsWith("Clientology"));

  return (
    <PageShell>
      <PageHero
        eyebrow="Speaking"
        title="Talks that end with something built on stage."
        lead="Keynotes for conferences, leadership offsites and kickoffs. A talk that makes a room want to build, followed by a live demo. In English or German."
      >
        <div className="mt-8">
          <IntroCallLink size="lg" />
        </div>
      </PageHero>

      <Section>
        <SectionHead eyebrow="Talks" title="Three talks, each one adapted to your room." />
        <div className="grid gap-6 md:grid-cols-3">
          {TALKS.map((t) => (
            <article key={t.title} className="grid content-start gap-2 border-t-2 border-ink pt-4">
              <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
              <p className="text-[0.95rem] text-ink/70">{t.body}</p>
              <p className="text-sm text-ink/50">{t.where}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <OfferCard offer={keynote} />
          {prague && <CaseCard c={prague} />}
        </div>
      </Section>
    </PageShell>
  );
};

export default Speaking;
