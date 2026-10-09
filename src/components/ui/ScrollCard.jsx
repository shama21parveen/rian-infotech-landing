import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export default function ScrollCard({ className = "", children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // Is card ke liye scroll progress:
  // 0 = card screen ke neeche se aa raha hai, 1 = card upar se nikal raha hai
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Beech mein (0.35 se 0.65) card seedha rehta hai, kinaron pe jhukta hai
  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [14, 0, 0, -14]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [48, 0, 0, -48]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.95, 1, 1, 0.95]);

  // Scroll ki speed (neeche = positive, upar = negative) se halka lean
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skewY = useSpring(useTransform(velocity, [-2500, 0, 2500], [4, 0, -4]), {
    stiffness: 120,
    damping: 20,
  });

  // Card ke neeche ki shadow: card jab seedha ho tab gehri aur badi
  const lift = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
  const shadowOpacity = useTransform(lift, [0, 1], [0.05, 0.55]);
  const shadowScaleX = useTransform(lift, [0, 1], [0.7, 1]);

  if (reduceMotion) {
    return (
      <div ref={ref}>
        <article className={className}>{children}</article>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <motion.div
        style={{ y, rotateX, scale, skewY, transformPerspective: 1000 }}
        className="relative"
      >
        <motion.span
          aria-hidden="true"
          style={{ opacity: shadowOpacity, scaleX: shadowScaleX }}
          className="pointer-events-none absolute inset-x-8 -bottom-5 h-10 rounded-full bg-brand-600/40 blur-2xl"
        />
        <article className={`relative ${className}`}>{children}</article>
      </motion.div>
    </div>
  );
}