import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-wht.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blugrn-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link to="/">
              <img src={logo} className="w-48" alt="GrowClientsAI Brand Logo" />
            </Link>
          </div>

          {/* Description */}
          <p className="font-inter text-zinc-400 max-w-xl mx-auto leading-relaxed mb-4">
            AI-powered voice agents that answer every call 24/7. Never miss another HVAC lead.
          </p>


          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="mailto:info@growclientsai.com"
              className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-inter text-sm">info@growclientsai.com</span>
            </a>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-inter text-sm">(555) 123-4567</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-zinc-800 text-center">
          <p className="font-inter text-sm text-zinc-500 mb-4 sm:mb-0">
            © {currentYear} GrowClientsAI. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link
              to="/privacy"
              className="font-inter text-sm text-zinc-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-inter text-sm text-zinc-500 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
