import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
        <CTA 
        title1="STOP LOSING MONEY TO" 
        title2="MISSED CALLS" 
        sub="Book a 15-minute call. We'll show you exactly how this works for HVAC contractors."
        cta="BOOK YOUR FREE DEMO CALL"
        l1="No credit card required"
        l2="See it in action first"
        l3="Setup in 48 hours"
        />
      </ScrollAnimation>
      <Footer2 />
    </div>
  );
};

export default Index;
