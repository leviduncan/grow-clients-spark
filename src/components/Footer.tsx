const Footer = () => {
  return (
    <footer className="py-12 bg-[hsl(var(--dark-bg))] text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <h3 className="font-bebas text-3xl text-primary">
              GROWCLIENTSAI
            </h3>
            <p className="font-inter text-gray-400 max-w-md mx-auto">
              AI-powered marketing for small service businesses
            </p>
            <div className="pt-8 text-sm text-gray-500 font-inter">
              © {new Date().getFullYear()} GrowClientsAI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
