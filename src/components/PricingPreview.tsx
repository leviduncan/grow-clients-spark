import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";

const PricingPreview = () => {
  const features = [
    "Unlimited call answering (24/7/365)",
    "Automatic appointment booking",
    "CRM integration (ServiceTitan, Housecall Pro, etc.)",
    "Emergency vs routine call routing",
    "SMS notifications for every call",
    "Call recordings & transcripts",
    "Weekly performance reports",
    "Setup & training included",
  ];

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ScrollAnimation>
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                SIMPLE, <span className="text-primary">TRANSPARENT</span> PRICING
              </h2>
            </div>

            {/* Pricing Card */}
            <Card className="border-2 border-primary/30 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3 className="font-bebas text-3xl text-foreground mb-2">
                    Professional Plan
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-bebas text-5xl sm:text-6xl text-primary">
                      $397
                    </span>
                    <span className="font-inter text-muted-foreground">/month</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-inter text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="default"
                    className="flex-1 group"
                  >
                    <Link to="/pricing" className="flex items-center justify-center w-full">
                      SEE FULL PRICING
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                  >
                    <Link to="/bookademo#bookademo" className="w-full">
                      BOOK A CALL
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border">
                <Shield className="w-5 h-5 text-primary" />
                <p className="font-inter text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">30-day money-back guarantee.</span> If you're not capturing more jobs, we'll refund everything.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
