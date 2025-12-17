import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ThankYou() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <section className="pt-32 pb-20 gradient-purple-green relative overflow-hidden">
        <div className="absolute top-10 right-20 w-80 h-80 bg-purple/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground">
                THANK <span className="text-purple">YOU</span>
              </h1>
              
              {/* Right Side - Form */}
              <ScrollAnimation>
                <p className="font-inter text-lg text-muted-foreground mb-12">
                Experience GrowClientsAI in action. Schedule a personalized demo with our team to see how our platform can transform your service business.
              </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ThankYou