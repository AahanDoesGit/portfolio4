export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    tools: string[];
    image: string;
    category: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: "Poetry Anthology",
        description: "Published collection of creative poetry.",
        longDescription: "One of my published books featuring a collection of expressive and creative poems.",
        tools: ["Creative Writing", "Poetry", "Storytelling"],
        image: "/projects/certificate.png",
        category: "Writing"
    },
    {
        id: 2,
        title: "Canva Design Portfolio",
        description: "A collection of professional designs and posters.",
        longDescription: "Various designs created using Canva, including advertising posters, basic websites, and school projects.",
        tools: ["Canva", "Design", "Visuals"],
        image: "/projects/canva-design.png",
        category: "Design"
    }
];
