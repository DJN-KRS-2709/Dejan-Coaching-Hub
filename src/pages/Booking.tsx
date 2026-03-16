import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, Briefcase, CheckCircle2, PhoneCall, Video, Users2, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Booking = () => {
  const coachingServices = [
    {
      icon: <Bot className="h-6 w-6" style={{ color: '#9b87f5' }} />,
      title: "AI Strategy Session",
      description: "Hands-on guidance on AI product management, agent development, and implementing AI in your workflows.",
      duration: "90 min",
      price: "€350",
      features: [
        "AI implementation roadmap",
        "Agent architecture review",
        "AI tool recommendations",
        "Process automation strategies",
        "Follow-up resources"
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/cc0e3f23-6603-4b8c-a323-8972071236ba"
    },
    {
      icon: <Users className="h-6 w-6" style={{ color: '#9b87f5' }} />,
      title: "1:1 Coaching",
      description: "Personalized coaching sessions focused on your specific challenges and goals.",
      duration: "60 min",
      price: "€250",
      features: [
        "Tailored guidance",
        "Action plan development",
        "Follow-up resources",
        "Direct access via email"
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/cc0e3f23-6603-4b8c-a323-8972071236ba"
    },
    {
      icon: <Sparkles className="h-6 w-6" style={{ color: '#9b87f5' }} />,
      title: "AI Team Workshop",
      description: "Interactive workshops on leveraging AI for product teams—from prototyping to production agents.",
      duration: "2 hours",
      price: "€1,500",
      features: [
        "AI tools & capabilities overview",
        "Hands-on prototyping exercises",
        "Agent workflow design",
        "Team AI adoption strategies"
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/d0c5105d-b68f-4248-932b-70a8684a958b"
    },
    {
      icon: <Briefcase className="h-6 w-6" style={{ color: '#9b87f5' }} />,
      title: "Leadership Advisory",
      description: "Strategic advisory services for product executives navigating AI transformation.",
      duration: "90 min",
      price: "€450",
      features: [
        "AI-first strategic planning",
        "Leadership development",
        "Organizational AI readiness",
        "Change management"
      ],
      bookingUrl: "https://booking.setmore.com/scheduleappointment/9307d7e5-e172-46a0-84e0-6cee4d029640/services/51a80e26-d104-4193-9c25-1eb0a5a2b763"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Book a Coaching Session
              </h1>
              <p className="text-xl text-white/80">
                Elevate your product leadership with tailored coaching in AI strategy, agent development, and modern product management. Get hands-on guidance from someone who builds with AI every day.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Coaching Services
              </h2>
              <p className="text-lg text-white/80">
                Choose the coaching format that best fits your needs and goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coachingServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="flex flex-col h-full bg-black border-white/20 hover:border-purple-500/50 transition-colors duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-white/5 rounded-lg">
                        {service.icon}
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-sm text-white/80 flex items-center gap-1">
                          <Clock className="h-3 w-3" style={{ color: '#9b87f5' }} /> {service.duration}
                        </p>
                        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{service.price}</p>
                      </div>
                    </div>
                    <CardTitle className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{service.title}</CardTitle>
                    <CardDescription className="text-white/80">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#9b87f5' }} />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]" 
                      onClick={() => window.open(service.bookingUrl, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardFooter>
                </Card>
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
