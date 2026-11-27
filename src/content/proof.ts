// Proof: who I have worked with, what happened, and room for real testimonials.
// Never add a quote, number or client here that cannot be shown to be true.

export const WORKED_WITH = ["GovTech Singapore", "Medallia", "IKEA", "Diamant Software", "HTW Berlin", "Clientology Institute"];

export const BACKGROUND = ["Spotify", "SoundCloud"];

export interface Case {
  who: string;
  title: string;
  body: string;
  // Optional text link to the source, opens in a new tab.
  link?: { label: string; href: string };
}

// GovTech Singapore: a program Dejan led and taught (run through Product School, so it is framed
// as his teaching, not as a client of his own practice). Source: his LinkedIn post, Nov 24 2026.
// No metrics, names or quotes from attendees: the post has none to share.
export const GOVTECH_CASE: Case = {
  who: "GovTech Singapore · AI product management program",
  title: "The most senior people in the room were the ones taking the most notes",
  body: "Four days with GovTech Singapore's senior product leaders on an AI product management program I led and taught. They built working AI prototypes during the week. What I took away: every decision starts with the citizen, nobody waits for permission to use AI, and seniority comes without ego. I came to teach and left with a notebook full of my own learnings.",
  link: {
    label: "Read the post on LinkedIn",
    href: "https://www.linkedin.com/posts/dejan-krstic-b4a7a98a_the-most-senior-people-in-the-room-were-the-share-7530901610605092864-Zq2r/",
  },
};

export const CLIENT_CASES: Case[] = [
  {
    who: "Diamant Software · B2B accounting software, Germany",
    title: "Product Owners who don't code, in a regulated domain",
    body: "AI workshops for the Product Owner and Scrum Master teams. The shift: the Product Owner as the person who owns the context AI works from, because in a domain full of compliance rules, generic prompts produce generic mistakes.",
  },
  {
    who: "HTW Berlin · guest lectures",
    title: "Product basics for people who are not product managers",
    body: "\"Build the right thing and build it right\", and the follow-up, now with AI. Students who had never written a spec watched the same idea built twice from two different briefs: one that got used, one that only looked good.",
  },
  {
    who: "Clientology Institute · Experience Summit, Prague 2026",
    title: "Context is the work",
    body: "A main-stage talk and a hands-on masterclass for design, CX and product people: from a customer need to a working prototype, then the harder part, judging whether it is any good.",
  },
];

export const BACKGROUND_CASES: Case[] = [
  {
    who: "Spotify · Group Product Manager",
    title: "Creator and enterprise payouts",
    body: "Led the product teams behind creator and enterprise payouts across EMEA, and built AI agents for finance operations.",
  },
  {
    who: "SoundCloud · Lead Product Manager",
    title: "Fan-Powered Royalties",
    body: "Launched the first user-centric payout model on a major streaming platform, working with economists and engineers to model what it would change for artists.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  // Placeholders render with a visible "Placeholder" label.
  placeholder?: boolean;
}

// PLACEHOLDERS, hidden on the site. Replace each one with a real quote, the person's real name
// and title, and their written OK, then remove `placeholder: true`. The "What clients say"
// block on the home page appears as soon as one real quote exists.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A real quote from a team client goes here.",
    name: "Name",
    role: "Role, company",
    placeholder: true,
  },
  {
    quote: "A real quote from a conference or workshop client goes here.",
    name: "Name",
    role: "Role, company",
    placeholder: true,
  },
  {
    quote: "A real quote from a 1:1 coaching client goes here.",
    name: "Name",
    role: "Role, company",
    placeholder: true,
  },
];

export const PRINCIPLES = [
  {
    title: "Context is the work",
    body: "AI multiplies whatever you give it. Most of the job is the brief: the problem, the user, the rules of your domain. Tools change every quarter. That skill doesn't.",
  },
  {
    title: "Build small enough to learn",
    body: "An afternoon, not a quarter. If a build can't teach you something by Friday, it is too big.",
  },
  {
    title: "Judge it like you built it",
    body: "Anyone can make something with AI now. The skill is evaluating it with the same seriousness you used to build it.",
  },
  {
    title: "Your work, not a case study",
    body: "Every exercise runs on a real problem from your job or your company. You leave with work you can use on Monday.",
  },
];

export const TALKS = [
  {
    title: "Context is the work",
    body: "Why the brief, not the tool, decides what AI builds for you. A short talk, then a live build.",
    where: "Experience Summit, Prague, 2026",
  },
  {
    title: "AI builders, not AI spectators",
    body: "What changes for product people when building stops being the bottleneck and judgment becomes the job.",
    where: "Conferences and leadership offsites",
  },
  {
    title: "Build the right thing, now with AI",
    body: "Product basics for people who are not product managers yet, and how AI changes the speed but not the rules.",
    where: "HTW Berlin",
  },
];

// Prompt to Product: 2 weeks, 4 live sessions of 2 hours (8 live hours), two sessions a week.
// Entry level. Week 1: idea, spec and build. Week 2: deploy, evals and demo. Agents are not covered.
export const COURSE_SESSIONS = [
  {
    session: 1,
    week: 1,
    stage: 1,
    title: "Pick your idea and write the spec",
    body: "Pick one idea from your work that is worth building and write a one-page spec for it. Live example: turn a vague request into a skill. Then you write your product's first AI skill and test it on a real example.",
    leave: "A one-page spec for your AI product and its first AI skill, tested on a real example",
  },
  {
    session: 2,
    week: 1,
    stage: 2,
    title: "Build it with vibe coding",
    body: "Describe your one screen in plain words, straight from your spec, and build a working version with AI.",
    leave: "A working version of your one screen, built from your spec in plain words",
  },
  {
    session: 3,
    week: 2,
    stage: 3,
    title: "Deploy it: live, with real AI",
    body: "Put your product live at a public link and connect it to a real AI model, so it answers for real.",
    leave: "Your AI product live at a public link, answering with a real AI model",
  },
  {
    session: 4,
    week: 2,
    stage: 3,
    title: "Check it with evals, demo it, plan what's next",
    body: "Write a simple eval rubric, score your product, make one fix and score it again. Then show it in a 2-minute demo and plan your next 30 days.",
    leave: "A simple eval rubric with a score before and after one fix, a 2-minute demo and a 30-day plan",
  },
];
