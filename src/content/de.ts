// German content: the same lists as offers.ts, stages.ts and proof.ts, in German (Sie form).
// DRAFT for Dejan's review. Names, prices and brand terms (Prompt to Product, talk titles,
// company names) stay as they are. Every string is listed next to its English source in
// qa/de-review.md.
import type { OfferGroup } from "@/content/offers";
import type { Case } from "@/content/proof";
import type { Mode, Question, Stage } from "@/content/stages";

export const COURSE_PRICE_NOTE_DE = "Frühbucherpreis bis 14 Tage vor dem Start. Danach €795.";
export const COURSE_PRICE_LINE_DE = "€700 Frühbucherpreis bis 14 Tage vor dem Start, danach €795.";

export const OFFER_GROUPS_DE: Record<OfferGroup, { title: string; lead: string }> = {
  you: { title: "Für Sie", lead: "Lernen Sie in zwei Wochen, mit KI zu bauen, oder arbeiten Sie eins zu eins mit mir." },
  team: {
    title: "Für Ihr Team",
    lead: "Festpreise, Zahlung per Rechnung. Jede Zusammenarbeit mit einem Team beginnt mit einem kostenlosen Kennenlerngespräch.",
  },
  leaders: { title: "Für Produktverantwortliche", lead: "Für die Menschen, die den Wandel führen, nicht nur lernen." },
  speaking: { title: "Vorträge", lead: "Für Konferenzen, Führungsklausuren und Kickoffs." },
};

export interface OfferText {
  title: string;
  body: string;
  format: string;
  price?: string;
  priceNote?: string;
  tag?: string;
  actionLabel: string;
}

export const OFFERS_DE: Record<string, OfferText> = {
  course: {
    title: "Prompt to Product",
    body: "Bringen Sie in 14 Tagen ein echtes KI-Produkt live. Grundlagen des KI-Produktmanagements, Vibe Coding bis zum funktionierenden, veröffentlichten Produkt und einfache Evals mit einer klaren Bewertungsskala. Einstiegsniveau, für Menschen, die neu bei KI sind.",
    format: "2-wöchige Live-Kohorte · 4 Sessions à 2 Stunden, 8 Live-Stunden · max. 20 Personen · ohne Programmierkenntnisse",
    priceNote: COURSE_PRICE_NOTE_DE,
    actionLabel: "Die zwei Wochen ansehen",
  },
  coaching: {
    title: "1:1-Coaching",
    body: "Für Produktleute, die schon bauen und andere durch den Wandel führen wollen. Ihre Arbeit, Ihre Karriere, Ihr Team.",
    format: "3 Monate · 6 Sessions",
    tag: "Wenige Plätze",
    actionLabel: "1:1-Coaching anfragen",
  },
  diagnostic: {
    title: "Team-Diagnose",
    body: "Wo Ihre Teams wirklich stehen, Team für Team. Interviews, der Selbstcheck und ein Blick darauf, wie die Arbeit tatsächlich läuft. Sie erhalten eine Auswertung für die Führungsebene und einen 90-Tage-Plan.",
    format: "Festpreis · jede Stufe",
    priceNote: "Wird auf ein Programm angerechnet",
    actionLabel: "Team-Diagnose anfragen",
  },
  workshops: {
    title: "Workshops",
    body: "Eine gemeinsame Sprache für Produkt und KI oder ein erster praktischer Build auf Ihrem eigenen Backlog. Auf Deutsch oder Englisch, vor Ort in der DACH-Region oder remote.",
    format: "Bis zu 20 Personen",
    price: "€1,900 halber Tag",
    priceNote: "€3,500 ganzer Tag",
    actionLabel: "Workshops anfragen",
  },
  "builder-program": {
    title: "Builder-Programm",
    body: "Sechs Wochen, die ein Team eine ganze Stufe weiterbringen. Jedes Lab läuft auf Ihrer eigenen Arbeit. Ich arbeite mich vor der ersten Session in Ihr Geschäft ein, damit sich nichts generisch anfühlt.",
    format: "6 Wochen · Labs auf Ihrer eigenen Arbeit",
    price: "ab €9,900",
    priceNote: "Für bis zu 20 Personen",
    actionLabel: "Builder-Programm anfragen",
  },
  advisory: {
    title: "Beratung für Produktverantwortliche",
    body: "Für CPOs und Heads of Product, die den Wandel führen. Ein Sparringspartner für Produktwetten, Organisationsdesign und die Frage, was Sie nicht mehr tun sollten.",
    format: "Monatlich",
    price: "ab €4,000",
    priceNote: "pro Monat",
    actionLabel: "Beratung anfragen",
  },
  keynotes: {
    title: "Keynotes",
    body: "Ein Vortrag, nach dem ein Raum selbst bauen will, gefolgt von einer Live-Demo.",
    format: "20 bis 45 Minuten · Englisch oder Deutsch",
    price: "ab €2,500",
    priceNote: "zzgl. Reisekosten",
    actionLabel: "Keynote anfragen",
  },
};

