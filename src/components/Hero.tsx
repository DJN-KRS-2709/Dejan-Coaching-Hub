import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-canvas pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] text-ink max-w-5xl">
            AI-Powered Product
            <span className="relative inline-block">
              <span className="text-accent2"> Leadership</span>
            </span>
          </h1>

          <p className="mt-8 text-base md:text-lg text-ink/60 max-w-xl leading-relaxed">
            Building the future of product management through AI agents, intelligent
            automation, and hands-on prototyping. 20+ years of product leadership meets
            cutting-edge AI innovation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="w-full sm:w-auto">
                Book a Coaching Session
              </Button>
            </Link>
            <Link to="/frameworks">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Frameworks
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
