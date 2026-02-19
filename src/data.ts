// ============================================================
// IMPORTS
// ============================================================

import {
  Award,
  BarChart3,
  Bot,
  Building2,
  Calendar,
  DollarSign,
  Facebook,
  FileX,
  Headphones,
  HeadphonesIcon,
  Link2,
  Linkedin,
  Phone,
  Rocket,
  Settings,
  Target,
  TestTube,
  Twitter,
  User,
  Users,
  Zap,
} from "lucide-react";

import demoMax from "@/assets/demo-max.png";
import demoChloe from "@/assets/demo-chloe.png";
import demoShelley from "@/assets/demo-shelley.png";
import aiAutomation from "@/assets/ai-automation.png";
import teamCollaboration from "@/assets/team-collaboration.png";
import phoneMockupDashboard from "@/assets/phone-mockup-dashboard.png";

// ============================================================
// NAV / HEADER
// ============================================================

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Pricing", path: "/pricing" },
];

// ============================================================
// HERO
// ============================================================

export const floatingBadges = [
  { icon: Calendar, label: "Book Appointments", position: "top-7 left-0 -translate-x-4" },
  { icon: Users, label: "Secure Leads", position: "top-8 right-0 translate-x-4" },
  { icon: DollarSign, label: "Sales", position: "bottom-16 left-0 -translate-x-8" },
  { icon: Headphones, label: "24/7 Support", position: "bottom-14 right-0 translate-x-8" },
];

export const heroHeader = [
  { title: "Never <span class='text-primary'>Miss </span>Another <br /><span class='text-primary'>HVAC Call </span>Again" },
  { subtitle: "Your AI receptionist answers every call 24/7, books appointments, and handles emergencies while you focus on the work. No more missed revenue from after-hours calls." },
];

export const heroFeatures = [
  "Responds to leads in under 60 seconds (before they call your competitor)",
  "Routes emergencies to your on-call tech automatically",
  "Books appointments 24/7, even at 2 AM on Sunday",
];

export const heroCTA = [
  "SEE IT IN ACTION (FREE DEMO CALL)"
]

export const heroBottomText = [
  "Set up in 48 hours • ",
  "No long-term contract • ",
  "Cancel anytime",
];

// ============================================================
// THE PROBLEM (TheProblem.tsx)
// ============================================================

export const theProblem = [
  {
    title: "After-Hours Emergencies",
    description:
      "Someone's furnace dies at 11pm. They call you. No answer. They call your competitor. You lose $800-1,200.",
  },
  {
    title: "Busy Season Overload",
    description:
      "Your phone rings while you're under a boiler. By the time you call back, they've already booked someone else.",
  },
  {
    title: "The Real Cost",
    description:
      "HVAC contractors lose an average of $4,000-7,000 per month in missed calls. That's $50,000-84,000 per year in lost revenue.",
  },
];

// ============================================================
// THE SOLUTION STEPS (TheSolution.tsx)
// ============================================================

export const solutionSteps = [
  {
    step: "01",
    title: "Answers Every Call",
    description: [
      "Emergency furnace repair at 2am? Routine maintenance at 8am? Your AI picks up every single call, every time.",
    ],
  },
  {
    step: "02",
    title: "Books Appointments",
    description: [
      "Instantly schedules jobs directly into your calendar. Customers get confirmed without you lifting a finger.",
    ],
  },
  {
    step: "03",
    title: "Sounds Completely Human",
    description: [
      "Natural conversations, not robotic menus. Customers think they're talking to your best employee.",
    ],
  },
];

// ============================================================
// HOW IT WORKS COMPONENT (HowItWorks.tsx)
// ============================================================

export const howItWorksSteps = [
  {
    step: "01",
    title: "Quick Setup Call (30 minutes)",
    description: [
      "We learn about your business, services, and pricing. You tell us how you want calls handled.",
    ],
  },
  {
    step: "02",
    title: "We Build Your AI (24-48 hours)",
    description: [
      "We create and train your custom AI receptionist with your business information, voice, and call scripts.",
    ],
  },
  {
    step: "03",
    title: "Go Live",
    description: [
      "Forward your number or use ours. Your AI starts answering calls immediately. You monitor everything from a simple dashboard.",
    ],
  },
];

