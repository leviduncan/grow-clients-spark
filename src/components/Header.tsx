import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-bebas text-2xl text-white hover:text-primary transition-colors">
            GrowClients<span className="text-primary">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-medium"
                    : "text-white/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" size="sm" className="font-bebas">
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-inter text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-medium"
                    : "text-white/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" size="sm" className="font-bebas w-full">
              Book Consultation
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
