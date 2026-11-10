import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Brand";
import { NAV_LINKS } from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/links";
import { analyticsConfigured, writeConsent } from "@/lib/analytics";

// Every footer link is at least 44px tall, so it is easy to tap on a phone.
const FOOTER_LINK = "inline-flex min-h-[44px] items-center text-sm text-white/60 transition-colors hover:text-white";
const LEGAL_LINK = "inline-flex min-h-[44px] items-center text-sm text-white/50 transition-colors hover:text-white";

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
            <a href={`mailto:${CONTACT_EMAIL}`} className={buttonVariants({ variant: "outlineLight" })}>
              Email me <Mail className="h-4 w-4" />
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 sm:flex sm:flex-col sm:gap-0">
            <Link to="/" className={FOOTER_LINK}>Home</Link>
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className={FOOTER_LINK}>
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
            <div className="flex flex-wrap items-center gap-x-6">
              <Link to="/impressum" className={LEGAL_LINK}>Impressum</Link>
              <Link to="/datenschutz" className={LEGAL_LINK}>Datenschutz</Link>
              {hasAnalytics && (
                <button type="button" onClick={() => writeConsent(null)} className={LEGAL_LINK}>
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
            className="-ml-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/50 transition-colors hover:text-white md:-mr-3 md:ml-0"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
