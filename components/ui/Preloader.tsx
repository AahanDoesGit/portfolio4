'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const words = ["Marketer", "Strategist", "Creator", "Neev Sewlani"];

    useEffect(() => {
        if (index == words.length - 1) return;

        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, 200);

        return () => clearTimeout(timeout);
    }, [index, words.length]);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.2 }}
            className="fixed inset-0 z-[9999] bg-white text-black flex items-center justify-center overflow-hidden"
        >
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl md:text-6xl font-bold"
            >
                {words[index]}
            </motion.p>
        </motion.div>
    );
}
