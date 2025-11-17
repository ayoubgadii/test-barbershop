import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', target: 'home' },
    { name: 'APPOINTMENT', target: 'appointment-page' },
    { name: 'GALERIE', target: 'gallery-page' },
    { name: 'ABOUT', target: 'about' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 py-2 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Desktop Nav - Left */}
        <div className="hidden md:flex space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.target)}
              className="text-white font-heading font-bold tracking-widest hover:text-[#d4af37] transition-colors text-sm"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Logo Center */}
        <div className="flex-shrink-0 mx-auto md:mx-0 cursor-pointer" onClick={() => handleLinkClick('home')}>
           <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#1a1a1a] border-2 border-[#d4af37] flex items-center justify-center relative -mb-12 md:-mb-16 z-10 shadow-xl overflow-hidden">
               <img 
                  src="https://barbershopco.ca/wp-content/uploads/2024/09/cropped-PhotoRoom_20211230_132015-1-105x107-1.png"
                  alt="Barbershop Co."
                  className="w-full h-full object-cover"
               />
           </div>
        </div>

        {/* Desktop Nav - Right */}
        <div className="hidden md:flex space-x-8">
          {navLinks.slice(2).map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.target)}
              className="text-white font-heading font-bold tracking-widest hover:text-[#d4af37] transition-colors text-sm"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black/95 absolute w-full top-full left-0 border-t border-gray-800"
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.target)}
                className="text-white font-heading font-bold tracking-widest text-lg hover:text-[#d4af37]"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;