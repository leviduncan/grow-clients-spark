import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Play, Calendar, Phone, Users, DollarSign, Headphones, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import demoMax from "@/assets/demo-max.png";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const location = useLocation();
  const floatingBadges = [
    { icon: Calendar, label: "Appointments", position: "top-0 left-0 -translate-x-4" },
    { icon: Users, label: "Leads", position: "top-0 right-0 translate-x-4" },
    { icon: DollarSign, label: "Sales", position: "bottom-16 left-0 -translate-x-8" },
    { icon: Headphones, label: "Support", position: "bottom-16 right-0 translate-x-8" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-20 pb-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Rating Badge 
            <div className="inline-flex items-center gap-3 bg-card px-5 py-2.5 rounded-full border border-border shadow-sm">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-inter text-muted-foreground">5.0 Rating • 85+ Reviews</span>
            </div>*/}

            {/* Main Headline */}
            <div>
              <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-[0.9] text-foreground">
                Never Lose a <span className="text-primary">$10,000 Emergency Call</span> Again
              </h1>
              {/* Description */}
              <p className="font-inter text-l sm:text-xl  mt-3">
                You're losing thousands every week because emergency HVAC calls go to competitors while you're busy, asleep, or your phone goes unanswered.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {[
                "Automated systems that respond to every lead in under 60 seconds",
                "Route emergencies to your on-call tech instantly",
                "Book routine calls into your calendar, 24/7/365"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-inter text-base text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                variant="default"
                className="group"
              >
                <Link to="/bookademo#bookademo" className="flex align-middle">
                  GET FREE AUDIT
                  <ArrowRight className="my-1 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline"
              >
                See If You're Eligible
              </Button> */}
            </div>
          </div>

          {/* Right - Max AI Agent Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Floating Badges */}
            {floatingBadges.map((badge, idx) => (
              <div
                key={badge.label}
                className={`absolute ${badge.position} z-20 hidden lg:flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-lg animate-float`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <badge.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-inter text-sm font-medium text-foreground">{badge.label}</span>
              </div>
            ))}

            {/* Max Image Container */}
            <div className="relative max-w-lg mx-auto">
              {/* Green Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl glow-green">
                <img
                  src={demoMax}
                  alt="Max - AI Voice Agent for HVAC & Trades"
                  className="w-full h-auto object-cover"
                />

                {/* Play Demo Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent">
                  <Button
                    size="default"
                    className="bg-purple hover:bg-purple/90 text-purple-foreground gap-3 glow-purple-sm hover:scale-105"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                    </div>
                    WATCH 2-MIN DEMO
                  </Button>
                </div>
              </div>

              {/* Agent Name Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-2 rounded-full border border-border shadow-lg">
                <span className="font-bebas text-xl text-primary">MEET MAX</span>
                <span className="font-inter text-sm text-muted-foreground ml-2">HVAC & Trades</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Overlay */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-pointer animate-fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-4xl mx-4 aspect-video">
            <iframe
              src="https://growclientsai.com/assets/hvac-demo.mp4"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsVideoOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
