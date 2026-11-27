import { Link } from "react-router-dom";
import { PageHero, PageShell } from "@/components/site";
import IntroCallLink from "@/components/IntroCallLink";
import { TEXT_LINK } from "@/components/site";
import { usePageTitle } from "@/hooks/use-page-title";

const NotFound = () => {
  usePageTitle("Page not found");
  return (
    <PageShell>
      <PageHero
        eyebrow="404"
        title="Page not found."
        lead="This page does not exist or has moved. Start from the home page, or book a free 20-minute intro call."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <IntroCallLink size="lg" />
          <Link to="/" className={TEXT_LINK}>
            Go to the home page
          </Link>
        </div>
      </PageHero>
    </PageShell>
  );
};

export default NotFound;
