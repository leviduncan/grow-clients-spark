import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import { Phone, Clock, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";
import demoMax from "@/assets/demo-max.png";

const Features = () => {
  const painPoints = [
    {
      stat: "40%",
      title: "Calls Go Unanswered",
      description: "Small businesses miss nearly half of all incoming calls, losing potential customers to competitors.",
      icon: Phone,
    },
    {
      stat: "5 min",
      title: "Response Time Matters",
      description: "Leads drop significantly when response time exceeds 5 minutes. Speed is everything.",
      icon: Clock,
    },
    {
      stat: "Hours",
      title: "Wasted on Follow-ups",
      description: "Manual follow-ups waste hours of your team's time that could be spent on revenue-generating work.",
      icon: Users,
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Capture Every Lead",
      description: "Our AI answers every call instantly, 24/7. No more missed opportunities or voicemails left unheard.",
    },
    {
      step: "02",
      title: "Qualify & Book",
      description: "Max qualifies leads with intelligent questions and books appointments directly into your calendar.",
    },
    {
      step: "03",
      title: "Close Automatically",
      description: "Automated follow-ups nurture leads through your pipeline while you focus on delivering great service.",
    },
  ];

  const realImpact = [
    "Stop losing jobs when you're busy on-site",
    "Close more estimates with instant response",
    "Replace front-desk gaps automatically",
    "Works 24/7, never tired, never sick",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pain Points Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
              YOUR CUSTOMERS ARE CALLING
            </h2>
            <p className="font-inter text-xl text-primary font-medium">
              Are You Missing Them?
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {painPoints.map((point, idx) => (
              <Card key={idx} className="border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="font-bebas text-5xl text-primary mb-2">{point.stat}</div>
                  <h3 className="font-bebas text-2xl text-foreground mb-3">{point.title}</h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* How It Works Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
              HOW IT <span className="text-primary">WORKS</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to never miss another customer
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="font-bebas text-7xl text-primary/20 mb-4">{item.step}</div>
                    <h3 className="font-bebas text-3xl text-foreground mb-4">{item.title}</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Real Business Impact Section */}
        <ScrollAnimation>
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-muted/50 rounded-3xl p-8 md:p-12">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
                  REAL BUSINESS <span className="text-primary">IMPACT</span>
                </h2>
                <p className="font-inter text-lg text-muted-foreground">
                  See how Max transforms your business operations
                </p>
              </div>

              <div className="space-y-4">
                {realImpact.map((impact, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-inter text-lg text-foreground">{impact}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="font-bebas text-2xl text-primary">24/7</span>
                </div>
                <span className="font-inter text-muted-foreground">Always on, always ready</span>
              </div>
            </div>

            {/* Max Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <img
                src={demoMax}
                alt="Max AI Agent"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border-2 border-primary/20"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Features;
