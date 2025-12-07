import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$997",
      period: "/month",
      description: "Perfect for businesses just getting started with digital marketing",
      features: [
        "SEO optimization",
        "Google Business Profile setup",
        "Social media (2 platforms)",
        "Monthly content calendar",
        "Email marketing (up to 500 contacts)",
        "Monthly performance report",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$1,997",
      period: "/month",
      description: "For businesses ready to scale and dominate their market",
      features: [
        "Everything in Starter",
        "Advanced SEO & local search",
        "Social media (4 platforms)",
        "PPC campaign management ($500 ad spend included)",
        "Email marketing (up to 2,500 contacts)",
        "Video content creation",
        "Conversion optimization",
        "Weekly performance reports",
        "Priority phone & email support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for established businesses with complex needs",
      features: [
        "Everything in Growth",
        "Unlimited social platforms",
        "Custom PPC budget",
        "Unlimited email contacts",
        "Dedicated account manager",
        "Custom automation workflows",
        "API integrations",
        "White-label reporting",
        "24/7 priority support",
      ],
      popular: false,
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
                SIMPLE
                <span className="block text-primary">TRANSPARENT PRICING</span>
              </h1>
              <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
                No hidden fees. No long-term contracts. Cancel anytime.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`border-border/50 hover:shadow-xl transition-all duration-300 relative ${
                    plan.popular ? "ring-2 ring-primary scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full font-bebas text-sm">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="font-bebas text-3xl text-foreground mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="font-bebas text-5xl text-primary">{plan.price}</span>
                      <span className="font-inter text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="font-inter text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-inter text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.popular ? "hero" : "outline"} className="w-full font-bebas" size="lg">
                      {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-bebas text-5xl text-center text-foreground mb-12">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Do you require long-term contracts?",
                    a: "No! We work month-to-month because we're confident you'll see results and want to stay.",
                  },
                  {
                    q: "What if I'm not satisfied?",
                    a: "We offer a 30-day money-back guarantee. If you're not happy, we'll refund your first month.",
                  },
                  {
                    q: "Can I upgrade or downgrade my plan?",
                    a: "Absolutely! You can change your plan at any time to match your business needs.",
                  },
                  {
                    q: "Are there any setup fees?",
                    a: "No setup fees. The price you see is the price you pay.",
                  },
                ].map((faq, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-bebas text-xl text-foreground mb-2">{faq.q}</h3>
                      <p className="font-inter text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
