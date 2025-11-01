import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Mitchell Plumbing Services",
      text: "We went from 2-3 leads per week to 15+ qualified leads consistently. Best decision I made for my business.",
      rating: 5
    },
    {
      name: "David Chen",
      business: "Chen's HVAC Solutions",
      text: "I was skeptical about AI marketing, but the results speak for themselves. ROI is incredible.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      business: "Rodriguez Landscaping",
      text: "Finally have a steady stream of customers instead of feast or famine. Game changer.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-[hsl(var(--dark-bg))] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl mb-4">
              REAL RESULTS
              <span className="block text-primary">REAL BUSINESSES</span>
            </h2>
            <p className="font-inter text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of service businesses growing with GrowClientsAI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-inter text-gray-200 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bebas text-xl text-white">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-sm text-gray-400">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
