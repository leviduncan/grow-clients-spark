import { AlertCircle, TrendingDown, Clock } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Inconsistent Leads",
      description: "Relying on referrals isn't scalable. You need a predictable pipeline."
    },
    {
      icon: Clock,
      title: "No Time for Marketing",
      description: "You're busy serving clients. Who has time to learn Facebook Ads?"
    },
    {
      icon: AlertCircle,
      title: "Wasted Ad Spend",
      description: "Tried marketing before and burned cash with zero results to show."
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
              SOUND FAMILIAR?
            </h2>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Most service businesses struggle with the same challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <problem.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bebas text-3xl text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
