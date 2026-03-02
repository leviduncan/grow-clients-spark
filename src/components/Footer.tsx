import Logo from "./Logo";
import { Page, Button } from "./UI";

export const Footer = ({ onPageChange, isDarkMode }: { onPageChange: (page: Page) => void; isDarkMode: boolean }) => {
  return (
    <footer className="bg-primary dark:bg-dark-bg text-white py-16 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          {/* <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xl">G</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              GrowClients<span className="text-accent">AI</span>
            </span>
          </div> */}
          <Logo onPageChange={onPageChange} isDarkMode={isDarkMode} />
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            AI-powered voice agents that answer every call 24/7. Never miss another HVAC lead.
          </p>
          <div className="space-y-2 text-sm text-white/80">
            <p>info@growclientsai.com</p>
            <p>(484) 600-6010</p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><button onClick={() => onPageChange('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => onPageChange('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
            <li><button onClick={() => onPageChange('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
            <li><button onClick={() => onPageChange('book-a-demo')} className="hover:text-white transition-colors">Book a Demo</button></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><button onClick={() => onPageChange('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => onPageChange('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Get Started</h4>
          <p className="text-sm text-white/60 mb-6">
            Ready to stop missing calls? Book your setup call today.
          </p>
          <Button 
            variant="primary" 
            className="w-full text-sm py-2"
            onClick={() => onPageChange('book-a-demo')}
          >
            Book a Demo Call
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© 2026 GrowClientsAI. All rights reserved.</p>
        <p>Built for HVAC Contractors</p>
      </div>
    </footer>
  );
};
