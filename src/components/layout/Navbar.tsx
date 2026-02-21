import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled
                ? 'bg-[#0D0B0A]/85 backdrop-blur-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-[14px]'
                : 'bg-transparent py-[18px]'
                }`}
        >
            <div className={`max-w-7xl mx-auto transition-all duration-300 ${isScrolled ? 'px-6 lg:px-10' : 'px-4 sm:px-6 lg:px-10'
                }`}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 group z-[1001]">
                        <span className="font-display font-extrabold text-[24px] tracking-wider uppercase leading-none">
                            <span className="text-[#FFB800]">NEW</span>
                            <span className="text-[#C8293A]"> BITES</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative py-2 font-poppins text-[15px] font-medium tracking-[0.5px] transition-all duration-300 uppercase ${isActive
                                        ? 'text-[#C8293A]'
                                        : 'text-white hover:text-[#FFB800]'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C8293A] rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white hover:text-[#FFB800] transition-colors duration-300 z-[1001]"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Slide-in Menu from Right for Mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[300px] bg-[#0D0B0A] z-[1000] md:hidden px-8 pt-24 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-white/5"
                        >
                            <div className="flex flex-col space-y-8">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`text-2xl font-bebas uppercase tracking-[2px] transition-colors duration-300 ${isActive ? 'text-[#C8293A]' : 'text-[#f5f5f5] hover:text-[#FFB800]'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                                <div className="pt-8 border-t border-white/5">
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full px-6 py-4 rounded-full bg-[#C8293A] text-white font-poppins font-bold tracking-wide text-center uppercase text-sm"
                                    >
                                        Visit Us
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};
