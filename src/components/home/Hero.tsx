import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
    {
        image: '/images/hero.brand.poster.jpeg',
        eyebrow: 'Premium Taste Experience',
        heading: {
            yellow: 'NEW',
            red: 'BITES'
        },
        subheading: 'Every Bite Tells a Story',
        description: 'Authentic pizzas, crispy fried chicken and handcrafted drinks made fresh daily in Kanipakam.',
        primaryBtn: { text: 'Explore Menu', link: '/menu' },
        secondaryBtn: { text: 'Visit Us', link: '/contact' }
    },
    {
        image: '/images/herodishes.jpeg',
        eyebrow: 'Signature Flavors',
        heading: 'FEEL THE CRUNCH',
        subheading: 'Loaded. Crispy. Irresistible.',
        description: 'From oven-baked pizzas to golden fried chicken — bold flavors crafted to perfection.',
        primaryBtn: { text: 'Order Now', link: '/menu' },
        secondaryBtn: { text: 'View Combos', link: '/menu' }
    },
    {
        image: '/images/herodrinks.jpeg',
        eyebrow: 'Chill & Refresh',
        heading: 'SIP THE MOMENT',
        subheading: 'Mocktails. Milkshakes. More.',
        description: 'Creamy milkshakes, fizzy mocktails and refreshing coolers to complete every meal.',
        primaryBtn: { text: 'Explore Drinks', link: '/menu' },
        secondaryBtn: { text: 'View Menu', link: '/menu' }
    },
    {
        image: '/images/herofriends.jpeg',
        eyebrow: 'Made for Togetherness',
        heading: 'SHARE THE JOY',
        subheading: 'Friends. Family. Flavor.',
        description: 'Gather around, laugh louder, and enjoy unforgettable moments with food everyone loves.',
        primaryBtn: { text: 'Book a Table', link: '/contact' },
        secondaryBtn: { text: 'Explore Menu', link: '/menu' }
    }
];

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [isPaused]);

    return (
        <section
            className="relative h-[100vh] min-h-[85vh] w-full overflow-hidden bg-[#0D0B0A]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Slides */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={HERO_SLIDES[currentIndex].image}
                        alt="Hero background"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Hero Gradient Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.8) 100%)'
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-[70px] md:pt-[90px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-3xl w-full"
                    >
                        {/* Eyebrow */}
                        <p className="font-poppins text-[#FFB800] text-[14px] tracking-[3px] uppercase mb-3 font-semibold">
                            {HERO_SLIDES[currentIndex].eyebrow}
                        </p>

                        {/* Main Heading */}
                        <h1 className="font-display font-black text-[#f5f5f5] leading-[1] mb-4 tracking-[-1px] text-[clamp(42px,6vw,96px)] uppercase">
                            {typeof HERO_SLIDES[currentIndex].heading === 'string' ? (
                                HERO_SLIDES[currentIndex].heading
                            ) : (
                                <>
                                    <span className="text-[#FFB800]">{HERO_SLIDES[currentIndex].heading.yellow}</span>{' '}
                                    <span className="text-[#C8293A]">{HERO_SLIDES[currentIndex].heading.red}</span>
                                </>
                            )}
                        </h1>

                        {/* Subheading */}
                        <h2 className="font-display text-[#E8DFD0] text-[clamp(18px,2vw,28px)] font-bold mb-4">
                            {HERO_SLIDES[currentIndex].subheading}
                        </h2>

                        {/* Description */}
                        <p className="font-poppins text-[#9A8775] text-base md:text-lg max-w-[480px] mb-8 leading-relaxed mx-auto md:mx-0">
                            {HERO_SLIDES[currentIndex].description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                            <Link
                                to={HERO_SLIDES[currentIndex].primaryBtn.link}
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C8293A] text-white font-poppins font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(200,41,58,0.4)] text-center text-[15px]"
                            >
                                {HERO_SLIDES[currentIndex].primaryBtn.text}
                            </Link>
                            <Link
                                to={HERO_SLIDES[currentIndex].secondaryBtn.link}
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#FFB800] text-[#FFB800] font-poppins font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB800]/10 text-center text-[15px]"
                            >
                                {HERO_SLIDES[currentIndex].secondaryBtn.text}
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Hero;
