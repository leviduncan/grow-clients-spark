import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import demoMax from "@/assets/demo-max.png";
import demoChloe from "@/assets/demo-chloe.png";
import demoShelley from "@/assets/demo-shelley.png";

interface DemoCardProps {
  name: string;
  industry: string;
  description: string;
  cta: string;
  image: string;
  imageOnRight: boolean;
}

const DemoCard = ({ name, industry, description, cta, image, imageOnRight }: DemoCardProps) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
      {/* Content */}
      <div className={`space-y-6 ${!imageOnRight ? 'lg:order-2' : ''}`}>
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          {industry}
        </span>
        <h3 className="font-bebas text-5xl md:text-6xl text-foreground">{name}</h3>
        <p className="font-inter text-lg text-muted-foreground leading-relaxed">{description}</p>
        <p className="font-bebas text-xl text-primary tracking-wide">{cta}</p>
        <Button variant="default" size="lg" className="group">
          START TODAY!
        </Button>
      </div>

      {/* Image with Play Button */}
      <div className={`relative ${!imageOnRight ? 'lg:order-1' : ''}`}>
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
        <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
          <img src={image} alt={name} className="w-full h-auto object-cover" />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 via-transparent to-transparent">
            <button className="group flex items-center gap-3 bg-purple hover:bg-purple/90 text-purple-foreground px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg glow-purple-sm">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              </div>
              <span className="font-bebas text-lg tracking-wide">PLAY DEMO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Demos = () => {
  const demos = [
    {
      name: "MAX",
      industry: "HVAC / TRADES",
      description:
        "Max handles everything from booking appointments to following up with leads—so your team can focus on what they do best. From HVAC to plumbing, electrical to roofing, Max keeps your phones covered 24/7.",
      cta: "CALL MAX NOW TO SEE HOW HE CAN HELP YOUR TRADES BUSINESS",
      image: demoMax,
      imageOnRight: true,
    },
    {
      name: "CHLOE",
      industry: "CAFÉ / LOCAL BUSINESS",
      description:
        "Chloe is your friendly virtual receptionist, perfect for cafés, restaurants, and local shops. She takes orders, answers FAQs, and makes every customer feel welcome—even during your busiest hours.",
      cta: "GIVE CHLOE A CALL AND HEAR THE DIFFERENCE",
      image: demoChloe,
      imageOnRight: false,
    },
    {
      name: "SHELLEY",
      industry: "MED SPA / PROFESSIONAL SERVICES",
      description:
        "Shelley brings elegance and professionalism to every call. Perfect for med spas, dental offices, law firms, and more. She books appointments, answers questions, and delivers a premium experience every time.",
      cta: "CALL SHELLEY TO EXPERIENCE WHITE-GLOVE SERVICE",
      image: demoShelley,
      imageOnRight: true,
    },
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground">
                HEAR OUR AI VOICE AGENTS
                <span className="block text-primary">IN ACTION</span>
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the future of customer service. Listen to our AI agents handle real conversations with
                natural, human-like responses.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {demos.map((demo) => (
            <ScrollAnimation key={demo.name}>
              <DemoCard {...demo} />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl">
                READY TO BUILD AN AGENT FOR <span className="text-primary">YOUR BUSINESS?</span>
              </h2>
              <p className="font-inter text-xl text-white/70 max-w-2xl mx-auto">
                Let's create a custom AI voice agent tailored to your industry and business needs.
              </p>
              <Button variant="hero" size="lg" className="gap-3">
                <Calendar className="w-5 h-5" />
                BOOK YOUR STRATEGY CALL
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demos;
