import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-primary via-primary to-primary-glow text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            READY TO GROW?
            <span className="block mt-2">LET'S TALK</span>
          </h2>
          
          <p className="font-inter text-[30px] mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
            Book a free 30-minute consultation. We'll analyze your business and 
            show you exactly how we can bring in more clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="ctaWhite"
              className="group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "No obligation",
              "Custom strategy",
              "Same-day response"
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="font-inter">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
