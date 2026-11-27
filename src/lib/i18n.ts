import { useLocation } from "react-router-dom";

// Two languages: English (default, no prefix) and German (under /de).
// Page copy uses t("English", "Deutsch") inline; content lists live in src/content (English)
// and src/content/de.ts (German), picked by useContent(). The German copy is a draft for Dejan's
// review: every pair is listed in qa/de-review.md.

export type Lang = "en" | "de";

export const langOf = (pathname: string): Lang => (pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en");

export const useLang = (): Lang => langOf(useLocation().pathname);

export type T = (en: string, de: string) => string;

export const useT = (): T => {
  const lang = useLang();
  return (en, de) => (lang === "de" ? de : en);
};

// English page and its German twin. Pages missing here exist in one language only:
// /gulf is English only.
export const PAGE_PAIRS: [en: string, de: string][] = [
  ["/", "/de"],
  ["/self-check", "/de/self-check"],
  ["/course", "/de/course"],
  ["/work-with-me", "/de/work-with-me"],
  ["/speaking", "/de/speaking"],
  ["/about", "/de/about"],
  ["/privacy", "/de/datenschutz"],
  ["/impressum", "/de/impressum"],
];

// English-only pages, and where the language switch sends German readers from there.
export const EN_ONLY: Record<string, string> = { "/gulf": "/de/work-with-me" };

const trim = (p: string) => (p !== "/" ? p.replace(/\/+$/, "") || "/" : "/");

// Turn an English site path (with an optional ?query or #hash) into the path for `lang`.
export function localize(to: string, lang: Lang): string {
  if (lang === "en") return to;
  const m = to.match(/^([^?#]*)(.*)$/)!;
  const pair = PAGE_PAIRS.find(([en]) => en === trim(m[1] || "/"));
  return pair ? pair[1] + m[2] : to;
}

export const useLocalize = () => {
  const lang = useLang();
  return (to: string) => localize(to, lang);
};

// The same page in the other language, for the switch and hreflang. Null when there is none.
export function twinOf(pathname: string): { en: string; de: string } | null {
  const path = trim(pathname);
  const pair = PAGE_PAIRS.find(([en, de]) => en === path || de === path);
  return pair ? { en: pair[0], de: pair[1] } : null;
}
