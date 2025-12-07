import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Video from "@/components/Video";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <Stats />
      </ScrollAnimation>
      <ScrollAnimation>
        <Problem />
      </ScrollAnimation>
      <ScrollAnimation>
        <Solution />
      </ScrollAnimation>
      <ScrollAnimation>
        <Features />
      </ScrollAnimation>
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation>
        <Video />
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
