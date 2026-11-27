// German content: the same lists as offers.ts, stages.ts and proof.ts, in German (Sie form).
// DRAFT for Dejan's review. Names, prices and brand terms (Prompt to Product, talk titles,
// company names) stay as they are. Every string is listed next to its English source in
// qa/de-review.md.
import { PRICE, formatPrice } from "@/lib/price";
import type { OfferGroup } from "@/content/offers";
import type { Case } from "@/content/proof";
import type { Mode, Question, Stage } from "@/content/stages";

export const COURSE_PRICE_DE = formatPrice(PRICE.courseEarly, "de");
export const COURSE_PRICE_NOTE_DE = `Frühbucherpreis bis 14 Tage vor Kursbeginn. Danach ${formatPrice(PRICE.courseRegular, "de")}.`;
export const COURSE_PRICE_LINE_DE = `${COURSE_PRICE_DE} Frühbucherpreis bis 14 Tage vor Kursbeginn. Danach ${formatPrice(PRICE.courseRegular, "de")}.`;

export const OFFER_GROUPS_DE: Record<OfferGroup, { title: string; lead: string }> = {
  you: { title: "Für Sie", lead: "Lernen Sie in zwei Wochen, mit KI zu bauen, oder arbeiten Sie eins zu eins mit mir." },
  team: {
    title: "Für Ihr Team",
    lead: "Festpreise, Zahlung auf Rechnung. Jede Zusammenarbeit mit Teams beginnt mit einem kostenlosen Erstgespräch.",
  },
  leaders: { title: "Für Produktverantwortliche in Führungsrollen", lead: "Für alle, die den Wandel anführen, nicht nur mitlernen." },
  speaking: { title: "Vorträge", lead: "Für Konferenzen, Führungsklausuren und Kick-offs." },
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
    body: "In 14 Tagen ein eigenes KI-Produkt live bringen. Grundlagen des KI-Produktmanagements, mit Vibe Coding zum funktionierenden, veröffentlichten Produkt und einfache Evals mit klarem Bewertungsraster. Für den Einstieg, wenn KI noch neu für Sie ist.",
    format: "Zweiwöchiger Live-Kurs · 4 Sessions à 2 Stunden, 8 Live-Stunden · max. 20 Personen · ohne Programmierkenntnisse",
    price: COURSE_PRICE_DE,
    priceNote: COURSE_PRICE_NOTE_DE,
    actionLabel: "Die zwei Wochen im Detail",
  },
  coaching: {
    title: "1:1-Coaching",
    body: "Für Produktverantwortliche, die schon selbst bauen und andere durch den Wandel führen wollen. Ihre Arbeit, Ihre Laufbahn, Ihr Team.",
    format: "3 Monate · 6 Termine",
    price: formatPrice(PRICE.coaching, "de"),
    tag: "Wenige Plätze",
    actionLabel: "1:1-Coaching anfragen",
  },
  diagnostic: {
    title: "Team-Diagnose",
    body: "Wo Ihre Teams wirklich stehen, Team für Team. Interviews, der Selbstcheck und ein Blick darauf, wie die Arbeit tatsächlich läuft. Sie erhalten eine Auswertung für die Führungsebene und einen 90-Tage-Plan.",
    format: "Festpreis · jede Stufe",
    price: formatPrice(PRICE.diagnostic, "de"),
    priceNote: "Wird auf ein Programm angerechnet",
    actionLabel: "Team-Diagnose anfragen",
  },
  workshops: {
    title: "Workshops",
    body: "Eine gemeinsame Sprache für Produkt und KI oder ein erster praktischer Build an Ihrem eigenen Backlog. Auf Deutsch oder Englisch, vor Ort im DACH-Raum oder remote.",
    format: "Bis zu 20 Personen",
    price: `${formatPrice(PRICE.workshopHalfDay, "de")} Halbtag`,
    priceNote: `${formatPrice(PRICE.workshopFullDay, "de")} Ganztag`,
    actionLabel: "Workshops anfragen",
  },
  "builder-program": {
    title: "Builder-Programm",
    body: "Sechs Wochen, die ein Team eine ganze Stufe weiterbringen. Jedes Lab arbeitet mit Ihren eigenen Themen. Vor der ersten Session setze ich mich mit Ihrem Geschäft auseinander, damit nichts nach Schema F wirkt.",
    format: "6 Wochen · Labs an Ihren eigenen Themen",
    price: `ab ${formatPrice(PRICE.builderProgram, "de")}`,
    priceNote: "Für bis zu 20 Personen",
    actionLabel: "Builder-Programm anfragen",
  },
  advisory: {
    title: "Beratung für Produktverantwortliche in Führungsrollen",
    body: "Für CPOs und Heads of Product, die den Wandel anführen. Ein Sparringspartner für strategische Wetten, Organisationsdesign und die Frage, was Sie bewusst sein lassen.",
    format: "Monatlich",
    price: `ab ${formatPrice(PRICE.advisory, "de")}`,
    priceNote: "pro Monat",
    actionLabel: "Beratung anfragen",
  },
  keynotes: {
    title: "Keynotes",
    body: "Ein Vortrag, nach dem Ihr Publikum selbst loslegen will, mit anschließender Live-Demo.",
    format: "20 bis 45 Minuten · Deutsch oder Englisch",
    price: `ab ${formatPrice(PRICE.keynote, "de")}`,
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
        "Sie wissen nicht genau, wie im Produktmanagement entschieden wird, was gebaut wird.",
        "Sie haben den Verdacht, schon hinterherzuhinken.",
      ],
      next: "Verstehen Sie, wie KI wirklich funktioniert und wie im Produktmanagement entschieden wird, was sich zu bauen lohnt. Verständlich erklärt, ohne Code.",
      help: [
        { label: "Prompt to Product", to: "/course" },
        { label: "Selbstcheck", to: "/self-check" },
      ],
    },
    team: {
      says: "Wir haben eine KI-Richtlinie, drei Enthusiasten und viele Meinungen.",
      here: [
        "KI wird privat genutzt, ungleich verteilt und meist unsichtbar.",
        "Es gibt kein gemeinsames Verständnis davon, was gute Produktarbeit ist.",
        "Die Führung will einen Plan. Die Teams wollen grünes Licht.",
      ],
      next: "Geben Sie allen dieselbe Sprache für Produktarbeit und für KI, damit es im nächsten Gespräch um Ihre Kundschaft geht statt um Tools.",
      help: [
        { label: "Keynote", to: "/speaking" },
        { label: "Team-Diagnose", to: "/work-with-me#diagnostic" },
      ],
    },
  },
  {
    name: "Sattelfest",
    sub: "Beherrscht das Handwerk",
    person: {
      says: "Ich kann das Problem, die Zielgruppe und das gewünschte Ergebnis benennen. Selbst gebaut habe ich noch nichts.",
      here: [
        "Sie können eine Produktentscheidung erklären und begründen, warum sie wichtig ist.",
        "Sie schreiben Dokumente, nach denen andere bauen.",
        "Selbst zu bauen fühlt sich noch nach dem Job von jemand anderem an.",
      ],
      next: "Bauen Sie Ihren ersten funktionierenden Prototyp zu einem konkreten Problem aus Ihrem Arbeitsalltag. An einem Nachmittag, nicht in einem Quartal.",
      help: [
        { label: "Prompt to Product", to: "/course" },
        { label: "Selbstcheck", to: "/self-check" },
      ],
    },
    team: {
      says: "Wir haben ein gemeinsames Product Operating Model. KI findet in privaten Chatfenstern statt.",
      here: [
        "Die Teams arbeiten von Problemen und Ergebnissen aus, nicht nur von Feature-Listen.",
        "Die private KI-Nutzung spart Zeit, ändert aber nichts daran, wie Sie liefern.",
        "Noch kein Team hat mit KI an echten Aufgaben etwas gebaut.",
      ],
      next: "Bringen Sie jedes Team zu seinem ersten praktischen KI-Build, am eigenen Backlog und mit einer klaren Hypothese.",
      help: [
        { label: "Workshop", to: "/work-with-me#workshops" },
        { label: "Team-Diagnose", to: "/work-with-me#diagnostic" },
      ],
    },
  },
  {
    name: "Aktiv",
    sub: "Baut selbst",
    person: {
      says: "Ich habe an einem Nachmittag etwas gebaut, das funktioniert. Ob es wirklich gut ist, weiß ich nicht genau.",
      here: [
        "Sie haben mit KI Prototypen, Präsentationen oder Bots erstellt.",
        "Manches wird genutzt. Das meiste wird einmal bewundert.",
        "Sie beurteilen Ihre Ergebnisse danach, wie sie aussehen.",
      ],
      next: "Prüfen Sie, was Sie bauen, mit derselben Sorgfalt, mit der Sie es gebaut haben: mit echten Nutzerinnen und Nutzern testen, messen, entscheiden. Und dann machen Sie es zu einem festen Teil Ihrer Woche.",
      help: [
        { label: "Prompt to Product", to: "/course" },
        { label: "1:1-Coaching", to: "/work-with-me#coaching" },
      ],
    },
    team: {
      says: "Wir haben überall Piloten. Nur wenige erreichen die Kundschaft.",
      here: [
        "Die meisten Teams haben Prototypen und Piloten.",
        "Die Qualität hängt davon ab, wer gebaut hat.",
        "Nichts schafft den Schritt von der Demo in den Betrieb.",
      ],
      next: "Vom Prototyp zur Qualität: gemeinsamer Kontext, schriftliche Standards und ein Weg, KI-Ergebnisse zu prüfen, bevor sie bei der Kundschaft ankommen.",
      help: [
        { label: "Builder-Programm", to: "/work-with-me#builder-program" },
        { label: "Workshop", to: "/work-with-me#workshops" },
      ],
    },
  },
  {
    name: "Im Einsatz",
    sub: "KI im Arbeitsalltag",
    person: {
      says: "KI erledigt echte Arbeit in meiner Woche, und ich prüfe sie.",
      here: [
        "Agenten und Workflows übernehmen Teile Ihrer Arbeit.",
        "Sie pflegen Kontext, den Ihre Tools wiederverwenden, statt jedes Mal mit einem leeren Prompt anzufangen.",
        "Kolleginnen und Kollegen fragen Sie, wie Sie das eingerichtet haben.",
      ],
      next: "Entwickeln Sie KI-native Produkte, nicht nur KI-gestützte Arbeit, und nehmen Sie andere auf denselben Weg mit.",
      help: [
        { label: "1:1-Coaching", to: "/work-with-me#coaching" },
        { label: "Beratung", to: "/work-with-me#advisory" },
      ],
    },
    team: {
      says: "KI ist Teil unserer Lieferung. Specs, Kontext und Qualitätschecks sind gemeinsamer Standard.",
      here: [
        "Specs werden so geschrieben, dass Menschen und KI danach bauen können.",
        "Review-Standards gibt es, und sie werden genutzt.",
        "Interne Champions geben ihre Playbooks an andere Teams weiter.",
      ],
      next: "Bringen Sie KI-native Produkte und Agenten in den Produktivbetrieb, mit Evaluierung, Governance und klarer Verantwortung.",
      help: [
        { label: "Builder-Programm", to: "/work-with-me#builder-program" },
        { label: "Beratung", to: "/work-with-me#advisory" },
      ],
    },
  },
  {
    name: "KI-nativ",
    sub: "Treibt den Wandel",
    person: {
      says: "Ich entwickle Produkte, in denen KI Teil des Systems ist, und ich führe Menschen, die bauen.",
      here: [
        "Sie bringen KI-Features oder Agenten live, die Kundinnen und Kunden nutzen.",
        "Sie entscheiden auf Basis von Evaluierungen und Produktivdaten.",
        "Sie prägen, wie andere mit KI arbeiten.",
      ],
      next: "Tragen Sie es über Ihr eigenes Team hinaus und werden Sie zu der Person, von der Ihre Organisation lernt.",
      help: [
        { label: "Beratung", to: "/work-with-me#advisory" },
        { label: "1:1-Coaching", to: "/work-with-me#coaching" },
      ],
    },
    team: {
      says: "KI-native Produkte laufen im Produktivbetrieb. Unsere Leute wachsen immer weiter in die Builder-Rolle hinein.",
      here: [
        "KI-Features und Agenten laufen im Produktivbetrieb, gemessen und mit klarer Governance.",
        "Die Teams verantworten ihre Evaluierung und ihren Kontext selbst.",
        "Neue Mitarbeitende lernen in den ersten Wochen, selbst zu bauen.",
      ],
      next: "Halten Sie es lebendig, während sich die Tools verändern: Bauen Sie das Lernen im eigenen Unternehmen auf, statt es einzukaufen.",
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
      q: "Was haben Sie in den letzten 90 Tagen mit KI erstellt?",
      a: [
        "Nichts außer Chats und E-Mails",
        "Bessere Dokumente: Entwürfe, Zusammenfassungen, Recherchen",
        "Einen funktionierenden Prototyp, den man anklicken kann",
        "Einen Workflow oder Agenten, der ohne mich läuft",
        "Ein Feature oder einen Agenten, den Kundinnen und Kunden nutzen",
      ],
    },
    {
      q: "Bevor etwas gebaut wird, ...",
      a: [
        "baue ich nicht. Das machen andere",
        "schreibe ich Problem, Zielgruppe und gewünschtes Ergebnis auf",
        "schreibe ich den Kontext so auf, dass die KI mit mir bauen kann",
        "greife ich auf eine Kontext-Bibliothek zurück, die meine Tools schon kennen",
        "richte ich Evaluierungen und Leitplanken ein, bevor es live geht",
      ],
    },
    {
      q: "Woran erkennen Sie, ob ein KI-Ergebnis wirklich gut ist?",
      a: [
        "Ich vertraue ihm, oder ich nutze es nicht",
        "Ich lese es und korrigiere, was falsch aussieht",
        "Ich zeige es Nutzerinnen und Nutzern und beobachte, was passiert",
        "Ich prüfe es anhand von Kriterien, die ich schriftlich festgelegt habe",
        "Evaluierungen und Produktivdaten zeigen es mir",
      ],
    },
    {
      q: "Wer lernt von Ihnen etwas über KI?",
      a: [
        "Noch niemand. Ich lerne selbst noch",
        "Ab und zu eine Kollegin oder ein Kollege",
        "Mein Team, wenn ich zeige, was ich gebaut habe",
        "Andere Teams fragen, wie ich meine Workflows aufgesetzt habe",
        "Ich präge, wie meine Organisation mit KI baut",
      ],
    },
  ],
  team: [
    {
      q: "Was hat Ihr Team in den letzten 90 Tagen mit KI live gebracht?",
      a: [
        "Nichts Offizielles",
        "Persönliche Produktivität: Entwürfe, Zusammenfassungen",
        "Prototypen und Piloten",
        "KI-Schritte in unserem Delivery-Prozess",
        "KI-Features oder Agenten im Produktivbetrieb",
      ],
    },
    {
      q: "Wie entscheidet Ihr Team, was gebaut wird?",
      a: [
        "Wer am lautesten fragt, oder die Roadmap, die wir geerbt haben",
        "Ein gemeinsamer Prozess: Problem, Ergebnis, Discovery",
        "Wir entscheiden anhand von Prototypen",
        "Gemeinsame Specs und Kontext, nach denen Menschen und KI bauen",
        "Wetten auf KI-native Produkte mit klarer Wirtschaftlichkeit",
      ],
    },
    {
      q: "Wie prüfen Sie die Qualität von KI-Ergebnissen?",
      a: [
        "Gar nicht, oder KI ist nicht erlaubt",
        "Alle prüfen ihre eigenen Ergebnisse",
        "Wir testen Prototypen mit Nutzerinnen und Nutzern",
        "Quality Gates und Review-Standards",
        "Evaluierungen, Monitoring und klare Verantwortung",
      ],
    },
    {
      q: "Wer treibt die Einführung von KI voran?",
      a: [
        "Ein paar Enthusiasten",
        "Die Führung spricht darüber",
        "In jedem Team gibt es jemanden, der baut",
        "Gemeinsame Playbooks und interne Champions",
        "So arbeiten wir einfach, und wir schulen laufend",
      ],
    },
  ],
};

