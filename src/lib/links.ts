import { LEGAL } from "@/lib/legal";

// Outbound links used across the site. Change them here, not in the pages.

// Free 20-minute intro call. This is the only booking link on the site.
// It points at the existing Setmore account (booking.setmore.com/scheduleappointment/9307d7e5-...
// redirects here).
// TODO before launch: create a free "20-min intro call" service in Setmore, hide the old paid
// hourly services, and paste the direct link to the new service here.
export const INTRO_CALL_URL = "https://dejankrstic.setmore.com";
export const INTRO_CALL_LABEL = "Book a free 20-min intro call";

export const LINKEDIN_URL = "https://www.linkedin.com/in/dejan-krstic-b4a7a98a/";
export const CONTACT_EMAIL = LEGAL.email;

// The one experience figure used everywhere on the site.
export const YEARS = "16+";
