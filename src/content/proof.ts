// Proof: who I have worked with, what happened, and room for real testimonials.
// Never add a quote, number or client here that cannot be shown to be true.

export const WORKED_WITH = ["Diamant Software", "HTW Berlin", "Clientology Institute"];

export const BACKGROUND = ["Spotify", "SoundCloud"];

export interface Case {
  who: string;
  title: string;
  body: string;
}

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
    quote: "A real quote from a conference or masterclass client goes here.",
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

export const COURSE_WEEKS = [
  {
    week: 1,
    stage: 1,
    title: "How AI works, and how product people think",
    body: "What a model actually does, where it fails, and the three questions every product decision answers: what problem, for whom, and how you will know.",
    leave: "A problem statement from your own work",
  },
  {
    week: 2,
    stage: 2,
    title: "Find out what is worth building",
    body: "Talk to users, make sense of what you heard with AI, and separate evidence from opinion.",
    leave: "One opportunity, backed by evidence",
  },
  {
    week: 3,
    stage: 2,
    title: "Context is the work",
    body: "Write the brief that people and AI can both build from. This is where most AI output is won or lost.",
    leave: "A one-page spec",
  },
  {
    week: 4,
    stage: 3,
    title: "Build it",
    body: "From spec to working prototype in an afternoon. Then again, better.",
    leave: "Something a colleague can click",
  },
  {
    week: 5,
    stage: 3,
    title: "Judge it like you built it",
    body: "Test with five users, measure what matters, and decide: kill, change or ship.",
    leave: "A test readout and a decision",
  },
  {
    week: 6,
    stage: 3,
    title: "Make it part of your week",
    body: "Your first workflow or agent that does real work without you, then demo day.",
    leave: "A running workflow and a 5-minute demo",
  },
];
