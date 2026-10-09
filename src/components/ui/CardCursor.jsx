import { Hand } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CardCursor() {
  const cursorRef = useRef(null);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("Peek");

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    let raf = 0;
    let nextX = 0;
    let nextY = 0;

    const moveCursor = () => {
      cursorRef.current?.style.setProperty(
        "transform",
        `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`
      );
      raf = 0;
    };

    const onPointerMove = (event) => {
      nextX = event.clientX;
      nextY = event.clientY;

      const target = event.target.closest?.("[data-card-cursor]");
      setActive(Boolean(target));
      if (target) setLabel(target.dataset.cardCursor || "Peek");

      if (!raf) raf = requestAnimationFrame(moveCursor);
    };

    const onPointerLeave = () => setActive(false);

    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`card-cursor ${active ? "card-cursor-active" : ""}`}
    >
      <Hand size={18} />
      <span>{label}</span>
    </div>
  );
}
