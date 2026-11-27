import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EN_ONLY, langOf, PAGE_PAIRS, twinOf } from "@/lib/i18n";

// Per page: one canonical URL on the live domain, hreflang alternates for pages that exist in
// English and German, and the html lang attribute. Unknown paths (the 404 page) get no canonical.
// Keep PUBLIC_PATHS in sync with public/sitemap.xml.
export const SITE_URL = "https://www.dejan-krstic.com";
export const PUBLIC_PATHS = [...PAGE_PAIRS.flat(), ...Object.keys(EN_ONLY)];

const url = (path: string) => `${SITE_URL}${path}`;

function setLink(selector: string, attrs: Record<string, string> | null) {
  let link = document.querySelector<HTMLLinkElement>(selector);
  if (!attrs) {
    link?.remove();
    return;
  }
  if (!link) {
    link = document.createElement("link");
    document.head.appendChild(link);
  }
  for (const [k, v] of Object.entries(attrs)) link.setAttribute(k, v);
}

const Canonical = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    document.documentElement.lang = langOf(path);
    const known = PUBLIC_PATHS.includes(path);
    setLink('link[rel="canonical"]', known ? { rel: "canonical", href: url(path) } : null);
    const twin = known ? twinOf(path) : null;
    setLink('link[rel="alternate"][hreflang="en"]', twin ? { rel: "alternate", hreflang: "en", href: url(twin.en) } : null);
    setLink('link[rel="alternate"][hreflang="de"]', twin ? { rel: "alternate", hreflang: "de", href: url(twin.de) } : null);
    setLink(
      'link[rel="alternate"][hreflang="x-default"]',
      twin ? { rel: "alternate", hreflang: "x-default", href: url(twin.en) } : null,
    );
  }, [pathname]);
  return null;
};

export default Canonical;
