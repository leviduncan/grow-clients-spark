import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { solutionsOfferings } from "@/data";

const ServicesPage = () => {
  const solutions = solutionsOfferings;

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-purple-green relative overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground">
                WE HELP SERVICE BUSINESSES
                <span className="block text-primary">GROW FASTER</span>
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
                Through <span className="text-purple font-medium">AI automation</span> that captures leads, books appointments, and closes deals while you sleep.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
                OUR <span className="text-primary">SOLUTIONS</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to automate your customer acquisition
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-24">
            {solutions.map((solution, idx) => (
              <ScrollAnimation key={idx}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!solution.imageOnRight ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${!solution.imageOnRight ? 'lg:order-2' : ''}`}>
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${idx === 0 ? 'bg-purple/10' : 'bg-primary/10'}`}>
                      <solution.icon className={`w-5 h-5 ${idx === 0 ? 'text-purple' : 'text-primary'}`} />
                      <span className={`font-inter text-sm font-medium ${idx === 0 ? 'text-purple' : 'text-primary'}`}>Solution {idx + 1}</span>
                    </div>
                    
                    <h3 className="font-bebas text-4xl md:text-5xl text-foreground">
                      {solution.title}
                    </h3>
                    
                    <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-3 pt-4">
                      {solution.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-inter text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="default" size="lg" className="group mt-4">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  
                  {/* Image */}
                  <div className={`relative ${!solution.imageOnRight ? 'lg:order-1' : ''}`}>
                    <div className={`absolute inset-0 blur-3xl rounded-full ${idx === 0 ? 'bg-purple/15' : 'bg-primary/10'}`} />
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className={`relative z-10 w-full rounded-2xl shadow-2xl border ${idx === 0 ? 'border-purple/30' : 'border-border/50'}`}
                    />
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-bebas text-5xl md:text-6xl">
                LET'S BUILD YOUR
                <span className="block text-primary mt-2">GROWTH SYSTEM</span>
              </h2>
              <p className="font-inter text-xl text-white/70">
                Ready to automate your business and get more clients? Book a free consultation today.
              </p>
              <Button variant="hero" size="lg" className="group">
                <Link to="/bookademo#bookademo" className="flex align-middle">
                Book Free Consultation
                <ArrowRight className="my-1 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
