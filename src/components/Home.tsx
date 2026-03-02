import { motion } from "motion/react";
import {
  Section,
  Button,
  Badge,
  Card,
  Phone,
  CheckCircle,
  PhoneMissed,
  PhoneOff,
  TrendingDown,
  Calendar,
  Headphones,
  Cpu,
  Power,
  BarChart3,
  MessageSquare,
  Page
} from "./UI";
import Hero from "./Hero";
import Riley from "../assets/Phone.png"
import DemoBar from "./DemoBar";

export const Home = ({ onPageChange }: { onPageChange: (page: Page) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero onPageChange={onPageChange} />

      {/* Live Demo Bar */}
      <DemoBar />

      {/* Problem Section */}
      <Section className="bg-bg-light dark:bg-dark-bg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge>THE PROBLEM</Badge>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary dark:text-white">
            How Many Calls Are You Missing Right Now?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <PhoneMissed className="text-accent" size={40} />,
              title: "After-Hours Emergencies",
              desc: "Customers don't wait. If you don't answer at 9 PM, they call the next contractor on Google.",
              eliminated: true
            },
            {
              icon: <PhoneOff className="text-secondary" size={40} />,
              title: "Busy Season Overload",
              desc: "When the heat hits, your phone explodes. You can't be on a roof and on the phone at the same time.",
              eliminated: true
            },
            {
              icon: <TrendingDown className="text-error" size={40} />,
              title: "The Real Cost",
              desc: "Every missed call is a lost job. At an average ticket of $600, missing 10 calls is $6,000 gone.",
              eliminated: true
            }
          ].map((item, i) => (
            <Card key={i} className="flex flex-col h-full">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary mb-8 flex-grow">{item.desc}</p>
              {item.eliminated && (
                <div className="mt-auto">
                  <Badge variant="green">ELIMINATED</Badge>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-3xl text-center border-accent/20">
          <p className="text-text-secondary dark:text-dark-text-secondary font-medium uppercase tracking-widest text-sm mb-4">
            THE BOTTOM LINE
          </p>
          <h3 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-6">
            HVAC contractors lose an average of <span className="text-error">$4,000–$7,000</span> per month
          </h3>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            If you're missing just 10 calls per month at $400–800 per job, that's <span className="font-bold text-primary dark:text-white">$48,000–$96,000 per year</span> walking out the door.
          </p>
        </div>
      </Section>

      {/* Solution Section */}
      <Section dark className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="amber">THE SOLUTION</Badge>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary dark:text-white mb-6">
              Meet Your New AI Receptionist
            </h2>
            <p className="text-xl text-text-secondary dark:text-white/70 mb-10 leading-relaxed">
              Sounds human. Available 24/7. Books appointments instantly. No app to check. No texts to send. No calendar Tetris.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: <Phone className="text-accent" />,
                  title: "Answers Every Call",
                  desc: "Your AI never sleeps, never takes a lunch break, and never has a bad day."
                },
                {
                  icon: <Calendar className="text-secondary" />,
                  title: "Books Appointments",
                  desc: "Integrates directly with your calendar to book jobs while you're in the field."
                },
                {
                  icon: <Headphones className="text-success" />,
                  title: "Sounds Completely Human",
                  desc: "Natural voice technology that customers actually enjoy talking to."
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 dark:bg-white/5 dark:border-white/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-text-secondary dark:text-white/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              className="mt-12"
              onClick={() => onPageChange('book-a-demo')}
            >
              See It Running Live
            </Button>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src={Riley}
                alt="AI Interface"
                className="rounded-3xl shadow-2xl border border-border dark:border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-accent/30 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-primary dark:text-dark-text-primary">LIVE STATUS</span>
                </div>
                <p className="text-sm text-primary dark:text-dark-text-primary font-medium">"I've scheduled the AC repair for tomorrow at 10 AM. You'll receive a confirmation SMS shortly."</p>
              </div>
            </motion.div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/20 blur-[120px] -z-10 rounded-full" />
          </div>
        </div>
      </Section>

      {/* How It Works Preview */}
      <Section className="bg-white dark:bg-dark-bg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge>HOW IT WORKS</Badge>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary dark:text-white">
            From Setup to Booked Appointments in 48 Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Discovery Call",
              desc: "A 30-minute call to learn your business, your pricing, and your schedule.",
              icon: <MessageSquare className="text-accent" />
            },
            {
              num: "02",
              title: "We Build Your AI",
              desc: "Our engineers build your custom voice agent with your specific HVAC knowledge.",
              icon: <Cpu className="text-secondary" />
            },
            {
              num: "03",
              title: "Go Live",
              desc: "Forward your calls and start capturing leads 24/7. It's that simple.",
              icon: <Power className="text-success" />
            }
          ].map((step, i) => (
            <div key={i} className="relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-primary font-black flex items-center justify-center rounded-full z-10 shadow-lg">
                {step.num}
              </div>
              <Card className="pt-12 h-full group-hover:border-accent transition-colors">
                <div className="w-16 h-16 bg-bg-light dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{step.title}</h3>
                <p className="text-text-secondary dark:text-dark-text-secondary">{step.desc}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            onClick={() => onPageChange('how-it-works')}
          >
            See the Full 5-Step Process
          </Button>
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section className="bg-bg-light dark:bg-dark-bg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white">
            Simple, Transparent Pricing
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <Card glass className="text-center border-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-primary px-4 py-1 font-bold text-xs rounded-bl-xl">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">Professional Plan</h3>
            <div className="flex items-center justify-center gap-1 mb-8">
              <span className="text-5xl font-black text-primary dark:text-white">$397</span>
              <span className="text-text-secondary dark:text-dark-text-secondary">/month</span>
            </div>

            <ul className="text-left space-y-4 mb-10">
              {[
                "Unlimited 24/7 Answering",
                "Automated Appointment Booking",
                "Emergency Call Routing",
                "CRM Integration (Jobber, ServiceTitan, etc.)",
                "Custom Voice Personality",
                "Weekly Performance Reports",
                "30-Day Money-Back Guarantee"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                  <CheckCircle className="text-success shrink-0" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              className="w-full"
              onClick={() => onPageChange('book-a-demo')}
            >
              Book a Demo Call
            </Button>
            <button
              onClick={() => onPageChange('pricing')}
              className="mt-6 text-sm font-bold text-secondary dark:text-accent hover:underline"
            >
              See Full Pricing Details →
            </button>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark className="text-center relative overflow-hidden">
        <div className="hidden dark:block absolute inset-0 bg-linear-to-br from-primary via-primary to-secondary opacity-50 -z-10" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-primary dark:text-white mb-8">
            Stop Losing Money to Missed Calls
          </h2>
          <p className="text-xl text-text-secondary dark:text-white/70 mb-12 max-w-2xl mx-auto">
            Book a 15-minute call. We'll show you exactly how this works for HVAC contractors and how much revenue you're leaving on the table.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="primary"
              className="text-xl px-10 py-5 w-full sm:w-auto"
              onClick={() => onPageChange('book-a-demo')}
            >
              Book Your Free Demo Call
            </Button>
            <a href="tel:+1484600600" className="text-primary dark:text-white font-bold text-xl hover:text-accent transition-colors flex items-center gap-2">
              <Phone size={24} />
              (484) 600-6010
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-text-secondary/60 dark:text-white/40 font-medium uppercase tracking-widest">
            <span>No credit card required</span>
            <span>See it in action first</span>
            <span>Setup in 48 hours</span>
          </div>
        </div>
      </Section>
    </div>
  );
};