type StageText = Omit<Stage, "n">;

export const STAGES_DE: StageText[] = [
  {
    name: "Neugierig",
    sub: "Schaut zu",
    person: {
      says: "KI ist ein Tab, den ich ab und zu öffne. Produktmanagement klingt nach einem Job für andere.",
      here: [
        "Sie nutzen KI für E-Mails, Zusammenfassungen und die eine oder andere Frage.",
        "Sie wissen nicht genau, wie Produktleute entscheiden, was gebaut wird.",
        "Sie haben den Verdacht, schon hinterherzuhinken.",
      ],
      next: "Verstehen Sie, wie KI wirklich funktioniert und wie Produktleute entscheiden, was sich zu bauen lohnt. In klarer Sprache, ohne Code.",
      help: [
        { label: "Prompt to Product", to: "/course" },
        { label: "Selbstcheck", to: "/self-check" },
      ],
    },
    team: {
      says: "Wir haben eine KI-Richtlinie, drei Begeisterte und viele Meinungen.",
      here: [
        "KI-Nutzung ist privat, ungleich verteilt und meist unsichtbar.",
        "Es gibt keine gemeinsame Definition guter Produktarbeit.",
        "Die Führung will einen Plan. Die Teams wollen eine Erlaubnis.",
      ],
      next: "Geben Sie allen dieselbe Sprache für Produktarbeit und für KI, damit es im nächsten Gespräch um Ihre Kunden geht statt um Tools.",
      help: [
        { label: "Keynote", to: "/speaking" },
        { label: "Team-Diagnose", to: "/work-with-me#diagnostic" },
      ],
    },
  },
  {
    name: "Fundiert",
    sub: "Kennt das Handwerk",
    person: {
      says: "Ich kann das Problem, die Nutzer und das Ergebnis benennen. Selbst gebaut habe ich noch nichts.",
      here: [
        "Sie können eine Produktentscheidung erklären und sagen, warum sie wichtig ist.",
        "Sie schreiben Dokumente, nach denen andere bauen.",
        "Bauen fühlt sich noch wie der Job von jemand anderem an.",
      ],
      next: "Bauen Sie Ihren ersten funktionierenden Prototyp zu einem echten Problem aus Ihrer Arbeit. An einem Nachmittag, nicht in einem Quartal.",
      help: [
        { label: "Prompt to Product", to: "/course" },
        { label: "Selbstcheck", to: "/self-check" },
      ],
    },
    team: {
      says: "Wir teilen ein Produkt-Betriebsmodell. KI lebt in privaten Chatfenstern.",
      here: [
        "Teams arbeiten von Problemen und Ergebnissen aus, nicht nur von Feature-Listen.",
        "Private KI-Nutzung spart Zeit, ändert aber nichts daran, wie Sie liefern.",
        "Noch kein Team hat mit KI etwas an echter Arbeit gebaut.",
      ],
      next: "Bringen Sie jedes Team zu seinem ersten praktischen KI-Build, auf dem eigenen Backlog, mit einer klaren Hypothese.",
      help: [
        { label: "Workshop", to: "/work-with-me#workshops" },
        { label: "Team-Diagnose", to: "/work-with-me#diagnostic" },
      ],
    },
  },
  {
    name: "Am Bauen",
    sub: "Baut selbst",
    person: {
      says: "Ich habe an einem Nachmittag etwas gebaut, das funktioniert. Ob es gut ist, weiß ich nicht genau.",
      here: [
        "Sie haben mit KI Prototypen, Präsentationen oder Bots gemacht.",
        "Manches wird genutzt. Das meiste wird einmal bewundert.",
        "Sie beurteilen Ihre Ergebnisse danach, wie sie aussehen.",
      ],
      next: "Beurteilen Sie, was Sie bauen, mit derselben Ernsthaftigkeit, mit der Sie es gebaut haben: mit echten Nutzern testen, messen, entscheiden. Dann machen Sie es zu einem Teil Ihrer Woche.",
      help: [
        { label: "Prompt to Product", to: "/course" },
        { label: "1:1-Coaching", to: "/work-with-me#coaching" },
      ],
    },
    team: {
      says: "Wir haben überall Piloten. Wenige erreichen einen Kunden.",
      here: [
        "Die meisten Teams haben Prototypen und Piloten.",
        "Die Qualität hängt davon ab, wer gebaut hat.",
        "Nichts schafft es von der Demo in die Lieferung.",
      ],
      next: "Vom Prototyp zur Qualität: gemeinsamer Kontext, schriftliche Standards und ein Weg, KI-Ergebnisse zu prüfen, bevor sie einen Kunden erreichen.",
      help: [
        { label: "Builder-Programm", to: "/work-with-me#builder-program" },
        { label: "Workshop", to: "/work-with-me#workshops" },
      ],
    },
  },
  {
    name: "Im Betrieb",
    sub: "KI in der Arbeit",
    person: {
      says: "KI erledigt echte Arbeit in meiner Woche, und ich prüfe sie.",
      here: [
        "Agenten und Workflows übernehmen Teile Ihrer Arbeit.",
        "Sie pflegen Kontext, den Ihre Tools wiederverwenden, statt mit einem leeren Prompt zu beginnen.",
        "Kolleginnen und Kollegen fragen, wie Sie das aufgesetzt haben.",
      ],
      next: "Entwerfen Sie KI-native Produkte, nicht nur KI-gestützte Arbeit, und bringen Sie andere auf denselben Weg.",
      help: [
        { label: "1:1-Coaching", to: "/work-with-me#coaching" },
        { label: "Beratung", to: "/work-with-me#advisory" },
      ],
    },
    team: {
      says: "KI ist Teil davon, wie wir liefern. Specs, Kontext und Qualitätschecks sind geteilt.",
      here: [
        "Specs werden so geschrieben, dass Menschen und KI danach bauen können.",
        "Review-Standards gibt es, und sie werden genutzt.",
        "Interne Champions betreiben Playbooks für andere Teams.",
      ],
      next: "Liefern Sie KI-native Produkte und Agenten in Produktion, mit Evaluation, Governance und klarer Verantwortung.",
      help: [
        { label: "Builder-Programm", to: "/work-with-me#builder-program" },
        { label: "Beratung", to: "/work-with-me#advisory" },
      ],
    },
  },
  {
    name: "KI-nativ",
    sub: "Führt den Wandel",
    person: {
      says: "Ich entwerfe Produkte, in denen KI Teil des Systems ist, und ich führe Menschen, die bauen.",
      here: [
        "Sie liefern KI-Features oder Agenten, die Kunden nutzen.",
        "Sie entscheiden mit Evaluationen und Produktionsdaten.",
        "Sie prägen, wie andere mit KI arbeiten.",
      ],
      next: "Tragen Sie es über Ihr eigenes Team hinaus, und werden Sie die Person, von der Ihre Organisation lernt.",
      help: [
        { label: "Beratung", to: "/work-with-me#advisory" },
        { label: "1:1-Coaching", to: "/work-with-me#coaching" },
      ],
    },
    team: {
      says: "KI-native Produkte laufen in Produktion. Unsere Leute werden immer mehr zu Buildern.",
      here: [
        "KI-Features und Agenten laufen in Produktion, gemessen und gesteuert.",
        "Teams verantworten ihre Evaluation und ihren Kontext.",
        "Neue Kolleginnen und Kollegen lernen in den ersten Wochen zu bauen.",
      ],
      next: "Halten Sie es lebendig, während sich die Tools ändern: Behalten Sie das Lernen im eigenen Unternehmen, statt es zuzukaufen.",
      help: [
        { label: "Beratung", to: "/work-with-me#advisory" },
        { label: "Keynote", to: "/speaking" },
      ],
    },
  },
];