export const GOVTECH_CASE_DE: Case = {
  who: "GovTech Singapore · AI product management program",
  title: "Die erfahrensten Führungskräfte im Raum haben am meisten mitgeschrieben",
  body: "Vier Tage mit den erfahrenen Produktführungskräften von GovTech Singapore, in einem KI-Produktmanagement-Programm, das ich geleitet und unterrichtet habe. Im Laufe der Woche haben sie funktionierende KI-Prototypen gebaut. Was ich mitgenommen habe: Jede Entscheidung beginnt bei den Bürgerinnen und Bürgern, niemand wartet auf eine Erlaubnis, um KI zu nutzen, und Seniorität kommt ohne Ego aus. Ich kam, um zu unterrichten, und ging mit einem Notizbuch voller eigener Erkenntnisse.",
  link: {
    label: "Beitrag auf LinkedIn lesen",
    href: "https://www.linkedin.com/posts/dejan-krstic-b4a7a98a_the-most-senior-people-in-the-room-were-the-share-7530901610605092864-Zq2r/",
  },
};

export const CLIENT_CASES_DE: Case[] = [
  {
    who: "Diamant Software · B2B-Buchhaltungssoftware, Deutschland",
    title: "Product Owner ohne Programmierkenntnisse in einer regulierten Branche",
    body: "KI-Workshops für die Teams der Product Owner und Scrum Master. Der Perspektivwechsel: Der Product Owner verantwortet den Kontext, mit dem die KI arbeitet. Denn in einer Branche voller Compliance-Regeln führen generische Prompts zu generischen Fehlern.",
  },
  {
    who: "HTW Berlin · Gastvorlesungen",
    title: "Produktgrundlagen für alle, die nicht im Produktmanagement arbeiten",
    body: "„Build the right thing and build it right“ und die Fortsetzung, jetzt mit KI. Studierende, die noch nie eine Spec geschrieben hatten, sahen zu, wie dieselbe Idee zweimal nach zwei verschiedenen Briefings gebaut wurde: einmal mit einem Ergebnis, das genutzt wurde, einmal mit einem, das nur gut aussah.",
  },
  {
    who: "Clientology Institute · Experience Summit, Prag 2026",
    title: "Context is the work",
    body: "Ein Vortrag auf der Hauptbühne und eine praktische Masterclass für Menschen aus Design, CX und Produkt: vom Kundenbedürfnis zum funktionierenden Prototyp und dann zum schwierigeren Teil, der Frage, ob er wirklich gut ist.",
  },
];

