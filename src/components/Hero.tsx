import { motion } from "motion/react";
import {
    Section,
    Button,
    Badge,
    Phone,
    CheckCircle,
    Calendar,
    Page,
} from "./UI";
import AC from '../assets/ac_units.png'

const Hero = ({ onPageChange }: { onPageChange: (page: Page) => void }) => {
    return (
        <>
            <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex items-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_50%,#F8FAFC_0%,#E2E8F0_50%,#CBD5E1_100%)] dark:bg-[radial-gradient(ellipse_at_30%_50%,#152238_0%,#0C2340_50%,#0B1120_100%)] opacity-90" />
                <img src={AC} alt="AC Units" className="absolute top-1/2 left-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none" />
                {/* Animated Blobs */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/15 dark:bg-secondary/20 blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            x: [0, -40, 0],
                            y: [0, -60, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 dark:bg-accent/10 blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, 30, 0],
                            y: [0, -40, 0],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 dark:bg-white/5 blur-[120px]"
                    />
                </div>

                <div className="absolute inset-0 -z-10 opacity-90" style={{ backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="amber">AI RECEPTIONIST FOR HVAC CONTRACTORS</Badge>
                        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-primary dark:text-white">
                            Never Miss Another <span className="text-accent">HVAC Call</span> Again
                        </h1>
                        <p className="mt-8 text-lg md:text-xl text-text-secondary dark:text-white/70 max-w-xl leading-relaxed">
                            Your AI receptionist answers every call 24/7, books appointments, and handles emergencies while you focus on the work.
                        </p>

                        <div className="mt-10 space-y-4">
                            {[
                                "Responds to leads in under 60 seconds",
                                "Routes emergencies to your on-call tech automatically",
                                "Books appointments 24/7, even at 2 AM on Sunday"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 text-text-primary dark:text-white/90">
                                    <CheckCircle className="text-success" size={20} />
                                    <span className="font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                className="text-lg px-8 py-4"
                                onClick={() => onPageChange('book-a-demo')}
                            >
                                See It in Action (Free Demo Call)
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-text-secondary dark:text-white/40">
                            Set up in 48 hours • No long-term contract • Cancel anytime
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 glass p-8 rounded-3xl border-black/10 dark:border-white/10">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-pulse">
                                        <Phone className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-secondary dark:text-dark-text-secondary uppercase font-bold tracking-widest">Active Call</p>
                                        <p className="text-text-secondary dark:text-dark-text-secondary font-bold">Homeowner Inquiry</p>
                                    </div>
                                </div>
                                <Badge variant="green">AI ACTIVE</Badge>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                                    <p className="text-xs text-accent font-bold mb-1">Customer</p>
                                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary italic">"My furnace just stopped working and it's 10 degrees outside. Can someone come today?"</p>
                                </div>
                                <div className="bg-secondary/10 dark:bg-secondary/50 p-4 rounded-xl border border-secondary/20 ml-8">
                                    <p className="text-xs text-secondary font-bold mb-1">AI Receptionist</p>
                                    <p className="text-sm text-text-primary dark:text-white">"I'm so sorry to hear that. Since this is a heating emergency, I've prioritized your request. I can book a technician to be there between 2 PM and 4 PM today. Does that work for you?"</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Calendar className="text-accent" size={18} />
                                    <span className="text-sm text-text-secondary dark:text-dark-text-secondary">Appointment Booked</span>
                                </div>
                                <span className="text-xs text-text-secondary/60 dark:text-dark-text-secondary/60">Duration: 1:42</span>
                            </div>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/30 blur-[100px] -z-10 rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 blur-[100px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </Section>
        </>
    )
}

export default Hero