// ============================================================
// DEMO TALKING POINTS (Demo.tsx)
// ============================================================

export const talkingPoints = [
  "Emergency furnace repair",
  "AC maintenance appointment",
  "Pricing for new system installation",
];

// ============================================================
// PRICING PREVIEW (PricingPreview.tsx)
// ============================================================

export const pricingPreviewFeatures = [
  "Unlimited call answering (24/7/365)",
  "Automatic appointment booking",
  "CRM integration (ServiceTitan, Housecall Pro, etc.)",
  "Emergency vs routine call routing",
  "SMS notifications for every call",
  "Call recordings & transcripts",
  "Weekly performance reports",
  "Setup & training included",
];

// ============================================================
// FAQs — HOME PAGE (FAQs.tsx)
// ============================================================

export const homeFaqs = [
  {
    q: "Does it really sound human?",
    a: 'Yes. Call our demo line right now at (555) 123-4567. You won\'t believe it\'s AI. Customers regularly thank "her" at the end of calls.',
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

// ============================================================
// FOOTER
// ============================================================

export const footerLinks = {
  solutions: [
    { name: "AI Voice Agents", path: "/services" },
    { name: "Lead Generation", path: "/services" },
    { name: "Appointment Booking", path: "/services" },
    { name: "Customer Support", path: "/services" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Demos", path: "/demos" },
    { name: "Contact", path: "/contact" },
  ],
  resources: [
    { name: "Blog", path: "#" },
    { name: "Case Studies", path: "#" },
    { name: "Documentation", path: "#" },
    { name: "Help Center", path: "#" },
  ],
};

export const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
];

// ============================================================
// SERVICES PAGE (ServicesPage.tsx)
// ============================================================

export const solutionsOfferings = [
  {
    icon: Phone,
    title: "AI Voice Assistants",
    description:
      "Never miss another call. Our AI agents answer 24/7, qualify leads, book appointments, and follow up automatically.",
    features: [
      "24/7 call answering",
      "Intelligent lead qualification",
      "Automatic appointment booking",
      "Natural, human-like conversations",
      "Custom scripts for your business",
    ],
    image: aiAutomation,
    imageOnRight: true,
  },
  {
    icon: Target,
    title: "Lead Capture Systems",
    description:
      "Capture every potential customer with smart forms, chatbots, and automated follow-up sequences that convert.",
    features: [
      "Smart lead capture forms",
      "Website chatbots",
      "Automated email sequences",
      "Lead scoring & prioritization",
      "CRM integration",
    ],
    image: teamCollaboration,
    imageOnRight: false,
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and free up your team to focus on what matters—delivering great service.",
    features: [
      "Task automation",
      "Appointment reminders",
      "Invoice & payment automation",
      "Review request sequences",
      "Custom workflow builders",
    ],
    image: phoneMockupDashboard,
    imageOnRight: true,
  },
];

// ============================================================
// DEMOS PAGE (Demos.tsx)
// ============================================================

export const demos = [
  {
    name: "MAX",
    industry: "HVAC / TRADES",
    description:
      "Max handles everything from booking appointments to following up with leads—so your team can focus on what they do best. From HVAC to plumbing, electrical to roofing, Max keeps your phones covered 24/7.",
    cta: "CALL MAX NOW TO SEE HOW HE CAN HELP YOUR TRADES BUSINESS",
    image: demoMax,
    imageOnRight: true,
    videoUrl: "https://growclientsai.com/assets/hvac-demo.mp4",
  },
  {
    name: "CHLOE",
    industry: "CAFÉ / LOCAL BUSINESS",
    description:
      "Chloe is your friendly virtual receptionist, perfect for cafés, restaurants, and local shops. She takes orders, answers FAQs, and makes every customer feel welcome—even during your busiest hours.",
    cta: "GIVE CHLOE A CALL AND HEAR THE DIFFERENCE",
    image: demoChloe,
    imageOnRight: false,
    videoUrl: "https://growclientsai.com/assets/cafe-demo.mp4",
  },
  {
    name: "SHELLEY",
    industry: "MED SPA / PROFESSIONAL SERVICES",
    description:
      "Shelley brings elegance and professionalism to every call. Perfect for med spas, dental offices, law firms, and more. She books appointments, answers questions, and delivers a premium experience every time.",
    cta: "CALL SHELLEY TO EXPERIENCE WHITE-GLOVE SERVICE",
    image: demoShelley,
    imageOnRight: true,
    videoUrl: "https://growclientsai.com/assets/med-spa-demo.mp4",
  },
];

// ============================================================
// ABOUT PAGE (About.tsx)
// ============================================================

export const companyValues = [
  {
    icon: Building2,
    title: "Built for Service Businesses, Not Enterprise Giants",
    description:
      "We focus exclusively on HVAC contractors. This isn't a generic solution - it's purpose-built for your industry.",
  },
  {
    icon: FileX,
    title: "No Long-Term Contracts or Hidden Fees",
    description: "We believe great service keeps customers, not legal contracts.",
  },
  {
    icon: Award,
    title: "Results-Focused, Not Feature-Focused",
    description:
      "We don't care about fancy tech buzzwords. We care about one thing: booking you more jobs.",
  },
];

// ============================================================
// PRICING PAGE (Pricing.tsx)
// ============================================================

export const pricingCategories = [
  {
    title: "Call Handling",
    icon: Phone,
    features: [
      "Unlimited incoming calls (24/7/365)",
      "Average 2-minute response time",
      "Handles emergencies, appointments, and inquiries",
      "Natural, human-like conversations",
      "Spanish language support available",
    ],
  },
  {
    title: "Appointment Booking",
    icon: Calendar,
    features: [
      "Direct calendar integration",
      "Automatic appointment scheduling",
      "SMS confirmations sent to customers",
      "Emergency vs routine prioritization",
      "No double-booking",
    ],
  },
  {
    title: "Integrations",
    icon: Link2,
    features: [
      "ServiceTitan",
      "Housecall Pro",
      "Jobber",
      "FieldEdge",
      "Google Calendar",
      "Most major HVAC software",
    ],
  },
  {
    title: "Reporting & Control",
    icon: BarChart3,
    features: [
      "Real-time call notifications via SMS",
      "Full call recordings & transcripts",
      "Performance dashboard",
      "Weekly summary reports",
      "Call analytics & insights",
    ],
  },
  {
    title: "Support",
    icon: HeadphonesIcon,
    features: [
      "Complete setup & training included",
      "Ongoing optimization",
      "Priority email & phone support",
      "Script updates as you request them",
    ],
  },
];

export const pricingFaqs = [
  {
    q: "What happens if I need to pause service seasonally?",
    a: "You can pause for up to 2 months per year. Useful for HVAC contractors with very slow seasons.",
  },
  {
    q: "Do you charge per call or per minute?",
    a: "No. Unlimited calls included. Answer 50 calls or 500 calls - same price.",
  },
  {
    q: "What if I want to handle some calls myself?",
    a: 'You can set up forwarding rules. For example: "Forward to my phone first, if no answer in 3 rings, go to AI."',
  },
  {
    q: "Can I upgrade my script or features later?",
    a: "Yes, anytime. We make script adjustments as your business evolves.",
  },
  {
    q: "What's the cancellation policy?",
    a: "Month-to-month. Cancel anytime with 30 days notice. We'll even help transition if you need.",
  },
  {
    q: "Is there a setup fee?",
    a: "Not right now. Complete setup and training included at no extra cost. (Normally $997)",
  },
];

// ============================================================
// HOW IT WORKS PAGE (HowItWorksPage.tsx)
// ============================================================

export const howItWorksPageSteps = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30 Minutes",
    icon: Phone,
    whatWeCover: [
      "Your current call handling process",
      "Types of calls you receive (emergency, maintenance, sales)",
      "Your service area and pricing",
      "Your scheduling preferences",
      "Integration with your existing tools (CRM, calendar, etc.)",
    ],
    whatYouGet: "A clear picture of how your AI will handle every call type.",
  },
  {
    number: "02",
    title: "We Build Your AI",
    duration: "24-48 Hours - We Do This",
    icon: Settings,
    whatHappens: [
      "We script your AI's responses for every scenario",
      "Train it on HVAC terminology and your specific services",
      "Set up appointment booking with your availability",
      "Connect to your calendar and CRM",
      "Test it with dozens of mock calls",
    ],
    whatYouDo: "Nothing. We handle everything.",
  },
  {
    number: "03",
    title: "Testing & Approval",
    duration: "1 Hour",
    icon: TestTube,
    whatHappens: [
      "We send you a test number",
      "You call it and see how it handles different scenarios",
      "We make any adjustments you want",
      "You approve it for launch",
    ],
    examples: [
      '"My furnace isn\'t working"',
      '"How much for a new AC unit?"',
      '"Can you come out today?"',
      '"I want to schedule maintenance"',
    ],
  },
  {
    number: "04",
    title: "Go Live",
    duration: "5 Minutes",
    icon: Rocket,
    options: [
      {
        name: "Option A - Call Forwarding",
        recommended: true,
        description:
          "Forward your existing business number to your AI. When you're available, calls go to you. When you're not, they go to AI.",
      },
      {
        name: "Option B - New Number",
        recommended: false,
        description:
          "We give you a dedicated number for your AI. Use it on your website, Google Business, and marketing.",
      },
    ],
  },
  {
    number: "05",
    title: "Monitor & Optimize",
    duration: "Ongoing",
    icon: BarChart3,
    dashboard: [
      "Every call received (with recordings)",
      "Appointments booked",
      "Messages taken",
      "Call transcripts",
      "Performance metrics",
    ],
    weeklyCheckins: "We review performance and make improvements based on real calls.",
  },
];