export const QUESTIONS_DE: Record<Mode, Question[]> = {
  person: [
    {
      q: "Was haben Sie in den letzten 90 Tagen mit KI gemacht?",
      a: [
        "Nichts außer Chats und E-Mails",
        "Bessere Dokumente: Entwürfe, Zusammenfassungen, Recherche",
        "Einen funktionierenden Prototyp, den man anklicken kann",
        "Einen Workflow oder Agenten, der ohne mich läuft",
        "Ein Feature oder einen Agenten, den Kunden nutzen",
      ],
    },
    {
      q: "Bevor etwas gebaut wird, ...",
      a: [
        "Baue ich nicht. Das machen andere",
        "Schreibe ich Problem, Nutzer und Ergebnis auf",
        "Schreibe ich den Kontext, damit KI es mit mir bauen kann",
        "Nutze ich eine Kontext-Bibliothek, die meine Tools schon kennen",
        "Richte ich Evaluationen und Leitplanken ein, bevor es live geht",
      ],
    },
    {
      q: "Woran erkennen Sie, ob das, was KI gemacht hat, gut ist?",
      a: [
        "Ich vertraue darauf, oder ich nutze es nicht",
        "Ich lese es und korrigiere, was falsch aussieht",
        "Ich zeige es Nutzern und beobachte, was passiert",
        "Ich prüfe es gegen Kriterien, die ich aufgeschrieben habe",
        "Evaluationen und Produktionsdaten sagen es mir",
      ],
    },
    {
      q: "Wer lernt von Ihnen über KI?",
      a: [
        "Noch niemand. Ich lerne selbst",
        "Ab und zu eine Kollegin oder ein Kollege",
        "Mein Team, wenn ich zeige, was ich gebaut habe",
        "Andere Teams fragen, wie ich meine Workflows aufgesetzt habe",
        "Ich präge, wie meine Organisation mit KI baut",
      ],
    },
  ],
  team: [
    {
      q: "Was hat Ihr Team in den letzten 90 Tagen mit KI geliefert?",
      a: [
        "Nichts Offizielles",
        "Persönliche Produktivität: Entwürfe, Zusammenfassungen",
        "Prototypen und Piloten",
        "KI-Schritte in unserem Liefer-Workflow",
        "KI-Features oder Agenten in Produktion",
      ],
    },
    {
      q: "Wie entscheidet Ihr Team, was gebaut wird?",
      a: [
        "Die lauteste Anfrage oder die geerbte Roadmap",
        "Ein gemeinsamer Prozess: Problem, Ergebnis, Discovery",
        "Wir bauen Prototypen, um zu entscheiden",
        "Gemeinsame Specs und Kontext, nach denen Menschen und KI bauen",
        "Wetten auf KI-native Produkte mit klarer Wirtschaftlichkeit",
      ],
    },
    {
      q: "Wie prüfen Sie die Qualität von KI-Ergebnissen?",
      a: [
        "Gar nicht, oder KI ist nicht erlaubt",
        "Jede Person prüft ihre eigenen",
        "Wir testen Prototypen mit Nutzern",
        "Quality Gates und Review-Standards",
        "Evaluationen, Monitoring und klare Verantwortung",
      ],
    },
    {
      q: "Wer treibt die Einführung von KI voran?",
      a: [
        "Ein paar Begeisterte",
        "Die Führung spricht darüber",
        "In jedem Team gibt es jemanden, der baut",
        "Gemeinsame Playbooks und interne Champions",
        "So arbeiten wir, und wir schulen laufend",
      ],
    },
  ],
};

