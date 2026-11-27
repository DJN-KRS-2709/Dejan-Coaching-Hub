import { useMemo } from "react";
import { COURSE_PRICE, COURSE_PRICE_LINE, COURSE_PRICE_NOTE, OFFER_GROUPS, OFFERS } from "@/content/offers";
import type { Offer, OfferGroup } from "@/content/offers";
import { BACKGROUND_CASES, CLIENT_CASES, COURSE_SESSIONS, GOVTECH_CASE, PRINCIPLES, TALKS } from "@/content/proof";
import { QUESTIONS, STAGES } from "@/content/stages";
import type { Stage } from "@/content/stages";
import * as DE from "@/content/de";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

// Every content list in the current page language.
export function contentFor(lang: Lang) {
  if (lang === "en") {
    return {
      offers: OFFERS,
      groups: OFFER_GROUPS,
      stages: STAGES,
      questions: QUESTIONS,
      govtech: GOVTECH_CASE,
      clientCases: CLIENT_CASES,
      backgroundCases: BACKGROUND_CASES,
      principles: PRINCIPLES,
      talks: TALKS,
      sessions: COURSE_SESSIONS,
      coursePrice: COURSE_PRICE,
      priceNote: COURSE_PRICE_NOTE,
      priceLine: COURSE_PRICE_LINE,
    };
  }
  const offers: Offer[] = OFFERS.map((o) => {
    const d = DE.OFFERS_DE[o.id];
    return {
      ...o,
      title: d.title,
      body: d.body,
      format: d.format,
      price: d.price ?? o.price,
      priceNote: d.priceNote ?? o.priceNote,
      tag: d.tag ?? o.tag,
      action: { ...o.action, label: d.actionLabel },
    };
  });
  return {
    offers,
    groups: OFFER_GROUPS.map((g) => ({ ...g, ...DE.OFFER_GROUPS_DE[g.id] })),
    stages: STAGES.map((s, i): Stage => ({ ...DE.STAGES_DE[i], n: s.n })),
    questions: DE.QUESTIONS_DE,
    govtech: DE.GOVTECH_CASE_DE,
    clientCases: DE.CLIENT_CASES_DE,
    backgroundCases: DE.BACKGROUND_CASES_DE,
    principles: DE.PRINCIPLES_DE,
    talks: DE.TALKS_DE,
    sessions: COURSE_SESSIONS.map((s, i) => ({ ...s, ...DE.COURSE_SESSIONS_DE[i] })),
    coursePrice: DE.COURSE_PRICE_DE,
    priceNote: DE.COURSE_PRICE_NOTE_DE,
    priceLine: DE.COURSE_PRICE_LINE_DE,
  };
}

export function useContent() {
  const lang = useLang();
  return useMemo(() => {
    const c = contentFor(lang);
    return {
      ...c,
      offer: (id: string) => c.offers.find((o) => o.id === id)!,
      offersIn: (group: OfferGroup) => c.offers.filter((o) => o.group === group),
      group: (id: OfferGroup) => c.groups.find((g) => g.id === id)!,
    };
  }, [lang]);
}
