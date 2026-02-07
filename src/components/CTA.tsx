import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = (props) => {
  const trustSignals = [
    props.l1,
    props.l2,
    props.l3,
  ];

  return (
    <section className="py-20 sm:py-32 bg-blugrn-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {props.title1} <span className="text-primary">{props.title2}</span>
          </h2>

          {/* Subheadline */}
          <p className="font-inter text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {props.sub}
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              size="lg"
              variant="default"
              className="group text-lg px-8 py-6 h-auto"
            >
              <Link to="/bookademo#bookademo" className="flex items-center">
                {props.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustSignals.map((item, index) => (
              item && (
                <span key={index} className="font-inter text-sm text-zinc-500">
                  {index > 0 && <span className="mr-6">•</span>}
                  {item}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
