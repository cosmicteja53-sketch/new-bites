import React, { useState, useEffect } from 'react';
import { menuCategories } from '../../data';
import MenuCard from '../components/menu/MenuCard';
import CategoryNav from '../components/menu/CategoryNav';
import { ChevronUp } from 'lucide-react';

const Menu: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);

    // Initial scroll setup per React Router standards, but no scroll jump on category click
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCategoryClick = (id: string) => {
        setActiveCategory(id);
        // Specifically NO window.scrollTo or scrollIntoView here to strictly prevent jumps
    };

    const activeCategoryData = menuCategories.find(c => c.id === activeCategory) || menuCategories[0];

    return (
        <main className="min-h-screen bg-[#0f0f0f] pb-24">
            {/* Dark Page Header */}
            <div className="pt-32 pb-12 text-center bg-[#0f0f0f]">
                <h1 className="font-display font-bold text-5xl sm:text-6xl text-[#f5f5f5] mb-4 uppercase tracking-widest">
                    MASTER MENU
                </h1>
                <p className="font-poppins text-[#cfcfcf] text-base max-w-xl mx-auto px-4">
                    Serving across 7 locations · Free Delivery above ₹499 · Parcel charges ₹10 extra
                </p>
            </div>

            {/* Sticky Navigation */}
            <CategoryNav
                categories={menuCategories}
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
            />

            {/* Content Grid (Filtered to show only the active category's items) */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <section>
                    {/* Section Header */}
                    <div className="mb-8 flex items-baseline gap-3 border-b border-[#1c1c1c] pb-4">
                        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#ff6b00] tracking-wide uppercase">
                            {activeCategoryData.label}
                        </h2>
                        <span className="font-poppins text-[#cfcfcf] text-sm font-medium">
                            ({activeCategoryData.items.length} items)
                        </span>
                    </div>

                    {/* Premium Responsive Grid (2 mobile/tablet, 3 desktop) */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 items-stretch min-h-[500px]">
                        {activeCategoryData.items.map((item, idx) => (
                            <MenuCard key={`${activeCategoryData.id}-${idx}`} item={item} />
                        ))}
                    </div>
                </section>
            </div>

            {/* Scroll to top fab - with premium shadow, no glow */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 z-50 p-4 rounded-xl bg-[#ff6b00] text-white
                    hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.45)] 
                    shadow-[0_4px_12px_rgba(0,0,0,0.35)] transition-all duration-250 cursor-pointer"
                aria-label="Scroll to top"
            >
                <ChevronUp size={24} />
            </button>
        </main>
    );
};

export default Menu;
