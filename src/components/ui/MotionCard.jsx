import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MotionCard({
  as = "article",
  index = 0,
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  // Cards alternate: pehla left se, doosra right se, teesra left se...
  const direction = index % 2 === 0 ? -1 : 1;

  const handleMove = (e) => {
    if (reduceMotion || e.pointerType === "touch") return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onPointerEnter={() => !reduceMotion && ref.current.style.setProperty("--glow", "1")}
      onPointerMove={handleMove}
      onPointerLeave={() => ref.current?.style.setProperty("--glow", "0")}
      initial={reduceMotion ? false : { opacity: 0, x: direction * 90, y: 40, rotate: direction * 4 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: { type: "spring", stiffness: 70, damping: 16, delay: (index % 4) * 0.14 },
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }
      }
      viewport={{ once: true, margin: "-100px" }}
      style={
        reduceMotion
          ? undefined
          : {
              animationDuration: `${4 + (index % 3) * 0.8}s`,
              animationDelay: `${1 + index * 0.3}s`,
            }
      }
      className={`fx-bob relative ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="fx-card-glow pointer-events-none absolute inset-0 rounded-[inherit]"
      />
      {children}
    </Tag>
  );
}