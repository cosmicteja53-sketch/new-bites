import React, { useRef } from 'react';
import { MenuCategory } from '../../../types';

interface CategoryNavProps {
    categories: MenuCategory[];
    activeCategory: string;
    onCategoryClick: (id: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onCategoryClick }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
        onCategoryClick(id);

        // Horizontal scroll button into view within the nav bar
        const button = e.currentTarget;
        button.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    };

    return (
        <nav className="sticky top-[72px] z-50 bg-[#0D0B0A] border-b border-[#1A1410] overflow-x-auto whitespace-nowrap scroll-smooth px-4 py-3 hide-scrollbar">
            <div
                ref={scrollContainerRef}
                className="flex gap-2 snap-x snap-mandatory"
            >
                {categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    // Remove leading "1. ", "2. ", etc. from label
                    const cleanLabel = category.label.replace(/^\d+\.\s*/, '');

                    return (
                        <button
                            key={category.id}
                            onClick={(e) => handleButtonClick(category.id, e)}
                            className={`
                                inline-block px-6 py-2.5 mr-3 rounded-full text-[16px] font-bebas uppercase tracking-wider transition-all snap-start
                                ${isActive
                                    ? 'bg-[#C8293A] text-white'
                                    : 'bg-[#1A1410] text-[#E8DFD0] hover:bg-[#2A1F19]'
                                }
                            `}
                        >
                            {cleanLabel}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default CategoryNav;
