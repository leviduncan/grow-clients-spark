import { Calendar, Target, DollarSign, Headphones, Bot } from "lucide-react";

const ConnectedDiagram = () => {
  const nodes = [
    { icon: Calendar, label: "Appointments", description: "Schedule automatically", position: "top-left" },
    { icon: Target, label: "Leads", description: "Capture 24/7", position: "top-right" },
    { icon: DollarSign, label: "Sales", description: "Close on autopilot", position: "bottom-left" },
    { icon: Headphones, label: "Support", description: "Answer instantly", position: "bottom-right" },
  ];

  return (
    <div className="relative w-full h-[400px] lg:h-[500px]">
      {/* Connection Lines SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(120, 58%, 50%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(120, 58%, 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(120, 58%, 65%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Lines from nodes to center */}
        <line x1="80" y1="80" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2" className="animate-line-draw" />
        <line x1="320" y1="80" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2" className="animate-line-draw" style={{ animationDelay: "0.2s" }} />
        <line x1="80" y1="320" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2" className="animate-line-draw" style={{ animationDelay: "0.4s" }} />
        <line x1="320" y1="320" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2" className="animate-line-draw" style={{ animationDelay: "0.6s" }} />
      </svg>

      {/* Central AI Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 -m-4 rounded-full bg-primary/20 animate-pulse-glow" />
          
          {/* Main hub */}
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full gradient-green flex items-center justify-center glow-green">
            <div className="text-center">
              <Bot className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground mx-auto" />
              <span className="text-xs lg:text-sm font-bebas text-primary-foreground mt-1 block">AI HUB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;
        const positions = {
          "top-left": "top-4 left-4 lg:top-8 lg:left-8",
          "top-right": "top-4 right-4 lg:top-8 lg:right-8",
          "bottom-left": "bottom-4 left-4 lg:bottom-8 lg:left-8",
          "bottom-right": "bottom-4 right-4 lg:bottom-8 lg:right-8",
        };
        
        const floatClass = index % 2 === 0 ? "animate-float" : "animate-float-delayed";

        return (
          <div
            key={node.label}
            className={`absolute ${positions[node.position as keyof typeof positions]} ${floatClass}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="bg-card border border-border rounded-2xl p-4 lg:p-6 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <h4 className="font-bebas text-lg lg:text-xl text-foreground">{node.label}</h4>
              <p className="font-inter text-xs lg:text-sm text-muted-foreground">{node.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConnectedDiagram;
