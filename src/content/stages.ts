// The five-stage path from curious to AI-native, written once for a person and once for a team.
// Used by the path on the home page and by the self-check.

export type Mode = "person" | "team";

export interface StageHelp {
  label: string;
  to: string;
}

export interface StageView {
  says: string;
  here: string[];
  next: string;
  help: StageHelp[];
}

export interface Stage {
  n: 1 | 2 | 3 | 4 | 5;
  name: string;
  sub: string;
  person: StageView;
  team: StageView;
}

export const STAGES: Stage[] = [
  {
    n: 1,
    name: "Curious",
    sub: "Watching",
    person: {
      says: "AI is a tab I open sometimes. Product management sounds like a job for other people.",
      here: [
        "You use AI for emails, summaries and the odd question.",
        "You are not sure how product people decide what to build.",
        "You suspect you are already behind.",
      ],
      next: "Learn how AI actually works, and how product people decide what is worth building. In plain language, no code.",
      help: [
        { label: "Free masterclass", to: "/work-with-me#masterclass" },
        { label: "Self-check", to: "/self-check" },
      ],
    },
    team: {
      says: "We have an AI policy, three enthusiasts and a lot of opinions.",
      here: [
        "AI use is private, uneven and mostly invisible.",
        "There is no shared definition of good product work.",
        "Leadership wants a plan. Teams want permission.",
      ],
      next: "Give everyone the same language for product work and for AI, so the next conversation is about your customers instead of tools.",
      help: [
        { label: "Keynote", to: "/speaking" },
        { label: "Team diagnostic", to: "/work-with-me#diagnostic" },
      ],
    },
  },
  {
    n: 2,
    name: "Grounded",
    sub: "Knows the craft",
    person: {
      says: "I can name the problem, the user and the outcome. I have not built anything myself.",
      here: [
        "You can explain a product decision and why it matters.",
        "You write documents for other people to build from.",
        "Building still feels like someone else's job.",
      ],
      next: "Build your first working prototype from a real problem in your work. In an afternoon, not a quarter.",
      help: [
        { label: "Spectator to Builder", to: "/course" },
        { label: "Free masterclass", to: "/work-with-me#masterclass" },
      ],
    },
    team: {
      says: "We share a product operating model. AI lives in personal chat windows.",
      here: [
        "Teams work from problems and outcomes, not only feature lists.",
        "Personal AI use saves time but changes nothing about how you deliver.",
        "No team has built anything with AI on real work yet.",
      ],
      next: "Get every team to its first hands-on AI build, on its own backlog, with a clear hypothesis.",
      help: [
        { label: "Workshop", to: "/work-with-me#workshops" },
        { label: "Team diagnostic", to: "/work-with-me#diagnostic" },
      ],
    },
  },
  {
    n: 3,
    name: "Building",
    sub: "Makes things",
    person: {
      says: "I built something that works in an afternoon. I am less sure it is any good.",
      here: [
        "You have made prototypes, decks or bots with AI.",
        "Some get used. Most get admired once.",
        "You judge your output by how it looks.",
      ],
      next: "Judge what you build with the same seriousness you used to build it: test with real users, measure, decide. Then make it part of your week.",
      help: [
        { label: "Spectator to Builder", to: "/course" },
        { label: "1:1 coaching", to: "/work-with-me#coaching" },
      ],
    },
    team: {
      says: "We have pilots everywhere. Few reach a customer.",
      here: [
        "Most teams have prototypes and pilots.",
        "Quality depends on who built it.",
        "Nothing moves from demo to delivery.",
      ],
      next: "Move from prototype to quality: shared context, written standards, and a way to check AI output before it reaches a customer.",
      help: [
        { label: "Builder program", to: "/work-with-me#builder-program" },
        { label: "Workshop", to: "/work-with-me#workshops" },
      ],
    },
  },
  {
    n: 4,
    name: "Operating",
    sub: "AI in the work",
    person: {
      says: "AI does real work in my week, and I check it.",
      here: [
        "Agents and workflows run parts of your job.",
        "You keep context your tools reuse, instead of starting from a blank prompt.",
        "Colleagues ask how you set it up.",
      ],
      next: "Design AI-native products, not only AI-assisted work, and bring other people up the same path.",
      help: [
        { label: "1:1 coaching", to: "/work-with-me#coaching" },
        { label: "Advisory", to: "/work-with-me#advisory" },
      ],
    },
    team: {
      says: "AI is part of how we deliver. Specs, context and quality checks are shared.",
      here: [
        "Specs are written so people and AI can both build from them.",
        "Review standards exist and get used.",
        "Internal champions run playbooks for other teams.",
      ],
      next: "Ship AI-native products and agents in production, with evaluation, governance and clear ownership.",
      help: [
        { label: "Builder program", to: "/work-with-me#builder-program" },
        { label: "Advisory", to: "/work-with-me#advisory" },
      ],
    },
  },
  {
    n: 5,
    name: "AI-native",
    sub: "Leads the change",
    person: {
      says: "I design products where AI is part of the system, and I lead people who build.",
      here: [
        "You ship AI features or agents that customers use.",
        "You decide with evaluations and production data.",
        "You shape how others work with AI.",
      ],
      next: "Scale it beyond your own team, and become the person your organization learns from.",
      help: [
        { label: "Advisory", to: "/work-with-me#advisory" },
        { label: "1:1 coaching", to: "/work-with-me#coaching" },
      ],
    },
    team: {
      says: "AI-native products run in production. Our people keep growing into builders.",
      here: [
        "AI features and agents run in production, measured and governed.",
        "Teams own their evaluation and their context.",
        "New hires learn to build in their first weeks.",
      ],
      next: "Keep it alive as the tools change: own the learning inside your company instead of renting it.",
      help: [
        { label: "Advisory", to: "/work-with-me#advisory" },
        { label: "Keynote", to: "/speaking" },
      ],
    },
  },
];

