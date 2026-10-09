import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TorchLayers from "../ui/TorchLayers";
import useSpotlight from "../../hooks/useSpotlight";
import { cases } from "../../data/showcase";

export default function Showcase() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const spotlightRef = useSpotlight(0.14);
  const current = cases[active];

  return (
    <section
      id="work"
      ref={spotlightRef}
      className="fx-spot section-pull section-pull-dark relative scroll-mt-24 overflow-hidden bg-ink py-24 text-white"
    >
      <TorchLayers />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <SectionHeading
          light
          eyebrow="03 · The proof"
          title="See how an idea becomes a working system"
          description="Pick a use case and follow the flow, from the first trigger to a measurable result."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <div role="tablist" aria-label="Case studies" className="flex flex-col gap-3">
              {cases.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={isActive}
                    aria-controls="showcase-panel"
                    onClick={() => setActive(index)}
                    className={`section-frame w-full rounded-2xl p-5 text-left ring-1 transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                      isActive ? "bg-white/10 ring-brand-500" : "ring-white/10 hover:bg-white/5"
                    }`}
                  >
                    <span className="block text-sm font-semibold text-brand-100">{item.label}</span>
                    <span className="mt-1 block text-lg font-bold">{item.title}</span>
                    {isActive && <span className="mt-2 block text-white/70">{item.text}</span>}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              id="showcase-panel"
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              className="section-frame rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ol className="relative space-y-3">
                    <span
                      aria-hidden="true"
                      className="absolute bottom-8 left-9 top-8 w-px bg-white/15"
                    />
                    {current.nodes.map((node, i) => (
                      <motion.li
                        key={node.label}
                        initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
                        className="relative flex items-center gap-4 rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
                      >
                        <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600">
                          <node.icon size={22} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-semibold">{node.label}</span>
                          <span className="block text-sm text-white/60">{node.sub}</span>
                        </span>
                      </motion.li>
                    ))}
                  </ol>

                  <dl className="mt-5 grid grid-cols-3 gap-3">
                    {current.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex flex-col-reverse rounded-xl bg-white/5 p-3 text-center ring-1 ring-white/10"
                      >
                        <dt className="text-xs text-white/60">{metric.label}</dt>
                        <dd className="text-2xl font-extrabold text-accent">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Illustrative examples created for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
