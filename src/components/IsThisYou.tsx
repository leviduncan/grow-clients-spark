import { X, Check } from "lucide-react";
import hvac from "@/assets/hvac_owner.png"

const IsThisYou = () => {
  const isThisYou = [
    {
      title: "Leads go cold while you're on jobs",
      description: "You're under a furnace at 2 PM. A $4,500 AC replacement inquiry comes in. You see it at 6 PM. They booked with someone else at 2:47 PM.",
    },
    {
      title: "After-hours = automatic loss",
      description: "It's 10 PM. Someone's heat just died. They call you first (because you rank well). Voicemail. They call your competitor. He answers. You lost $800 in 90 seconds.",
    },
    {
      title: "Your calendar is a graveyard of $89 tune-ups",
      description: "Meanwhile, the $8,500 furnace replacement you could have booked yesterday is getting installed by the guy who called them back in 3 minutes.",
    },
    {
      title: "You're playing secretary instead of technician",
      description: "Monday morning: 47 unread texts. 'What's your availability?' 'How much for a...' 'Do you service...' You spend 90 minutes typing responses you've typed 1,000 times before.",
    },
  ];

  const Familiar = () => {
    return (
      <>
        <div className="mt-10">
          <h3 className="text-2xl">
            Sound familiar?
          </h3>
          <p className="font-inter max-w-2xl">
            If you're using ServiceTitan, Jobber, FieldEdge, or Housecall Pro and <strong>already getting leads </strong>(even just 10-15/month), you don't have a lead generation problem.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl">
            You have a speed-to-response problem.
          </h3>
          <p className="font-inter max-w-2xl">
            And it's costing you $15K-$30K per month in jobs you should have won.
          </p>
        </div>
      </>
    )
  }
  return (
    <section className="py-10 sm:py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
              IS THIS <span className="text-primary">YOU?</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              You're bleeding revenue in ways you can't even see:
            </p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              {/* HVAC Owner image */}
              <img src={hvac} className="rounded-2xl" alt="Side view of an overwhelmed HVAC business owner in a cluttered office, holding a phone with missed emergency calls while his laptop shows low lead conversion despite high lead volume." />
            
              <div className="hidden lg:flex flex-col ">
                <Familiar />
              </div>
            </div>
            <div>
              {/* Pain Points Grid */}
              <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-6">
                {isThisYou.map((point, index) => (
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
              <div className="lg:hidden ">
                <Familiar />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IsThisYou;
