import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  const benefits = [
    "AI identifies your ideal customers and targets them precisely",
    "Automated campaigns that run 24/7 without your involvement",
    "Professional content creation that converts browsers into buyers",
    "Real-time analytics so you always know what's working",
    "Dedicated support team that acts as your marketing department"
  ];

  return (
    <section className="py-20 sm:py-32 bg-[hsl(var(--dark-bg))] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight">
                WE HANDLE EVERYTHING
                <span className="block text-primary">YOU FOCUS ON BUSINESS</span>
              </h2>
              <p className="font-inter text-lg text-gray-300 mb-8 leading-relaxed">
                Our AI-powered platform does the heavy lifting. From finding your perfect customers 
                to converting them into paying clients, we've got you covered.
              </p>
              <Button variant="hero" size="lg" className="group">
                Get Started Today
              </Button>
            </div>
            
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-inter text-lg text-gray-200 pt-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
