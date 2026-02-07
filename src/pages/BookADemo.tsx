import Footer from "@/components/Footer2";
import Header from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MessageSquare } from "lucide-react";

function BookADemo() {
  const expectations = [
    "We'll call your business live and show you what your AI will sound like",
    "We'll answer all your technical questions",
    "We'll show you the dashboard and reporting",
    "No pressure - just a demo",
  ];

  return (
    <div className="min-h-screen font-inter bg-background" id="bookademo">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-foreground mb-6">
              LET'S BUILD YOUR <span className="text-primary">AI RECEPTIONIST</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a 15-minute call. We'll show you exactly how this works and
              answer all your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - What to Expect */}
            <ScrollAnimation>
              <div>
                <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-8">
                  WHAT TO EXPECT ON THE <span className="text-primary">CALL</span>
                </h2>

                <div className="space-y-4 mb-12">
                  {expectations.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/10 rounded-lg border border-border"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-inter text-foreground pt-1">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Alternative Contact */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-bebas text-2xl text-foreground mb-6">
                      PREFER TO TALK <span className="text-primary">RIGHT NOW?</span>
                    </h3>

                    <div className="space-y-4">
                      <a
                        href="tel:+15551234567"
                        className="flex items-center gap-4 p-4 bg-muted/10 rounded-lg border border-border hover:border-primary/30 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-inter text-sm text-muted-foreground">
                            Call/Text
                          </p>
                          <p className="font-bebas text-xl text-foreground">
                            (555) 123-4567
                          </p>
                        </div>
                      </a>

                      <a
                        href="mailto:info@growclientsai.com"
                        className="flex items-center gap-4 p-4 bg-muted/10 rounded-lg border border-border hover:border-primary/30 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-inter text-sm text-muted-foreground">
                            Email
                          </p>
                          <p className="font-bebas text-xl text-foreground">
                            info@growclientsai.com
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Try the AI */}
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-3 mb-2">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <h4 className="font-bebas text-lg text-primary">
                          Or Try the AI
                        </h4>
                      </div>
                      <p className="font-inter text-sm text-muted-foreground">
                        Call our demo line at{" "}
                        <a
                          href="tel:+14019928142"
                          className="text-primary font-medium hover:underline"
                        >
                          1 (401) 992 8142
                        </a>{" "}
                        and experience it yourself.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* Right Column - Lead Form */}
            <ScrollAnimation>
              <Card className="border-2 border-primary/30 sticky top-24">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-bebas text-2xl text-foreground mb-6 text-center">
                    BOOK YOUR <span className="text-primary">FREE DEMO</span>
                  </h3>
                  <LeadForm source="book-a-demo" />
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BookADemo;
