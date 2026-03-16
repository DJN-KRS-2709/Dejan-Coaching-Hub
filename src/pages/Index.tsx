import { Link } from "react-router-dom";
import { ArrowRight, Award, Code, Calendar, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Index = () => {
  const features = [
    {
      icon: <Bot className="h-10 w-10" style={{ color: '#9b87f5' }} />,
      title: "AI & Automation",
      description: "Building AI agents and intelligent automation solutions that transform how product teams work and deliver value.",
      link: "/achievements"
    },
    {
      icon: <Award className="h-10 w-10" style={{ color: '#9b87f5' }} />,
      title: "Achievements",
      description: "Explore my professional journey—from launching Fan-Powered Royalties to pioneering AI-driven workflows.",
      link: "/achievements"
    },
    {
      icon: <Code className="h-10 w-10" style={{ color: '#9b87f5' }} />,
      title: "Frameworks",
      description: "Battle-tested product management frameworks enhanced with AI-powered decision-making tools.",
      link: "/frameworks"
    },
    {
      icon: <Calendar className="h-10 w-10" style={{ color: '#9b87f5' }} />,
      title: "Coaching",
      description: "Personalized coaching on AI product strategy, agent development, and modern product leadership.",
      link: "/booking"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        
        {/* Features Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-black px-4 md:px-0">
          <div className="container max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
                How I Can Help You
              </h2>
              <div className="max-w-[1200px] mx-auto">
                <p className="text-base md:text-lg text-white/90 mb-4 text-center">
                  I help product teams move faster, think clearer, and build smarter—by combining deep domain expertise with battle-tested product frameworks, AI-powered solutions, and a people-first approach. With over 16 years of product leadership experience in the music-tech space, I've worked across B2C and B2B, helping launch, scale, and sometimes gloriously fail products. Every step brought its own lesson, and I use that knowledge today to empower others to do better work.
                </p>
                <h3 className="text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
                  What I Do
                </h3>
                <p className="text-base md:text-lg text-white/90 mb-4 text-center">
                  I focus on building high-performing product teams grounded in a culture of ownership, trust, and continuous experimentation. Today, I'm deeply invested in <strong className="text-white">AI product management</strong>—building AI agents that automate complex workflows, prototyping intelligent solutions, and helping organizations harness AI for process efficiencies. I specialize in shaping product strategies that connect user needs with business objectives, delivering operationally efficient solutions in complex, high-stakes environments.
                </p>
                <h3 className="text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
                  AI-First Approach
                </h3>
                <p className="text-base md:text-lg text-white/90 mb-4 text-center">
                  I believe AI is reshaping how we build and lead product teams. I actively prototype with cutting-edge AI tools, develop autonomous agents for operational excellence, and apply AI-driven insights to strategic decision-making. From streamlining internal processes to reimagining product discovery, I'm hands-on with the technology that's defining the next era of product management.
                </p>
                <h3 className="text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
                  How I Lead
                </h3>
                <p className="text-base md:text-lg text-white/90 mb-4 text-center">
                  I strive to foster environments where psychological safety, curiosity, and a sense of purpose thrive. I've championed collaborative planning, embraced failure as a catalyst for learning, and mentored individuals to grow in their craft and confidence.
                </p>
                <p className="text-base md:text-lg text-white/90 mb-4 text-center">
                  I also speak at product events on AI in product management and mentor aspiring PMs through programs like Product School and Growth School.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-4 md:p-6 bg-black rounded-lg border border-white transition-colors"
                >
                  <div className="mb-4 p-3 bg-white/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm md:text-base text-white/80 mb-4 flex-1">{feature.description}</p>
                  <Link to={feature.link} onClick={() => window.scrollTo(0, 0)}>
                    <Button variant="outline" className="gap-1 group text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-8 md:py-16 lg:py-24 bg-black px-4 md:px-0">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
                Ready to Elevate Your Product Leadership?
              </h2>
              <p className="text-sm md:text-lg text-white/80 mb-6 md:mb-8 max-w-[1200px] mx-auto">
                Book a coaching session with me to discuss your specific challenges and goals. Let's work together to take your product leadership skills to the next level.
              </p>
              <Link to="/booking">
                <Button variant="outline" size="lg" className="gap-2 group text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent">
                  Book a Session <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
