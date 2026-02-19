import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { homeFaqs } from "@/data";

const FAQs = () => {
  const faqs = homeFaqs;

  return (
    <section className="py-20 sm:py-32 bg-muted-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                QUESTIONS <span className="text-primary">HVAC CONTRACTORS</span> ASK US
              </h2>
            </div>

            {/* FAQ List */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-bebas text-2xl sm:text-3xl text-primary mb-3">
                      Q: {faq.q}
                    </h3>
                    <p className="font-inter text-foreground leading-relaxed">
                      <span className="font-medium">A:</span> {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQs;
