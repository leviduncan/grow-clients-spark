import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          {/* Heading */}
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            READY FOR A <span className="text-primary">DEMO?</span>
          </h2>
          
          {/* Description */}
          <p className="font-inter text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute consultation. We'll analyze your business and 
            show you exactly how AI can bring in more clients.
          </p>
          
          {/* CTA Button */}
          <div className="mb-10">
            <Button 
              size="lg" 
              variant="default"
              className="group text-lg px-10 py-6 h-auto"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              "No obligation",
              "Custom strategy",
              "Same-day response"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-inter text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
