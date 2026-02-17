import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Side - 2 Stacked Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col gap-[12px]"
                    >
                        <img
                            src="/outside_x.jpeg"
                            alt="New Bites Restaurant Kanipakam"
                            loading="lazy"
                            width="800"
                            height="240"
                            style={{
                                width: '100%',
                                height: '240px',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                borderRadius: '16px',
                                display: 'block'
                            }}
                        />
                        <img
                            src="/inside_x.jpeg"
                            alt="New Bites Interior"
                            loading="lazy"
                            width="800"
                            height="220"
                            className="hide-on-mobile"
                            style={{
                                width: '100%',
                                height: '220px',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                borderRadius: '16px',
                                display: 'block'
                            }}
                        />
                    </motion.div>

                    {/* Right Side - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col items-start gap-6"
                    >
                        <div>
                            <span className="font-dm font-semibold text-green-mid text-[12px] tracking-[0.1em] uppercase block mb-3">OUR STORY</span>
                            <h2 className="font-syne font-[800] text-3xl sm:text-[36px] text-green-dark leading-tight">A Taste of Home in Kanipakam</h2>
                        </div>

                        <p className="font-dm font-[400] text-[#4A4642] text-[16px] leading-[1.8]">
                            What started as a passion for great food has grown into Kanipakam's most loved pizza and fried chicken restaurant. Every dish at New Bites is made fresh, with the finest ingredients and a whole lot of love.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <div className="bg-white border border-green-mid px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <span className="text-[13px] font-dm font-semibold text-green-dark">🍕 40+ Menu Items</span>
                            </div>
                            <div className="bg-white border border-green-mid px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <span className="text-[13px] font-dm font-semibold text-green-dark">⭐ 4.6 Google Rating</span>
                            </div>
                            <div className="bg-white border border-green-mid px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <span className="text-[13px] font-dm font-semibold text-green-dark">🎂 Birthday Friendly</span>
                            </div>
                        </div>

                        <a href="#menu" className="inline-flex items-center gap-2 bg-green-dark text-white font-dm font-bold px-8 py-3 rounded-full hover:bg-green-mid transition-colors shadow-lg mt-4">
                            Visit Us →
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
