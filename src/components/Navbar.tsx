import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Brand";
import IntroCallLink from "@/components/IntroCallLink";

export const NAV_LINKS = [
  { to: "/self-check", label: "Self-check" },
  { to: "/course", label: "Course" },
  { to: "/work-with-me", label: "Work with me" },
  { to: "/speaking", label: "Speaking" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-ink/5 bg-canvas/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="inline-flex min-h-[44px] items-center text-xl text-ink md:text-2xl" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <IntroCallLink variant="default" size="sm" className="hidden lg:inline-flex" />

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-b border-ink/10 bg-canvas px-4 pb-5 pt-2 lg:hidden">
          <nav aria-label="Main" className="flex flex-col gap-1">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex min-h-[44px] items-center rounded-full px-4 py-2.5 text-base font-medium ${isActive ? "bg-ink text-white" : "text-ink/70 hover:bg-ink/5"}`
              }
            >
              Home
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
          <IntroCallLink variant="default" className="mt-4 w-full" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
