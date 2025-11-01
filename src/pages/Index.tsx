import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
