import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

function PriceCards() {

    const plans = [
        {
            name: "🚀 EMERGENCY RESPONSE SYSTEM",
            oldPrice: "$1,997",
            price: "$997 (Pilot Pricing)",
            period: "/month",
            description: "What you get:",
            features: [
                "Emergency call routing (SMS to on-call tech)",
                "AI qualification (custom questions for your business)",
                "Appointment booking into Google Calendar or your CRM",
                "Email + SMS confirmations to customers",
                "60-day support + optimization",
            ],
            features2: [
                "20+ leads/month (so there's enough volume to test)",
                "ServiceTitan, Jobber, FieldEdge, Housecall Pro, or Google Calendar",
                "Appointment booking into Google Calendar or your CRM",
                "Willingness to give feedback during the first 30 days",
            ],
            popular: true,
        },
        {
            name: "Custom Enterprise",
            price: "$2,997+ (Contact for Quote)",
            period: "",
            description: "For multi-location shops, franchise owners, or contractors doing 150+ leads/month. Includes everything above + multi-tech dispatch rules, seasonal campaign automation, and monthly optimization.",
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
        <section className="py-20 gradient-purple-green">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Pain Points Section */}
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
                            INVESTMENT
                        </h2>
                        <p className="font-inter text-xl font-medium mb-10">
                            Pilot Program Pricing
                        </p>
                        <p className="font-inter text-lg font-medium">
                            I'm building case studies in the Allentown market. <strong>First 3 contractors get 50% off standard pricing</strong> in exchange for:
                            <div className="my-4">
                                <div className="flex justify-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                    </div>
                                    <span>Permission to film a 2-min testimonial (if you're happy with results)</span>
                                </div>
                                <div className="flex justify-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                    </div>
                                    <span>Anonymous data sharing (# of calls captured, response time improvements)</span>
                                </div>
                            </div>
                        </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => {
                            const isAIFeature = (feature: string) =>
                                feature.toLowerCase().includes("automation") ||
                                feature.toLowerCase().includes("api") ||
                                feature.toLowerCase().includes("24/7") ||
                                feature.toLowerCase().includes("priority");

                            return (
                                <Card
                                    key={index}
                                    className={`border-border/50 hover:shadow-xl transition-all duration-300 relative bg-card/80 backdrop-blur-sm ${plan.popular ? "ring-2 ring-gold scale-105 glow-gold-sm" : ""
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-4 py-1 rounded-full font-bebas text-md shadow-lg">
                                            MOST POPULAR
                                        </div>
                                    )}
                                    <CardHeader className="text-center pb-8">
                                        <CardTitle className="font-bebas text-3xl text-foreground mb-2">{plan.name}</CardTitle>
                                        <div className="mb-4">
                                            <span className="font-bebas text-5xl text-muted-foreground line-through">
                                                {plan.oldPrice}
                                            </span>
                                            <span className={`font-bebas text-5xl mx-2 ${plan.popular ? "text-gradient-gold" : "text-primary"}`}>
                                                {plan.price}
                                            </span>
                                            <span className="font-inter text-muted-foreground">{plan.period}</span>
                                        </div>
                                        <p className="font-inter text-sm text-muted-foreground">{plan.description}</p>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <Check
                                                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isAIFeature(feature) ? "text-purple" : "text-primary"}`}
                                                    />
                                                    <span className="font-inter text-sm text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button variant={plan.popular ? "hero" : "outline"} className="w-full" size="lg">
                                            {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default PriceCards