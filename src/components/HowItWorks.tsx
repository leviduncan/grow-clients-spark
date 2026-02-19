import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";
import { CheckCircle, ArrowRight } from "lucide-react";
import { howItWorksSteps, howItWorksStepsHeader, howItWorksStepsCTA } from "@/data";

const HowItWorks = () => {

  return (
    <section className="py-20 bg-background ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* The Solution Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4"
              dangerouslySetInnerHTML={{ __html: howItWorksStepsHeader[0].title }}
            />
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              {howItWorksStepsHeader[1].subtitle}</p>
            <p className="font-inter text-sm text-muted-foreground max-w-2xl mx-auto">
              {howItWorksStepsHeader[2].minititle}</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {howItWorksSteps.map((item, idx) => (
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
                {idx < howItWorksSteps.length - 1 && (
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
                {howItWorksStepsCTA}
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