export const howItWorksDifferences = [
  {
    title: "Not a Chatbot",
    description:
      "This isn't a text bot that gives canned responses. It's a voice AI that has natural conversations over the phone.",
    icon: Bot,
  },
  {
    title: "Not a Call Tree",
    description:
      'No "Press 1 for this, Press 2 for that." It answers like a human receptionist.',
    icon: Phone,
  },
  {
    title: "Not Replacing You",
    description:
      "It handles the routine stuff so you can focus on the important calls and actually doing HVAC work.",
    icon: User,
  },
];

export const callExamples = [
  {
    scenario: "Emergency Scenario",
    customer: "My heat's not working and it's 20 degrees outside.",
    ai: "I'm sorry to hear that. I know how stressful that is, especially in this weather. Let me get you on the schedule right away. What's your address?",
    result: "Books emergency slot, sends you SMS alert",
  },
  {
    scenario: "Maintenance Scenario",
    customer: "I need to schedule my annual AC checkup.",
    ai: "Perfect timing to get that done before summer. We have openings on Tuesday the 15th or Thursday the 17th. Which works better for you?",
    result: "Books appointment, sends confirmation",
  },
  {
    scenario: "Pricing Scenario",
    customer: "How much for a new furnace?",
    ai: "Great question. Installation typically ranges from $3,500 to $7,000 depending on the size and model. I'd like to get one of our technicians to your home for a free assessment. Are you available this week?",
    result: "Books estimate appointment",
  },
];

// ============================================================
// BOOK A DEMO PAGE (BookADemo.tsx)
// ============================================================

export const demoExpectations = [
  "We'll call your business live and show you what your AI will sound like",
  "We'll answer all your technical questions",
  "We'll show you the dashboard and reporting",
  "No pressure - just a demo",
];
