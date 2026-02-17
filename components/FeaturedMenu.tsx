import React from 'react';
import { featuredItems } from '../data';
import { ImagePlaceholder } from './ui/ImagePlaceholder';
import { motion } from 'framer-motion';

export const FeaturedMenu: React.FC = () => {
  return (
    <section className="py-20 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-green-dark">Our Top Picks</h2>
            <p className="font-dm text-text-mid mt-2 text-lg">Most loved by our customers</p>
          </div>
          <div className="hidden sm:block">
            <a href="#menu" className="font-dm font-bold text-green-mid hover:text-green-dark underline decoration-2">View Full Menu</a>
          </div>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 snap-x">
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="min-w-[280px] sm:min-w-0 bg-white rounded-2xl shadow-soft border border-stone-100 snap-center flex flex-col"
            >
              <div className="h-48 w-full p-2 bg-stone-50 rounded-t-2xl relative overflow-hidden" data-name={item.name}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement?.classList.add('img-missing');
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center img-missing">
                    {/* Placeholder space */}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${item.type === 'veg'
                    ? 'border-green-600 text-green-700 bg-green-50'
                    : 'border-red-600 text-red-700 bg-red-50'
                    }`}>
                    {item.type === 'veg' ? '🌿 VEG' : '🍗 NON-VEG'}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-xl text-text-dark mb-2">{item.name}</h3>

                <div className="mt-auto pt-4 border-t border-dashed border-stone-200 flex items-center justify-between">
                  <span className="font-dm font-bold text-green-mid text-lg">{item.price}</span>
                  <a href="#contact" className="text-sm font-dm font-bold border border-green-mid text-green-mid px-4 py-1.5 rounded-full hover:bg-green-mid hover:text-white transition-colors">
                    Visit Us
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};