import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { BookADemo } from "./components/BookADemo";
import { Legal } from "./components/Legal";
import { NotFound } from "./components/NotFound";
import { Page } from "./components/UI";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle theme initialization
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  // Handle back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'how-it-works', 'pricing', 'book-a-demo', 'privacy', 'terms'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle Dynamic SEO Metadata
  useEffect(() => {
    const metaData: Record<Page | 'default', { title: string, description: string }> = {
      home: {
        title: "AI Receptionist for HVAC Contractors | GrowClientsAI — Never Miss a Call",
        description: "Stop losing $50K+ per year to missed calls. GrowClientsAI's AI receptionist answers every HVAC call 24/7, books appointments instantly, and routes emergencies. Setup in 48 hours."
      },
      'how-it-works': {
        title: "How Our AI Receptionist Works for HVAC Contractors | GrowClientsAI",
        description: "From setup call to live AI in 48 hours. See the 5-step process to get your custom HVAC AI receptionist answering calls, booking appointments, and routing emergencies."
      },
      pricing: {
        title: "HVAC AI Receptionist Pricing — $397/month All-Inclusive | GrowClientsAI",
        description: "One simple price, everything included. $397/month for unlimited 24/7 call answering, appointment booking, CRM integration, and emergency routing. 30-day money-back guarantee."
      },
      'book-a-demo': {
        title: "Book a Free AI Demo Call for Your HVAC Business | GrowClientsAI",
        description: "See our AI receptionist in action in 15 minutes. Book a free demo call and experience how natural it sounds answering HVAC customer calls."
      },
      privacy: {
        title: "Privacy Policy | GrowClientsAI",
        description: "GrowClientsAI privacy policy. Learn how we collect, use, and protect your data when you use our AI receptionist services."
      },
      terms: {
        title: "Terms of Service | GrowClientsAI",
        description: "GrowClientsAI terms of service. Learn about our terms and conditions for using our AI receptionist services."
      },
      default: {
        title: "Page Not Found | GrowClientsAI",
        description: "The page you are looking for does not exist."
      }
    };

    const currentMeta = metaData[currentPage] || metaData.default;
    document.title = currentMeta.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.description);
    }
  }, [currentPage]);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onPageChange={handlePageChange} />;
      case 'how-it-works': return <HowItWorks onPageChange={handlePageChange} />;
      case 'pricing': return <Pricing onPageChange={handlePageChange} />;
      case 'book-a-demo': return <BookADemo />;
      case 'privacy': return <Legal type="privacy" />;
      case 'terms': return <Legal type="terms" />;
      default: return <NotFound onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onPageChange={handlePageChange} />

      {/* Floating Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto"
        >
          <button 
            onClick={() => handlePageChange('book-a-demo')}
            className="w-full bg-accent text-primary font-black py-4 rounded-xl shadow-2xl flex items-center justify-center gap-2 group active:scale-95 transition-transform"
          >
            BOOK YOUR FREE DEMO
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