export const GOVTECH_CASE_DE: Case = {
  who: "GovTech Singapore · Programm für KI-Produktmanagement",
  title: "Die erfahrensten Leute im Raum haben die meisten Notizen gemacht",
  body: "Vier Tage mit den Senior Product Leaders von GovTech Singapore in einem Programm für KI-Produktmanagement, das ich geleitet und unterrichtet habe. Im Laufe der Woche haben sie funktionierende KI-Prototypen gebaut. Was ich mitgenommen habe: Jede Entscheidung beginnt bei den Bürgerinnen und Bürgern, niemand wartet auf eine Erlaubnis, KI zu nutzen, und Seniorität kommt ohne Ego aus. Ich kam, um zu lehren, und ging mit einem Notizbuch voller eigener Erkenntnisse.",
  link: {
    label: "Den Beitrag auf LinkedIn lesen",
    href: "https://www.linkedin.com/posts/dejan-krstic-b4a7a98a_the-most-senior-people-in-the-room-were-the-share-7530901610605092864-Zq2r/",
  },
};

export const CLIENT_CASES_DE: Case[] = [
  {
    who: "Diamant Software · B2B-Buchhaltungssoftware, Deutschland",
    title: "Product Owner, die nicht programmieren, in einem regulierten Umfeld",
    body: "KI-Workshops für die Teams der Product Owner und Scrum Master. Der Wandel: der Product Owner als die Person, die den Kontext verantwortet, mit dem KI arbeitet. Denn in einem Umfeld voller Compliance-Regeln führen generische Prompts zu generischen Fehlern.",
  },
  {
    who: "HTW Berlin · Gastvorlesungen",
    title: "Produktgrundlagen für Menschen, die keine Produktmanager sind",
    body: "„Build the right thing and build it right“ und die Fortsetzung, jetzt mit KI. Studierende, die noch nie eine Spec geschrieben hatten, sahen dieselbe Idee zweimal gebaut, nach zwei verschiedenen Briefings: einmal so, dass sie genutzt wurde, einmal so, dass sie nur gut aussah.",
  },
  {
    who: "Clientology Institute · Experience Summit, Prag 2026",
    title: "Context is the work",
    body: "Ein Vortrag auf der Hauptbühne und eine praktische Masterclass für Menschen aus Design, CX und Produkt: von einem Kundenbedürfnis zu einem funktionierenden Prototyp, dann der schwierigere Teil, zu beurteilen, ob er etwas taugt.",
  },
];

