const words = [
  "AI", "Automation", "Workflows", "Agents", "APIs", "Dashboards",
  "Product", "Data", "Scale", "Cloud", "Models", "Integrations",
];

function Words({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 flex select-none flex-wrap content-start gap-x-10 gap-y-4 overflow-hidden p-6 text-4xl font-extrabold uppercase tracking-tight sm:text-6xl ${className}`}
    >
      {Array.from({ length: 6 }).flatMap((_, row) =>
        words.map((word, i) => <span key={`${row}-${i}`}>{word}</span>)
      )}
    </div>
  );
}

export default function TorchLayers() {
  return (
    <>
      {/* 1. andhere mein lagbhag invisible words */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Words className="text-white/4" />
      </div>

      {/* 2. wahi words, sirf torch ke circle mein roshan */}
      <div aria-hidden="true" className="fx-torch-reveal pointer-events-none absolute inset-0 z-0">
        <Words className="text-brand-100/45" />
      </div>

      {/* 3. content ke upar warm roshni */}
      <div
        aria-hidden="true"
        className="fx-torch-light pointer-events-none absolute inset-0 z-20 mix-blend-screen"
      />
    </>
  );
}