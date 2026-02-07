import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

const FAQs = () => {
  const faqs = [
    {
      q: "Does it really sound human?",
      a: "Yes. Call our demo line right now at (555) 123-4567. You won't believe it's AI. Customers regularly thank \"her\" at the end of calls.",
    },
    {
      q: "What if it makes a mistake?",
      a: "For anything it's unsure about, it takes a message and texts you immediately. You stay in control of your business.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from our kickoff call to your AI answering calls. Most of that is us building and training it - you're only involved for 30 minutes.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Month-to-month. No long-term contracts. We're confident you'll love it.",
    },
    {
      q: "Does it work with my existing phone number?",
      a: "Yes. Simple call forwarding, or we can provide a new number. Either way, setup takes 5 minutes.",
    },
  ];

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
