import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IntroCallLink from "@/components/IntroCallLink";
import { ClosingLine, Eyebrow, PageHero, PageShell, Section, SectionHead, StageBadge, TEXT_LINK } from "@/components/site";
import { COURSE_PRICE } from "@/content/offers";
import { useContent } from "@/content/useContent";
import { useLocalize, useT } from "@/lib/i18n";
import type { T } from "@/lib/i18n";
import { usePageTitle } from "@/hooks/use-page-title";

const facts = (t: T, priceLine: string) => [
  [
    t("For", "Für wen"),
    t(
      "Entry level. You know some product management but are not confident with AI yet, or you want to become an AI product person.",
      "Einstiegsniveau. Sie kennen sich etwas mit Produktmanagement aus, sind aber noch unsicher mit KI, oder Sie wollen eine KI-Produktperson werden.",
    ),
  ],
  [t("Format", "Format"), t("4 live sessions of 2 hours over 2 weeks: 8 live hours", "4 Live-Sessions à 2 Stunden über 2 Wochen: 8 Live-Stunden")],
  [
    t("Schedule", "Ablauf"),
    t(
      "Two sessions a week. Week 1: your idea, the spec and the build. Week 2: deploy, test and show.",
      "Zwei Sessions pro Woche. Woche 1: Ihre Idee, die Spec und der Build. Woche 2: veröffentlichen, testen und zeigen.",
    ),
  ],
  [t("When", "Wann"), t("Daytime sessions, Berlin time. No late evenings.", "Tagsüber, nach Berliner Zeit. Keine späten Abende.")],
  [t("Group", "Gruppe"), t("Max 20 people, so everyone gets feedback on their build", "Max. 20 Personen, damit alle Feedback zu ihrem Build bekommen")],
  [t("Language", "Sprache"), t("English first, a German cohort to follow", "Zuerst auf Englisch, eine deutsche Kohorte folgt")],
  [
    t("You need", "Sie brauchen"),
    t(
      "A laptop and one real problem from your work. No coding experience.",
      "Einen Laptop und ein echtes Problem aus Ihrer Arbeit. Keine Programmiererfahrung.",
    ),
  ],
  [t("Not covered", "Nicht enthalten"), t("AI agents.", "KI-Agenten.")],
  [t("Price", "Preis"), priceLine],
];

const parts = (t: T) => [
  {
    title: t("AI product management basics", "Grundlagen des KI-Produktmanagements"),
    body: t(
      "How AI works, what is worth building, and how to write the spec you build from.",
      "Wie KI funktioniert, was sich zu bauen lohnt und wie Sie die Spec schreiben, nach der Sie bauen.",
    ),
  },
  {
    title: t("Vibe coding to a working product", "Mit Vibe Coding zum funktionierenden Produkt"),
    body: t(
      "Build from your spec with AI, then deploy it, so you have a working product at a link you can share.",
      "Bauen Sie mit KI nach Ihrer Spec und veröffentlichen Sie das Ergebnis, damit Sie ein funktionierendes Produkt unter einem Link haben, den Sie teilen können.",
    ),
  },
  {
    title: t("Light evals", "Einfache Evals"),
    body: t(
      "Check your product against a simple rubric, so you know whether it does its job before you show it.",
      "Prüfen Sie Ihr Produkt mit einer einfachen Bewertungsskala, damit Sie wissen, ob es seine Aufgabe erfüllt, bevor Sie es zeigen.",
    ),
  },
];

