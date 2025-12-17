import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, ShoppingBag, Briefcase, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const whoWeWorkWith = [
    {
      icon: Users,
      title: "Trades Businesses",
      description: "HVAC, plumbing, electrical, roofing, and more",
    },
    {
      icon: ShoppingBag,
      title: "eCommerce Brands",
      description: "Online stores looking to automate customer support",
    },
    {
      icon: Briefcase,
      title: "Agencies",
      description: "Marketing and service agencies scaling their operations",
    },
  ];

  const philosophy = [
    {
      title: "Simplicity First",
      description: "We believe great technology should be invisible. Our AI handles the complexity so you don't have to.",
    },
    {
      title: "Results Over Promises",
      description: "We don't make claims we can't back up. Every client sees measurable improvements within 30 days.",
    },
    {
      title: "Partnership, Not Vendorship",
      description: "Your success is our success. We're invested in your growth, not just selling you software.",
    },
  ];

  const bulletPoints = [
    "Founded by marketers who saw small businesses struggle",
    "Built for service businesses, not enterprise giants",
    "No long contracts or hidden fees",
    "Results-focused, not feature-focused",
    "Human support when you need it",
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-purple-green relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground">
                WE'RE ON A MISSION TO HELP
                <span className="block text-primary">LOCAL BUSINESSES GROW</span>
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
                Using <span className="text-purple font-medium">AI and automation</span> to level the playing field for small service businesses.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="font-bebas text-5xl text-foreground">
                  ABOUT <span className="text-primary">GROWCLIENTSAI</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  GrowClientsAI was founded by marketers who were frustrated with how 
                  complicated and expensive it was for small businesses to get quality 
                  marketing help.
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  We saw service businesses struggling—plumbers, electricians, consultants, 
                  and local service providers who were great at what they did but couldn't 
                  afford $5,000/month marketing agencies.
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  So we built GrowClientsAI: an AI-powered platform that delivers 
                  enterprise-level results at a fraction of the cost.
                </p>
              </div>
              
              <div className="space-y-4">
                {bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-muted/50 px-6 py-4 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-inter text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
                WHO WE <span className="text-primary">WORK WITH</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
                We specialize in helping these types of businesses grow
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whoWeWorkWith.map((item, idx) => (
                <Card key={idx} className="border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bebas text-2xl text-foreground mb-2">{item.title}</h3>
                    <p className="font-inter text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
                OUR <span className="text-purple">PHILOSOPHY</span>
              </h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {philosophy.map((item, idx) => (
                <Card key={idx} className="border-border/50 hover:shadow-lg hover:border-purple/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="font-bebas text-6xl text-purple/20 mb-4">0{idx + 1}</div>
                    <h3 className="font-bebas text-2xl text-gold mb-3">{item.title}</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
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
                Ready to see how AI can transform your business? Book a free consultation today.
              </p>
              <Button variant="hero" size="lg" className="group">
                <Link to="/bookademo#bookademo" className="flex align-middle">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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

export default About;
