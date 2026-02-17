import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '../data';

export const CategoryGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory) || menuCategories[0];

  return (
    <section className="py-20 bg-[#F5F0E8] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <h2 className="font-syne font-black text-4xl sm:text-5xl text-[#1E4D2B] mb-4">Explore Our Menu</h2>
          <div className="h-1.5 w-24 bg-[#C8293A] mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Bar Container */}
        <div className="relative mb-12">
          <div className="tab-wrapper">
            <div className="tab-inner">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-8 py-3 rounded-full font-dm font-bold text-[13px] transition-all duration-300 border uppercase tracking-widest ${activeCategory === cat.id
                    ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] shadow-lg'
                    : 'bg-white text-[#1A1208] border-[#E0DDD9] hover:border-[#1E4D2B]'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Item Grid */}
        <div className="px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            >
              {currentCategory.items.map((item, idx) => {
                // Console log image path for verification (will run on every render)
                if (item.image) {
                  console.log(`Menu Item Image Path: ${item.image}`);
                }

                return (
                  <motion.div
                    key={`${activeCategory}-${idx}`}
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col h-full"
                  >
                    {/* Item Image or Placeholder Container */}
                    <div className={`relative w-full h-[200px] bg-[#F0EDE8] overflow-hidden flex-shrink-0`} data-name={item.name}>
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          width="200"
                          height="200"
                          className="w-full h-full object-cover rounded-t-2xl"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement?.classList.add('img-missing');
                            console.error(`Failed to load image: ${item.image}`);
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-4 text-center img-missing">
                          {/* Fallback space */}
                        </div>
                      )}

                      {/* Veg/Non-Veg Badge (Indian Style) */}
                      <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-dm font-bold text-white uppercase tracking-wider ${item.isVeg ? 'bg-[#2D6A3F]' : 'bg-[#C8293A]'
                        }`}>
                        {item.isVeg ? (
                          <span className="w-2.5 h-2.5 bg-white rounded-[1px] flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-[#2D6A3F] rounded-full" />
                          </span>
                        ) : (
                          <span className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-white" />
                        )}
                        <span>{item.isVeg ? 'VEG' : 'NON-VEG'}</span>
                      </div>
                    </div>

                    {/* Item Info */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-syne font-[700] text-[15px] text-[#1A1208] leading-tight mb-2 min-h-[40px]">
                        {item.name}
                      </h3>
                      <div className="mt-auto">
                        <p className="font-dm text-[#2D6A3F] font-bold text-sm tracking-tight">
                          {item.price}
                        </p>
                        {item.description && (
                          <p className="font-dm text-[#888] text-[12px] font-[400] mt-1 leading-tight">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};