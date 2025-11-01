import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Share2, 
  Mail, 
  LineChart, 
  MessageSquare, 
  Video,
  Target,
  Zap
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: "SEO & Local Search",
      description: "Dominate local search results and get found by customers actively looking for your services.",
      features: [
        "Google Business Profile optimization",
        "Local SEO strategy",
        "Keyword research & targeting",
        "Monthly performance reports",
      ],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build a powerful social presence that attracts and engages your ideal clients.",
      features: [
        "Content creation & scheduling",
        "Community management",
        "Paid social advertising",
        "Engagement analytics",
      ],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Turn leads into loyal customers with automated email campaigns that convert.",
      features: [
        "Email automation workflows",
        "Newsletter campaigns",
        "Drip sequences",
        "A/B testing & optimization",
      ],
    },
    {
      icon: LineChart,
      title: "PPC Advertising",
      description: "Get instant visibility with targeted ads that deliver qualified leads.",
      features: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "Retargeting campaigns",
        "ROI tracking & optimization",
      ],
    },
    {
      icon: MessageSquare,
      title: "Content Marketing",
      description: "Establish authority and attract clients with valuable, engaging content.",
      features: [
        "Blog post creation",
        "Case studies & testimonials",
        "Video content strategy",
        "Content calendar planning",
      ],
    },
    {
      icon: Video,
      title: "Video Marketing",
      description: "Capture attention and build trust with professional video content.",
      features: [
        "Video ad creation",
        "YouTube optimization",
        "Short-form content",
        "Video analytics",
      ],
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Turn more visitors into customers with data-driven optimization.",
      features: [
        "Landing page design",
        "A/B testing",
        "User experience analysis",
        "Conversion tracking",
      ],
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Scale your marketing effortlessly with AI-powered automation.",
      features: [
        "Lead nurturing sequences",
        "Behavioral triggers",
        "CRM integration",
        "Performance dashboards",
      ],
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
                OUR
                <span className="block text-primary">SERVICES</span>
              </h1>
              <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI-powered marketing solutions designed specifically 
                for small service businesses.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-bebas text-2xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-inter text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-inter text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-bebas text-5xl md:text-6xl">
                READY TO GROW?
                <span className="block text-primary mt-2">LET'S TALK</span>
              </h2>
              <p className="font-inter text-xl text-gray-300">
                Book a free consultation and we'll show you exactly how our services 
                can help you get more clients.
              </p>
              <Button variant="hero" size="lg" className="font-bebas">
                Book Free Consultation
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
