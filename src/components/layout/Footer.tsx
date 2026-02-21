import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] border-t border-[#1c1c1c] text-[#f5f5f5] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">

                    {/* Column 1: Logo & Tagline */}
                    <div className="flex-1 md:pr-8">
                        <h3 className="font-display font-bold text-3xl tracking-wider text-[#ff6b00]">NEW BITES</h3>
                        <p className="font-poppins text-[#cfcfcf] mt-4 max-w-sm">
                            Authentic pizza & fried chicken serving across Kanipakam and beyond. Premium fast-casual dining.
                        </p>
                        <div className="flex gap-4 mt-6 justify-center md:justify-start">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[#cfcfcf] hover:bg-[#ff6b00] hover:text-[#f5f5f5] transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[#cfcfcf] hover:bg-[#ff6b00] hover:text-[#f5f5f5] transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[#cfcfcf] hover:bg-[#ff6b00] hover:text-[#f5f5f5] transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex-1 flex flex-col items-center md:items-start">
                        <h4 className="font-poppins font-semibold text-lg mb-6">Explore</h4>
                        <div className="flex flex-col gap-4 font-poppins text-[#cfcfcf]">
                            <Link to="/" className="hover:text-[#ffb703] transition-colors">Home</Link>
                            <Link to="/menu" className="hover:text-[#ffb703] transition-colors">Our Menu</Link>
                            <Link to="/about" className="hover:text-[#ffb703] transition-colors">About Us</Link>
                            <Link to="/contact" className="hover:text-[#ffb703] transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex-1 flex flex-col items-center md:items-start gap-4 font-poppins text-[#cfcfcf]">
                        <h4 className="font-poppins font-semibold text-lg text-[#f5f5f5] mb-2">Visit Us</h4>
                        <div className="flex items-start gap-3 text-left">
                            <MapPin size={20} className="text-[#ff6b00] flex-shrink-0 mt-1" />
                            <span>Kanipakam, Patnam,<br />Andhra Pradesh 517131</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={20} className="text-[#ff6b00] flex-shrink-0" />
                            <span>+91 79893 08995</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock size={20} className="text-[#ff6b00] flex-shrink-0" />
                            <span>10 AM onwards</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Copyright & Parcel Charge */}
                <div className="mt-16 pt-8 border-t border-[#1c1c1c] flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-poppins text-[#cfcfcf]">
                    <p>&copy; {new Date().getFullYear()} New Bites. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ffb703]"></span>
                        <p>Parcel charges ₹10 extra</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
