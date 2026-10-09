import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export default function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  delay = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  const format = (value) =>
    prefix +
    value.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix;

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;

    if (reduceMotion) {
      node.textContent = format(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (value) => {
        node.textContent = format(value);
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, to]);

  return <span ref={ref}>{format(0)}</span>;
}