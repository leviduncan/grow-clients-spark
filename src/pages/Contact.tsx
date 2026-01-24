import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LeadForm } from "@/components/LeadForm";

const WEBHOOK_URL = "https://n8n.growclientsai.com/webhook/email-submission";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    sms: false,
    emailConsent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "gca_contact_page",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Message Sent",
        description: "We’ll get back to you within 24 hours.",
      });

      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        sms: false,
        emailConsent: false,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description:
          "Could not send message. Email darrin@darrinduncan.com instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-purple-green relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className="font-bebas text-6xl md:text-8xl leading-[0.85]">
              SIMPLE,
              <span className="block text-primary">NO FLUFF</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6">
              Get in touch and let’s grow your business.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Left */}
            <ScrollAnimation>
              <div className="space-y-8">
                <h2 className="font-bebas text-4xl md:text-5xl">
                  LET’S TALK ABOUT
                  <span className="block text-primary">GROWTH</span>
                </h2>

                <div className="flex items-center gap-4 bg-primary/10 px-6 py-4 rounded-xl">
                  <Phone className="text-primary" />
                  <a
                    href="tel:5551234567"
                    className="font-bebas text-2xl hover:text-primary"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Form */}
            <ScrollAnimation>
              <Card className="sm:p-5 p-4">
                <LeadForm source="contact" />
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
