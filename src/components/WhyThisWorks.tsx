import { Check, X, Clock, DollarSign, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyThisWorks = () => {
  const withoutAI = [
    "They call your competitor first",
    "Get voicemail",
    "Call the next company on Google",
    "Get voicemail again",
    "Call YOU third",
    "Finally reach someone... but it's too late",
    "They already booked with whoever answered first",
  ];

  const withAI = [
    "Your AI assistant answers in 2 rings, 24/7",
    "Qualifies the emergency in 45 seconds",
    "Books them into your next available slot",
    "Sends confirmation via text",
    "You wake up to confirmed appointments",
  ];

  const stats = [
    {
      value: "60-70%",
      label: "of after-hours calls lost to faster competitors",
      icon: Phone,
    },
    {
      value: "$18-35K",
      label: "per month in emergency revenue lost",
      icon: DollarSign,
    },
    {
      value: "12-15 hrs",
      label: "per week on manual lead qualification",
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 sm:py-32  bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl leading-tight">
            WHY THIS <span className="text-primary">WORKS</span>
          </h2>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="font-bebas text-2xl sm:text-3xl text-foreground/90">
              The Emergency Call Window Is Only 90 Seconds
            </p>
            <p className="mt-4 text-muted-foreground text-lg">
              Here's what happens when someone has a furnace breakdown at 11 PM:
            </p>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Without AI */}
          <Card className="border-destructive/30 bg-destructive/5 hover:border-destructive/50 transition-colors">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-bebas text-2xl sm:text-3xl text-destructive mb-6">
                Without AI Automation
              </h3>
              <ul className="space-y-4">
                {withoutAI.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* With AI */}
          <Card className="border-primary/30 bg-primary/5 hover:border-primary/50 transition-colors">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-bebas text-2xl sm:text-3xl text-primary mb-6">
                With Our AI System
              </h3>
              <ul className="space-y-4">
                {withAI.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h3 className="font-bebas text-2xl sm:text-3xl text-center mb-8">
            The Math on Emergency Calls
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            According to industry data, HVAC companies lose an average of:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-bebas text-3xl sm:text-4xl text-primary">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Revenue Impact */}
        <Card className="border-primary bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-8 sm:p-10 text-center">
            <h3 className="font-bebas text-2xl sm:text-3xl mb-6">
              What One Additional Emergency Call Per Day Means:
            </h3>
            <p className="font-bebas text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
              1 call/day × $600 = $18,000/month
            </p>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Just capturing the calls already coming to you — not generating new ones.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary hover:border-primary/30 transition-colors mt-12">
          <CardContent className="p-6 sm:p-8">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
              Ready to be our first case study in Allentown?
            </h2>
            <p>We're offering a 60-day pilot at 50% off to document these exact results.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyThisWorks;