export const BACKGROUND_CASES_DE: Case[] = [
  {
    who: "Spotify · Group Product Manager",
    title: "Auszahlungen für Creator und Unternehmen",
    body: "Leitete die Produktteams für Auszahlungen an Creator und Unternehmen in EMEA und baute KI-Agenten für Finance Operations.",
  },
  {
    who: "SoundCloud · Lead Product Manager",
    title: "Fan-Powered Royalties",
    body: "Brachte das erste nutzerzentrierte Auszahlungsmodell auf einer großen Streaming-Plattform an den Start, gemeinsam mit Ökonomen und Engineers, um zu modellieren, was es für Künstlerinnen und Künstler verändern würde.",
  },
];

export const PRINCIPLES_DE = [
  {
    title: "Kontext ist die eigentliche Arbeit",
    body: "KI verstärkt alles, was Sie ihr geben. Der größte Teil der Arbeit ist das Briefing: das Problem, die Nutzer, die Regeln Ihres Fachgebiets. Tools ändern sich jedes Quartal. Diese Fähigkeit nicht.",
  },
  {
    title: "So klein bauen, dass man lernt",
    body: "Ein Nachmittag, kein Quartal. Wenn ein Build Ihnen bis Freitag nichts beibringen kann, ist er zu groß.",
  },
  {
    title: "Prüfen, als hätten Sie es selbst gebaut",
    body: "Mit KI kann heute jeder etwas bauen. Die Fähigkeit liegt darin, es mit derselben Ernsthaftigkeit zu bewerten, mit der Sie es gebaut haben.",
  },
  {
    title: "Ihre Arbeit, keine Fallstudie",
    body: "Jede Übung läuft auf einem echten Problem aus Ihrem Job oder Ihrem Unternehmen. Sie gehen mit Ergebnissen, die Sie am Montag nutzen können.",
  },
];

