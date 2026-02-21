import React from 'react';
import { ShieldCheck, Leaf, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="bg-[#0f0f0f] min-h-screen pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <span className="font-poppins font-semibold text-[#ff6b00] text-sm tracking-[0.2em] uppercase block mb-3">
                        Our Story
                    </span>
                    <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#f5f5f5] uppercase tracking-widest mb-6">
                        ABOUT NEW BITES
                    </h1>
                    <p className="font-poppins text-[#cfcfcf] text-lg max-w-2xl mx-auto leading-relaxed">
                        Authentic pizza & fried chicken serving across Kanipakam.
                        We believe in premium quality, fresh ingredients, and unforgettable taste.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Feature 1 */}
                    <div className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/5 hover:border-[#ff6b00]/30 transition-colors duration-300 text-center group">
                        <div className="w-16 h-16 rounded-full bg-[#0f0f0f] mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Flame size={32} className="text-[#ffb703]" />
                        </div>
                        <h3 className="font-poppins font-bold text-xl text-[#f5f5f5] mb-3 tracking-wide">
                            FRESHLY BAKED
                        </h3>
                        <p className="font-poppins text-[#cfcfcf] text-sm leading-relaxed">
                            Our signature pizzas are crafted with hand-tossed dough and baked fresh daily for the perfect crust.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/5 hover:border-[#ff6b00]/30 transition-colors duration-300 text-center group">
                        <div className="w-16 h-16 rounded-full bg-[#0f0f0f] mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={32} className="text-[#ffb703]" />
                        </div>
                        <h3 className="font-poppins font-bold text-xl text-[#f5f5f5] mb-3 tracking-wide">
                            PREMIUM QUALITY
                        </h3>
                        <p className="font-poppins text-[#cfcfcf] text-sm leading-relaxed">
                            From 100% real mozzarella to premium chicken cuts, we never compromise on the quality of our ingredients.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-[#1c1c1c] rounded-2xl p-8 border border-white/5 hover:border-[#ff6b00]/30 transition-colors duration-300 text-center group">
                        <div className="w-16 h-16 rounded-full bg-[#0f0f0f] mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Leaf size={32} className="text-[#ffb703]" />
                        </div>
                        <h3 className="font-poppins font-bold text-xl text-[#f5f5f5] mb-3 tracking-wide">
                            VEG & NON-VEG
                        </h3>
                        <p className="font-poppins text-[#cfcfcf] text-sm leading-relaxed">
                            Dedicated preparation areas ensure our expansive vegetarian and non-vegetarian menus are perfectly handled.
                        </p>
                    </div>
                </div>

                {/* Subtle Image Highlight Section */}
                <div className="relative rounded-3xl overflow-hidden bg-[#1c1c1c] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    <div className="absolute inset-0">
                        {/* Using the hero image as a subtle background pattern */}
                        <img
                            src="/images/pizza-bg-dark.jpg"
                            alt="Background"
                            className="w-full h-full object-cover opacity-10"
                            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f]/80" />
                    </div>

                    <div className="relative z-10 px-6 py-20 sm:px-12 sm:py-24 text-center">
                        <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#f5f5f5] mb-6 tracking-wide">
                            FEEL THE CRUNCH IN EVERY BITE
                        </h2>
                        <p className="font-poppins text-[#cfcfcf] text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            With over 100+ items on our master menu—from crispy, golden fried chicken to rich, cheesy pizzas and refreshing mocktails—there's a story in every serving.
                        </p>
                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-[12px] bg-[#ff6b00] text-[#f5f5f5] font-poppins font-semibold tracking-wide hover:-translate-y-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition-all duration-250"
                        >
                            Explore Our Full Menu
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
