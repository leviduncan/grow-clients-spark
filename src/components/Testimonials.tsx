import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Owner",
      business: "Mitchell Plumbing Services",
      text: "We went from 2-3 leads per week to 15+ qualified leads consistently. The AI handles everything while I focus on the actual work. Best decision I made for my business.",
      rating: 5,
      image: null,
    },
    {
      name: "David Chen",
      title: "Founder",
      business: "Chen's HVAC Solutions",
      text: "I was skeptical about AI marketing, but the results speak for themselves. Our response time went from hours to seconds, and our conversion rate doubled.",
      rating: 5,
      image: null,
    },
    {
      name: "Maria Rodriguez",
      title: "CEO",
      business: "Rodriguez Landscaping",
      text: "Finally have a steady stream of customers instead of feast or famine. The 24/7 availability means we never miss a lead, even on weekends.",
      rating: 5,
      image: null,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 sm:py-32 gradient-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-navy-foreground mb-4">
              REAL RESULTS FROM <span className="text-primary">REAL BUSINESSES</span>
            </h2>
            <p className="font-inter text-lg text-navy-foreground/70 max-w-2xl mx-auto">
              Join hundreds of service businesses growing with GrowClientsAI
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-2xl border border-border relative overflow-hidden">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full gradient-green flex items-center justify-center text-primary-foreground font-bebas text-3xl">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex gap-1 justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-inter text-lg sm:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-bebas text-xl text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="font-inter text-sm text-muted-foreground">
                      {testimonials[currentIndex].title} at {testimonials[currentIndex].business}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-navy-foreground/30 hover:bg-navy-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
