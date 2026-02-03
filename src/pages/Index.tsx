import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import CTA from "@/components/CTA";
import Footer2 from "@/components/Footer2";
import ScrollAnimation from "@/components/ScrollAnimation";
import TheProblem from "@/components/TheProblem";
import TheSolution from "@/components/TheSolution";
import FAQs from "@/components/FAQs";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import PricingPreview from "@/components/PricingPreview";

const Index = () => {
  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />
      <Hero />
      <ScrollAnimation>
        <ClientLogos />
      </ScrollAnimation>
      <ScrollAnimation>
        <TheProblem />
      </ScrollAnimation>
      <ScrollAnimation>
        <TheSolution />
      </ScrollAnimation>
      <ScrollAnimation>
        <HowItWorks />
      </ScrollAnimation>
      <ScrollAnimation>
        <Demo />
      </ScrollAnimation>
      <ScrollAnimation>
        <PricingPreview />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQs />
      </ScrollAnimation>
      <ScrollAnimation>
        <CTA />
      </ScrollAnimation>
      <Footer2 />
    </div>
  );
};

export default Index;
