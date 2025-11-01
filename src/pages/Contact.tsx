import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@growclientsai.com",
      link: "mailto:hello@growclientsai.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "(555) 123-4567",
      link: "tel:5551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      detail: "123 Marketing St, Business City, BC 12345",
      link: null,
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Mon-Fri: 9AM-6PM EST",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-bebas text-6xl md:text-8xl leading-none">
                LET'S
                <span className="block text-primary">CONNECT</span>
              </h1>
              <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to grow your business? Get in touch and let's discuss how 
                we can help you get more clients.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ScrollAnimation>
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h2 className="font-bebas text-4xl text-foreground mb-6">
                    SEND US A MESSAGE
                  </h2>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-inter text-sm text-foreground">
                          First Name *
                        </label>
                        <Input
                          placeholder="John"
                          className="font-inter"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-inter text-sm text-foreground">
                          Last Name *
                        </label>
                        <Input
                          placeholder="Doe"
                          className="font-inter"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-inter text-sm text-foreground">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="font-inter"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-inter text-sm text-foreground">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="font-inter"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-inter text-sm text-foreground">
                        Business Name
                      </label>
                      <Input
                        placeholder="Your Business LLC"
                        className="font-inter"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-inter text-sm text-foreground">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your business and goals..."
                        className="font-inter min-h-32"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full font-bebas"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Contact Info */}
            <div className="space-y-8">
              <ScrollAnimation>
                <div>
                  <h2 className="font-bebas text-4xl text-foreground mb-6">
                    GET IN TOUCH
                  </h2>
                  <p className="font-inter text-lg text-muted-foreground mb-8">
                    Have questions? We're here to help. Reach out through any of 
                    these channels and we'll get back to you within 24 hours.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-bebas text-xl text-foreground mb-1">
                              {info.title}
                            </div>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="font-inter text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.detail}
                              </a>
                            ) : (
                              <div className="font-inter text-muted-foreground">
                                {info.detail}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <Card className="border-border/50 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-bebas text-2xl text-foreground mb-3">
                      PREFER TO SCHEDULE A CALL?
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4">
                      Book a free 30-minute consultation and let's discuss your 
                      business goals.
                    </p>
                    <Button variant="hero" className="font-bebas">
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
