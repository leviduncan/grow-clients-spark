import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";
import { CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {

  const howItWorks = [
    {
      step: "01",
      title: "Quick Setup Call (30 minutes)",
      description: [
        "We learn about your business, services, and pricing. You tell us how you want calls handled."
      ],
    },
    {
      step: "02",
      title: "We Build Your AI (24-48 hours)",
      description: [
        "We create and train your custom AI receptionist with your business information, voice, and call scripts."
      ],
    },
    {
      step: "03",
      title: "Go Live",
      description: [
        "Forward your number or use ours. Your AI starts answering calls immediately. You monitor everything from a simple dashboard.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* The Solution Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
              HOW IT <span className="text-primary">WORKS</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              From Setup to Booked Appointments in 48 Hours </p>
            <p className="font-inter text-sm text-muted-foreground max-w-2xl mx-auto">
              Sounds human. Available 24/7. Books appointments instantly.</p>
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
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="default"
              className="group"
            >
              <Link to="/bookademo#bookademo" className="flex align-middle uppercase">
                Book Your Setup Call
                <ArrowRight className="my-1 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HowItWorks;
