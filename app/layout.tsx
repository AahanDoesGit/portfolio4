import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Alfia Nizam | Content Creator & Creative Writer",
    description: "Content creator and published poet — crafting engaging visuals and words through Canva design, video editing, and creative writing.",
    keywords: ["Alfia Nizam", "Content Creator", "Creative Writer", "Canva Designer", "Poetry", "Video Editing", "Reels"],
    authors: [{ name: "Alfia Nizam" }],
    openGraph: {
        title: "Alfia Nizam | Content Creator & Creative Writer",
        description: "Content creator and published poet — crafting engaging visuals and words.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alfia Nizam | Content Creator & Creative Writer",
        description: "Content creator and published poet — crafting engaging visuals and words.",
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