// Talk titles stay in English: they are the titles the talks are given under.
export const TALKS_DE = [
  {
    title: "Context is the work",
    body: "Warum das Briefing und nicht das Tool entscheidet, was KI für Sie baut. Ein kurzer Vortrag, dann ein Live-Build.",
    where: "Experience Summit, Prag, 2026",
  },
  {
    title: "AI builders, not AI spectators",
    body: "Was sich für Produktleute ändert, wenn das Bauen nicht mehr der Engpass ist und Urteilsvermögen zur eigentlichen Aufgabe wird.",
    where: "Konferenzen und Führungsklausuren",
  },
  {
    title: "Build the right thing, now with AI",
    body: "Produktgrundlagen für Menschen, die noch keine Produktmanager sind, und wie KI das Tempo ändert, aber nicht die Regeln.",
    where: "HTW Berlin",
  },
];

export const COURSE_SESSIONS_DE = [
  {
    title: "Idee wählen und die Spec schreiben",
    body: "Wählen Sie eine Idee aus Ihrer Arbeit, die es wert ist, gebaut zu werden, und schreiben Sie dafür eine einseitige Spec. Live-Beispiel: Aus einer vagen Anfrage wird ein Skill. Dann schreiben Sie den ersten KI-Skill Ihres Produkts und testen ihn an einem echten Beispiel.",
    leave: "Eine einseitige Spec für Ihr KI-Produkt und sein erster KI-Skill, getestet an einem echten Beispiel",
  },
  {
    title: "Mit Vibe Coding bauen",
    body: "Beschreiben Sie Ihren einen Screen in einfachen Worten, direkt aus Ihrer Spec, und bauen Sie mit KI eine funktionierende Version.",
    leave: "Eine funktionierende Version Ihres einen Screens, aus Ihrer Spec in einfachen Worten gebaut",
  },
  {
    title: "Veröffentlichen: live, mit echter KI",
    body: "Stellen Sie Ihr Produkt unter einem öffentlichen Link live und verbinden Sie es mit einem echten KI-Modell, damit es wirklich antwortet.",
    leave: "Ihr KI-Produkt live unter einem öffentlichen Link, mit Antworten von einem echten KI-Modell",
  },
  {
    title: "Mit Evals prüfen, vorführen, die nächsten Schritte planen",
    body: "Schreiben Sie eine einfache Eval-Bewertungsskala, bewerten Sie Ihr Produkt, machen Sie eine Verbesserung und bewerten Sie erneut. Dann zeigen Sie es in einer 2-minütigen Demo und planen Ihre nächsten 30 Tage.",
    leave: "Eine einfache Eval-Bewertungsskala mit einer Bewertung vor und nach einer Verbesserung, eine 2-minütige Demo und ein 30-Tage-Plan",
  },
];
