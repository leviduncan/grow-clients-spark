import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import RotatingText from "@/components/RotatingText";
import PainPoints from "@/components/PainPoints";
import WhyThisWorks from "@/components/WhyThisWorks";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import TheProblem from "@/components/TheProblem";
import TheSolution from "@/components/TheSolution";
import RealResults from "@/components/RealResults";

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
        <WhyThisWorks />
      </ScrollAnimation>
      <ScrollAnimation>
        <WhyThisWorks />
      </ScrollAnimation>
      <ScrollAnimation>
        <RealResults />
      </ScrollAnimation>
      <ScrollAnimation>
        <CTA />
      </ScrollAnimation>
      <Footer />
    </div>
  );
};

export default Index;
