import { useEffect } from "react";

const SITE = "Dejan Krstic";

// Sets the browser tab title and meta description for a page.
export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : SITE;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}
