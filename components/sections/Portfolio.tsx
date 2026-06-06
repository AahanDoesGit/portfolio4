'use client';

import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioItems, type PortfolioItem } from '@/data/portfolio';

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    return (
        <section id="portfolio" className="min-h-screen py-20 px-6 bg-zinc-950">
            <div className="max-w-7xl mx-auto" ref={ref}>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">PORTFOLIO /</h2>
                    <p className="text-gray-400 text-lg">Selected work and creative pieces</p>
                </motion.div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            {/* Item Number */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="text-6xl font-bold text-white/50 group-hover:text-white/80 transition-colors">
                                    {String(item.id).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Item Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-300 text-sm mb-6 line-clamp-2">{item.description}</p>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedItem(item);
                                    }}
                                    className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                                >
                                    View Details
                                </button>
                            </div>

                            {/* Bottom Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none">
                                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                <p className="text-xs text-gray-400">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Item Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-zinc-900 rounded-lg max-w-3xl w-full p-8 relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Content */}
                            <div className="mb-6">
                                <div className="text-6xl font-bold text-white/10 mb-4">
                                    {String(selectedItem.id).padStart(2, '0')}
                                </div>
                                <h2 className="text-4xl font-bold mb-2">{selectedItem.title}</h2>
                                <p className="text-gray-400">{selectedItem.category}</p>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {selectedItem.longDescription}
                            </p>

                            {/* Tools & Mediums */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Tools & Mediums</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedItem.tools.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white/10 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
