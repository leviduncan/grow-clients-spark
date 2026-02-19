import Header from "@/components/Header";
import Footer from "@/components/Footer2";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneOff, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { companyValues } from "@/data";

const About = () => {
  const values = companyValues;

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
              WE'RE HVAC CONTRACTORS WHO GOT{" "}
              <span className="text-primary">TIRED OF MISSED CALLS</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <PhoneOff className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground">
                  OUR <span className="text-primary">STORY</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  In 2023, we were running our own HVAC business and constantly
                  frustrated by the same problem:{" "}
                  <span className="text-foreground font-medium">
                    missed calls = lost money.
                  </span>
                </p>

                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  We'd be up on a roof installing an AC unit, and three potential
                  customers would call. By the time we got back to them, they'd
                  already booked with someone else.
                </p>

                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  We tried hiring receptionists.{" "}
                  <span className="text-foreground font-medium">Too expensive.</span>{" "}
                  We tried answering services.{" "}
                  <span className="text-foreground font-medium">
                    Too robotic and unhelpful.
                  </span>
                </p>

                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  So we built something better:{" "}
                  <span className="text-primary font-medium">
                    an AI that sounds human, knows HVAC, and never misses a call.
                  </span>
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="font-bebas text-xl text-primary">
                      THE RESULT
                    </span>
                  </div>
                  <p className="font-inter text-foreground">
                    After using it in our own business and seeing our revenue jump
                    by <span className="font-bebas text-2xl text-primary">40%</span>,
                    we knew other HVAC contractors needed this.
                  </p>
                </div>

                <p className="font-inter text-lg text-foreground leading-relaxed">
                  That's why we started{" "}
                  <span className="font-bebas text-xl text-primary">
                    GrowClientsAI
                  </span>
                  .
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-32 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Target className="w-8 h-8 text-primary" />
              </div>

              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                OUR <span className="text-primary">MISSION</span>
              </h2>

              <p className="font-bebas text-2xl sm:text-3xl text-foreground mb-6">
                Level the playing field for small HVAC contractors.
              </p>

              <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6">
                The big companies have call centers and 24/7 staff. You shouldn't
                have to miss calls just because you're a smaller operation.
              </p>

              <p className="font-inter text-lg text-foreground leading-relaxed">
                Our AI gives you{" "}
                <span className="text-primary font-medium">
                  enterprise-level call handling
                </span>{" "}
                at a fraction of the cost.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                OUR <span className="text-primary">VALUES</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <ScrollAnimation key={index}>
                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bebas text-xl sm:text-2xl text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              READY TO SEE <span className="text-primary">HOW IT WORKS?</span>
            </h2>
            <Button
              size="lg"
              variant="default"
              className="group text-lg px-8 py-6 h-auto"
            >
              <Link to="/bookademo#bookademo" className="flex items-center">
                BOOK A DEMO CALL
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

export default About;
