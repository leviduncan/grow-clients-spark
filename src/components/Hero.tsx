import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import ConnectedDiagram from "./ConnectedDiagram";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-20 pb-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-card px-5 py-2.5 rounded-full border border-border shadow-sm">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-inter text-muted-foreground">5.0 Rating • 85+ Reviews</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground">
                AI VOICE AGENTS
              </h1>
              <p className="font-inter text-xl sm:text-2xl md:text-3xl text-muted-foreground mt-3 italic">
                That Handle Your Business 24/7
              </p>
            </div>

            {/* Description */}
            <p className="font-inter text-lg text-muted-foreground max-w-lg leading-relaxed">
              Automate appointments, leads, sales & support with intelligent AI that never sleeps. Get more clients without the hassle.
            </p>
            
            {/* Feature List */}
            <div className="space-y-3">
              {[
                "AI-powered campaigns that run 24/7/365",
                "Lead generation tailored to your business",
                "Results in 30 days, guaranteed"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-inter text-base text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="default"
                className="group text-lg px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
              >
                See If You're Eligible
              </Button>
            </div>
          </div>

          {/* Right - Connected Diagram */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <ConnectedDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
