import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ScrollCard from "../ui/ScrollCard";
import SectionBackdrop from "../ui/SectionBackdrop";
import { steps } from "../../data/steps";

export default function HowItWorks() {
  const listRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section id="process" className="section-creative scroll-mt-24 overflow-hidden py-24">
      <SectionBackdrop variant="process" />
      <div className="relative z-10 mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="04 · The path"
          title="A simple process, built for momentum"
          description="A short, visible journey from discovery to launch, with decisions and deliverables clear at every step."
        />

        <ol ref={listRef} className="relative mt-14 space-y-14">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-5 top-2 w-0.5 -translate-x-1/2 bg-brand-100"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
            className="absolute bottom-2 left-5 top-2 w-0.5 origin-top -translate-x-1/2 bg-brand-600"
          />

          {steps.map((step, index) => (
            <li key={step.title} className="relative pl-16">
              <span className="absolute left-0 top-0 z-10 grid h-10 w-10 place-items-center rounded-full bg-white font-bold text-brand-600 ring-2 ring-brand-600">
                {index + 1}
              </span>

              <ScrollCard className="section-frame rounded-2xl bg-surface/90 p-6 ring-1 ring-ink/5">
                <div className="flex items-center gap-3">
                  <step.icon size={22} className="text-brand-600" aria-hidden="true" />
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="mt-3 text-muted">{step.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {step.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
