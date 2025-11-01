import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroPortrait1 from "@/assets/hero-portrait-1.png";
import heroPortrait2 from "@/assets/hero-portrait-2.png";
import heroProduct from "@/assets/hero-product.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-primary/30 border-2 border-black" />
                ))}
              </div>
              <span className="text-sm font-inter text-gray-300">5.0 Rating • 85+ Reviews</span>
            </div>

            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
              GET MORE CLIENTS
              <span className="block text-primary mt-2">WITHOUT THE HASSLE</span>
            </h1>
            
            <div className="space-y-3">
              {[
                "AI-powered campaigns that run 24/7",
                "Lead generation tailored to your business",
                "Results in 30 days, guaranteed"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-inter text-base sm:text-lg text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="hero"
                className="group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="heroOutline"
              >
                See If You're Eligible
              </Button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              {/* Product Image */}
              <div className="col-span-1">
                <img
                  src={heroProduct}
                  alt="Marketing Dashboard"
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Portrait 1 */}
              <div className="col-span-1 row-span-2">
                <img
                  src={heroPortrait1}
                  alt="Happy Business Owner"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Portrait 2 */}
              <div className="col-span-1">
                <img
                  src={heroPortrait2}
                  alt="Successful Entrepreneur"
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Stats Card */}
              <div className="col-span-1">
                <Card className="h-full bg-white border-0">
                  <CardContent className="p-6 flex flex-col justify-center h-full">
                    <div className="flex -space-x-3 mb-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow border-2 border-white" />
                      ))}
                    </div>
                    <div className="font-bebas text-4xl text-foreground">500+</div>
                    <div className="font-inter text-sm text-muted-foreground">Satisfied Clients</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
