import React from 'react';
import { motion } from 'framer-motion';

export const Reviews: React.FC = () => {
    const reviews = [
        {
            stars: "★★★★★",
            text: "Best pizza in Kanipakam! The Spicy Paneer is absolutely delicious. Great value for money, started at just ₹159. Highly recommend!",
            name: "Ravi Kumar",
            tag: "Google Review"
        },
        {
            stars: "★★★★★",
            text: "Brought my kids here for birthday and they loved it! Chicken Lollipops and Thunder Wings were a huge hit. Amazing experience!",
            name: "Priya Sharma",
            tag: "Google Review"
        },
        {
            stars: "★★★★½",
            text: "Super affordable and super tasty. The All You Can Eat deal is unbeatable. Thunder Wings are crispy and perfectly spiced. Will definitely come back!",
            name: "Suresh Reddy",
            tag: "Google Review"
        }
    ];

    return (
        <section className="py-20 bg-bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="font-syne font-[800] text-4xl sm:text-5xl text-green-dark mb-4">What Our Customers Say</h2>
                    <p className="font-dm text-[#4A4642] text-lg">⭐ 4.6 out of 5 · Based on 226 Google Reviews</p>
                </motion.div>

                {/* Google Badge */}
                <div className="inline-flex flex-col items-center bg-white px-8 py-3 rounded-2xl shadow-sm mb-16 border border-[#E0DDD9]">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-sans font-bold text-2xl text-[#4285F4]">G</span>
                        <span className="font-dm font-bold text-lg text-[#1A1208]">4.6</span>
                        <span className="text-yellow-500 text-sm">★★★★★</span>
                        <span className="font-dm text-sm text-[#888]">226 reviews</span>
                    </div>
                    <p className="font-dm text-[11px] text-[#888] tracking-widest uppercase">Powered by Google</p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col h-full"
                        >
                            <div className="text-[#D4A017] text-xl mb-4">{review.stars}</div>
                            <p className="font-dm font-[400] text-[#4A4642] text-[15px] leading-relaxed mb-8 flex-grow">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-dark/5 rounded-full flex items-center justify-center text-green-dark font-dm font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-dm font-semibold text-green-dark">{review.name}</p>
                                    <p className="font-dm text-[#888] text-[12px]">{review.tag}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
