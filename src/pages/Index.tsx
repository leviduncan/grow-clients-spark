import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import RotatingText from "@/components/RotatingText";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen font-inter bg-purple">
      <Header />
      <Hero />
      <ScrollAnimation>
        <ClientLogos />
      </ScrollAnimation>
      <ScrollAnimation>
        <RotatingText />
      </ScrollAnimation>
      <ScrollAnimation>
        <PainPoints />
      </ScrollAnimation>
      <ScrollAnimation>
        <Features />
      </ScrollAnimation>
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation>
        <CTA />
      </ScrollAnimation>
      <Footer />
    </div>
  );
};

export default Index;
