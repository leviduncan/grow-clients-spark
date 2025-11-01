import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import teamCollaboration from "@/assets/team-collaboration.png";

const About = () => {
  const values = [
    {
      title: "Client-First",
      description: "Your success is our success. We're only happy when you're getting results.",
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to stay ahead of the competition.",
    },
    {
      title: "Transparency",
      description: "No hidden fees, no confusing jargon. Just honest, straightforward service.",
    },
    {
      title: "Results-Driven",
      description: "We focus on metrics that matter: more clients, more revenue, more growth.",
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
                ABOUT
                <span className="block text-primary">GROWCLIENTSAI</span>
              </h1>
              <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
                We're on a mission to help small service businesses grow without 
                the complexity and cost of traditional marketing agencies.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={teamCollaboration}
                  alt="Our Team"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-bebas text-5xl text-foreground">
                  OUR STORY
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  GrowClientsAI was founded by marketers who were frustrated with how 
                  complicated and expensive it was for small businesses to get quality 
                  marketing help.
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  We saw service businesses struggling—plumbers, electricians, consultants, 
                  and local service providers who were great at what they did but couldn't 
                  afford $5,000/month marketing agencies.
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  So we built GrowClientsAI: an AI-powered marketing platform that delivers 
                  enterprise-level results at a fraction of the cost. No long contracts, 
                  no setup fees, just results.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4">
                OUR VALUES
              </h2>
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-bebas text-3xl text-primary">
                      {value.title}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-bebas text-5xl md:text-6xl">
                OUR MISSION
              </h2>
              <p className="font-inter text-2xl leading-relaxed text-gray-300">
                To empower 10,000 small service businesses to grow profitably 
                using AI-powered marketing by 2026.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
