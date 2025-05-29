import { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = ({ scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">DevSlay</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-blue-600">Process</button>
            <button onClick={() => scrollToSection('packages')} className="hover:text-blue-600">Pricing</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-600">Portfolio</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-blue-600">FAQ</button>
          </div>
          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Discovery Call
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => handleNavClick('how-it-works')} className="block w-full text-left hover:text-blue-600">Process</button>
            <button onClick={() => handleNavClick('packages')} className="block w-full text-left hover:text-blue-600">Pricing</button>
            <button onClick={() => handleNavClick('portfolio')} className="block w-full text-left hover:text-blue-600">Portfolio</button>
            <button onClick={() => handleNavClick('faq')} className="block w-full text-left hover:text-blue-600">FAQ</button>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book Discovery Call
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;