import Header from "@/components/Header";
import Footer from "@/components/Footer2";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Phone,
  Calendar,
  Link2,
  BarChart3,
  HeadphonesIcon,
  ArrowRight,
  Shield,
  TrendingUp,
  TrendingDown,
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingCategories = [
    {
      title: "Call Handling",
      icon: Phone,
      features: [
        "Unlimited incoming calls (24/7/365)",
        "Average 2-minute response time",
        "Handles emergencies, appointments, and inquiries",
        "Natural, human-like conversations",
        "Spanish language support available",
      ],
    },
    {
      title: "Appointment Booking",
      icon: Calendar,
      features: [
        "Direct calendar integration",
        "Automatic appointment scheduling",
        "SMS confirmations sent to customers",
        "Emergency vs routine prioritization",
        "No double-booking",
      ],
    },
    {
      title: "Integrations",
      icon: Link2,
      features: [
        "ServiceTitan",
        "Housecall Pro",
        "Jobber",
        "FieldEdge",
        "Google Calendar",
        "Most major HVAC software",
      ],
    },
    {
      title: "Reporting & Control",
      icon: BarChart3,
      features: [
        "Real-time call notifications via SMS",
        "Full call recordings & transcripts",
        "Performance dashboard",
        "Weekly summary reports",
        "Call analytics & insights",
      ],
    },
    {
      title: "Support",
      icon: HeadphonesIcon,
      features: [
        "Complete setup & training included",
        "Ongoing optimization",
        "Priority email & phone support",
        "Script updates as you request them",
      ],
    },
  ];

  const faqs = [
    {
      q: "What happens if I need to pause service seasonally?",
      a: "You can pause for up to 2 months per year. Useful for HVAC contractors with very slow seasons.",
    },
    {
      q: "Do you charge per call or per minute?",
      a: "No. Unlimited calls included. Answer 50 calls or 500 calls - same price.",
    },
    {
      q: "What if I want to handle some calls myself?",
      a: 'You can set up forwarding rules. For example: "Forward to my phone first, if no answer in 3 rings, go to AI."',
    },
    {
      q: "Can I upgrade my script or features later?",
      a: "Yes, anytime. We make script adjustments as your business evolves.",
    },
    {
      q: "What's the cancellation policy?",
      a: "Month-to-month. Cancel anytime with 30 days notice. We'll even help transition if you need.",
    },
    {
      q: "Is there a setup fee?",
      a: "Not right now. Complete setup and training included at no extra cost. (Normally $997)",
    },
  ];

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-foreground mb-6">
              ONE SIMPLE PRICE. <span className="text-primary">EVERYTHING INCLUDED.</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No long-term contract. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/30 overflow-hidden">
                {/* Card Header */}
                <div className="bg-muted/90 p-8 text-center border-b border-border">
                  <h2 className="font-bebas text-3xl sm:text-4xl text-white mb-4">
                    Professional Plan
                  </h2>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="font-bebas text-6xl sm:text-7xl text-primary">
                      $397
                    </span>
                    <span className="font-inter text-xl text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <p className="font-bebas text-xl text-white">
                    Everything You Need
                  </p>
                </div>

                {/* Features Grid */}
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {pricingCategories.map((category, index) => (
                      <div key={index} className={index === 4 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <category.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-bebas text-xl text-foreground">
                            {category.title}
                          </h3>
                        </div>
                        <div className="space-y-2 pl-13">
                          {category.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="font-inter text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-10 text-center">
                    <Button
                      size="lg"
                      variant="default"
                      className="group text-lg px-8 py-6 h-auto"
                    >
                      <Link to="/bookademo#bookademo" className="flex items-center">
                        GET STARTED TODAY
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 sm:py-32 bg-muted-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Calculator className="w-5 h-5 text-primary" />
                <span className="font-inter text-sm text-primary font-medium">
                  ROI Calculator
                </span>
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                THIS PAYS FOR ITSELF BY CAPTURING <br />
                <span className="text-primary">JUST 2 EXTRA JOBS PER MONTH</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* What You Lose */}
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-destructive" />
                    </div>
                    <h3 className="font-bebas text-2xl text-foreground">
                      What You Lose to Missed Calls
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-inter text-muted-foreground">
                        Average HVAC service call
                      </span>
                      <span className="font-bebas text-xl text-foreground">$350</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-inter text-muted-foreground">
                        Average installation
                      </span>
                      <span className="font-bebas text-xl text-foreground">$5,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-inter text-muted-foreground">
                        Calls missed per month
                      </span>
                      <span className="font-bebas text-xl text-foreground">15-30</span>
                    </div>
                    <div className="flex justify-between items-center py-2 bg-destructive/10 rounded-lg px-3 -mx-3">
                      <span className="font-inter font-medium text-foreground">
                        Lost revenue per month
                      </span>
                      <span className="font-bebas text-2xl text-destructive">
                        $4,000-7,000
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What You Gain */}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bebas text-2xl text-foreground">
                      What You Gain
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Capture 90%+ of all calls",
                      "Book appointments instantly",
                      "24/7 emergency availability",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 py-2 border-b border-border/50"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-inter text-foreground">{item}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-2 bg-primary/10 rounded-lg px-3 -mx-3">
                      <span className="font-inter font-medium text-foreground">
                        ROI
                      </span>
                      <span className="font-bebas text-2xl text-primary">
                        3-5x Your Investment
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                OUR 30-DAY <span className="text-primary">PERFORMANCE GUARANTEE</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                If your AI doesn't book at least <span className="text-foreground font-medium">$4,500 worth of appointments</span> in
                your first 30 days, we'll refund your entire first month payment.
              </p>
              <p className="font-bebas text-2xl text-primary mb-8">
                No questions asked.
              </p>
              <p className="font-inter text-muted-foreground max-w-xl mx-auto">
                We're this confident because we've seen it work. When HVAC contractors
                don't miss calls, they make significantly more money.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 bg-muted-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <h3 className="font-bebas text-xl sm:text-2xl text-primary mb-3">
                      Q: {faq.q}
                    </h3>
                    <p className="font-inter text-foreground leading-relaxed">
                      <span className="font-medium">A:</span> {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              READY TO STOP <span className="text-primary">MISSING CALLS?</span>
            </h2>
            <p className="font-inter text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Book a 15-minute demo call to see it in action.
            </p>
            <Button
              size="lg"
              variant="default"
              className="group text-lg px-8 py-6 h-auto"
            >
              <Link to="/bookademo#bookademo" className="flex items-center">
                BOOK DEMO CALL
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
