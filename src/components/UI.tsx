import React from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  Calendar, 
  Clock, 
  Shield, 
  ChevronRight, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowUp, 
  CheckCircle, 
  AlertCircle, 
  Star, 
  MessageSquare, 
  Headphones, 
  Zap, 
  Building2, 
  Wrench,
  TrendingDown,
  PhoneMissed,
  PhoneOff,
  Cpu,
  Power,
  BarChart3,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { useState, useEffect } from "react";

// Types
export type Page = 'home' | 'how-it-works' | 'pricing' | 'book-a-demo' | 'privacy' | 'terms';

// Components
export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; 
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}) => {
  const variants = {
    primary: "bg-accent text-primary hover:bg-accent-hover shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
    secondary: "bg-secondary text-white hover:bg-blue-700 shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 dark:border-accent dark:text-accent disabled:opacity-50 disabled:cursor-not-allowed",
    ghost: "text-text-secondary hover:text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary disabled:opacity-50 disabled:cursor-not-allowed"
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const Section = ({ 
  children, 
  className = "", 
  id,
  dark = false
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
  dark?: boolean;
}) => (
  <section 
    id={id}
    className={`py-16 md:py-24 px-4 md:px-8 ${dark ? 'bg-bg-light text-text-primary dark:bg-dark-surface dark:text-dark-text-primary' : ''} ${className}`}
  >
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const Badge = ({ children, variant = 'amber', className = "" }: { children: React.ReactNode, variant?: 'amber' | 'green' | 'blue', className?: string }) => {
  const variants = {
    amber: "bg-accent/10 text-accent border-accent/20",
    green: "bg-success/10 text-success border-success/20",
    blue: "bg-secondary/10 text-secondary border-secondary/20"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export const Card: React.FC<{ children: React.ReactNode, className?: string, glass?: boolean }> = ({ children, className = "", glass = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`${glass ? 'glass' : 'bg-white dark:bg-dark-surface border border-border dark:border-dark-border'} p-6 md:p-8 rounded-2xl shadow-sm ${className}`}
  >
    {children}
  </motion.div>
);

// Icons Export
export { 
  Phone, 
  Calendar, 
  Clock, 
  Shield, 
  ChevronRight, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowUp, 
  CheckCircle, 
  AlertCircle, 
  Star, 
  MessageSquare, 
  Headphones, 
  Zap, 
  Building2, 
  Wrench,
  TrendingDown,
  PhoneMissed,
  PhoneOff,
  Cpu,
  Power,
  BarChart3,
  ShieldCheck,
  TrendingUp
};
