import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, Phone } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2C2C2C] shadow-lg' : 'bg-[#2C2C2C]/90'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Logo size="sm" />
            <span className="text-[#F4C430] tracking-wider">Mekala's Kitchenette</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#F4C430] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-white hover:text-[#F4C430] transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#F4C430] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#F4C430] transition-colors">
              Contact
            </button>
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-2">
            <a 
              href="tel:9666267966" 
              className="flex items-center gap-2 bg-[#D4AF37] text-[#2C2C2C] px-4 py-2 rounded-lg hover:bg-[#F4C430] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>9666267966</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#2C2C2C] border-t border-[#D4AF37]/20 pb-4">
            <div className="flex flex-col gap-4 pt-4">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#F4C430] transition-colors text-left px-4">
                Home
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-white hover:text-[#F4C430] transition-colors text-left px-4">
                Menu
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#F4C430] transition-colors text-left px-4">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#F4C430] transition-colors text-left px-4">
                Contact
              </button>
              <a 
                href="tel:9666267966" 
                className="flex items-center gap-2 bg-[#D4AF37] text-[#2C2C2C] px-4 py-2 rounded-lg hover:bg-[#F4C430] transition-colors mx-4"
              >
                <Phone className="w-4 h-4" />
                <span>9666267966</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
