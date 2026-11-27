import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// One canonical URL per public page, on the live domain. Unknown paths (the 404 page) get none.
// Keep this list in sync with public/sitemap.xml.
export const SITE_URL = "https://www.dejan-krstic.com";
export const PUBLIC_PATHS = ["/", "/self-check", "/course", "/work-with-me", "/speaking", "/about", "/impressum", "/datenschutz"];

const Canonical = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!PUBLIC_PATHS.includes(path)) {
      link?.remove();
      return;
    }
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${SITE_URL}${path === "/" ? "/" : path}`;
  }, [pathname]);
  return null;
};

export default Canonical;
