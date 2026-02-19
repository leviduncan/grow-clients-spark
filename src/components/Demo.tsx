import { Phone } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { demoTalkingPoints, demoTalkingPointsHeader, demoTalkingPointsCTA } from "@/data";

const Demo = () => {

  return (
    <section className="py-20 sm:py-32 bg-muted-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4"
              dangerouslySetInnerHTML={{ __html: demoTalkingPointsHeader[0].title }}
              />
            </div>

            {/* Phone Number Display */}
            <div className="text-center mb-10">
              <a
                href={`tel:+1${demoTalkingPointsCTA}`}
                className="inline-flex items-center justify-center gap-4 bg-card border-2 border-primary/30 rounded-2xl px-8 py-6 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <span className="font-bebas text-4xl sm:text-5xl md:text-6xl text-primary">
                  {demoTalkingPointsCTA}
                </span>
              </a>
            </div>

            {/* Subtext */}
            <div className="text-center">
              <p className="font-inter text-lg text-foreground mb-6">
                {demoTalkingPointsHeader[1].subtitle}
              </p>

              {/* Talking Points */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                {demoTalkingPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-full px-5 py-2.5 shadow-sm"
                  >
                    <span className="font-inter text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <p className="font-inter text-muted-foreground max-w-xl mx-auto">
                {demoTalkingPointsHeader[2].minititle}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Demo;
