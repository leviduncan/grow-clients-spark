import { motion } from "motion/react";
import { 
  Section, 
  Button, 
  Badge, 
  Card, 
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Page
} from "./UI";

export const Pricing = ({ onPageChange }: { onPageChange: (page: Page) => void }) => {
  return (
    <div className="pt-24">
      <Section className="text-center relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_25%_50%,#2563EB22_0%,transparent_60%),radial-gradient(ellipse_at_75%_25%,#F59E0B15_0%,transparent_50%),linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#0C2340_0%,#0B1120_100%)]" />
        
        <Badge>PRICING</Badge>
        <h1 className="mt-4 text-4xl md:text-6xl font-black text-primary dark:text-white mb-6">
          One Simple Price. Everything Included.
        </h1>
        <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
          No hidden fees. No long-term contract. Cancel anytime.
        </p>
      </Section>

      <Section className="bg-transparent">
        <div className="max-w-xl mx-auto">
          <Card glass className="relative overflow-hidden border-accent/30 shadow-2xl">
            <div className="absolute top-0 right-0 bg-accent text-primary px-6 py-2 font-black text-sm rounded-bl-2xl">
              PROFESSIONAL PLAN
            </div>
            
            <div className="text-center mb-12">
              <p className="text-text-secondary dark:text-dark-text-secondary font-bold uppercase tracking-widest text-xs mb-4">Everything You Need</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-7xl font-black text-primary dark:text-white tracking-tighter">$397</span>
                <span className="text-xl text-text-secondary dark:text-dark-text-secondary font-medium">/month</span>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              {[
                {
                  category: "Call Handling",
                  features: ["Unlimited 24/7 Answering", "Custom Voice Personality", "Emergency Call Routing", "After-Hours Coverage", "Lead Qualification"]
                },
                {
                  category: "Booking & Integrations",
                  features: ["Automated Appointment Booking", "Direct Calendar Integration", "CRM Sync (Jobber, ServiceTitan, etc.)", "SMS Confirmation Alerts", "Email Lead Notifications"]
                }
              ].map((group, i) => (
                <div key={i}>
                  <h4 className="text-xs font-black text-primary dark:text-white uppercase tracking-widest mb-4 pb-2 border-b border-border dark:border-dark-border">
                    {group.category}
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {group.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                        <CheckCircle className="text-success shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Button 
              variant="primary" 
              className="w-full text-xl py-5"
              onClick={() => onPageChange('book-a-demo')}
            >
              Get Started Today
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-text-secondary dark:text-dark-text-secondary font-medium">
              <ShieldCheck size={16} className="text-success" />
              <span>30-Day Money-Back Performance Guarantee</span>
            </div>
          </Card>
        </div>
      </Section>

      {/* ROI Calculator Section */}
      <Section className="bg-bg-light text-text-primary dark:bg-dark-surface dark:text-dark-text-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-8">
              <TrendingUp className="text-accent" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              This Pays for Itself by Capturing Just 2 Extra Jobs Per Month
            </h2>
            <p className="text-xl text-text-secondary dark:text-white/70 mb-10 leading-relaxed">
              Most HVAC contractors are losing $50k+ per year to missed calls. For less than the cost of a single service call, you can ensure every lead is captured.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 dark:bg-white/5 dark:border-white/10">
                <p className="text-xs font-bold text-error uppercase tracking-widest mb-2">What You Lose</p>
                <p className="text-2xl font-bold mb-1">$4,000+</p>
                <p className="text-sm text-text-secondary dark:text-white/50">Average monthly revenue lost to missed calls</p>
              </div>
              <div className="p-6 rounded-2xl bg-success/10 border border-success/20">
                <p className="text-xs font-bold text-success uppercase tracking-widest mb-2">What You Gain</p>
                <p className="text-2xl font-bold mb-1">3–5×</p>
                <p className="text-sm text-text-secondary dark:text-white/50">Typical ROI on your investment in GrowClientsAI</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-white border-border text-text-primary dark:bg-white/5 dark:border-white/10 dark:text-white">
              <h3 className="text-xl font-bold mb-8">The Math is Simple</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border dark:border-white/10">
                  <span className="text-text-secondary dark:text-white/70">Avg. HVAC Service Ticket</span>
                  <span className="font-bold">$450</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border dark:border-white/10">
                  <span className="text-text-secondary dark:text-white/70">Missed Calls Per Month</span>
                  <span className="font-bold">15</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border dark:border-white/10">
                  <span className="text-text-secondary dark:text-white/70">Capture Rate with AI</span>
                  <span className="font-bold text-success">98%</span>
                </div>
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">New Monthly Revenue</span>
                  <span className="text-3xl font-black text-accent">$6,615</span>
                </div>
              </div>
            </Card>
            {/* Glow */}
            <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </Section>

      {/* Guarantee Section */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="text-accent" size={48} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            Our 30-Day Performance Guarantee
          </h2>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            If your AI doesn't book at least <span className="font-bold text-primary dark:text-white">$4,500 worth of appointments</span> in your first 30 days, we'll refund your entire first month payment. No questions asked. We're that confident in the results.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-bg-light dark:bg-dark-bg text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-8">
          Ready to Start Capturing Every Lead?
        </h2>
        <Button 
          variant="primary" 
          className="text-xl px-10 py-5"
          onClick={() => onPageChange('book-a-demo')}
        >
          Book Your Setup Call
        </Button>
      </Section>
    </div>
  );
};
