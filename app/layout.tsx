import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Neev Sewlani | Digital Marketing & Lead Generation",
    description: "Founder of Vantik Media — focused on building brands that stand out in the digital world through digital marketing, performance marketing, and lead generation.",
    keywords: ["Neev Sewlani", "Vantik Media", "Digital Marketing", "Performance Marketing", "SEO", "Lead Generation", "Social Media Management"],
    authors: [{ name: "Neev Sewlani" }],
    openGraph: {
        title: "Neev Sewlani | Digital Marketing & Lead Generation",
        description: "Founder of Vantik Media — focused on building brands that stand out in the digital world.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Neev Sewlani | Digital Marketing & Lead Generation",
        description: "Founder of Vantik Media — focused on building brands that stand out in the digital world.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className={inter.className}>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
