import { Bot } from "lucide-react";
import { useState, useEffect } from "react";

const RotatingText = () => {
  const words = ["Automate", "Grow", "Scale", "Transform"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* AI Icon with glow */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-2 rounded-full bg-primary/20 animate-pulse-glow" />
              <div className="relative w-16 h-16 rounded-full gradient-green flex items-center justify-center glow-green-sm">
                <Bot className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Rotating headline */}
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
            The Smartest Way to{" "}
            <span className="relative inline-flex items-center justify-center bg-primary/10 px-4 py-2 rounded-xl overflow-hidden align-middle">
              <span
                className={`inline-block text-primary transition-all duration-500 ease-in-out ${
                  isAnimating ? "opacity-0 -translate-y-6 scale-95" : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                {words[currentIndex]}
              </span>
            </span>
            <br />
            Your Business
          </h2>

          {/* Description */}
          <p className="font-inter text-lg sm:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
            Our AI voice agents handle calls, book appointments, qualify leads, and support customers — all while you
            focus on what matters most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RotatingText;
