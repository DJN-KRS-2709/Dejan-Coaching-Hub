import { Link } from "react-router-dom";
import { PageHero, PageShell } from "@/components/site";
import { buttonVariants } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";

const NotFound = () => {
  usePageTitle("Page not found");
  return (
    <PageShell>
      <PageHero
        eyebrow="404"
        title="Page not found."
        lead="This page does not exist or has moved. Start from the home page, or find your stage."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className={buttonVariants({ size: "lg" })}>
            Go to the home page
          </Link>
          <Link to="/self-check" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Find your stage
          </Link>
        </div>
      </PageHero>
    </PageShell>
  );
};

export default NotFound;
