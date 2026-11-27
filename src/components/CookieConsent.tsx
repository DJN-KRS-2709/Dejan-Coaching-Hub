import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { analyticsConfigured, loadAnalytics, readConsent, writeConsent } from "@/lib/analytics";

// Consent before any analytics. Renders nothing while no analytics is configured
// (today), so the site shows no banner and sets no cookies. See src/lib/analytics.ts.
const CookieConsent = () => {
  const de = useLang() === "de";
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!analyticsConfigured()) return;
    const sync = () => {
      const consent = readConsent();
      setShow(consent === null);
      if (consent === "granted") loadAnalytics();
    };
    sync();
    window.addEventListener("consent-change", sync);
    return () => window.removeEventListener("consent-change", sync);
  }, []);

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label={de ? "Einwilligung zu Cookies" : "Cookie consent"}
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto grid max-w-xl gap-4 rounded-3xl border border-ink/10 bg-white p-5 shadow-xl"
    >
      <p className="text-sm text-ink/80">
        {de
          ? "Darf ich eine Analyse nutzen, um zu sehen, welche Seiten hilfreich sind? Sie läuft nur, wenn Sie zustimmen. Details in der "
          : "May I use analytics to see which pages are useful? It only runs if you say yes. Details in the "}
        <Link to={de ? "/de/datenschutz" : "/privacy"} className="underline underline-offset-2">
          {de ? "Datenschutzerklärung" : "privacy notice"}
        </Link>
        .
      </p>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => writeConsent("denied")}>
          {de ? "Ablehnen" : "Decline"}
        </Button>
        <Button size="sm" onClick={() => writeConsent("granted")}>
          {de ? "Zustimmen" : "Accept"}
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
