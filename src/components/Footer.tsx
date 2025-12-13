import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
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

  return (
    <footer className="gradient-navy text-navy-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-bebas text-3xl text-navy-foreground hover:text-primary transition-colors">
              GrowClients<span className="text-primary">AI</span>
            </Link>
            <p className="font-inter text-navy-foreground/70 mt-4 max-w-sm leading-relaxed">
              AI-powered voice agents that handle your business 24/7. Get more clients, save time, and grow faster.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@growclientsai.com" className="flex items-center gap-3 text-navy-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-inter text-sm">hello@growclientsai.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-navy-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-inter text-sm">+1 (234) 567-890</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-navy-foreground/10 flex items-center justify-center text-navy-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bebas text-xl text-navy-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-inter text-sm text-navy-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bebas text-xl text-navy-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-inter text-sm text-navy-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bebas text-xl text-navy-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-inter text-sm text-navy-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-navy-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-navy-foreground/50">
            © {currentYear} GrowClientsAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="font-inter text-sm text-navy-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="font-inter text-sm text-navy-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
