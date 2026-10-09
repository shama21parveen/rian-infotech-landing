import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "../ui/Button";
import HeroMockup from "./HeroMockup";
import useSpotlight from "../../hooks/useSpotlight";
import GridSpotlight from "../ui/GridSpotlight";



const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};


const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headline = [
  { text: "Turn" },
  { text: "your" },
  { text: "ideas" },
  { text: "into" },
  { text: "AI-powered", accent: true },
  { text: "products", accent: true },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const spotlightRef = useSpotlight();

  return (
    
    <section id="top" ref={spotlightRef} className="fx-spot relative overflow-hidden">
  <GridSpotlight />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-brand-100 opacity-70 blur-3xl"
      />

      <motion.div
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        className="relative mx-auto max-w-6xl px-5 pb-20 pt-28 text-center md:pt-24"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100"
        >
          <Sparkles size={14} />
          From idea to intelligent product
        </motion.span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {headline.map((word) => (
            <motion.span
              key={word.text}
              variants={item}
              className={`mr-[0.25em] inline-block last:mr-0 ${
                word.accent
                  ? "bg-linear-to-r from-brand-600 to-accent bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-muted">
          We turn messy operations, scattered tools and early product ideas into
          AI-powered software your team can understand, use and scale.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="#contact" withArrow>
            Start your project
          </Button>
          <Button href="#work" variant="secondary">
            See our work
          </Button>
        </motion.div>

        <motion.div variants={item}>
          <HeroMockup />
        </motion.div>
      </motion.div>
      <div aria-hidden="true" className="fx-hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-32" />
    </section>
  );
}
