import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink text-white">
      <div className="container px-4 md:px-6 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-md">
            <p className="font-display text-5xl md:text-6xl leading-[0.9] mb-6">
              Let's build<br />what's next.
            </p>
            <a href="mailto:dejan.krstic@web.de" className="inline-block">
              <Button variant="secondary" className="gap-2">
                Get in Touch <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</Link>
            <Link to="/achievements" className="text-sm text-white/60 hover:text-white transition-colors">Achievements</Link>
            <Link to="/frameworks" className="text-sm text-white/60 hover:text-white transition-colors">Frameworks</Link>
            <Link to="/booking" className="text-sm text-white/60 hover:text-white transition-colors">Coaching</Link>
            <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">About</Link>
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p className="text-sm text-white/50">© {currentYear} Dejan Krstic. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/impressum" className="text-sm text-white/50 hover:text-white transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-sm text-white/50 hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/dejan-krstic-b4a7a98a/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
