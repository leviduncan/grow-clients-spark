import { Target, Megaphone, BarChart3, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI analyzes thousands of data points to find people actively searching for your services"
    },
    {
      icon: Megaphone,
      title: "Multi-Channel Campaigns",
      description: "Google, Facebook, Instagram - we optimize across all platforms simultaneously"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Live dashboard shows exactly how many leads you're getting and what they cost"
    },
    {
      icon: Zap,
      title: "Instant Lead Alerts",
      description: "Get notified the second someone inquires so you can close while they're hot"
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
              HOW IT WORKS
            </h2>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Four powerful tools working together to grow your business
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bebas text-3xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
