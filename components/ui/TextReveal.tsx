'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export const TextReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 0.8
}: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className={`${className} overflow-hidden relative`}>
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                    duration,
                    ease: [0.25, 1, 0.5, 1], // Cubic bezier for "premium" feel
                    delay,
                }}
                className="inline-block"
            >
                {children}
            </motion.div>
        </div>
    );
};
