// Every offer on the site, with its price. Packages, not hourly sessions.
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
  price: string;
  priceNote?: string;
  tag?: string;
  featured?: boolean;
  cta: OfferCta;
}

export const OFFER_GROUPS: { id: OfferGroup; title: string; lead: string }[] = [
  {
    id: "you",
    title: "For you",
    lead: "Start free, learn to build in six weeks, or work with me one to one.",
  },
  {
    id: "team",
    title: "For your team",
    lead: "Fixed prices, paid by invoice. Every team engagement starts with a free intro call.",
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

export const OFFERS: Offer[] = [
  {
    id: "masterclass",
    group: "you",
    stages: [1, 2],
    title: "Free monthly masterclass",
    body: "Build something real in one hour, live, with me on screen. A new problem every month.",
    format: "Monthly · 60 minutes · online",
    price: "Free",
    cta: { kind: "signup", label: "Get the next date", list: "masterclass" },
  },
  {
    id: "course",
    group: "you",
    stages: [1, 3],
    title: "Spectator to Builder",
    body: "Six weeks from a problem in your work to a working prototype you have tested with real users, plus your first workflow that runs without you.",
    format: "6-week live cohort · 20 people · no code needed",
    price: "€990",
    priceNote: "Founding cohort €690",
    featured: true,
    cta: { kind: "link", label: "Join the waitlist", to: "/course#waitlist" },
  },
  {
    id: "coaching",
    group: "you",
    stages: [3, 5],
    title: "1:1 coaching",
    body: "For product people who already build and want to lead others through the shift. Your work, your career, your team.",
    format: "3 months · 6 sessions",
    price: "€1,490",
    tag: "Few spots",
    cta: { kind: "intro" },
  },
  {
    id: "diagnostic",
    group: "team",
    stages: [1, 5],
    title: "Team diagnostic",
    body: "Where your teams really are, team by team. Interviews, the self-check and a look at how work actually flows. You get a readout for leadership and a 90-day plan.",
    format: "Fixed price · any stage",
    price: "€1,900",
    priceNote: "Credited toward a program",
    cta: { kind: "intro" },
  },
  {
    id: "workshops",
    group: "team",
    stages: [1, 3],
    title: "Workshops",
    body: "A shared language for product and AI, or a first hands-on build on your own backlog. In German or English, on site in DACH or remote.",
    format: "Up to 20 people",
    price: "€1,900 half day",
    priceNote: "€3,500 full day",
    cta: { kind: "intro" },
  },
  {
    id: "builder-program",
    group: "team",
    stages: [2, 4],
    title: "Builder program",
    body: "Six weeks that move a team one full stage. Every lab runs on your own work. I study your business before the first session, so nothing feels generic.",
    format: "6 weeks · labs on your own work",
    price: "from €9,900",
    priceNote: "For up to 20 people",
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
    price: "from €4,000",
    priceNote: "per month",
    cta: { kind: "intro" },
  },
  {
    id: "keynotes",
    group: "speaking",
    stages: [1, 5],
    title: "Keynotes",
    body: "A talk that makes a room want to build, followed by a live demo.",
    format: "20 to 45 minutes · English or German",
    price: "from €2,500",
    priceNote: "plus travel",
    cta: { kind: "link", label: "See the talks", to: "/speaking" },
  },
];

export const offersIn = (group: OfferGroup) => OFFERS.filter((o) => o.group === group);
export const offer = (id: string) => OFFERS.find((o) => o.id === id)!;
