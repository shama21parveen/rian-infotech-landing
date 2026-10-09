import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { differentiators } from "../../data/differentiators";
import SectionBackdrop from "../ui/SectionBackdrop";

function CardVisual({ type, featured = false }) {
  if (type === "AI-native approach") {
    return (
      <div className="why-visual why-visual-ai" aria-hidden="true">
        <span className="why-terminal-dot" />
        <span className="why-terminal-line">train model</span>
        <span className="why-typing">generate workflow</span>
      </div>
    );
  }

  if (type === "Automation that sticks") {
    return (
      <div className="why-visual why-visual-nodes" aria-hidden="true">
        <span className="why-node why-node-a" />
        <span className="why-node why-node-b" />
        <span className="why-node why-node-c" />
        <span className="why-node-line why-node-line-a" />
        <span className="why-node-line why-node-line-b" />
      </div>
    );
  }

  if (type === "Scalable architecture") {
    return (
      <div className="why-visual why-visual-layers" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (type === "End-to-end delivery") {
    return (
      <div className="why-visual why-visual-timeline" aria-hidden="true">
        <span />
        <span />
        <span />
        <i />
      </div>
    );
  }

  return (
    <div className={`why-visual why-visual-core ${featured ? "why-visual-core-light" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function WhyCard({ item, index }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const Icon = item.icon;

  const handleMove = (event) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${event.clientY - rect.top}px`);
    ref.current.style.setProperty("--glow", "1");
  };

  return (
    <motion.article
      ref={ref}
      data-card-cursor={item.featured ? "Core" : "Trust"}
      onPointerMove={handleMove}
      onPointerEnter={() => ref.current?.style.setProperty("--glow", "1")}
      onPointerLeave={() => ref.current?.style.setProperty("--glow", "0")}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      viewport={{ once: true, margin: "-90px" }}
      className={`why-bento-card section-frame group h-full overflow-hidden rounded-2xl p-7 ${
        item.span
      } ${item.featured ? "why-bento-featured" : "bg-white/90 ring-1 ring-ink/5"}`}
    >
      <span aria-hidden="true" className="why-card-border" />
      <span aria-hidden="true" className="why-card-glow" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <div
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
              item.featured
                ? "bg-white/15 text-white"
                : "bg-brand-50 text-brand-600 transition duration-300 group-hover:bg-brand-600 group-hover:text-white"
            }`}
          >
            <Icon size={22} aria-hidden="true" />
          </div>

          <CardVisual type={item.title} featured={item.featured} />
        </div>

        <div className="mt-7">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className={`mt-2 ${item.featured ? "max-w-md text-white/80" : "text-muted"}`}>
            {item.text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function WhyRian() {
  return (
    <section id="why" className="section-pull section-creative scroll-mt-16 overflow-hidden bg-surface py-24">
      <SectionBackdrop variant="why" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="05 · The partner"
          title="A product partner, not just a vendor"
          description="Strategy, AI and engineering stay connected, so the product story does not get lost between teams."
        />

        <Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-6">
            {differentiators.map((item, index) => (
              <WhyCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