// Tailwind needs full class names, so each stage maps to fixed classes.
export const STAGE_FILL: Record<number, string> = {
  1: "bg-stage-1 text-ink",
  2: "bg-stage-2 text-ink",
  3: "bg-stage-3 text-ink",
  4: "bg-stage-4 text-ink",
  5: "bg-stage-5 text-white",
};

export const STAGE_TOP_BORDER: Record<number, string> = {
  1: "border-t-stage-1",
  2: "border-t-stage-2",
  3: "border-t-stage-3",
  4: "border-t-stage-4",
  5: "border-t-stage-5",
};

export interface Question {
  q: string;
  a: string[];
}

// Four questions per audience. Each answer scores 1 to 5; the stage is the rounded average.
export const QUESTIONS: Record<Mode, Question[]> = {
  person: [
    {
      q: "In the last 90 days, what did you make with AI?",
      a: [
        "Nothing beyond chats and emails",
        "Better documents: drafts, summaries, research",
        "A working prototype someone could click",
        "A workflow or agent that runs without me",
        "A feature or agent that customers use",
      ],
    },
    {
      q: "Before anything gets built, you...",
      a: [
        "Don't build. Other people do",
        "Write down the problem, the user and the outcome",
        "Write the context so AI can build it with me",
        "Reuse a library of context my tools already know",
        "Set up evaluations and guardrails before it ships",
      ],
    },
    {
      q: "How do you know if what AI made is any good?",
      a: [
        "I trust it, or I don't use it",
        "I read it and fix what looks wrong",
        "I show it to users and watch what happens",
        "I check it against criteria I wrote down",
        "Evaluations and production data tell me",
      ],
    },
    {
      q: "Who learns from you about AI?",
      a: [
        "Nobody yet. I am learning",
        "A colleague now and then",
        "My team, when I demo what I built",
        "Other teams ask how I set up my workflows",
        "I shape how my organization builds with AI",
      ],
    },
  ],
  team: [
    {
      q: "What has your team shipped with AI in the last 90 days?",
      a: [
        "Nothing official",
        "Personal productivity: drafts, summaries",
        "Prototypes and pilots",
        "AI steps inside our delivery workflow",
        "AI features or agents in production",
      ],
    },
    {
      q: "How does your team decide what to build?",
      a: [
        "The loudest request, or the roadmap we inherited",
        "A shared process: problem, outcome, discovery",
        "We prototype to decide",
        "Shared specs and context that people and AI build from",
        "Bets on AI-native products with clear economics",
      ],
    },
    {
      q: "How do you check the quality of AI output?",
      a: [
        "We don't, or AI isn't allowed",
        "People review their own",
        "We test prototypes with users",
        "Quality gates and review standards",
        "Evaluations, monitoring and clear ownership",
      ],
    },
    {
      q: "Who drives AI adoption?",
      a: [
        "A few enthusiasts",
        "Leadership talks about it",
        "Every team has someone who builds",
        "Shared playbooks and internal champions",
        "It is how we work, and we train people continuously",
      ],
    },
  ],
};

export function scoreStage(answers: number[]): number {
  const avg = answers.reduce((a, b) => a + b, 0) / answers.length;
  return Math.min(5, Math.max(1, Math.ceil(avg - 0.5)));
}
