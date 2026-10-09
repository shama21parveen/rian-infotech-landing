import { useEffect, useRef } from "react";

export default function useSpotlight(smoothing = 0.18) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Touch devices aur reduced-motion users ke liye effect band
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    let raf = 0;
    const pointer = { x: 0, y: 0 }; // cursor, viewport coordinates
    const light = { x: 0, y: 0 };   // smooth hui position, element ke andar

    const frame = () => {
      const rect = el.getBoundingClientRect();
      light.x += (pointer.x - rect.left - light.x) * smoothing;
      light.y += (pointer.y - rect.top - light.y) * smoothing;
      el.style.setProperty("--x", `${light.x}px`);
      el.style.setProperty("--y", `${light.y}px`);
      raf = requestAnimationFrame(frame);
    };

    const onEnter = (e) => {
      const rect = el.getBoundingClientRect();
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      light.x = e.clientX - rect.left;
      light.y = e.clientY - rect.top;
      el.style.setProperty("--o", "1");
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const onLeave = () => {
      el.style.setProperty("--o", "0");
      cancelAnimationFrame(raf);
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [smoothing]);

  return ref;
}