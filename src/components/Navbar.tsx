import { Link, useLocation } from "react-router-dom";
import { Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/achievements", label: "Achievements" },
  { to: "/frameworks", label: "Frameworks" },
  { to: "/booking", label: "Coaching" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-canvas/80 backdrop-blur-md border-b border-ink/5 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-display text-2xl tracking-tight text-ink">
            DEJAN
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors rounded-full px-4 py-2 ${
                  location.pathname === link.to
                    ? "text-ink"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://www.linkedin.com/in/dejan-krstic-b4a7a98a/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" aria-label="LinkedIn" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <Link to="/booking">
            <Button>Book a Session</Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-canvas border-b border-ink/10 p-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-medium transition-colors rounded-full px-4 py-2.5 ${
                    location.pathname === link.to
                      ? "bg-ink text-white"
                      : "text-ink/70 hover:bg-ink/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-3">
                <a href="https://www.linkedin.com/in/dejan-krstic-b4a7a98a/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <Link to="/booking" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Book a Session</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
