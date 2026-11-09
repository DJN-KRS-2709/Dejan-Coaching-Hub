import { Link } from "react-router-dom";
import { ArrowRight, Award, Code, Calendar, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Index = () => {
  const trustedBy = ["Spotify", "SoundCloud", "Universal Music", "BMG", "Product School"];

  const approach = [
    {
      label: "What I Do",
      title: "Strategy that connects users to the business.",
      body: "I build high-performing product teams grounded in ownership, trust, and continuous experimentation, shaping product strategies that deliver operationally efficient solutions in complex, high-stakes environments.",
    },
    {
      label: "AI-First Approach",
      title: "Hands-on with the tech defining product's next era.",
      body: "I prototype with cutting-edge AI tools, build autonomous agents for operational excellence, and apply AI-driven insights to strategic decisions, from streamlining internal processes to reimagining product discovery.",
    },
    {
      label: "How I Lead",
      title: "Psychological safety, curiosity, and purpose.",
      body: "I champion collaborative planning, embrace failure as a catalyst for learning, and mentor people to grow in their craft and confidence. I also speak on AI in product management and mentor PMs through Product School.",
    },
  ];

  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI & Automation",
      description: "Building AI agents and intelligent automation that transform how product teams work and deliver value.",
      link: "/achievements",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Achievements",
      description: "From launching Fan-Powered Royalties to pioneering AI-driven product workflows.",
      link: "/achievements",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frameworks",
      description: "The Confidence Line and five stages to AI-native: from ambiguity to clarity, one step at a time.",
      link: "/frameworks",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Coaching",
      description: "Personalized coaching on AI product strategy, agent development, and product leadership.",
      link: "/booking",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />

        {/* Trusted by / logo strip */}
        <section className="pb-16 md:pb-24">
          <div className="container px-4 md:px-6">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-ink/40 mb-8">
              20+ years across the music-tech industry
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {trustedBy.map((name) => (
                <span key={name} className="font-display text-xl md:text-2xl text-ink/25">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Statement section */}
        <section className="py-16 md:py-28 border-t border-ink/10">
          <div className="container px-4 md:px-6">
            <span className="inline-block rounded-full bg-ink px-4 py-1.5 text-xs font-medium text-white mb-8">
              How I help
            </span>
            <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] text-ink max-w-4xl">
              You bring the vision. I'll help you ship it.
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-ink/60 leading-relaxed">
              I help product teams move faster, think clearer, and build smarter, combining
              deep domain expertise with battle-tested frameworks, AI-powered solutions, and a
              people-first approach. Over 20 years of product leadership in music-tech, across
              B2C and B2B, launching, scaling, and learning from every step.
            </p>

            <div className="mt-16 divide-y divide-ink/10 border-t border-ink/10">
              {approach.map((item) => (
                <div key={item.label} className="grid md:grid-cols-12 gap-6 py-10">
                  <div className="md:col-span-3">
                    <span className="font-display text-2xl text-ink/30">{item.label}</span>
                  </div>
                  <div className="md:col-span-9 max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-ink/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="py-16 md:py-24 border-t border-ink/10">
          <div className="container px-4 md:px-6">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-ink mb-12 max-w-3xl">
              Explore the work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group flex flex-col rounded-3xl bg-white border border-ink/10 p-7 transition-all duration-200 hover:border-ink/30 hover:-translate-y-1"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-canvas text-accent2">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed flex-1">{feature.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 border-t border-ink/10">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-ink max-w-4xl mx-auto">
              Ready to elevate your product leadership?
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink/60 max-w-xl mx-auto leading-relaxed">
              Book a session to work through your specific challenges and goals, and take your
              product leadership to the next level.
            </p>
            <div className="mt-10">
              <Link to="/booking">
                <Button size="lg" className="gap-2 group">
                  Book a Session
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
