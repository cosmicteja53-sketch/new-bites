import React, { useState } from 'react';
import { menuCategories } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FullMenu: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('pizza-veg');

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section id="menu" className="py-20 bg-green-dark relative">
      {/* Wave divider at top handled by parent or previous section, strictly using bg color here */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-syne font-black text-5xl sm:text-6xl text-white mb-2">OUR FULL MENU</h2>
          <p className="font-dm text-stone-300 text-sm tracking-wider uppercase">📦 Parcel charges ₹10 extra</p>
        </div>

        <div className="space-y-4">
          {menuCategories.map((category) => (
            <div key={category.id} className="border-b border-white/10 last:border-0 pb-4">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between text-left py-4 group"
              >
                <div className="flex items-center gap-4">
                  {/* Collapsed Circle Image */}
                  {category.id === 'pizza-veg' && (
                    <img src="/pizzaveg1.jpeg" alt="Pizza Veg" loading="lazy" width="44" height="44" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)' }} />
                  )}
                  {category.id === 'pizza-nonveg' && (
                    <img src="/pizzanon2.jpeg" alt="Pizza Non-Veg" loading="lazy" width="44" height="44" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)' }} />
                  )}
                  {category.id === 'fried-chicken' && (
                    <img src="/friedc.jpeg" alt="Fried Chicken" loading="lazy" width="44" height="44" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)' }} />
                  )}
                  {category.id === 'thunder-wings' && (
                    <img src="/tw.jpeg" alt="Thunder Wings" loading="lazy" width="44" height="44" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)' }} />
                  )}
                  {category.id === 'mini-veg' && (
                    <img src="/minibitesv.jpeg" alt="Mini Bites Veg" loading="lazy" width="44" height="44" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)' }} />
                  )}
                  {category.id === 'mini-nonveg' && (
                    <img src="/minibitesnv.jpeg" alt="Mini Bites Non-Veg" loading="lazy" width="44" height="44" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)' }} />
                  )}
                  {category.id === 'extra-toppings' && (
                    <img src="/extra.jpeg" alt="Extra Toppings" loading="lazy" width="44" height="44" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)' }} />
                  )}
                  {category.id === 'drinks' && (
                    <img src="/d1.jpeg" alt="Drinks" loading="lazy" width="44" height="44" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '50%', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)' }} />
                  )}

                  <h3 className={`font-syne font-bold text-2xl sm:text-3xl transition-colors ${openCategory === category.id ? 'text-yellow-400' : 'text-white group-hover:text-green-200'}`}>
                    {category.label}
                  </h3>
                </div>
                <div className={`p-2 rounded-full border transition-all ${openCategory === category.id ? 'bg-yellow-400 text-green-dark border-yellow-400' : 'border-white/20 text-white'}`}>
                  {openCategory === category.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="py-6 flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 space-y-4">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="border-b border-dashed border-white/10 pb-2">
                            <div className="flex items-baseline justify-between">
                              <span className="font-dm font-medium text-white/90 text-lg">{item.name}</span>
                              <span className="font-syne font-bold text-yellow-400/90 whitespace-nowrap ml-4">{item.price}</span>
                            </div>
                            {item.description && (
                              <p className="font-dm text-white/50 text-xs mt-0.5">{item.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="md:w-32 md:shrink-0">
                        <div className="w-full aspect-square bg-white/5 rounded-2xl p-2 rotate-2 flex items-center justify-center">
                          {/* Expanded Square Image */}
                          {category.id === 'pizza-veg' && (
                            <img src="/pizzaveg1.jpeg" alt="Pizza Veg" loading="lazy" width="120" height="120" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
                          )}
                          {category.id === 'pizza-nonveg' && (
                            <img src="/pizzanon2.jpeg" alt="Pizza Non-Veg" loading="lazy" width="120" height="120" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
                          )}
                          {category.id === 'fried-chicken' && (
                            <img src="/friedc.jpeg" alt="Fried Chicken" loading="lazy" width="120" height="120" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
                          )}
                          {category.id === 'thunder-wings' && (
                            <img src="/tw.jpeg" alt="Thunder Wings" loading="lazy" width="120" height="120" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
                          )}
                          {category.id === 'mini-veg' && (
                            <img src="/minibitesv.jpeg" alt="Mini Bites Veg" loading="lazy" width="120" height="120" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
                          )}
                          {category.id === 'mini-nonveg' && (
                            <img src="/minibitesnv.jpeg" alt="Mini Bites Non-Veg" loading="lazy" width="120" height="120" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
                          )}
                          {category.id === 'extra-toppings' && (
                            <img src="/extra.jpeg" alt="Extra Toppings" loading="lazy" width="120" height="120" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
                          )}
                          {category.id === 'drinks' && (
                            <img src="/d1.jpeg" alt="Drinks" loading="lazy" width="120" height="120" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }} />
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};