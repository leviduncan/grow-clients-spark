import { motion } from "motion/react";
import {
  Section,
  Button,
  Badge,
  Card,
  Phone,
  Calendar,
  CheckCircle,
  MessageSquare,
  Cpu,
  Power,
  BarChart3,
  Page
} from "./UI";

import PhoneMock from "../assets/Phone.png"
import FinalCTA from "./FinalCTA";

export const HowItWorks = ({ onPageChange }: { onPageChange: (page: Page) => void }) => {
  const steps = [
    {
      num: "01",
      time: "30 Minutes",
      title: "Discovery Call",
      desc: "We jump on a quick call to learn about your HVAC business. We'll discuss your common services, emergency protocols, and how you like to schedule your jobs.",
      details: ["Define service areas", "Set emergency thresholds", "Connect your calendar"],
      icon: <MessageSquare className="text-accent" />
    },
    {
      num: "02",
      time: "24 Hours",
      title: "We Build Your AI",
      desc: "Our engineers take your business data and train a custom voice model. We don't use generic bots; your AI will know the difference between a capacitor and a compressor.",
      details: ["Custom voice training", "Knowledge base setup", "Logic flow mapping"],
      icon: <Cpu className="text-secondary" />
    },
    {
      num: "03",
      time: "15 Minutes",
      title: "Testing & Approval",
      desc: "We'll call your new AI together. You can throw your toughest customer scenarios at it. Once you're 100% happy with how it sounds and acts, we move to the final step.",
      details: ["Live demo testing", "Tone adjustments", "Final sign-off"],
      icon: <CheckCircle className="text-success" />
    },
    {
      num: "04",
      time: "5 Minutes",
      title: "Go Live",
      desc: "Simply forward your business line to our secure routing number. You can choose to forward all calls, only after-hours, or only when you don't answer.",
      details: ["Call forwarding setup", "Routing rules active", "Instant coverage"],
      icon: <Power className="text-accent" />
    },
    {
      num: "05",
      time: "Ongoing",
      title: "Monitor & Optimize",
      desc: "We don't just set it and forget it. We monitor call transcripts and optimize the AI's performance weekly to ensure it's booking as many jobs as possible.",
      details: ["Weekly reports", "Transcript review", "Continuous learning"],
      icon: <BarChart3 className="text-secondary" />
    }
  ];

  return (
    <div className="pt-24">
      <Section className="text-center">
        <Badge>THE PROCESS</Badge>
        <h1 className="mt-4 text-4xl md:text-6xl font-black text-primary dark:text-white mb-6">
          From Zero to Full HVAC Call Coverage in 48 Hours
        </h1>
        <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
          Here's exactly what happens when you work with us. No complicated tech, no long onboarding.
        </p>
      </Section>

      <Section className="bg-bg-light dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border dark:bg-dark-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-8 md:left-1/2 top-0 w-12 h-12 bg-primary dark:bg-accent text-white dark:text-primary font-black flex items-center justify-center rounded-full z-10 -translate-x-1/2 shadow-xl border-4 border-white dark:border-dark-bg">
                  {step.num}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <Card key={i} className="relative overflow-hidden group hover:border-accent transition-colors">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-bg-light dark:bg-white/5 rounded-xl flex items-center justify-center">
                        {step.icon}
                      </div>
                      <Badge variant="blue">{step.time}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">{step.title}</h3>
                    <p className="text-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                      {step.desc}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-primary dark:text-white uppercase tracking-widest mb-2">What happens:</p>
                      {step.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                          <CheckCircle size={14} className="text-success" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Differentiators */}
      <Section className="bg-white dark:bg-dark-bg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white">
            What Makes This Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Not a Chatbot",
              desc: "This isn't a text-based bot. It's a high-fidelity voice agent that sounds like a real person sitting in your office."
            },
            {
              title: "Not a Call Tree",
              desc: "No 'Press 1 for Service'. The AI answers immediately and has a natural conversation with the customer."
            },
            {
              title: "Not Replacing You",
              desc: "It's an assistant. It handles the repetitive booking and screening so you can focus on high-value repairs and installs."
            }
          ].map((item, i) => (
            <Card key={i} className="text-center">
              <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Real Call Examples */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-8">
              Real Call Examples
            </h2>
            <div className="space-y-6">
              {[
                {
                  scenario: "Emergency Scenario",
                  customer: "My furnace is making a loud banging noise and it's freezing in here.",
                  ai: "I'm sorry to hear that. A banging noise can sometimes indicate a serious issue. I've flagged this as an emergency and can have a technician at your home in the next 2 hours. Does that work?",
                  outcome: "Books emergency slot, sends you SMS alert"
                },
                {
                  scenario: "Maintenance Scenario",
                  customer: "I just want to schedule my annual AC tune-up.",
                  ai: "Great! Our tune-ups are $129 and take about 60-90 minutes. I have openings next Tuesday at 9 AM or Thursday at 2 PM. Which do you prefer?",
                  outcome: "Books routine job, adds to your calendar"
                }
              ].map((item, i) => (
                <div key={i} className="bg-primary/5 border border-primary/10 dark:bg-white/5 dark:border-white/10 p-6 rounded-2xl">
                  <Badge variant="amber" className="mb-4">{item.scenario}</Badge>
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary dark:text-white">C</div>
                      <p className="text-sm text-text-secondary dark:text-white/70 italic">"{item.customer}"</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center shrink-0 text-xs font-bold">AI</div>
                      <p className="text-sm text-text-primary dark:text-white/90">"{item.ai}"</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-primary/10 dark:border-white/10 flex items-center gap-2 text-xs font-bold text-success uppercase tracking-widest">
                    <CheckCircle size={14} />
                    {item.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img
              src={PhoneMock}
              alt="Phone Mockup"
              className="rounded-[3rem] border-8 border-primary shadow-2xl mx-auto max-w-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <FinalCTA onPageChange={ onPageChange }/>
    </div>
  );
};
