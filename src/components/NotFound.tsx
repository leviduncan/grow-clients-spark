import { Section, Button, Page } from "./UI";

export const NotFound = ({ onPageChange }: { onPageChange: (page: Page) => void }) => {
  return (
    <div className="pt-24 min-h-[80vh] flex items-center">
      <Section className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-12 animate-float">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary dark:text-accent relative z-10">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M18 9v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-primary dark:text-white mb-6">
          This page went off the grid
        </h1>
        <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-12">
          The page you're looking for doesn't exist. Let's get you back on track to capturing every HVAC lead.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            onClick={() => onPageChange('home')}
          >
            Back to Homepage
          </Button>
          <Button 
            variant="outline" 
            onClick={() => onPageChange('book-a-demo')}
          >
            Or Book a Demo Call →
          </Button>
        </div>
      </Section>
    </div>
  );
};
