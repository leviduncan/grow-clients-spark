import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Check, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

function PriceCards() {
  const emergencyPlan = {
    name: "🚀 EMERGENCY RESPONSE SYSTEM",
    oldPrice: "$1,997",
    price: "$997",
    label: "Pilot Pricing",
    whatYouGet: [
      "Emergency call routing (SMS to on-call tech)",
      "AI qualification (custom questions for your business)",
      "Appointment booking into Google Calendar or your CRM",
      "Email + SMS confirmations to customers",
      "60-day support + optimization",
    ],
    whatYouNeed: [
      "20+ leads/month (so there's enough volume to test)",
      "ServiceTitan, Jobber, FieldEdge, Housecall Pro, or Google Calendar",
      "Willingness to give feedback during the first 30 days",
    ],
    timeline: "3 weeks from kickoff to live system",
  };

  const enterprisePlan = {
    name: "💼 CUSTOM ENTERPRISE",
    price: "$2,997+",
    label: "Contact for Quote",
    description:
      "For multi-location shops, franchise owners, or contractors doing 150+ leads/month.",
    features: [
      "Everything in Emergency Response System",
      "Multi-tech dispatch rules",
      "Seasonal campaign automation",
      "Monthly optimization",
    ],
  };

  return (
    <section className="py-20 gradient-purple-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
              INVESTMENT
            </h2>
            <p className="font-inter text-xl font-medium text-primary mb-10">
              Pilot Program Pricing
            </p>
            <div className="font-inter text-lg max-w-3xl mx-auto">
              <p className="mb-6">
                I'm building case studies in the Allentown market.{" "}
                <span className="font-bold text-gold">
                  First 3 contractors get 50% off standard pricing
                </span>{" "}
                in exchange for:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-left">
                    Permission to film a 2-min testimonial (if you're happy with results)
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-left">
                    Anonymous data sharing (# of calls captured, response time improvements)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Emergency Response System Card */}
            <Card className="border-border/50 hover:shadow-xl transition-all duration-300 relative bg-card/80 backdrop-blur-sm ring-2 ring-gold scale-105 glow-gold-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-4 py-1 rounded-full font-bebas text-md shadow-lg">
                MOST POPULAR
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="font-bebas text-2xl md:text-3xl text-foreground mb-4">
                  {emergencyPlan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="font-bebas text-3xl text-muted-foreground/50 line-through mr-3">
                    {emergencyPlan.oldPrice}
                  </span>
                  <span className="font-bebas text-5xl text-gradient-gold">
                    {emergencyPlan.price}
                  </span>
                </div>
                <span className="inline-block bg-primary/10 text-primary font-inter text-sm font-medium px-3 py-1 rounded-full">
                  {emergencyPlan.label}
                </span>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* What you get */}
                <div>
                  <h4 className="font-bebas text-lg text-foreground mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    What you get:
                  </h4>
                  <ul className="space-y-2 pl-2">
                    {emergencyPlan.whatYouGet.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="font-inter text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-border/50" />

                {/* What you need */}
                <div>
                  <h4 className="font-bebas text-lg text-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple" />
                    What you need:
                  </h4>
                  <ul className="space-y-2 pl-2">
                    {emergencyPlan.whatYouNeed.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-purple flex-shrink-0 mt-1" />
                        <span className="font-inter text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="flex items-center justify-center gap-2 bg-primary/20 rounded-full py-3 px-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-inter text-sm font-medium text-foreground">
                    {emergencyPlan.timeline}
                  </span>
                </div>

                {/* CTA */}
                <div className="relative">
                  <Button variant="hero" className="w-full" size="lg">
                    BOOK FREE AUDIT
                  </Button>
                  <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                    3 SPOTS LEFT
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Card */}
            <Card className="border-border/50 hover:shadow-xl transition-all duration-300 relative bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="font-bebas text-2xl md:text-3xl text-foreground mb-4">
                  {enterprisePlan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="font-bebas text-5xl text-primary">
                    {enterprisePlan.price}
                  </span>
                </div>
                <span className="inline-block bg-muted text-muted-foreground font-inter text-sm font-medium px-3 py-1 rounded-full">
                  {enterprisePlan.label}
                </span>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Description */}
                <p className="font-inter text-sm text-muted-foreground text-center">
                  {enterprisePlan.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-bebas text-lg text-foreground mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    Includes:
                  </h4>
                  <ul className="space-y-2 pl-2">
                    {enterprisePlan.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-1 ${
                            idx === 0 ? "text-primary" : "text-purple"
                          }`}
                        />
                        <span className="font-inter text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer to align with other card */}
                <div className="flex-grow" />

                {/* CTA */}
                <Button variant="outline" className="w-full" size="lg">
                  CONTACT FOR QUOTE
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>

        {/* 60-Day Guarantee */}
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-gold/50 bg-gradient-to-br from-gold/5 to-gold/10 backdrop-blur-sm shadow-lg glow-gold-sm">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="font-bebas text-3xl md:text-4xl text-foreground mb-4">
                  ⚡ 60-DAY PERFORMANCE GUARANTEE
                </h3>
                <p className="font-inter text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If the system doesn't capture at least{" "}
                  <span className="font-bold text-foreground">
                    5 additional emergency calls
                  </span>{" "}
                  in the first 60 days, I'll refund 50% of your investment.
                </p>
                <p className="font-inter text-xl font-semibold text-foreground">
                  You're betting $997.{" "}
                  <span className="text-gold">I'm betting my reputation.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default PriceCards;