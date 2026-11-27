import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IntroCallLink from "@/components/IntroCallLink";
import OfferCard from "@/components/OfferCard";
import { ClientCases, REAL_TESTIMONIALS, Testimonials, WorkedWith } from "@/components/Proof";
import StagePath from "@/components/StagePath";
import { Eyebrow, FOCUS_RING, PageShell, Section, SectionHead, TEXT_LINK } from "@/components/site";
import { COURSE_PRICE } from "@/content/offers";
import { useContent } from "@/content/useContent";
import { useLocalize, useT } from "@/lib/i18n";
import type { Mode } from "@/content/stages";
import { usePageTitle } from "@/hooks/use-page-title";
import { buttonVariants } from "@/components/ui/button";
import { INTRO_CALL_URL, YEARS } from "@/lib/links";
import { cn } from "@/lib/utils";

// Home packages: 1:1 coaching and the team offers. The course has its own band above,
// and advisory and keynotes are on /work-with-me ("See every offer and price").
const HOME_PACKAGES = ["coaching", "diagnostic", "workshops", "builder-program"];

const Index = () => {
  const t = useT();
  const lp = useLocalize();
  const { offer, priceNote: COURSE_PRICE_NOTE } = useContent();
  usePageTitle(
    "AI builders, not AI spectators",
    t(
      "Dejan Krstic, AI product leadership coach. I help product people and teams go from trying AI to building with it. One stage at a time, on your real work.",
      "Dejan Krstic, AI product leadership coach. Ich helfe Produktleuten und Teams, vom Ausprobieren von KI zum Bauen mit KI zu kommen. Stufe für Stufe, an Ihrer echten Arbeit.",
    ),
  );
  // Links like /?for=team&stage=3#path open the path at that stage.
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
      {/* 1. Hero: headline left, portrait right on desktop. The staircase lives in The path only. */}
      <section className="pb-12 pt-12 md:pb-20 md:pt-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div className="animate-fade-in">
              <Eyebrow>AI product leadership coach</Eyebrow>
              {/* Proof line directly under the title. Phone: a small portrait next to it. */}
              <div className="mt-3 flex items-center gap-3">
                <img
                  src="/images/dejan-avatar-160.jpg"
                  width={160}
                  height={160}
                  alt="Dejan Krstic"
                  className="h-12 w-12 shrink-0 rounded-full border border-ink/10 object-cover lg:hidden"
                />
                <p className="text-sm font-semibold text-ink">
                  {t("Ex-CPO at Product School", "Ex-CPO bei Product School")}{"\u00a0·"}{" "}
                  <span className="inline-block">Spotify · SoundCloud</span>
                </p>
              </div>
              <h1 className="mt-5 font-display text-[clamp(min(3.1rem,12.7vw),11vw,8.4rem)] text-ink lg:text-[clamp(4rem,6.8vw,7rem)]">
                AI builders,
                <br />
                not AI <span className="text-brand">spectators.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75 md:text-xl">
                {t(
                  "I help product people and teams go from trying AI to building with it. One stage at a time, on your real work.",
                  "Ich helfe Produktleuten und Teams, vom Ausprobieren von KI zum Bauen mit KI zu kommen. Stufe für Stufe, an Ihrer echten Arbeit.",
                )}
              </p>
              <div className="mt-8 grid justify-items-start">
                <IntroCallLink size="lg" />
                <Link to={lp("/self-check")} className={cn(TEXT_LINK, "mt-3 text-sm text-ink/80")}>
                  {t("Not sure where you are? Take the self-check", "Nicht sicher, wo Sie stehen? Machen Sie den Selbstcheck")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="ml-auto hidden w-full max-w-[440px] overflow-hidden rounded-3xl border border-ink/10 lg:block">
              <img
                src="/images/dejan-portrait-960.jpg"
                srcSet="/images/dejan-portrait-480.jpg 480w, /images/dejan-portrait-960.jpg 960w"
                sizes="440px"
                loading="lazy"
                decoding="async"
                width={960}
                height={1200}
                alt={t("Portrait of Dejan Krstic, smiling, in a black t-shirt", "Porträt von Dejan Krstic, lächelnd, im schwarzen T-Shirt")}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The path */}
      <Section id="path">
        <SectionHead
          eyebrow={t("The path", "Der Weg")}
          title={
            <>
              {t("Five stages, from curious to", "Fünf Stufen, von neugierig bis")}{" "}
              <span className="whitespace-nowrap">{t("AI-native.", "KI-nativ.")}</span>{" "}
              {t("For you or your whole team.", "Für Sie oder Ihr ganzes Team.")}
            </>
          }
          lead={t(
            "Most AI training assumes you already know product or code. I start where you are and teach the next step. Pick a stage to see it.",
            "Die meisten KI-Trainings setzen voraus, dass Sie Produkt oder Code schon kennen. Ich fange dort an, wo Sie stehen, und vermittle den nächsten Schritt. Wählen Sie eine Stufe, um sie zu sehen.",
          )}
        />
        <StagePath mode={mode} onModeChange={setMode} active={active} onActiveChange={setActive} />
      </Section>

      {/* 3. The course */}
      <section className="bg-ink py-14 text-white md:py-24">
        <div className="container grid gap-8 px-4 md:grid-cols-[1.1fr_1fr] md:items-end md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.09em] text-white/60">{t("The course", "Der Kurs")}</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Prompt to Product
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="max-w-[46ch] text-lg leading-relaxed text-white/80">
              {t(
                "Bring one real problem from your work. Leave with your own AI product, live and checked with evals. 4 live sessions, 8 hours, up to 20 people. No coding experience needed.",
                "Bringen Sie ein echtes Problem aus Ihrer Arbeit mit. Sie gehen mit Ihrem eigenen KI-Produkt, live und mit Evals geprüft. 4 Live-Sessions, 8 Stunden, bis zu 20 Personen. Keine Programmiererfahrung nötig.",
              )}
            </p>
            <p className="flex flex-wrap items-baseline gap-x-3 tabular-nums">
              <span className="text-4xl font-extrabold md:text-5xl">{COURSE_PRICE}</span>
              <span className="text-base font-medium text-white/70">{COURSE_PRICE_NOTE}</span>
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
              {/* White fill is reserved for the course band's own action. */}
              <Link to={lp("/course")} className={buttonVariants({ variant: "white" })}>
                {t("See the two weeks", "Die zwei Wochen ansehen")}
              </Link>
              <a
                href={INTRO_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline", FOCUS_RING)}
              >
                {t("Not sure it fits? Book a free 20-min call", "Unsicher, ob es passt? Kostenloses 20-Min.-Gespräch buchen")} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Packages */}
      <Section id="offers" className="border-t-0">
        <SectionHead
          eyebrow={t("Ways to work together", "Formen der Zusammenarbeit")}
          title={t("Fixed packages, each with a clear outcome.", "Feste Pakete, jedes mit einem klaren Ergebnis.")}
          lead={t(
            "1:1 coaching for you, fixed-price packages for your team. Paid work starts with a free 20-minute intro call.",
            "1:1-Coaching für Sie, Pakete zum Festpreis für Ihr Team. Bezahlte Arbeit beginnt mit einem kostenlosen 20-minütigen Kennenlerngespräch.",
          )}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {/* Phone: the first two packages, then the link to every offer. */}
          {HOME_PACKAGES.map((id, i) => (
            <OfferCard key={id} offer={offer(id)} compact className={i >= 2 ? "hidden md:flex" : undefined} />
          ))}
        </div>
        <Link to={lp("/work-with-me")} className={cn(TEXT_LINK, "mt-6")}>
          {t(
            "See every offer and price, including advisory and keynotes",
            "Alle Angebote und Preise ansehen, inklusive Beratung und Keynotes",
          )} <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {/* 5. Proof */}
      <Section id="proof">
        <SectionHead
          eyebrow={t("Proof", "Referenzen")}
          title={t(
            "From students who had never written a spec to teams shipping AI.",
            "Von Studierenden, die noch nie eine Spec geschrieben hatten, bis zu Teams, die KI ausliefern.",
          )}
        />
        <WorkedWith />
        <div className="mt-8">
          <ClientCases />
        </div>
        {REAL_TESTIMONIALS.length > 0 && (
          <>
            <h3 className="mb-4 mt-12 text-xl font-semibold tracking-tight">{t("What clients say", "Was Kunden sagen")}</h3>
            <Testimonials />
          </>
        )}
      </Section>

      {/* 6. Close */}
      <Section id="contact" className="py-24 md:py-40">
        <div className="max-w-3xl">
          <h2 className="text-balance font-display text-[clamp(min(3rem,12.3vw),9vw,6.5rem)] text-ink">{t("Start where you are.", "Fangen Sie an, wo Sie stehen.")}</h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink/75">
            {t(
              "Tell me where you or your team are today, and I will tell you the next step, even if it is not with me.",
              "Erzählen Sie mir, wo Sie oder Ihr Team heute stehen, und ich sage Ihnen den nächsten Schritt, auch wenn er nicht mit mir ist.",
            )}
          </p>
          <div className="mt-10">
            <IntroCallLink size="lg" />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default Index;
