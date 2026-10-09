import { motion, useReducedMotion } from "framer-motion";

const presets = {
  // plug jhatke se disconnect hota hai
  shake: {
    animate: {
      x: [0, -3, 3, -4, 4, -2, 2, 0],
      rotate: [0, -10, 10, -14, 14, -6, 6, 0],
      scale: [1, 1.08, 1, 1.08, 1],
    },
    transition: { duration: 1, repeat: Infinity, repeatDelay: 1.8 },
  },
  // clock ghoom ke ruk jata hai
  spin: {
    animate: { rotate: [0, 360] },
    transition: { duration: 1.4, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" },
  },
  // rocket launch hone se pehle kaanpta hai
  launch: {
    animate: {
      y: [0, -3, 0, -6, 0, -14, 0],
      x: [0, 2, -2, 2, -2, 0],
    },
    transition: { duration: 1.2, repeat: Infinity, repeatDelay: 1.6 },
  },
};

export default function ProblemIcon({ icon: Icon, motionType = "shake" }) {
  const reduceMotion = useReducedMotion();
  const preset = presets[motionType];

  return (
    <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-500">
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-xl ring-2 ring-red-400"
          animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.6, ease: "easeOut" }}
        />
      )}

      <motion.span
        className="relative grid place-items-center"
        whileHover={reduceMotion ? undefined : { scale: 1.25, rotate: -12 }}
        animate={reduceMotion ? undefined : preset.animate}
        transition={reduceMotion ? undefined : preset.transition}
      >
        <Icon size={24} aria-hidden="true" />
      </motion.span>
    </div>
  );
}