import { CONTACT_EMAIL } from "@/lib/legal";

// Outbound links used across the site. Change them here, not in the pages.

// Free 20-minute intro call. This is the only booking link on the site: every booking button
// and card link uses INTRO_CALL_URL. It opens the dedicated free 20-min intro call service in
// Setmore. The paid hourly services are hidden in Setmore (done by Dejan's sales bot, Nov 27 2026).
export const INTRO_CALL_URL =
  "https://dejankrstic.setmore.com/book?step=time-slot&products=f8908de2-e197-493f-9bd3-8c360f59ec66&type=service&staff=2b51ab0a-a501-4239-8d07-1cd551a5f096&staffSelected=true";
export const INTRO_CALL_LABEL = "Book a free 20-min call";
export const INTRO_CALL_LABEL_DE = "Kostenloses Erstgespräch buchen";

export const LINKEDIN_URL = "https://www.linkedin.com/in/dejan-krstic-b4a7a98a/";
// Set in src/lib/legal.ts, re-exported here for the pages.
export { CONTACT_EMAIL };

// Short bio: About page and the share card (OG and Twitter description in index.html).
export const SHORT_BIO =
  "I help product people and teams go from trying AI to building with it. Ex-CPO at Product School · Spotify · SoundCloud.";
export const SHORT_BIO_DE =
  "Ich helfe Produktverantwortlichen und ihren Teams, KI nicht nur auszuprobieren, sondern damit zu bauen. Ex-CPO at Product School · Spotify · SoundCloud.";

// The one experience figure used everywhere on the site.
export const YEARS = "20+";
