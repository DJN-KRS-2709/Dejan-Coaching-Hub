import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { CaseCard } from "@/components/Proof";
import { ClosingLine, Eyebrow, PageShell, Section, SectionHead } from "@/components/site";
import { offer } from "@/content/offers";
import { CLIENT_CASES, TALKS } from "@/content/proof";
import { usePageTitle } from "@/hooks/use-page-title";

const Speaking = () => {
  usePageTitle(
    "Speaking",
    "Keynotes on building with AI for conferences, leadership offsites and kickoffs, followed by a live demo. In English or German. From €2,500.",
  );
  const keynote = { ...offer("keynotes"), cta: { kind: "link" as const, label: "How to book a talk", to: "/speaking#book" } };
  const prague = CLIENT_CASES.find((c) => c.who.startsWith("Clientology"));

  return (
    <PageShell>
      {/* Hero: text left, stage photo right on desktop; photo under the text on phones. */}
      <section className="pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="animate-fade-in">
              <Eyebrow>Speaking</Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(2.75rem,9vw,6rem)] text-ink">
                Talks that end with something built on stage.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
                Keynotes for conferences, leadership offsites and kickoffs. A talk that makes a room want to build,
                followed by a live demo. In English or German.
              </p>
            </div>
            <figure className="grid gap-2">
              {/* Event photo by Experience Summit (Clientology Institute); their watermark stays on. */}
              <img
                src="/images/speaking-experience-summit-1600.jpg"
                srcSet="/images/speaking-experience-summit-900.jpg 900w, /images/speaking-experience-summit-1600.jpg 1600w"
                sizes="(min-width: 1024px) 50vw, 100vw"
                width={1600}
                height={1284}
                alt="Dejan Krstic on stage at Experience Summit in Prague, presenting his talk Context is the work"
                className="h-auto w-full rounded-3xl border border-ink/10"
              />
              <figcaption className="text-sm text-ink/50">"Context is the work", Experience Summit, Prague, 2026</figcaption>
            </figure>
          </div>
        </div>
      </section>

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

      <Section id="book">
        <div className="max-w-3xl">
          <ClosingLine>Planning an event?</ClosingLine>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            Book 20 minutes. Tell me about your room and your date, and I will suggest the talk that fits.
          </p>
          <div className="mt-8">
            <IntroCallLink size="lg" />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default Speaking;