export const BACKGROUND_CASES_DE: Case[] = [
  {
    who: "Spotify · Group Product Manager",
    title: "Creator- und Enterprise-Auszahlungen",
    body: "Leitete die Produktteams für Auszahlungen an Creator und Unternehmen in der Region EMEA und baute KI-Agenten für Finance Operations.",
  },
  {
    who: "SoundCloud · Lead Product Manager",
    title: "Fan-Powered Royalties",
    body: "Führte das erste nutzerzentrierte Auszahlungsmodell auf einer großen Streamingplattform ein und modellierte gemeinsam mit Ökonomen und Engineers, was es für Artists verändern würde.",
  },
];

export const PRINCIPLES_DE = [
  {
    title: "Auf den Kontext kommt es an",
    body: "KI vervielfacht, was immer Sie ihr geben. Der Großteil der Arbeit steckt im Briefing: das Problem, die Zielgruppe, die Regeln Ihrer Branche. Tools ändern sich jedes Quartal. Diese Fähigkeit nicht.",
  },
  {
    title: "Klein genug bauen, um daraus zu lernen",
    body: "Ein Nachmittag, kein Quartal. Wenn Sie aus einem Build bis Freitag nichts lernen können, ist er zu groß.",
  },
  {
    title: "Bewerten, als hätten Sie es selbst gebaut",
    body: "Mit KI kann heute jede und jeder etwas erstellen. Die eigentliche Kunst ist, es mit derselben Sorgfalt zu bewerten, mit der Sie es gebaut haben.",
  },
  {
    title: "Ihre Arbeit, keine Fallstudie",
    body: "Jede Übung dreht sich um ein konkretes Problem aus Ihrem Job oder Ihrem Unternehmen. Sie gehen mit Ergebnissen nach Hause, die Sie am Montag nutzen können.",
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
    body: "Was sich im Produktmanagement ändert, wenn das Bauen nicht mehr der Engpass ist und gutes Urteilsvermögen zur eigentlichen Aufgabe wird.",
    where: "Konferenzen und Führungsklausuren",
  },
  {
    title: "Build the right thing, now with AI",
    body: "Produktgrundlagen für alle, die (noch) nicht im Produktmanagement arbeiten, und wie KI das Tempo verändert, aber nicht die Regeln.",
    where: "HTW Berlin",
  },
];

