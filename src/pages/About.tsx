import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Handshake, MessageSquare, Bot, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    { icon: <Bot className="h-6 w-6" />, title: "AI-First Mindset", desc: "Building and deploying AI agents that transform how teams work and deliver value." },
    { icon: <Sparkles className="h-6 w-6" />, title: "Hands-On Innovation", desc: "Prototyping with cutting-edge AI tools and bringing ideas to life through experimentation." },
    { icon: <Heart className="h-6 w-6" />, title: "Lead with Empathy", desc: "Understanding user needs and team dynamics through genuine connection and care." },
    { icon: <Handshake className="h-6 w-6" />, title: "Foster Collaboration", desc: "Building bridges between teams and creating environments where everyone can thrive." },
    { icon: <Users className="h-6 w-6" />, title: "Grow Together", desc: "Mentoring and learning from others while fostering a culture of continuous improvement." },
    { icon: <MessageSquare className="h-6 w-6" />, title: "Open Dialogue", desc: "Creating space for honest conversations and meaningful feedback." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-fade-in">
              <div className="flex-1 space-y-8">
                <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] text-ink">
                  Hi, I'm Dejan
                </h1>
                <div className="space-y-6 text-base md:text-lg text-ink/60 leading-relaxed max-w-xl">
                  <p>
                    "I've built and launched products across both B2C and B2B — some scaled beautifully, and others failed gloriously. Each experience sharpened my understanding of what it truly takes to create products that solve real problems and drive impact."
                  </p>
                  <p>
                    My journey in product leadership has taught me that the most impactful products are built not just with technical excellence, but with deep empathy, understanding, and a relentless focus on solving real human problems.
                  </p>
                  <p>
                    Today, I'm deeply immersed in <strong className="text-ink font-semibold">AI and intelligent automation</strong>. I build AI agents, prototype with cutting-edge tools, and help organizations harness AI for operational excellence — committed to helping product leaders navigate this new frontier.
                  </p>
                  <p>
                    I believe in leading with heart, fostering psychological safety, and creating environments where innovation thrives through open collaboration and fearless experimentation.
                  </p>
                </div>
              </div>
              <div className="lg:flex-1 w-full">
                <div className="relative w-full max-w-[480px] mx-auto aspect-[6/5] overflow-hidden rounded-3xl border border-ink/10">
                  <img
                    src="/lovable-uploads/dejan-profile-brick.jpg"
                    alt="Dejan Krstic - Product Leadership Coach"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 border-t border-ink/10">
          <div className="container px-4 md:px-6">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-ink mb-12 max-w-3xl">
              What I stand for
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="rounded-3xl bg-white border border-ink/10 p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-canvas text-accent2">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 border-t border-ink/10">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-ink max-w-4xl mx-auto">
              Ready to transform your product leadership?
            </h2>
            <div className="mt-10">
              <Link to="/booking">
                <Button size="lg">Start Your Journey</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
