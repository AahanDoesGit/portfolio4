'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/ui/TextReveal';
import { useRef } from 'react';
import { Marquee } from '@/components/ui/Marquee';

export default function Hero() {
    const containerRef = useRef(null);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={containerRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
            {/* Background Marquee */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Marquee text="ALFIA NIZAM" className="w-full" />
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="flex flex-col items-center">
                    {/* Name - Staggered Reveal */}
                    <div className="mb-6 flex flex-col items-center">
                        <TextReveal className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                            Alfia Nizam
                        </TextReveal>
                    </div>

                    {/* Title - Staggered Reveal */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-8"
                    >
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light">
                            Content Creator & Creative Writer
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Bringing ideas to life through content and words.
                        </p>
                    </motion.div>

                    {/* CTA & Status */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button
                            onClick={scrollToContact}
                            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Get In Touch
                        </button>

                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm text-gray-400">Available for opportunities</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-16"
                    >
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Published Author</p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
