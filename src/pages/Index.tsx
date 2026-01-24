import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import WhyThisWorks from "@/components/WhyThisWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import TheProblem from "@/components/TheProblem";
import TheSolution from "@/components/TheSolution";
import IsThisYou from "@/components/IsThisYou";
import PriceCards from "@/components/PriceCards";

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
        <IsThisYou />
      </ScrollAnimation>
      <ScrollAnimation>
        <PriceCards />
      </ScrollAnimation>
      <ScrollAnimation>
        <CTA />
      </ScrollAnimation>
      <Footer />
    </div>
  );
};

export default Index;
