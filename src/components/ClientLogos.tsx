const ClientLogos = () => {
  // Placeholder company names - these would be replaced with actual logos
  const companies = ["TechFlow", "GrowthCo", "ScalePro", "AutomateX", "LeadGen", "VoiceAI", "SmartBiz", "ClientHub"];

  return (
    <section className="py-12 bg-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-sm text-primary-foreground/80 mb-8">
          GrowClientsAI powers the world's leading businesses
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-purple to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-purple to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex gap-12 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center px-6">
                <span className="font-bebas text-2xl text-primary-foreground/90 whitespace-nowrap">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
