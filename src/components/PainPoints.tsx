import { X, Check } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      title: "Manual Work",
      description: "Spending hours on repetitive tasks that could be automated",
    },
    {
      title: "Missed Calls",
      description: "Losing potential customers because you can't answer every call",
    },
    {
      title: "High Costs",
      description: "Paying expensive staff to handle basic customer inquiries",
    },
    {
      title: "Slow Responses",
      description: "Customers waiting hours or days for simple answers",
    },
    {
      title: "Limited Hours",
      description: "Missing leads that come in after business hours",
    },
    {
      title: "Lost Leads",
      description: "Potential customers slipping through the cracks",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
              ELIMINATES YOUR <span className="text-primary">PAIN POINTS</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Say goodbye to the challenges that hold your business back
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
