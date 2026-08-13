import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Users, Briefcase, CheckCircle2, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Booking = () => {
  const coachingServices = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Strategy Session",
      description: "Hands-on guidance on AI product management, agent development, and implementing AI in your workflows.",
      duration: "90 min",
      price: "€1,500",
      features: [
        "AI implementation roadmap",
        "Agent architecture review",
        "AI tool recommendations",
        "Process automation strategies",
        "Follow-up resources",
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/cc0e3f23-6603-4b8c-a323-8972071236ba",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "1:1 Coaching",
      description: "Personalized coaching sessions focused on your specific challenges and goals.",
      duration: "60 min",
      price: "€500",
      features: [
        "Tailored guidance",
        "Action plan development",
        "Follow-up resources",
        "Direct access via email",
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/cc0e3f23-6603-4b8c-a323-8972071236ba",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Team Workshop",
      description: "Interactive workshops on leveraging AI for product teams—from prototyping to production agents.",
      duration: "2 hours",
      price: "€3,500",
      features: [
        "AI tools & capabilities overview",
        "Hands-on prototyping exercises",
        "Agent workflow design",
        "Team AI adoption strategies",
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/d0c5105d-b68f-4248-932b-70a8684a958b",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Leadership Advisory",
      description: "Strategic advisory services for product executives navigating AI transformation.",
      duration: "90 min",
      price: "€1,700",
      features: [
        "AI-first strategic planning",
        "Leadership development",
        "Organizational AI readiness",
        "Change management",
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/51a80e26-d104-4193-9c25-1eb0a5a2b763",
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
                Book a Coaching Session
              </h1>
              <p className="mt-6 text-base md:text-lg text-ink/60 max-w-2xl leading-relaxed">
                Elevate your product leadership with tailored coaching in AI strategy, agent development, and modern product management. Get hands-on guidance from someone who builds with AI every day.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 md:py-16 border-t border-ink/10">
          <div className="container px-4 md:px-6">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-ink mb-12">
              Coaching Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {coachingServices.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-3xl bg-white border border-ink/10 p-7 transition-all duration-200 hover:border-ink/30"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-canvas text-accent2">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <p className="flex items-center justify-end gap-1 text-xs text-ink/50">
                        <Clock className="h-3 w-3" /> {service.duration}
                      </p>
                      <p className="font-display text-2xl text-ink mt-1">{service.price}</p>
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{service.description}</p>
                  <ul className="mt-5 space-y-2 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-accent2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-7 w-full"
                    onClick={() => window.open(service.bookingUrl, "_blank")}
                  >
                    Book Now
                  </Button>
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

export default Booking;
