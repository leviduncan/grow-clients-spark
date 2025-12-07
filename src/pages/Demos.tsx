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
    <div
      className={`flex flex-col ${imageOnRight ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
    >
      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
          {industry}
        </span>
        <h3 className="font-bebas text-4xl md:text-5xl text-white mb-4">{name}</h3>
        <p className="text-white/70 text-lg leading-relaxed mb-6">{description}</p>
        <p className="text-primary font-bebas text-xl tracking-wide mb-6">{cta}</p>
        <Button variant="hero" size="lg">
          START TODAY!
        </Button>
      </div>

      {/* Image with Play Button */}
      <div className="flex-1 w-full max-w-md">
        <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer group">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/50">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
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
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-bebas text-6xl md:text-8xl leading-none">
                HEAR OUR AI VOICE AGENTS
                <span className="block text-primary">IN ACTION</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                Experience the future of customer service. Listen to our AI agents handle real conversations with
                natural, human-like responses.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-24 md:space-y-32">
          {demos.map((demo, index) => (
            <ScrollAnimation key={demo.name}>
              <DemoCard {...demo} />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-white mb-8 tracking-wide">
                READY TO BUILD AN AGENT FOR <span className="text-primary">YOUR BUSINESS?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
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
