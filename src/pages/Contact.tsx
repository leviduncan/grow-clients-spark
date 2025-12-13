import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-foreground">
                SIMPLE,
                <span className="block text-primary">NO FLUFF</span>
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
                Get in touch and let's discuss how we can help grow your business.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Message */}
            <ScrollAnimation>
              <div className="space-y-8">
                <div>
                  <h2 className="font-bebas text-4xl md:text-5xl text-foreground mb-6">
                    LEARN HOW WE CAN HELP YOU
                    <span className="block text-primary">GROW YOUR BUSINESS</span>
                  </h2>
                  <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                    We're here to help you automate your business and get more clients. 
                    Fill out the form or give us a call, and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-primary/10 px-6 py-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-inter text-sm text-muted-foreground">Call us directly</div>
                    <a href="tel:5551234567" className="font-bebas text-2xl text-foreground hover:text-primary transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-bebas text-2xl text-foreground mb-3">
                      PREFER TO SCHEDULE A CALL?
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4">
                      Book a free 30-minute consultation and let's discuss your business goals.
                    </p>
                    <Button variant="default" className="group">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* Right Side - Form */}
            <ScrollAnimation>
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="font-bebas text-3xl text-foreground mb-6">
                    SEND US A MESSAGE
                  </h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-inter text-sm text-foreground">
                          First Name *
                        </label>
                        <Input
                          placeholder="John"
                          className="font-inter focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-inter text-sm text-foreground">
                          Last Name *
                        </label>
                        <Input
                          placeholder="Doe"
                          className="font-inter focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-inter text-sm text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="font-inter focus:border-primary focus:ring-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-inter text-sm text-foreground">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="font-inter focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3">
                        <Checkbox id="sms" className="mt-1" />
                        <label htmlFor="sms" className="font-inter text-sm text-muted-foreground leading-relaxed">
                          I consent to receiving SMS messages from GrowClientsAI. Message and data rates may apply.
                        </label>
                      </div>
                      <div className="flex items-start gap-3">
                        <Checkbox id="email" className="mt-1" />
                        <label htmlFor="email" className="font-inter text-sm text-muted-foreground leading-relaxed">
                          I consent to receiving email communications from GrowClientsAI.
                        </label>
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full group"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
