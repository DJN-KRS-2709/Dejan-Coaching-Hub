// Analytics is OFF. The site loads no analytics and sets no cookies.
//
// If analytics is added later, set VITE_ANALYTICS_SRC to the script URL. Then:
//   - the consent banner (src/components/CookieConsent.tsx) appears on the first visit,
//   - the script loads only after the visitor clicks "Accept",
//   - "Decline" is as easy as "Accept", and the choice can be changed from the footer.
// Also add the tool to the Datenschutz page before switching it on.
export const ANALYTICS_SRC: string = import.meta.env.VITE_ANALYTICS_SRC || "";

export type Consent = "granted" | "denied";

const KEY = "consent.analytics";

export const analyticsConfigured = () => ANALYTICS_SRC.length > 0;

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent | null) {
  try {
    if (value) window.localStorage.setItem(KEY, value);
    else window.localStorage.removeItem(KEY);
  } catch {
    // Storage blocked: the banner simply shows again next time.
  }
  window.dispatchEvent(new Event("consent-change"));
}

let loaded = false;

export function loadAnalytics() {
  if (loaded || !analyticsConfigured() || readConsent() !== "granted") return;
  const script = document.createElement("script");
  script.src = ANALYTICS_SRC;
  script.defer = true;
  document.head.appendChild(script);
  loaded = true;
}
