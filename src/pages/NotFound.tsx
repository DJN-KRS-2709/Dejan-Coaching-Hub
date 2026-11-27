import { Link } from "react-router-dom";
import { PageHero, PageShell } from "@/components/site";
import IntroCallLink from "@/components/IntroCallLink";
import { TEXT_LINK } from "@/components/site";
import { usePageTitle } from "@/hooks/use-page-title";
import { useLocalize, useT } from "@/lib/i18n";

const NotFound = () => {
  const t = useT();
  const lp = useLocalize();
  usePageTitle(t("Page not found", "Seite nicht gefunden"));
  return (
    <PageShell>
      <PageHero
        eyebrow="404"
        title={t("Page not found.", "Seite nicht gefunden.")}
        lead={t(
          "This page does not exist or has moved. Start from the home page, or book a free 20-minute intro call.",
          "Diese Seite gibt es nicht oder sie ist umgezogen. Starten Sie auf der Startseite oder buchen Sie ein kostenloses 20-minütiges Kennenlerngespräch.",
        )}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <IntroCallLink size="lg" />
          <Link to={lp("/")} className={TEXT_LINK}>
            {t("Go to the home page", "Zur Startseite")}
          </Link>
        </div>
      </PageHero>
    </PageShell>
  );
};

export default NotFound;
