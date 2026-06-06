'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
    text: string;
    className?: string;
}

export const Marquee = ({ text, className = "" }: MarqueeProps) => {
    return (
        <div className={`overflow-hidden flex whitespace-nowrap select-none opacity-5 pointer-events-none ${className}`}>
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
                className="flex min-w-full"
            >
                <span className="text-[20vw] font-bold mr-10">{text}</span>
                <span className="text-[20vw] font-bold mr-10">{text}</span>
                <span className="text-[20vw] font-bold mr-10">{text}</span>
                <span className="text-[20vw] font-bold mr-10">{text}</span>
            </motion.div>
        </div>
    );
};