const Course = () => {
  const t = useT();
  const lp = useLocalize();
  const { sessions: COURSE_SESSIONS, priceNote: COURSE_PRICE_NOTE, priceLine } = useContent();
  const FACTS = facts(t, priceLine);
  const PARTS = parts(t);
  usePageTitle(
    "Prompt to Product",
    t(
      "Ship a real AI product in 14 days. A 2-week live cohort for up to 20 people: 4 sessions of 2 hours, 8 live hours. AI product management basics, vibe coding to a working, deployed product, and light evals. €700 early bird until 14 days before the start, €795 after that.",
      "In 14 Tagen ein echtes KI-Produkt live bringen. Eine 2-wöchige Live-Kohorte für bis zu 20 Personen: 4 Sessions à 2 Stunden, 8 Live-Stunden. Grundlagen des KI-Produktmanagements, Vibe Coding bis zum funktionierenden, veröffentlichten Produkt und einfache Evals. €700 Frühbucherpreis bis 14 Tage vor dem Start, danach €795.",
    ),
  );

  return (
    <PageShell>
      <PageHero
        eyebrow={t("Prompt to Product · 2-week live cohort · 8 live hours", "Prompt to Product · 2-wöchige Live-Kohorte · 8 Live-Stunden")}
        title={t("Ship a real AI product in 14 days", "In 14 Tagen ein echtes KI-Produkt live bringen")}
        lead={t(
          "Bring one idea from your work. Leave with it live at a public link, checked with evals.",
          "Bringen Sie eine Idee aus Ihrer Arbeit mit. Sie gehen mit ihr live unter einem öffentlichen Link, mit Evals geprüft.",
        )}
      >
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
          {t(
            "For people with some product management knowledge who are not confident with AI yet, and for anyone who wants to become an AI product person. You bring one real problem from your work.",
            "Für Menschen mit etwas Wissen im Produktmanagement, die mit KI noch unsicher sind, und für alle, die eine KI-Produktperson werden wollen. Sie bringen ein echtes Problem aus Ihrer Arbeit mit.",
          )}
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
          <IntroCallLink size="lg" />
          <Link to={lp("/self-check")} className={TEXT_LINK}>
            {t("Is it for me? Take the self-check", "Passt der Kurs zu mir? Machen Sie den Selbstcheck")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <Section>
        <SectionHead
          eyebrow={t("What you learn", "Was Sie lernen")}
          title={t("Three parts, one product of your own.", "Drei Teile, ein eigenes Produkt.")}
        />
        <ol className="grid gap-4 md:grid-cols-3">
          {PARTS.map((p, i) => (
            <li key={p.title} className="grid content-start gap-2 border-t-2 border-ink pt-4">
              <span className="text-2xl font-bold leading-none text-ink">{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="text-base text-ink/70">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <SectionHead
            eyebrow={t("The facts", "Die Fakten")}
            title={t("Two weeks, 8 live hours, one real problem.", "Zwei Wochen, 8 Live-Stunden, ein echtes Problem.")}
          />
          <dl className="grid gap-0">
            {FACTS.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-t border-ink/10 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="font-semibold text-ink">{k}</dt>
                <dd className="max-w-[48ch] text-ink/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow={t("The two weeks", "Die zwei Wochen")}
          title={t("Every session ends with something you made.", "Jede Session endet mit etwas, das Sie gemacht haben.")}
          lead={t(
            "Week 1: your idea, the spec and the build. Week 2: deploy, test and show. You put your product live with a real AI model, check it with evals and demo it to the group.",
            "Woche 1: Ihre Idee, die Spec und der Build. Woche 2: veröffentlichen, testen und zeigen. Sie stellen Ihr Produkt mit einem echten KI-Modell live, prüfen es mit Evals und führen es der Gruppe vor.",
          )}
        />
        <ol className="border-t-2 border-ink">
          {[1, 2].map((week) => (
            <li key={week} className="grid gap-3 border-b border-ink/10 py-6 md:grid-cols-[8rem_1fr] md:gap-4">
              <span className="text-2xl font-bold leading-none">
                {t("Week", "Woche")} {week}
              </span>
              <ol className="grid gap-6">
                {COURSE_SESSIONS.filter((s) => s.week === week).map((s) => (
                  <li key={s.session} className="grid gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-ink/60">Session {s.session}</span>
                      <StageBadge>
                        {t("Stage", "Stufe")} {s.stage}
                      </StageBadge>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="max-w-[48ch] text-base text-ink/70">{s.body}</p>
                    <p className="mt-2 justify-self-start rounded-md bg-muted px-2.5 py-1 text-sm font-semibold text-ink ring-1 ring-inset ring-ink/10">
                      {t("You leave with:", "Sie gehen mit:")} {s.leave}
                    </p>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Section>

      {/* Close: one action, the free intro call */}
      <Section id="join" className="scroll-mt-4">
        <div className="max-w-xl">
          <ClosingLine>{t("Want a seat?", "Möchten Sie einen Platz?")}</ClosingLine>
          <div className="mt-8 rounded-3xl border border-ink bg-white p-6 md:p-8">
            <Eyebrow>{t("Price", "Preis")}</Eyebrow>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3 tabular-nums tracking-tight">
              <span className="text-4xl font-extrabold">{COURSE_PRICE}</span>
              <span className="text-base font-medium text-ink/70">{COURSE_PRICE_NOTE}</span>
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              {t(
                "Book a free 20-minute intro call. We check the course fits your work, and I tell you the next dates.",
                "Buchen Sie ein kostenloses 20-minütiges Kennenlerngespräch. Wir prüfen, ob der Kurs zu Ihrer Arbeit passt, und ich nenne Ihnen die nächsten Termine.",
              )}
            </p>
            <IntroCallLink size="lg" className="mt-5 max-w-full px-5 sm:px-8" />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default Course;
