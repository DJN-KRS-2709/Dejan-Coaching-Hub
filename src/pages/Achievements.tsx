import { Trophy, Award, Medal, BookOpen, Briefcase, Users, Bot, Cpu, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Achievements = () => {
  const achievements = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Agent Development",
      description: "Building intelligent AI agents that automate complex business processes, from workflow orchestration to autonomous decision-making systems.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI-Driven Process Automation",
      description: "Designing and implementing AI-powered solutions that streamline operations, eliminate manual bottlenecks, and accelerate time-to-value across teams.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Prototyping & Innovation",
      description: "Hands-on prototyping with cutting-edge AI tools and LLMs—exploring new frontiers in product development, discovery, and intelligent automation.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-Centric Royalties",
      description: "Launched Fan-Powered Royalties at SoundCloud—the industry's first user-centric payout model. Empowered creators with greater transparency and control over their earnings.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Outcome-Driven Culture",
      description: "Introduced product frameworks and monthly prioritization rituals, replacing rigid timelines with adaptive, value-driven planning.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Accelerated Financial Processes",
      description: "Optimized financial operations using data-driven approaches and AI-assisted analysis to identify and eliminate process bottlenecks.",
    },
    {
      icon: <Medal className="h-6 w-6" />,
      title: "Strategy at Scale",
      description: "Developed and implemented strategies that accelerated experimentation and significantly reduced time to market.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Data-Led Discovery",
      description: "Built frameworks to measure product impact using both quantitative and qualitative data—enabling better, faster decisions.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "AI Product Leadership Educator",
      description: "Featured speaker on AI in product management at Product School and industry events. Mentoring the next generation of AI-savvy product leaders.",
    },
  ];

  const careerHighlights = [
    {
      year: "Current",
      role: "Group Product Manager, Creator and Enterprise Payouts",
      company: "Spotify",
      description: "Driving innovation in the complex world of royalties and creator payouts. Built and led high-performing teams across EMEA, launching scalable solutions that power the financial backbone of Spotify's creator economy. Actively leveraging AI to automate complex financial workflows and build intelligent agents for operational excellence.",
      achievements: [
        "Led cross-functional teams across EMEA",
        "Launched scalable payout solutions",
        "Improved the financial infrastructure for the creator economy",
        "Building AI agents for process automation and efficiency",
        "Pioneering AI-driven approaches to complex financial operations",
      ],
    },
    {
      year: "Ongoing",
      role: "AI Product Leadership Coach & Speaker",
      company: "Product School, Independent",
      description: "For over three years, I've shared practical frameworks and real-world experiences with a global community of 1M+ product professionals. Today, I focus heavily on AI product management—helping leaders understand how to build, integrate, and leverage AI in their products and processes. Whether through workshops or 1:1 coaching, I help PMs grow into confident, AI-savvy leaders who drive impact at scale.",
      achievements: [
        "Shared frameworks with 1M+ product professionals",
        "Leading workshops on AI in product management",
        "Coaching on AI agent development and implementation",
        "Helping organizations adopt AI-first product strategies",
        "Developed custom AI-enhanced frameworks for product leadership",
        "Coached 100+ product leaders from startups to enterprise companies",
      ],
    },
    {
      year: "Previous",
      role: "Lead Product Manager, Insights & Royalties",
      company: "SoundCloud",
      description: "Spearheaded the development and launch of Fan-Powered Royalties, making SoundCloud the first major streaming platform to adopt a user-centric model. Collaborated with economists and engineers to model revenue shifts and execute a groundbreaking vision for fairer artist compensation.",
      achievements: [
        "Launched Fan-Powered Royalties, the first user-centric model on a major platform",
        "Collaborated with economists to model revenue shifts",
        "Executed vision for fairer artist compensation",
      ],
    },
    {
      year: "Previous",
      role: "Director of Business Analysis",
      company: "BMG",
      description: "Led teams focused on royalty systems and technical services, enabling smarter licensing negotiations and operational excellence. Built bridges between technology, rights, and finance—bringing clarity to one of the industry's most complex value chains.",
      achievements: [
        "Led royalty systems and technical services teams",
        "Enabled smarter licensing negotiations",
        "Connected technology, rights, and finance departments",
      ],
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
                Achievements & Experience
              </h1>
              <p className="mt-6 text-base md:text-lg text-ink/60 max-w-2xl leading-relaxed">
                A journey through my career milestones, accomplishments, and the impact I've made in product leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-16 md:py-20 border-t border-ink/10">
          <div className="container px-4 md:px-6">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-ink mb-12">
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="rounded-3xl bg-white border border-ink/10 p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-canvas text-accent2">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="py-16 md:py-24 border-t border-ink/10">
          <div className="container px-4 md:px-6">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-ink mb-12">
              Career Journey
            </h2>
            <div className="divide-y divide-ink/10 border-t border-ink/10">
              {careerHighlights.map((highlight, index) => (
                <div key={index} className="grid md:grid-cols-12 gap-6 py-10">
                  <div className="md:col-span-4">
                    <span className="inline-block rounded-full bg-ink/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink/50 mb-3">
                      {highlight.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
                      {highlight.role}
                    </h3>
                    <p className="text-accent2 font-medium">{highlight.company}</p>
                  </div>
                  <div className="md:col-span-8 max-w-2xl">
                    <p className="mb-5 text-base md:text-lg text-ink/60 leading-relaxed">{highlight.description}</p>
                    <ul className="space-y-2">
                      {highlight.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-ink/70">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
