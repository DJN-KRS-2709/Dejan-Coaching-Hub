// Every offer on the site, with its price. Packages, not hourly sessions.
// Every offer has the same one call to action: the free 20-minute intro call (see src/lib/links.ts).

export type OfferGroup = "you" | "team" | "leaders" | "speaking";

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
  // The card's own text link. Default: a link to the free intro call with this label.
  action: { label: string; to?: string };
}

// One price format for the course, everywhere on the site. No dates yet; the early bird
// ends 14 days before each cohort starts.
export const COURSE_PRICE = "$700";
export const COURSE_PRICE_NOTE = "early bird until 14 days before the start. $795 after that.";
export const COURSE_PRICE_LINE = `${COURSE_PRICE} ${COURSE_PRICE_NOTE}`;

export const OFFER_GROUPS: { id: OfferGroup; title: string; lead: string }[] = [
  {
    id: "you",
    title: "For you",
    lead: "Learn to build with AI in two weeks, or work with me one to one.",
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
    id: "course",
    group: "you",
    stages: [1, 3],
    title: "Prompt to Product",
    body: "Ship a real AI product in 14 days. AI product management basics, vibe coding to a working, deployed product, and light evals with a simple rubric. Entry level, for people new to AI.",
    format: "2-week live cohort · 4 sessions of 2 hours, 8 live hours · max 20 people · no code needed",
    price: "$700",
    priceNote: "early bird until 14 days before the start. $795 after that.",
    featured: true,
    action: { label: "See the two weeks", to: "/course" },
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

    action: { label: "Ask about 1:1 coaching" },
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

    action: { label: "Ask about a team diagnostic" },
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

    action: { label: "Ask about workshops" },
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

    action: { label: "Ask about the Builder program" },
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

    action: { label: "Ask about advisory" },
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

    action: { label: "Ask about a keynote" },
  },
];

export const offersIn = (group: OfferGroup) => OFFERS.filter((o) => o.group === group);
export const offer = (id: string) => OFFERS.find((o) => o.id === id)!;
