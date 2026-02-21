import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="bg-[#0D0B0A] min-h-screen pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Subtitle/Title */}
                <div className="text-center mb-16">
                    <span className="font-poppins font-semibold text-[#ff6b00] text-sm tracking-[0.2em] uppercase block mb-3">
                        Get In Touch
                    </span>
                    <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#f5f5f5] uppercase tracking-widest mb-4">
                        VISIT US
                    </h1>
                    <div className="w-24 h-1 bg-[#ff6b00] mx-auto rounded-full" />
                </div>

                {/* Brand Showcase Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="relative group overflow-hidden rounded-[16px] shadow-2xl border border-white/5 aspect-[16/10]">
                        <img
                            src="/images/inside_x.jpeg"
                            alt="New Bites Interior"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="font-bebas text-3xl text-white tracking-widest">PREMIUM INTERIORS</h3>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-[16px] shadow-2xl border border-white/5 aspect-[16/10]">
                        <img
                            src="/images/outside_x.jpeg"
                            alt="New Bites Exterior"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="font-bebas text-3xl text-white tracking-widest">PRIME LOCATION</h3>
                        </div>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="bg-[#1A1410] rounded-3xl p-8 sm:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row gap-12 border border-white/5">

                    {/* Left Side: Contact Info */}
                    <div className="flex-1 space-y-10">
                        <div>
                            <h2 className="font-poppins font-semibold text-3xl text-[#f5f5f5] mb-2">
                                New Bites Kanipakam
                            </h2>
                            <p className="font-poppins text-[#cfcfcf]">
                                Premium fast-casual dining featuring authentic pizza and crispy fried chicken.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#0f0f0f] flex items-center justify-center flex-shrink-0 border border-white/5">
                                    <MapPin size={24} className="text-[#ffb703]" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-[#f5f5f5] mb-1">Our Location</h3>
                                    <p className="font-poppins text-[#cfcfcf] leading-relaxed">
                                        Kanipakam, Patnam,<br />
                                        Andhra Pradesh 517131
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#0f0f0f] flex items-center justify-center flex-shrink-0 border border-white/5">
                                    <Phone size={24} className="text-[#ffb703]" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-[#f5f5f5] mb-1">Call Us</h3>
                                    <a href="tel:+917989308995" className="font-poppins text-[20px] font-medium text-[#ff6b00] hover:text-[#ffb703] transition-colors">
                                        +91 79893 08995
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#0f0f0f] flex items-center justify-center flex-shrink-0 border border-white/5">
                                    <Clock size={24} className="text-[#ffb703]" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-[#f5f5f5] mb-1">Opening Hours</h3>
                                    <p className="font-poppins text-[#cfcfcf] font-medium">
                                        Open Daily • 10:00 AM onwards
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Map Embed */}
                    <div className="flex-1 h-[400px] lg:h-auto rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/10 relative shadow-inner">
                        <iframe
                            title="New Bites Kanipakam Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://maps.google.com/maps?q=Kanipakam,%20Patnam,%20Andhra%20Pradesh%20517131&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                            className="absolute inset-0 grayscale contrast-125 opacity-90"
                        ></iframe>
                        {/* Overlay to darken the map slightly and fit the theme */}
                        <div className="absolute inset-0 bg-black/20 pointer-events-none mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
