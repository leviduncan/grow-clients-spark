import { X, Check } from "lucide-react";

const TheProblem = () => {
  const theProblem = [
    {
      title: "After-Hours Emergencies",
      description: "Someone's furnace dies at 11pm. They call you. No answer. They call your competitor. You lose $800-1,200.",
    },
    {
      title: "Busy Season Overload",
      description: "Your phone rings while you're under a boiler. By the time you call back, they've already booked someone else.",
    },
    {
      title: "The Real Cost",
      description: "HVAC contractors lose an average of $4,000-7,000 per month in missed calls. That's $50,000-84,000 per year in lost revenue.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
              THE <span className="text-primary">PROBLEM</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              How Many Calls Are You Missing Right Now?
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {theProblem.map((point, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Strikethrough effect on hover */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <X className="w-5 h-5 text-destructive group-hover:hidden" />
                      <Check className="w-5 h-5 text-primary hidden group-hover:block" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bebas text-xl text-foreground mb-1 relative">
                        <span className="relative">
                          {point.title}
                          <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
                        </span>
                      </h3>
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>

                  {/* Eliminated badge */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-primary text-primary-foreground text-xs font-inter font-medium px-2 py-1 rounded-full">
                      Eliminated
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="font-inter text-lg max-w-2xl mx-auto">
              <strong>The cost?</strong> If you're getting 50 leads per month and losing 40% to slow response, that's <strong>$3,000-$8,000 in lost revenue monthly.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
