import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import phoneMockupDashboard from "@/assets/phone-mockup-dashboard.png";
import phoneMockupSocial from "@/assets/phone-mockup-social.png";
import aiAutomation from "@/assets/ai-automation.png";

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1: Dashboard */}
        <ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="font-bebas text-5xl md:text-6xl text-foreground">
                REAL-TIME ANALYTICS
                <span className="block text-primary">TRACK YOUR GROWTH</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Monitor your campaign performance in real-time with our advanced dashboard. 
                Get insights into leads, conversions, and ROI at a glance.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card className="border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="font-bebas text-3xl text-primary">24/7</div>
                    <div className="font-inter text-sm text-muted-foreground">
                      Monitoring
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="font-bebas text-3xl text-primary">100%</div>
                    <div className="font-inter text-sm text-muted-foreground">
                      Transparent
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={phoneMockupDashboard}
                alt="Dashboard Analytics Mockup"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Feature 2: AI Automation */}
        <ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={aiAutomation}
                alt="AI Automation"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-bebas text-5xl md:text-6xl text-foreground">
                AI-POWERED
                <span className="block text-primary">MARKETING AUTOMATION</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Let AI handle the heavy lifting. Our intelligent system optimizes your campaigns, 
                targets the right audience, and maximizes conversions while you focus on your business.
              </p>
              <div className="space-y-3 pt-4">
                {["Smart Targeting", "Auto-Optimization", "Predictive Analytics"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-inter text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Feature 3: Social Media */}
        <ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-bebas text-5xl md:text-6xl text-foreground">
                SOCIAL MEDIA
                <span className="block text-primary">DOMINATION</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Build a powerful social presence that attracts clients. Our AI creates engaging 
                content, schedules posts, and manages your social media 24/7.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {["Instagram", "Facebook", "LinkedIn"].map((platform) => (
                  <Card key={platform} className="border-border/50">
                    <CardContent className="p-3 text-center">
                      <div className="font-inter text-sm text-muted-foreground">
                        {platform}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={phoneMockupSocial}
                alt="Social Media Mockup"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Features;
