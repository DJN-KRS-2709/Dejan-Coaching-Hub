import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Brand";
import IntroCallLink from "@/components/IntroCallLink";
import { NAV_LINKS } from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/links";
import { analyticsConfigured, writeConsent } from "@/lib/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hasAnalytics, setHasAnalytics] = useState(false);
  useEffect(() => setHasAnalytics(analyticsConfigured()), []);

  return (
    <footer className="w-full bg-ink text-white">
      <div className="container px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-md">
            <p className="mb-6 font-display text-5xl leading-[0.9] md:text-6xl">
              Let's build<br />what's next.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <IntroCallLink />
              <a href={`mailto:${CONTACT_EMAIL}`} className={buttonVariants({ variant: "outlineLight" })}>
                Email me <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:flex-col">
            <Link to="/" className="text-sm text-white/60 transition-colors hover:text-white">Home</Link>
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-white/60 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <span className="text-lg text-white">
              <Wordmark />
            </span>
            <p className="text-sm text-white/50">© {currentYear} Dejan Krstic</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/impressum" className="text-sm text-white/50 transition-colors hover:text-white">Impressum</Link>
              <Link to="/datenschutz" className="text-sm text-white/50 transition-colors hover:text-white">Datenschutz</Link>
              {hasAnalytics && (
                <button
                  type="button"
                  onClick={() => writeConsent(null)}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Cookie settings
                </button>
              )}
            </div>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/50 transition-colors hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
