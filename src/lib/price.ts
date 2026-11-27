import type { Lang } from "@/lib/i18n";

// Every price on the site, in euros. Shown through formatPrice() only.
export const PRICE = {
  courseEarly: 700,
  courseRegular: 795,
  coaching: 1490,
  diagnostic: 1900,
  workshopHalfDay: 1900,
  workshopFullDay: 3500,
  builderProgram: 9900,
  advisory: 4000,
  keynote: 2500,
} as const;

// The one price formatter. English: "€1,900". German: "1.900 €" (dot for thousands, a
// non-breaking space, the euro sign after the number).
export function formatPrice(amount: number, lang: Lang = "en"): string {
  const digits = String(Math.round(amount)).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "de" ? "." : ",");
  return lang === "de" ? `${digits}\u00a0€` : `€${digits}`;
}
