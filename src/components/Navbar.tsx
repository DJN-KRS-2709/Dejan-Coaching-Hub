import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Brand";
import { FOCUS_RING } from "@/lib/focus";
import IntroCallLink from "@/components/IntroCallLink";
import LangSwitch from "@/components/LangSwitch";
import { localize, useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

const NAV = [
  { to: "/self-check", label: "Self-check", de: "Selbstcheck" },
  { to: "/course", label: "Course", de: "Kurs" },
  { to: "/work-with-me", label: "Work with me", de: "Zusammenarbeit" },
  { to: "/speaking", label: "Speaking", de: "Vorträge" },
  { to: "/about", label: "About", de: "Über mich" },
];

// The main navigation in the page language.
export const navLinks = (lang: Lang) =>
  NAV.map((l) => ({ to: localize(l.to, lang), label: lang === "de" ? l.de : l.label }));

const Navbar = () => {
  const lang = useLang();
  const de = lang === "de";
  const NAV_LINKS = navLinks(lang);
  const home = localize("/", lang);
  const [open, setOpen] = useState(false);
  // Phones: the booking pill stays hidden until the first section (the hero) has scrolled away.
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector("main section");
      setPastHero(hero ? hero.getBoundingClientRect().bottom <= 64 : window.scrollY > 400);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-ink/5 bg-canvas/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-2 px-4 md:gap-4 md:px-6">
        <Link to={home} aria-label={de ? "Dejan Krstic, Startseite" : "Dejan Krstic, home"} className={`inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap text-[18px] text-ink sm:text-[20px] md:text-[24px] ${FOCUS_RING}`} onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav aria-label={de ? "Hauptnavigation" : "Main"} className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `inline-flex min-h-[44px] items-center rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex min-w-0 items-center gap-1">
          {/* On small phones the pill takes this slot once you scroll past the hero; the switch is
              still in the menu. */}
          <LangSwitch className={pastHero && !open ? "hidden sm:inline-flex" : undefined} />
          <IntroCallLink variant="navOutline" size="sm" className="hidden whitespace-nowrap lg:inline-flex" />
          {pastHero && !open && (
            <IntroCallLink variant="navOutline" size="sm" className="min-w-0 px-3 text-[13px] leading-tight md:h-11 lg:hidden" />
          )}

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
          aria-label={open ? (de ? "Menü schließen" : "Close menu") : de ? "Menü öffnen" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-b border-ink/10 bg-canvas px-4 pb-5 pt-2 lg:hidden">
          <nav aria-label={de ? "Hauptnavigation" : "Main"} className="flex flex-col gap-1">
            <NavLink
              to={home}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex min-h-[44px] items-center rounded-full px-4 py-2.5 text-base font-medium ${isActive ? "bg-ink text-white" : "text-ink/70 hover:bg-ink/5"}`
              }
            >
              {de ? "Start" : "Home"}
            </NavLink>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-[44px] items-center rounded-full px-4 py-2.5 text-base font-medium ${isActive ? "bg-ink text-white" : "text-ink/70 hover:bg-ink/5"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-2 flex items-center gap-2 px-2 text-sm text-ink/60">
            <span aria-hidden="true">{de ? "Sprache:" : "Language:"}</span>
            <LangSwitch onClick={() => setOpen(false)} />
          </div>
          <IntroCallLink variant="navOutline" className="mt-4 w-full" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
