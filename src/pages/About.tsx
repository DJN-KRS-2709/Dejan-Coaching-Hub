import IntroCallLink from "@/components/IntroCallLink";
import { CaseCard, WorkedWith } from "@/components/Proof";
import { ClosingLine, Eyebrow, PageShell, Section, SectionHead } from "@/components/site";
import { useContent } from "@/content/useContent";
import { useLang, useT } from "@/lib/i18n";
import type { T } from "@/lib/i18n";
import { usePageTitle } from "@/hooks/use-page-title";
import { SHORT_BIO as SHORT_BIO_EN, SHORT_BIO_DE, YEARS } from "@/lib/links";

const career = (t: T) => [
  { org: "Dejan Krstic", role: "AI product leadership coach", now: true },
  { org: "Product School", role: t("Ex-CPO, 2026. Instructor and speaker before that.", "Ex-CPO, 2026. Davor Dozent und Speaker.") },
  {
    org: "Spotify",
    role: t(
      "Group Product Manager, Creator and Enterprise Payouts, until 2026",
      "Group Product Manager, Creator and Enterprise Payouts, bis 2026",
    ),
  },
  { org: "SoundCloud", role: "Lead Product Manager, Insights and Royalties" },
  { org: "BMG", role: "Director of Business Analysis" },
  {
    org: "Universal Music",
    role: t(
      "Built the infrastructure and products that ship audio to streaming services.",
      "Hat die Infrastruktur und die Produkte aufgebaut, über die Musik an Streamingdienste ausgeliefert wird.",
    ),
  },
];

const bmg = (t: T) => ({
  who: "BMG · Director of Business Analysis",
  title: t("Royalty systems", "Royalty-Systeme"),
  body: t(
    "Led the teams behind royalty systems and technical services, connecting technology, rights and finance in one of the most complex value chains in music.",
    "Leitete die Teams für Royalty-Systeme und technische Services, an der Schnittstelle von Technologie, Rechten und Finanzen, in einer der komplexesten Wertschöpfungsketten der Musikbranche.",
  ),
});

const About = () => {
  const t = useT();
  const de = useLang() === "de";
  const { backgroundCases: BACKGROUND_CASES, govtech: GOVTECH_CASE } = useContent();
  const SHORT_BIO = de ? SHORT_BIO_DE : SHORT_BIO_EN;
  const CAREER = career(t);
  const BMG = bmg(t);
  usePageTitle(t("About", "Über mich"), `Dejan Krstic, AI product leadership coach. ${SHORT_BIO}`);

  return (
    <PageShell>
      <section className="pb-12 pt-12 md:pb-20 md:pt-20">
        <div className="container px-4 md:px-6">
          {/* Phone: title, portrait, story. Desktop: title and story left, portrait right. */}
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-x-16 lg:gap-y-6">
            <div className="animate-fade-in lg:col-start-1 lg:row-start-1">
              <Eyebrow>{t("About", "Über mich")}</Eyebrow>
              <h1 className="mt-4 font-display text-[clamp(min(2.75rem,11.3vw),9vw,6rem)]">{t("Hi, I'm Dejan.", "Hallo, ich bin Dejan.")}</h1>
              {/* Short bio: the same text as the share card description. */}
              <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-ink/75">{SHORT_BIO}</p>
            </div>
            <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-3xl border border-ink/10 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <img
                src="/images/dejan-portrait-960.jpg"
                srcSet="/images/dejan-portrait-480.jpg 480w, /images/dejan-portrait-960.jpg 960w"
                sizes="(min-width: 480px) 480px, 100vw"
                width={960}
                height={1200}
                alt={t("Portrait of Dejan Krstic, smiling, in a black t-shirt", "Porträt von Dejan Krstic, lächelnd, in schwarzem T-Shirt")}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
            <div className="grid max-w-xl gap-5 text-base leading-relaxed text-ink/75 md:text-lg lg:col-start-1 lg:row-start-2">
              <p className="text-xl font-semibold leading-snug text-ink md:text-2xl">
                {t("I call myself a product management dinosaur.", "Ich bezeichne mich gern als Dinosaurier des Produktmanagements.")}
              </p>
              <p>
                {t(
                  "When I started, I wrote thirty-page specs and then waited six months to find out whether anyone had built what I meant. They never had.",
                  "Als ich anfing, schrieb ich dreißigseitige Spezifikationen und wartete dann sechs Monate, um zu sehen, ob jemand gebaut hatte, was ich meinte. Hatte nie jemand.",
                )}
              </p>
              <p>
                {t(
                  "Today you can test an idea in an afternoon, and anyone in the room can do it. That is the most exciting thing that has happened to product work in my career, and most people are watching it instead of doing it.",
                  "Heute testen Sie eine Idee an einem Nachmittag, und jede und jeder im Raum kann das. Für mich ist das das Spannendste, was der Produktarbeit in meiner Laufbahn passiert ist. Und die meisten schauen dabei zu, statt mitzumachen.",
                )}
              </p>
              <p>
                {t(
                  `I've spent ${YEARS} years building products in music and tech, and for most of them I also taught, coached and gave talks. Now it is my whole job: helping people and product teams get from watching to building.`,
                  `Ich habe ${YEARS} Jahre lang Produkte in der Musik- und Tech-Branche entwickelt und die meiste Zeit nebenher unterrichtet, gecoacht und Vorträge gehalten. Heute ist genau das mein Beruf: Menschen und Produktteams vom Zuschauen ins Bauen zu bringen.`,
                )}
              </p>
              <p>
                {t(
                  "I teach in German and English, and I am at home in Croatian, Serbian and Bosnian.",
                  "Ich unterrichte auf Deutsch und Englisch, und im Kroatischen, Serbischen und Bosnischen bin ich zu Hause.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow={t("Career", "Werdegang")}
              title={t(`${YEARS} years of building products.`, `${YEARS} Jahre Produktentwicklung.`)}
            />
            <ol className="border-l-2 border-ink">
              {CAREER.map((c) => (
                <li key={c.org} className="relative pb-5 pl-5">
                  <span
                    className={`absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 ${
                      c.now ? "border-ink bg-ink" : "border-ink bg-canvas"
                    }`}
                    aria-hidden="true"
                  />
                  <p className="font-semibold text-ink">{c.org}</p>
                  <p className="text-sm text-ink/60">{c.role}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHead
              eyebrow={t("What I built", "Was ich aufgebaut habe")}
              title={t("The work behind the advice.", "Die Praxis hinter meiner Beratung.")}
            />
            <div className="grid gap-4">
              {[...BACKGROUND_CASES, BMG].map((c) => (
                <CaseCard key={c.who} c={c} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <WorkedWith />
        <CaseCard c={GOVTECH_CASE} lead className="mt-8" />
      </Section>

      <Section className="border-t-0 pt-0 md:pt-0">
        <div className="max-w-3xl">
          <ClosingLine>{t("Start where you are.", "Fangen Sie dort an, wo Sie stehen.")}</ClosingLine>
          <div className="mt-8">
            <IntroCallLink size="lg" />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default About;
