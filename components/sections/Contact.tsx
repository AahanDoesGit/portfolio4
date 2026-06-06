'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TextReveal } from '@/components/ui/TextReveal';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const links = [
        {
            name: 'Email',
            value: 'hello@alfianizam.com',
            href: 'mailto:hello@alfianizam.com',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'WhatsApp',
            value: '+91 89822 15035',
            href: 'https://wa.me/918982215035',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            value: 'Alfia Nizam',
            href: 'https://www.linkedin.com/',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 bg-zinc-950">
            <div className="max-w-4xl w-full" ref={ref}>
                {/* Section Title */}
                <div className="mb-16 text-center">
                    <TextReveal className="text-5xl md:text-7xl font-bold mb-8 justify-center flex">
                        CONTACT /
                    </TextReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        Get in touch for opportunities or just to say hi.
                    </motion.p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="group flex flex-col items-center justify-center p-8 bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 mb-6">
                                {link.icon}
                            </div>
                            <h3 className="text-lg font-bold">{link.name}</h3>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
