'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillsData = {
    'Content Creation': [
        'Content Strategy',
        'Video Editing (Reels)',
        'Social Media Content',
    ],
    'Design (Canva)': [
        'Portfolios',
        'Advertising Posters',
        'Basic Websites',
        'School Projects'
    ],
    'Creative Writing': [
        'Poetry',
        'Storytelling',
        'Copywriting'
    ],
    'Management & Marketing': [
        'Project Management',
        'Digital Marketing',
        'Social Media Management',
        'Marketing'
    ]
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="min-h-screen py-20 px-6 bg-black">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            CREATOR<br />
                            WRITER<br />
                            DESIGNER/
                        </h2>

                        {/* About Section */}
                        <div className="mt-12">
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                Content creator and published poet — crafting engaging visuals and words.
                            </p>

                            <div className="mb-6">
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">(ABOUT ME)</p>
                                <p className="text-gray-400 leading-relaxed">
                                    I&apos;ve been creating content for 2 years and writing poetry for over 3 years, with my poems published in 4 books. I specialize in Canva design, video editing for reels, and creative writing. Whether it&apos;s designing portfolios, posters, basic websites, or writing engaging copy, I bring creativity to everything I do.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="mb-8">
                            <h3 className="text-4xl md:text-5xl font-bold mb-8">Skills</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                                >
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                        {category}
                                    </h4>
                                    <ul className="space-y-2">
                                        {skills.map((skill, index) => (
                                            <li
                                                key={index}
                                                className="text-gray-300 text-sm hover:text-white transition-colors cursor-default"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-12 pt-8 border-t border-white/10"
                        >
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                Published Author
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Proud to have my poetry published in 4 different books and anthologies.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
