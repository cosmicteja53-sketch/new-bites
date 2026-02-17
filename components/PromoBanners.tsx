import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const PromoBanners: React.FC = () => {
  useEffect(() => {
    console.log('Promo images loading from:',
      '/allyoucaneat.jpeg',
      '/thunderwings.jpeg',
      '/pizzabites.jpeg',
      '/minibites.jpeg'
    );
  }, []);

  return (
    <section className="py-12 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 - All You Can Eat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-green-mid rounded-3xl p-6 sm:p-8 flex items-center justify-between relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col items-start gap-4 max-w-[55%]">
              <div>
                <h3 className="font-syne font-black text-2xl sm:text-4xl text-white leading-[0.9] mb-2">All You Can Eat</h3>
                <p className="font-dm font-bold text-white/90 text-lg sm:text-xl">From ₹99</p>
              </div>
              <a href="#contact" className="bg-white text-green-mid font-dm font-bold px-6 py-2 rounded-full text-sm shadow-lg hover:shadow-xl transition-shadow">
                Visit Us →
              </a>
            </div>

            <div style={{
              width: '42%',
              flexShrink: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              height: '140px'
            }} className="rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <img
                src="/allyoucaneat.jpeg"
                alt="All You Can Eat"
                loading="lazy"
                width="600"
                height="400"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '12px'
                }}
              />
            </div>
          </motion.div>

          {/* Card 2 - Thunder Wings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-red-accent rounded-3xl p-6 sm:p-8 flex items-center justify-between relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col items-start gap-4 max-w-[55%]">
              <div>
                <h3 className="font-syne font-black text-2xl sm:text-4xl text-white leading-[0.9] mb-2">Thunder Wings</h3>
                <p className="font-dm font-bold text-white/90 text-lg sm:text-xl">4pc @ ₹99</p>
              </div>
              <a href="#contact" className="bg-white text-red-accent font-dm font-bold px-6 py-2 rounded-full text-sm shadow-lg hover:shadow-xl transition-shadow">
                Visit Us →
              </a>
            </div>

            <div style={{
              width: '42%',
              flexShrink: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              height: '140px'
            }} className="rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <img
                src="/thunderwings.jpeg"
                alt="Thunder Wings"
                loading="lazy"
                width="600"
                height="400"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '12px'
                }}
              />
            </div>
          </motion.div>

          {/* Card 3 - Pizza Bites */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-yellow-400 rounded-3xl p-6 sm:p-8 flex items-center justify-between relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col items-start gap-4 max-w-[55%]">
              <div>
                <h3 className="font-syne font-black text-2xl sm:text-4xl text-white leading-[0.9] mb-2">Pizza Bites</h3>
                <p className="font-dm font-bold text-white/90 text-lg sm:text-xl">From ₹159</p>
              </div>
              <a href="#contact" className="bg-white text-yellow-600 font-dm font-bold px-6 py-2 rounded-full text-sm shadow-lg hover:shadow-xl transition-shadow">
                Visit Us →
              </a>
            </div>

            <div style={{
              width: '42%',
              flexShrink: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              height: '140px'
            }} className="rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <img
                src="/pizzabites.jpeg"
                alt="Pizza Bites"
                loading="lazy"
                width="600"
                height="400"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '12px'
                }}
              />
            </div>
          </motion.div>

          {/* Card 4 - Mini Bites */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-green-dark rounded-3xl p-6 sm:p-8 flex items-center justify-between relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col items-start gap-4 max-w-[55%]">
              <div>
                <h3 className="font-syne font-black text-2xl sm:text-4xl text-white leading-[0.9] mb-2">Mini Bites</h3>
                <p className="font-dm font-bold text-white/90 text-lg sm:text-xl">From ₹59</p>
              </div>
              <a href="#contact" className="bg-white text-green-dark font-dm font-bold px-6 py-2 rounded-full text-sm shadow-lg hover:shadow-xl transition-shadow">
                Visit Us →
              </a>
            </div>

            <div style={{
              width: '42%',
              flexShrink: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              height: '140px'
            }} className="rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <img
                src="/minibites.jpeg"
                alt="Mini Bites"
                loading="lazy"
                width="600"
                height="400"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '12px'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};