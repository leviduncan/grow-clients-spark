import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Award } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      value: "3.5x",
      label: "Average ROI",
      color: "text-primary",
    },
    {
      icon: Target,
      value: "94%",
      label: "Client Retention",
      color: "text-primary",
    },
    {
      icon: Award,
      value: "12+",
      label: "Industry Awards",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="font-bebas text-4xl text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="font-inter text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Stats;
