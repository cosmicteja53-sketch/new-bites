import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedItem {
    id: string;
    name: string;
    price: string;
    image: string;
    badge: string;
}

const FEATURED_ITEMS: FeaturedItem[] = [
    {
        id: 'spicy-paneer-pizza',
        name: 'Spicy Paneer Pizza',
        price: '₹159',
        image: '/images/spicypaneer.jpeg',
        badge: 'BEST SELLER'
    },
    {
        id: 'chicken-supreme-pizza',
        name: 'Chicken Supreme Pizza',
        price: '₹199',
        image: '/images/chickensupreme.jpeg',
        badge: "CHEF'S PICK"
    },
    {
        id: 'peri-peri-wings',
        name: 'Peri Peri Wings',
        price: '₹129',
        image: '/images/periperiwings.jpeg',
        badge: 'HOT FAVORITE'
    },
    {
        id: 'kitkat-shake',
        name: 'KitKat Shake',
        price: '₹99',
        image: '/images/kitkat-shake.jpeg',
        badge: '2026 NEW'
    }
];

const SignatureDelights: React.FC = () => {
    return (
        <section className="py-24 bg-[#0D0B0A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-[#f5f5f5] uppercase tracking-[0.1em] mb-4">
                        SIGNATURE DELIGHTS
                    </h2>
                    <div className="w-20 h-1 bg-[#C8293A] mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURED_ITEMS.map((item) => (
                        <Link
                            to="/menu"
                            key={item.id}
                            className="group relative flex flex-col bg-[#1A1410] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-white/5"
                        >
                            {/* Image Container 16:9 */}
                            <div className="relative aspect-[16/9] w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Bottom Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-transparent to-transparent opacity-80" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4 bg-[#C8293A] px-3 py-1 rounded-full shadow-lg">
                                    <span className="font-poppins font-black text-[10px] tracking-[0.1em] text-white uppercase">
                                        {item.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="font-poppins font-bold text-xl text-[#f5f5f5] mb-2 group-hover:text-[#FFB800] transition-colors leading-tight">
                                    {item.name}
                                </h3>
                                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="font-poppins font-black text-2xl text-[#FFB800]">
                                        {item.price}
                                    </span>
                                    <span className="text-[#f5f5f5]/40 group-hover:text-[#C8293A] group-hover:translate-x-1 transition-all">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-2 font-poppins font-bold text-[#E8DFD0] hover:text-[#FFB800] transition-colors uppercase tracking-widest text-sm border-b-2 border-transparent hover:border-[#FFB800] pb-1"
                    >
                        Explore Full Master Menu
                        <span className="text-[#C8293A]">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SignatureDelights;
