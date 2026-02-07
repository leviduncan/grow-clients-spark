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
      title: "Answers Every Call",
      description: [
        "Emergency furnace repair at 2am? Routine maintenance at 8am? Your AI picks up every single call, every time."
      ],
    },
    {
      step: "02",
      title: "Books Appointments",
      description: [
        "Instantly schedules jobs directly into your calendar. Customers get confirmed without you lifting a finger."
      ],
    },
    {
      step: "03",
      title: "Sounds Completely Human",
      description: [
        "Natural conversations, not robotic menus. Customers think they're talking to your best employee.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted-2 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* The Solution Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
              THE <span className="text-primary">SOLUTION</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet Your New AI Receptionist </p>
            <p className="font-inter text-sm text-muted-foreground max-w-2xl mx-auto">
              Sounds human. Available 24/7. Books appointments instantly.</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="text-center hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
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
