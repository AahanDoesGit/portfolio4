# Neev Sewlani - Portfolio

A modern, high-performance portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices.
- **Smooth Animations**: Powered by Framer Motion for a premium feel.
- **Dynamic Content**: Projects and skills are dynamically rendered from data files.
- **Contact Form**: Functional contact form with API route and validation.
- **Dark Mode**: Sleek dark theme matching the reference designs.
- **SEO Optimized**: Built-in SEO tags and Open Graph support.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel Ready

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open http://localhost:3000** with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router structure
  - `page.tsx`: Main landing page assembling all sections
  - `layout.tsx`: Root layout with SEO metadata
  - `globals.css`: Global styles and strict Tailwind imports
  - `api/contact/`: API route for form submissions
- `components/`: React components
  - `sections/`: Individual page sections (Hero, Services, Projects, Skills, Contact)
  - `Navigation.tsx`: Responsive navigation bar
- `data/`: Data files
  - `projects.ts`: Project data and configuration
- `public/`: Static assets

## Customization

- **Projects**: Edit `data/projects.ts` to add or update projects.
- **Skills**: Update `components/sections/Skills.tsx` to modify skills lists.
- **Contact**: Configure the email service in `app/api/contact/route.ts`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
