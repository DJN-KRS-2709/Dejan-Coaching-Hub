import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { ClosingLine, Eyebrow, PageShell, Section, SectionHead } from "@/components/site";
import { useContent } from "@/content/useContent";
import { useT } from "@/lib/i18n";
import { usePageTitle } from "@/hooks/use-page-title";

const Speaking = () => {
  const t = useT();
  const { offer, talks: TALKS } = useContent();
  usePageTitle(
    t("Speaking", "Vorträge"),
    t(
      "Keynotes on building with AI for conferences, leadership offsites and kickoffs, followed by a live demo. In English or German. From €2,500.",
      "Keynotes über das Bauen mit KI für Konferenzen, Führungsklausuren und Kickoffs, gefolgt von einer Live-Demo. Auf Englisch oder Deutsch. Ab €2,500.",
    ),
  );
  const keynote = offer("keynotes");

  return (
    <PageShell>
      {/* Hero: text left, stage photo right on desktop; photo under the text on phones. */}
      <section className="pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="animate-fade-in">
              <Eyebrow>{t("Speaking", "Vorträge")}</Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(min(2.75rem,11.3vw),9vw,6rem)] text-ink">
                {t("Talks that end with something built on stage.", "Vorträge, die mit etwas enden, das auf der Bühne gebaut wurde.")}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
                {t(
                  "Keynotes for conferences, leadership offsites and kickoffs. A talk that makes a room want to build, followed by a live demo. In English or German.",
                  "Keynotes für Konferenzen, Führungsklausuren und Kickoffs. Ein Vortrag, nach dem ein Raum selbst bauen will, gefolgt von einer Live-Demo. Auf Englisch oder Deutsch.",
                )}
              </p>
            </div>
            <figure className="grid gap-2">
              {/* Event photo by Experience Summit (Clientology Institute). The crops frame Dejan from just
                  above the slide headline down to his belt: 4:5 on phones, 16:10 from lg up. The tighter
                  crop leaves out the event watermark, so the credit is in the caption. */}
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/speaking-stage-desktop-1000.jpg 1000w, /images/speaking-stage-desktop-1600.jpg 1600w"
                  sizes="50vw"
                  width={1600}
                  height={1000}
                />
                <img
                  src="/images/speaking-stage-phone-900.jpg"
                  srcSet="/images/speaking-stage-phone-600.jpg 600w, /images/speaking-stage-phone-900.jpg 900w"
                  sizes="100vw"
                  width={900}
                  height={1125}
                  alt={t(
                    "Dejan Krstic on stage at Experience Summit in Prague, presenting his talk Context is the work",
                    "Dejan Krstic auf der Bühne beim Experience Summit in Prag mit seinem Vortrag Context is the work",
                  )}
                  className="aspect-[4/5] h-auto w-full rounded-3xl border border-ink/10 object-cover object-center lg:aspect-[16/10]"
                />
              </picture>
              <figcaption className="text-sm text-ink/60">
                {t(
                  '"Context is the work", Experience Summit, Prague, 2026. Photo: Experience Summit by Clientology Institute.',
                  "„Context is the work“, Experience Summit, Prag, 2026. Foto: Experience Summit by Clientology Institute.",
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow={t("Talks", "Vorträge")}
          title={t("Three talks, each one adapted to your room.", "Drei Vorträge, jeder an Ihr Publikum angepasst.")}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {TALKS.map((t) => (
            <article key={t.title} className="grid content-start gap-2 border-t-2 border-ink pt-4">
              <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
              <p className="text-base text-ink/70">{t.body}</p>
              <p className="text-sm text-ink/60">{t.where}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        {/* The talks list and the photo caption already cover Prague, so no case card here. */}
        <div className="max-w-2xl">
          <OfferCard offer={keynote} />
        </div>
      </Section>

      <Section id="book">
        <div className="max-w-3xl">
          <ClosingLine>{t("Planning an event?", "Sie planen eine Veranstaltung?")}</ClosingLine>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink/75">
            {t(
              "Book 20 minutes. Tell me about your room and your date, and I will suggest the talk that fits.",
              "Buchen Sie 20 Minuten. Erzählen Sie mir von Ihrem Publikum und Ihrem Termin, und ich schlage den passenden Vortrag vor.",
            )}
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
