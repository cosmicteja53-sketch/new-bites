import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const logoColor = isScrolled ? 'text-[#1A1208]' : 'text-white';
  const linkColor = isScrolled ? 'text-[#1A1208]' : 'text-white';
  const bgColor = isScrolled ? 'bg-white shadow-sm' : 'bg-transparent';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-20 flex items-center ${bgColor}`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className={`font-syne font-[800] text-2xl tracking-tight transition-colors duration-300 ${logoColor}`}>
            NEW <span className="text-[#2D6A3F]">BITES</span>
          </a>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-dm font-500 uppercase text-[12px] tracking-[0.15em] transition-colors duration-300 hover:opacity-70 ${linkColor}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Visit Us Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="hidden md:flex items-center bg-[#2D6A3F] hover:bg-[#1E4D2B] text-white font-dm font-medium px-6 py-2.5 rounded-full transition-all duration-300 text-sm"
            >
              Visit Us <span className="ml-2">→</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-1 transition-colors duration-300 ${linkColor}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-width Slide-down Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full bg-white z-[90] shadow-xl pt-24 pb-12 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center italic">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-dm font-500 uppercase text-lg tracking-[0.2em] text-[#1A1208] hover:text-[#2D6A3F] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-[200px] text-center bg-[#2D6A3F] text-white font-dm font-medium py-4 rounded-full text-lg mt-4 transition-transform active:scale-95"
              >
                Visit Us →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};