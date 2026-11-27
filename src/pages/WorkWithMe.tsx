import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { ClosingLine, PageHero, PageShell, Section, SectionHead, TEXT_LINK } from "@/components/site";
import { useContent } from "@/content/useContent";
import { useT } from "@/lib/i18n";
import type { T } from "@/lib/i18n";
import type { OfferGroup } from "@/content/offers";
import { usePageTitle } from "@/hooks/use-page-title";
import { cn } from "@/lib/utils";

const steps = (t: T) => [
  {
    title: t("Free 20-min intro call", "Kostenloses Erstgespräch, 20 Minuten"),
    body: t(
      "Tell me where you or your team are. I will tell you the next step, even if it is not with me.",
      "Sagen Sie mir, wo Sie oder Ihr Team stehen. Ich sage Ihnen, was der nächste Schritt ist, auch wenn er nicht mit mir ist.",
    ),
  },
  {
    title: t("A one-page proposal", "Ein Angebot auf einer Seite"),
    body: t(
      "The outcome, the format and a fixed price. Teams pay by invoice.",
      "Ergebnis, Format und Festpreis. Teams zahlen auf Rechnung.",
    ),
  },
  {
    title: t("Work on your real work", "An Ihren eigenen Themen arbeiten"),
    body: t(
      "Every session runs on your problems, your backlog and your product.",
      "Jede Session dreht sich um Ihre Probleme, Ihr Backlog und Ihr Produkt.",
    ),
  },
  {
    title: t("Your next stage", "Ihre nächste Stufe"),
    body: t(
      "We finish with what changed, and what the next step is.",
      "Zum Abschluss halten wir fest, was sich verändert hat und was als Nächstes kommt.",
    ),
  },
];

const tabs = (t: T): { id: OfferGroup; label: string }[] => [
  { id: "you", label: t("You", "Sie") },
  { id: "team", label: t("Team", "Team") },
  { id: "leaders", label: t("Leaders", "Führung") },
  { id: "speaking", label: t("Talks", "Vorträge") },
];

// Sections sit below the fixed header and the sticky tabs, so they need extra room on top.
const UNDER_TABS = "scroll-mt-16";

const GroupHead = ({ id }: { id: OfferGroup }) => {
  const { group } = useContent();
  return (
    <div className="mb-6 grid max-w-2xl gap-2">
      <h2 className="text-3xl font-bold tracking-tight text-ink md:text-[2.25rem]">{group(id).title}</h2>
      <p className="text-base text-ink/70">{group(id).lead}</p>
    </div>
  );
};

// Segmented tabs that stay under the header and jump to each group of offers.
const OfferTabs = () => {
  const t = useT();
  const TABS = tabs(t);
  const [active, setActive] = useState<OfferGroup>("you");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: OfferGroup = "you";
      for (const tab of tabs(t)) {
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
        <nav aria-label={t("Offers", "Angebote")} className="flex w-full flex-wrap gap-1 rounded-[1.5rem] border border-ink/10 bg-muted p-1 sm:inline-flex sm:w-auto">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              aria-current={active === tab.id ? "location" : undefined}
              className={cn(
                "flex min-h-[44px] flex-1 items-center justify-center rounded-full px-3 text-sm font-semibold transition-colors sm:flex-none sm:px-5",
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
  const t = useT();
  const { offersIn, principles: PRINCIPLES } = useContent();
  const STEPS = steps(t);
  usePageTitle(
    t("Work with me", "Angebote"),
    t(
      "Packages, not hourly sessions: the Prompt to Product course, 1:1 coaching, team diagnostics, workshops, the Builder program, advisory and keynotes.",
      "Pakete statt Stundensätze: der Kurs Prompt to Product, 1:1-Coaching, Team-Diagnosen, Workshops, das Builder-Programm, Beratung und Keynotes.",
    ),
  );

  return (
    <PageShell>
      <PageHero
        eyebrow={t("Work with me", "Angebote")}
        title={t("Packages, not hourly sessions.", "Pakete statt Stundensätze.")}
        lead={t(
          "Every offer is the next step from where you or your team are today. Fixed prices. Paid work starts with a free 20-minute intro call, so we both know it fits.",
          "Jedes Angebot ist der nächste Schritt von dort aus, wo Sie oder Ihr Team heute stehen. Festpreise. Jede bezahlte Zusammenarbeit beginnt mit einem kostenlosen Erstgespräch von 20 Minuten, damit wir beide wissen, dass es passt.",
        )}
      >
        <div className="mt-8">
          <IntroCallLink size="lg" />
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
        <SectionHead eyebrow={t("How it works", "So läuft es ab")} title={t("Four steps, no surprises.", "Vier Schritte, keine Überraschungen.")} />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="grid content-start gap-2 border-t-2 border-ink pt-4">
              <span className="text-2xl font-bold leading-none text-ink">{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="max-w-[48ch] text-base text-ink/70">{s.body}</p>
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
        <Link to="/gulf" hrefLang="en" className={cn(TEXT_LINK, "mt-6")}>
          {t(
            "Leading a team in the Gulf? Remote coaching and team training in English",
            "Sie führen ein Team in der Golfregion? Remote-Coaching und Teamtrainings auf Englisch",
          )}{" "}
          <ArrowRight className="h-4 w-4" />
        </Link>
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
        <SectionHead
          eyebrow={t("How I teach", "Wie ich unterrichte")}
          title={t("Four rules that run through everything.", "Vier Grundsätze, die sich durch alles ziehen.")}
        />
        <div className="grid border-t-2 border-ink md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.title}
              className={`grid gap-2 border-b border-ink/10 py-6 md:py-7 ${i % 2 === 0 ? "md:border-r md:pr-8" : "md:pl-8"}`}
            >
              <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{p.title}</h3>
              <p className="max-w-[48ch] text-base text-ink/70">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <ClosingLine>{t("Not sure which fits?", "Unsicher, was passt?")}</ClosingLine>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            {t(
              "Book 20 minutes. Tell me where you are, and I will tell you the next step.",
              "Buchen Sie 20 Minuten. Sagen Sie mir, wo Sie stehen, und ich sage Ihnen den nächsten Schritt.",
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

export default WorkWithMe;
