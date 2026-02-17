import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const SLIDE_DURATION = 4000;

interface SlideData {
  image: string;
  headline: string;
  accentWord: string;
  sub: string;
  objectPosition?: string;
}

const slides: SlideData[] = [
  {
    image: '/hero1.jpeg',
    headline: 'Every Bite Tells a',
    accentWord: 'Story.',
    sub: 'Authentic pizza & fried chicken crafted fresh in Kanipakam.',
    objectPosition: 'center top'
  },
  {
    image: '/combo.jpeg',
    headline: 'The Perfect',
    accentWord: 'Combo.',
    sub: 'Pizza + Wings + Fries. Everything you crave, all in one place.',
    objectPosition: 'center center'
  },
  {
    image: '/slice.jpeg',
    headline: 'Freshly Made. Every',
    accentWord: 'Time.',
    sub: 'Hot, cheesy, and straight from the oven. Starting at ₹159.',
    objectPosition: 'center center'
  },
  {
    image: '/herodishes.jpeg',
    headline: 'Bold Flavors. Big',
    accentWord: 'Bites.',
    sub: 'From crispy wings to loaded pizzas — we do it all.',
    objectPosition: 'center center'
  },
  {
    image: '/herofriends.jpeg',
    headline: 'Made for Good Times.',
    accentWord: '',
    sub: 'Gather your crew. Great food brings great people together.',
    objectPosition: 'center center'
  },
  {
    image: '/herodrinks.jpeg',
    headline: 'Pair It Perfectly.',
    accentWord: '',
    sub: 'Refreshing drinks to go with every bite.',
    objectPosition: 'center center'
  },
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full h-[60svh] md:h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentIndex].image}
            alt={`New Bites Slide ${currentIndex + 1}`}
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
            style={{
              objectPosition: slides[currentIndex].objectPosition
            }}
            onError={(e) => {
              console.error(`Hero Image failed to load: ${slides[currentIndex].image}`);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement?.classList.add('img-missing');
            }}
            onLoad={() => {
              console.log(`Hero Image Loaded: ${slides[currentIndex].image}`);
            }}
          />
          {/* Dark Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.30) 100%)'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="font-syne font-[900] text-[36px] md:text-[72px] text-white leading-tight mb-4 drop-shadow-2xl">
              {slides[currentIndex].headline}<br />
              {slides[currentIndex].accentWord && (
                <span className="relative inline-block mt-2">
                  {slides[currentIndex].accentWord}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute -bottom-1 left-0 h-[6px] md:h-[10px] bg-[#C8293A] z-[-1]"
                  />
                </span>
              )}
            </h1>
            <p className="font-dm text-[14px] md:text-[18px] text-white/85 max-w-2xl mx-auto drop-shadow-lg mb-8">
              {slides[currentIndex].sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="absolute bottom-28 md:bottom-24 left-0 w-full flex justify-center items-center gap-[10px] z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group focus:outline-none transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${currentIndex === index
                  ? 'w-[10px] h-[10px] bg-white scale-[1.2]'
                  : 'w-[8px] h-[8px] border border-white opacity-40 group-hover:opacity-100'
                  }`}
              />
            </button>
          ))}
        </div>

        {/* Frosted Glass Badges at Bottom (Fixed) */}
        <div className="absolute bottom-10 left-0 w-full hidden min-[400px]:flex justify-center items-center gap-4 px-6 overflow-x-auto no-scrollbar z-20">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-dm text-sm md:text-base whitespace-nowrap shadow-xl">
            <span className="text-yellow-400"><Star size={16} fill="currentColor" /></span>
            <span>4.6 · 226 Google Reviews</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-dm text-sm md:text-base whitespace-nowrap shadow-xl">
            <span>🎂 Kids Birthday Friendly</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-dm text-sm md:text-base whitespace-nowrap shadow-xl">
            <span>🍽️ All You Can Eat</span>
          </div>
        </div>
      </div>
    </section>
  );
};