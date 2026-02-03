import { Wrench, Fan, Zap, Home, Sparkles, Smile, Scale, Building2 } from "lucide-react";

const ClientLogos = () => {
  const companies = [
    { name: "Plumbers", icon: Wrench },
    { name: "HVAC", icon: Fan },
    { name: "Electricians", icon: Zap },
    { name: "Roofers", icon: Home },
    { name: "Med Spas", icon: Sparkles },
    { name: "Dentists", icon: Smile },
    { name: "Law Firms", icon: Scale },
    { name: "Property Mgmt", icon: Building2 },
  ];

  return (
    <section className="py-12 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-2xl text-white uppercase tracking-widest mb-8">
          Trusted by service businesses everywhere
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex gap-16 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center px-4"
              >
                <div className="w-24 h-24 rounded-full bg-zinc-800/50 flex items-center justify-center mb-2">
                  <company.icon className="w-12 h-12 text-primary" />
                </div>
                <span className="font-inter text-xs text-zinc-400 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
