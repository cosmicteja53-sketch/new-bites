import React from 'react';
import { MenuItem } from '../../../types';
import { motion } from 'framer-motion';

interface MenuCardProps {
    item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
    // Images are loaded directly from the /public/images/ root
    const getLocalImagePath = (cloudinaryOrLocalPath: string) => {
        if (!cloudinaryOrLocalPath) return '';

        // Extract filename from "menu/filename" or "categories/filename"
        const parts = cloudinaryOrLocalPath.split('/');
        const filename = parts[parts.length - 1];

        // Ensure it has an extension
        if (!filename.includes('.')) {
            return `/images/${filename}.jpg`;
        }

        return `/images/${filename}`;
    };

    return (
        <div
            className="flex flex-col bg-[#1A1410] rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-full border border-white/5"
        >
            {/* Image Container 16:9 */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                    src={getLocalImagePath(item.image || '')}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        // Fallback if local image is missing
                        (e.target as HTMLImageElement).classList.add('img-missing');
                        (e.target as HTMLImageElement).setAttribute('data-name', item.name);
                        (e.target as HTMLImageElement).style.visibility = 'hidden';
                    }}
                />

                {/* Veg/Non-Veg Badge (Minimal style per specs) */}
                {item.isVeg !== undefined && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#1c1c1c]/90 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm border border-white/10">
                        <div className={`w-[8px] h-[8px] rounded-full ${item.isVeg ? 'bg-[#4caf50]' : 'bg-[#f44336]'} flex items-center justify-center`} />
                        <span className="font-poppins font-medium text-[10px] uppercase tracking-wider text-[#f5f5f5]">
                            {item.isVeg ? 'Veg' : 'Non-Veg'}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow p-5 justify-between">
                <div className="min-h-[48px] mb-4">
                    <h3 className="font-poppins text-[#f5f5f5] font-bold text-[18px] leading-snug line-clamp-2 uppercase tracking-wide">
                        {item.name}
                    </h3>
                </div>

                <div className="mt-auto">
                    <div className="font-poppins font-black text-[22px] text-[#FFB800] leading-none">
                        {item.price.includes('·') ? (
                            <div className="flex flex-col gap-1 text-[14px] sm:text-[15px]">
                                {item.price.split('·').map((p, i) => (
                                    <span key={i} className="block text-[#cfcfcf]/80 font-medium">{p.trim()}</span>
                                ))}
                            </div>
                        ) : (
                            item.price
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