export const COURSE_SESSIONS_DE = [
  {
    title: "Idee auswählen und Spec schreiben",
    body: "Wählen Sie eine Idee aus Ihrem Arbeitsalltag, die sich zu bauen lohnt, und schreiben Sie dafür eine einseitige Spec. Live-Beispiel: aus einer vagen Anfrage einen Skill machen. Danach schreiben Sie den ersten KI-Skill für Ihr Produkt und testen ihn an einem echten Beispiel.",
    leave: "Eine einseitige Spec für Ihr KI-Produkt und sein erster KI-Skill, an einem echten Beispiel getestet",
  },
  {
    title: "Mit Vibe Coding bauen",
    body: "Beschreiben Sie Ihren Screen in einfachen Worten, direkt aus Ihrer Spec, und bauen Sie mit KI eine funktionierende Version.",
    leave: "Eine funktionierende Version Ihres Screens, in einfachen Worten aus Ihrer Spec gebaut",
  },
  {
    title: "Live schalten, mit echter KI",
    body: "Schalten Sie Ihr Produkt unter einem öffentlichen Link live und verbinden Sie es mit einem echten KI-Modell, damit es wirklich antwortet.",
    leave: "Ihr KI-Produkt live unter einem öffentlichen Link, mit Antworten von einem echten KI-Modell",
  },
  {
    title: "Mit Evals prüfen, präsentieren, nächste Schritte planen",
    body: "Schreiben Sie ein einfaches Eval-Bewertungsraster, bewerten Sie Ihr Produkt, nehmen Sie eine Verbesserung vor und bewerten Sie erneut. Dann stellen Sie es in einer 2-Minuten-Demo vor und planen Ihre nächsten 30 Tage.",
    leave: "Ein einfaches Eval-Bewertungsraster mit Bewertung vor und nach einer Verbesserung, eine 2-Minuten-Demo und ein 30-Tage-Plan",
  },
];
