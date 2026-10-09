# Rian Infotech Landing Page

A modern SaaS-style landing page for Rian Infotech, built for the Frontend Development Intern assessment. The page presents Rian Infotech as an AI and software product studio through a clear story: idea, friction, system, proof, process, partner and CTA.

## Live Demo

https://rian-infotech-landing-two.vercel.app/

## Features

- Responsive landing page for desktop, tablet and mobile.
- Story-led page flow with chapter labels and a visual bridge section.
- Interactive hero with grid spotlight and product mockup.
- Challenge marquee cards with pause-on-hover behavior.
- Services cards with hover states and micro-interactions.
- Dark product/work showcase with spotlight interaction.
- Scroll-based process cards.
- Bento-style "Why Rian" section with small animated visuals.
- Final CTA section with gradient background and framed shadow.
- Accessible buttons, links, headings and tab-style interactions.

## Tech Stack

- React.js
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Icons
- Oxlint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    layout/      Navbar and footer
    sections/    Page sections such as Hero, Services, Showcase and CTA
    ui/          Reusable UI and animation helpers
  data/          Section content
  hooks/         Shared interaction hooks
```

## Design Decisions

The design uses Rian Infotech's AI and software studio positioning as the core narrative. The page starts with a strong product promise, then moves through business friction, service capabilities, a product-style proof section, process, differentiators and a final conversion CTA.

The visual direction is inspired by modern SaaS/product websites without copying any reference layout or assets. Motion is used to support storytelling: reveal animations, scroll-based process cards, hover glows, animated cards and subtle background transitions. The color system stays within the project palette: ink, paper, surface, teal brand tones, accent coral and soft lavender-style blends.

## Deployment

This project can be deployed on Vercel as a Vite React app.

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

## Submission Notes

For submission, include:

- GitHub repository link
- Live deployed website URL
- This README with setup instructions
- A short explanation of the design and animation approach
