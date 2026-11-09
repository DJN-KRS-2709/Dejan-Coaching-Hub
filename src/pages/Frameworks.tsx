import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Workflow, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Framework {
  title: string;
  description: string;
  image: string;
}

const Frameworks = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const frameworks: Framework[] = [
    {
      title: "Prioritization Toolkit",
      description:
        "You need a transparent, data-driven prioritization framework to align efforts across the organization, helping us focus on high-impact initiatives, foster better collaboration, streamline workflows, and drive smarter, more effective decision-making.",
      image: "/lovable-uploads/prioritization-toolkit-updated.png",
    },
    {
      title: "The Strategic Toolbox",
      description:
        "By embracing flexibility, pragmatism, and context-driven strategies, modern product teams can move faster, allocate resources smarter, and deliver greater impact without sacrificing alignment or quality.",
      image: "/lovable-uploads/scalability-matrix.png",
    },
  ];

  const modalContent: { title: string; body: React.ReactNode }[] = [
    {
      title: "Prioritization Framework Details",
      body: (
        <div className="space-y-6 text-base md:text-lg text-ink/70 leading-relaxed">
          <p>
            Unlock greater impact through smarter prioritization. Tired of juggling competing priorities and wondering if your team is focused on what truly matters? This transparent, data-driven prioritization framework is designed to revolutionize our planning process, aligning how we handle incoming requests across the entire organization so effort is directed towards the highest-impact initiatives.
          </p>
          <p><span className="font-semibold text-ink">High Impact, Low Effort</span><br />Quick wins that deliver immediate value with minimal resource investment.</p>
          <p><span className="font-semibold text-ink">High Impact, High Effort</span><br />Strategic initiatives that can transform our business capabilities.</p>
          <p><span className="font-semibold text-ink">Low Impact, Low Effort</span><br />Small improvements that maintain system health without major investment.</p>
          <p><span className="font-semibold text-ink">Low Impact, High Effort</span><br />Activities to evaluate for potential optimization or deprioritization.</p>
        </div>
      ),
    },
    {
      title: "Scalability Matrix Details",
      body: (
        <div className="space-y-6 text-base md:text-lg text-ink/70 leading-relaxed">
          <p>
            The Scalability Matrix is a strategic tool that helps teams evaluate and plan for growth across multiple dimensions. It provides a structured approach to thinking about how different aspects of your product or service will scale as your business grows.
          </p>
          <p><span className="font-semibold text-ink">Technical Scalability</span><br />How well your infrastructure and systems can handle increased load and complexity.</p>
          <p><span className="font-semibold text-ink">Operational Scalability</span><br />The ability of your processes and workflows to maintain efficiency at scale.</p>
          <p><span className="font-semibold text-ink">Organizational Scalability</span><br />How your team structure and culture can adapt to growth while maintaining effectiveness.</p>
          <p><span className="font-semibold text-ink">Financial Scalability</span><br />The economic model's ability to maintain or improve margins as you grow.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] text-ink">
                Product Leadership Frameworks
              </h1>
              <p className="mt-6 text-base md:text-lg text-ink/60 max-w-2xl leading-relaxed">
                Battle-tested frameworks I've developed and implemented across organizations to drive product success.
              </p>
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="py-12 md:py-16 border-t border-ink/10">
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              {frameworks.map((framework, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl bg-white border border-ink/10 p-6 md:p-10"
                >
                  <div className="order-2 lg:order-1">
                    <span className="font-display text-2xl text-ink/25 mb-3 block">
                      0{index + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                      {framework.title}
                    </h2>
                    <p className="text-base md:text-lg text-ink/60 leading-relaxed mb-6">
                      {framework.description}
                    </p>
                    <Button variant="outline" onClick={() => setActiveModal(index)}>
                      View details
                    </Button>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img
                      src={framework.image}
                      alt={framework.title}
                      className="w-full h-auto object-contain rounded-2xl cursor-pointer bg-canvas"
                      onClick={() => setActiveModal(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 border-t border-ink/10">
          <div className="container px-4 md:px-6">
            <div className="rounded-3xl bg-ink text-white p-8 md:p-14">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex-1">
                  <h2 className="font-display text-3xl md:text-5xl mb-4">
                    Need help implementing these frameworks?
                  </h2>
                  <p className="text-white/60 mb-8 max-w-xl">
                    Get personalized guidance through coaching sessions tailored to your specific organizational challenges.
                  </p>
                  <Link to="/booking">
                    <Button variant="secondary" size="lg">Book a Coaching Session</Button>
                  </Link>
                </div>
                <Workflow className="h-32 w-32 md:h-40 md:w-40 text-accent2 shrink-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {activeModal !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4"
            onClick={() => setActiveModal(null)}
          >
            <div
              className="bg-white text-ink rounded-3xl p-8 md:p-12 max-w-3xl w-full relative shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 hover:bg-ink/10 transition-colors"
                onClick={() => setActiveModal(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="font-display text-3xl md:text-4xl mb-6">{modalContent[activeModal].title}</h3>
              {modalContent[activeModal].body}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Frameworks;
