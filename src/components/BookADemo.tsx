import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Section, 
  Button, 
  Badge, 
  Card, 
  CheckCircle,
  Phone,
  MessageSquare,
  BarChart3,
  Page
} from "./UI";

export const BookADemo = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    message: '',
    smsConsent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  return (
    <div className="pt-24">
      <Section className="text-center">
        <Badge>GET STARTED</Badge>
        <h1 className="mt-4 text-4xl md:text-6xl font-black text-primary dark:text-white mb-6">
          Let's Build Your AI Receptionist
        </h1>
        <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
          Book a 15-minute call. We'll show you exactly how this works and answer all your questions.
        </p>
      </Section>

      <Section className="bg-bg-light dark:bg-dark-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-bold mb-8 dark:text-white">What to Expect</h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Phone className="text-accent" />,
                  text: "We'll call your business live and show you what your AI will sound like"
                },
                {
                  icon: <MessageSquare className="text-secondary" />,
                  text: "We'll answer all your technical questions about integrations"
                },
                {
                  icon: <BarChart3 className="text-success" />,
                  text: "We'll show you the dashboard and performance reporting"
                },
                {
                  icon: <CheckCircle className="text-accent" />,
                  text: "No pressure — just a demo to see if it's a fit for your HVAC business"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-lg text-text-secondary dark:text-dark-text-secondary leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-bg-light text-text-primary dark:bg-dark-surface dark:text-dark-text-primary border border-border dark:border-dark-border">
              <h3 className="text-xl font-bold mb-4">Prefer to Talk Right Now?</h3>
              <div className="space-y-4">
                <a href="tel:+14019928142" className="flex items-center gap-3 text-xl font-bold hover:text-accent transition-colors">
                  <Phone size={20} />
                  (401) 992-8142
                </a>
                <p className="text-text-secondary dark:text-white/60 text-sm">Or try the AI demo line above to hear it live.</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <Card className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-success" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 dark:text-white">Thank You!</h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary text-lg">
                    We've received your request. One of our specialists will reach out to you within 2 hours to confirm your demo time.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => setFormState('idle')}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-primary dark:text-white uppercase tracking-widest">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-bg-light dark:bg-dark-bg focus:ring-2 focus:ring-secondary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-sm font-bold text-primary dark:text-white uppercase tracking-widest">Business Name</label>
                      <input 
                        type="text" 
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-bg-light dark:bg-dark-bg focus:ring-2 focus:ring-secondary outline-none transition-all"
                        placeholder="Comfort HVAC"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-primary dark:text-white uppercase tracking-widest">Email Address *</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-bg-light dark:bg-dark-bg focus:ring-2 focus:ring-secondary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-primary dark:text-white uppercase tracking-widest">Phone Number *</label>
                      <input 
                        required
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-bg-light dark:bg-dark-bg focus:ring-2 focus:ring-secondary outline-none transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-primary dark:text-white uppercase tracking-widest">How can we help?</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-bg-light dark:bg-dark-bg focus:ring-2 focus:ring-secondary outline-none transition-all resize-none"
                      placeholder="Tell us about your current call volume or any specific needs..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      required
                      type="checkbox" 
                      id="smsConsent"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-border text-secondary focus:ring-secondary"
                    />
                    <label htmlFor="smsConsent" className="text-xs text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      I consent to receiving SMS messages and email communications from GrowClientsAI regarding my demo request. Message and data rates may apply.
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full py-4 text-lg"
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Book My Demo Call'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </Section>
    </div>
  );
};
