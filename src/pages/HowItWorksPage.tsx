import Header from "@/components/Header";
import Footer2 from "@/components/Footer2";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { howItWorksPageSteps, howItWorksDifferences, callExamples } from "@/data";
import CTA from "@/components/CTA";

const HowItWorksPage = () => {
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
              FROM ZERO TO <span className="text-primary">FULL COVERAGE</span>{" "}
              IN 48 HOURS
            </h1>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's exactly what happens when you work with us.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                STEP-BY-STEP <span className="text-primary">PROCESS</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto space-y-12">
            {howItWorksPageSteps.map((step, index) => (
              <ScrollAnimation key={index}>
                <Card className="border-border hover:border-primary/30 transition-colors overflow-hidden">
                  <CardContent className="p-0">
                    {/* Step Header */}
                    <div className="bg-muted/90 p-6 border-b border-border flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-bebas text-lg text-primary">
                            STEP {step.number}
                          </span>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-inter">
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="font-bebas text-2xl sm:text-3xl text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="p-6 space-y-6">
                      {step.whatWeCover && (
                        <div>
                          <h4 className="font-bebas text-xl text-foreground mb-3">
                            What We Cover:
                          </h4>
                          <div className="space-y-2">
                            {step.whatWeCover.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="font-inter text-muted-foreground">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.whatYouGet && (
                        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                          <h4 className="font-bebas text-lg text-primary mb-1">
                            What You Get:
                          </h4>
                          <p className="font-inter text-foreground">
                            {step.whatYouGet}
                          </p>
                        </div>
                      )}

                      {step.whatHappens && (
                        <div>
                          <h4 className="font-bebas text-xl text-foreground mb-3">
                            What Happens:
                          </h4>
                          <div className="space-y-2">
                            {step.whatHappens.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="font-inter text-muted-foreground">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.whatYouDo && (
                        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                          <h4 className="font-bebas text-lg text-primary mb-1">
                            What You Do:
                          </h4>
                          <p className="font-inter text-foreground font-medium">
                            {step.whatYouDo}
                          </p>
                        </div>
                      )}

                      {step.examples && (
                        <div>
                          <h4 className="font-bebas text-xl text-foreground mb-3">
                            Examples You'll Test:
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {step.examples.map((example, idx) => (
                              <div
                                key={idx}
                                className="bg-muted/10 rounded-lg p-3 font-inter text-sm text-foreground"
                              >
                                {example}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.options && (
                        <div>
                          <h4 className="font-bebas text-xl text-foreground mb-3">
                            Two Options:
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {step.options.map((option, idx) => (
                              <div
                                key={idx}
                                className={`rounded-lg p-4 border ${option.recommended
                                  ? "border-primary bg-primary/5"
                                  : "border-border bg-muted/10"
                                  }`}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <h5 className="font-bebas text-lg text-foreground">
                                    {option.name}
                                  </h5>
                                  {option.recommended && (
                                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                                      Recommended
                                    </span>
                                  )}
                                </div>
                                <p className="font-inter text-sm text-foreground">
                                  {option.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.dashboard && (
                        <div>
                          <h4 className="font-bebas text-xl text-foreground mb-3">
                            Your Dashboard Shows:
                          </h4>
                          <div className="space-y-2">
                            {step.dashboard.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="font-inter text-muted-foreground">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.weeklyCheckins && (
                        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                          <h4 className="font-bebas text-lg text-primary mb-1">
                            Weekly Check-ins:
                          </h4>
                          <p className="font-inter text-foreground">
                            {step.weeklyCheckins}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20 sm:py-32 bg-muted-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                WHAT MAKES THIS <span className="text-primary">DIFFERENT</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howItWorksDifferences.map((diff, index) => (
              <ScrollAnimation key={index}>
                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <diff.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bebas text-2xl text-foreground mb-3">
                      {diff.title}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {diff.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Real Call Examples */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                REAL CALL <span className="text-primary">EXAMPLES</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto space-y-8">
            {callExamples.map((example, index) => (
              <ScrollAnimation key={index}>
                <Card className="border-border hover:border-primary/30 transition-colors overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-muted/90 px-6 py-4 border-b border-border">
                      <h3 className="font-bebas text-xl text-primary">
                        {example.scenario}
                      </h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {/* Customer Message */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="bg-muted/20 rounded-2xl rounded-tl-none p-4 flex-1">
                          <p className="font-inter text-foreground text-sm">
                            "{example.customer}"
                          </p>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl rounded-tl-none p-4 flex-1">
                          <p className="font-inter text-foreground text-sm">
                            "{example.ai}"
                          </p>
                        </div>
                      </div>

                      {/* Result */}
                      <div className="flex items-center gap-2 ml-14">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span className="font-inter text-sm text-primary font-medium">
                          {example.result}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <CTA
        title1="BOOK YOUR"
        title2="SETUP CALL"
        sub="See exactly how this will work for your business."
        cta="BOOK YOUR FREE DEMO CALL"
      />

      <Footer2 />
    </div>
  );
};

export default HowItWorksPage;
