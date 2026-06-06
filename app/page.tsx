'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
            <Navigation />

            <div className="flex flex-col">
                <Hero />
                <Services />
                <Portfolio />
                <Skills />
                <Contact />
            </div>
        </main>
    );
}
