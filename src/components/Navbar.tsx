import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Button, Page } from "./UI";
import Logo from "./Logo";

export const Navbar = ({
  currentPage,
  onPageChange,
  isDarkMode,
  toggleDarkMode
}: {
  currentPage: Page,
  onPageChange: (page: Page) => void,
  isDarkMode: boolean,
  toggleDarkMode: () => void
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'How It Works', value: 'how-it-works' },
    { label: 'Pricing', value: 'pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-primary/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo onPageChange={onPageChange} isDarkMode={isDarkMode} />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => onPageChange(link.value)}
              className={`text-sm font-semibold transition-colors relative group ${currentPage === link.value ? 'text-secondary dark:text-accent' : 'text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-white'}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary dark:bg-accent transition-all duration-300 group-hover:w-full ${currentPage === link.value ? 'w-full' : ''}`} />
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-text-secondary dark:text-dark-text-secondary"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Button
            variant="primary"
            className="hidden sm:flex py-2 px-4 text-sm"
            onClick={() => onPageChange('book-a-demo')}
          >
            Book a Demo
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary dark:text-white"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-dark-bg p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">G</span>
                </div>
                <span className="font-display font-bold text-xl text-primary dark:text-white">GrowClientsAI</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-primary dark:text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => {
                    onPageChange(link.value);
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-bold ${currentPage === link.value ? 'text-accent' : 'text-text-secondary dark:text-white/70'}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="primary"
                className="w-full mt-4 text-xl py-4"
                onClick={() => {
                  onPageChange('book-a-demo');
                  setIsMenuOpen(false);
                }}
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
