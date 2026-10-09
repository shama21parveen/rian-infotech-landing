import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-widest ${
          light ? "text-brand-100" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-muted"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}