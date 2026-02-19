import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import { CheckCircle } from "lucide-react";
import VideoOverlay from "./VideoOverlay";
import { solutionSteps, solutionStepsHeader, solutionStepsBottom, solutionStepsCTA } from "@/data";

const TheSolution = () => {

  return (
    <section className="py-20 bg-muted-2 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* The Solution Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4"
              dangerouslySetInnerHTML={{ __html: solutionStepsHeader[0].title }}
            />
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              {solutionStepsHeader[1].subtitle} </p>
            <p className="font-inter text-sm text-muted-foreground max-w-2xl mx-auto">
              {solutionStepsHeader[2].minititle}</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {solutionSteps.map((item, idx) => (
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
              {solutionStepsBottom}
            </h3>
          </div>
          <VideoOverlay position="relative" bg="" content={solutionStepsCTA} />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TheSolution;
