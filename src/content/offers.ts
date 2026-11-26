import { SHOW_PRICING, SHOW_WAITLIST } from "@/lib/flags";

// Every offer on the site, with its price (shown only when SHOW_PRICING is on, see src/lib/flags.ts). Packages, not hourly sessions.
// Paid offers start with the free intro call or a waitlist, never with a paid booking.

export type OfferGroup = "you" | "team" | "leaders" | "speaking";

export type OfferCta =
  | { kind: "intro" }
  | { kind: "link"; label: string; to: string }
  | { kind: "signup"; label: string; list: "masterclass" | "cohort-waitlist" | "newsletter" };

export interface Offer {
  id: string;
  group: OfferGroup;
  stages: [number, number];
  title: string;
  body: string;
  format: string;
  price?: string;
  priceNote?: string;
  tag?: string;
  featured?: boolean;
  cta: OfferCta;
}

export const OFFER_GROUPS: { id: OfferGroup; title: string; lead: string }[] = [
  {
    id: "you",
    title: "For you",
    lead: "Start free, learn to build in three weeks, or work with me one to one.",
  },
  {
    id: "team",
    title: "For your team",
    lead: SHOW_PRICING
      ? "Fixed prices, paid by invoice. Every team engagement starts with a free intro call."
      : "Paid by invoice. Every team engagement starts with a free intro call.",
  },
  {
    id: "leaders",
    title: "For product leaders",
    lead: "For the people leading the change, not only learning it.",
  },
  {
    id: "speaking",
    title: "Speaking",
    lead: "For conferences, leadership offsites and kickoffs.",
  },
];

const BASE_OFFERS: Offer[] = [
  {
    id: "masterclass",
    group: "you",
    stages: [1, 2],
    title: "Free monthly masterclass",
    body: "Build something real in one hour, live, with me on screen. A new problem every month.",
    format: "Monthly · 60 minutes · online",
    cta: { kind: "signup", label: "Get the next date", list: "masterclass" },
  },
  {
    id: "course",
    group: "you",
    stages: [1, 3],
    title: "Spectator to Builder",
    body: "Three weeks from a problem in your work to a working prototype you have tested with real users, shown on demo day.",
    format: "3-week live cohort · 4 sessions, 6 live hours · max 20 people · no code needed",
    featured: true,
    cta: SHOW_WAITLIST ? { kind: "link", label: "Join the waitlist", to: "/course#waitlist" } : { kind: "intro" },
  },
  {
    id: "coaching",
    group: "you",
    stages: [3, 5],
    title: "1:1 coaching",
    body: "For product people who already build and want to lead others through the shift. Your work, your career, your team.",
    format: "3 months · 6 sessions",
    tag: "Few spots",
    cta: { kind: "intro" },
  },
  {
    id: "diagnostic",
    group: "team",
    stages: [1, 5],
    title: "Team diagnostic",
    body: "Where your teams really are, team by team. Interviews, the self-check and a look at how work actually flows. You get a readout for leadership and a 90-day plan.",
    format: SHOW_PRICING ? "Fixed price · any stage" : "Any stage",
    cta: { kind: "intro" },
  },
  {
    id: "workshops",
    group: "team",
    stages: [1, 3],
    title: "Workshops",
    body: "A shared language for product and AI, or a first hands-on build on your own backlog. In German or English, on site in DACH or remote.",
    format: "Up to 20 people",
    cta: { kind: "intro" },
  },
  {
    id: "builder-program",
    group: "team",
    stages: [2, 4],
    title: "Builder program",
    body: "Six weeks that move a team one full stage. Every lab runs on your own work. I study your business before the first session, so nothing feels generic.",
    format: "6 weeks · labs on your own work",
    featured: true,
    cta: { kind: "intro" },
  },
  {
    id: "advisory",
    group: "leaders",
    stages: [3, 5],
    title: "Advisory for product leaders",
    body: "For CPOs and heads of product leading the change. A sparring partner on bets, org design and what to stop doing.",
    format: "Monthly",
    cta: { kind: "intro" },
  },
  {
    id: "keynotes",
    group: "speaking",
    stages: [1, 5],
    title: "Keynotes",
    body: "A talk that makes a room want to build, followed by a live demo.",
    format: "20 to 45 minutes · English or German",
    cta: { kind: "link", label: "See the talks", to: "/speaking" },
  },
];

// Prices live apart from the offers, so with SHOW_PRICING off they are left out of the
// published site entirely, not only hidden.
const PRICES: Record<string, Pick<Offer, "price" | "priceNote">> = {
  masterclass: { price: "Free" },
  course: { price: "€990", priceNote: "Founding cohort €690" },
  coaching: { price: "€1,490" },
  diagnostic: { price: "€1,900", priceNote: "Credited toward a program" },
  workshops: { price: "€1,900 half day", priceNote: "€3,500 full day" },
  "builder-program": { price: "from €9,900", priceNote: "For up to 20 people" },
  advisory: { price: "from €4,000", priceNote: "per month" },
  keynotes: { price: "from €2,500", priceNote: "plus travel" },
};

export const OFFERS: Offer[] = SHOW_PRICING ? BASE_OFFERS.map((o) => ({ ...o, ...PRICES[o.id] })) : BASE_OFFERS;

export const offersIn = (group: OfferGroup) => OFFERS.filter((o) => o.group === group);
export const offer = (id: string) => OFFERS.find((o) => o.id === id)!;
