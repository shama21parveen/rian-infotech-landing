import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import StoryBridge from "./components/sections/StoryBridge";
import Problem from "./components/sections/Problem";
import Services from "./components/sections/Services";
import Showcase from "./components/sections/Showcase";
import HowItWorks from "./components/sections/HowItWorks";
import WhyRian from "./components/sections/WhyRian";
import CTA from "./components/sections/CTA";
import CardCursor from "./components/ui/CardCursor";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-lg bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <StoryBridge />
        <Problem />
        <Services />
        <Showcase />
        <HowItWorks />
        <WhyRian />
        <CTA />
      </main>
      <Footer />
      <CardCursor />
    </>
  );
}
