import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import { CheckCircle, ArrowRight } from "lucide-react";
import VideoOverlay from "./VideoOverlay";

const TheSolution = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const howItWorks = [
    {
      step: "01",
      title: "Lead Arrives (Any Source)",
      description: [
        "Website form, phone call, Facebook message, doesn't matter",
        "System captures it instantly"
      ],
    },
    {
      step: "02",
      title: "AI Triages in 45 Seconds",
      description: [
        "Emergency? (No heat, no cooling, gas leak) → Your on-call tech gets an SMS: 'Emergency - No heat - Call Sarah at 610-555-1234 NOW'",
        "Routine? (Maintenance, quote) → Books into your calendar automatically",
        "Tire-kicker? (Just pricing out 6 companies) → Goes into follow-up sequence"
      ],
    },
    {
      step: "03",
      title: "You Wake Up to Confirmed Appointments",
      description: [
        "Customer already got a response. Appointment already booked. You just show up and run the call",
      ],
    },
  ];

  const realImpact = [
    "Stop losing jobs when you're busy on-site",
    "Close more estimates with instant response",
    "Replace front-desk gaps automatically",
    "Works 24/7, never tired, never sick",
  ];

  return (
    <section className="py-20 bg-muted/5 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* The Solution Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
              THE <span className="text-primary">SOLUTION</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              How the Emergency Response System Works:
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="font-bebas text-7xl text-purple/20 mb-4">{item.step}</div>
                    <h3 className="font-bebas text-3xl text-foreground mb-4">{item.title}</h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">{item.description.map((desc, idx) => (
                      <div key={idx} className="flex gap-4 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-inter text-md text-foreground">{desc}</span>
                      </div>
                    )
                    )}</p>
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
          <div className="text-center mb-10">
            <h3 className="font-bebas text-3xl text-foreground mb-4">
              No app to check. No texts to send. No calendar Tetris.
            </h3>
          </div>
          <VideoOverlay position="relative" bg="" content="SEE IT RUNNING LIVE" />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TheSolution;
