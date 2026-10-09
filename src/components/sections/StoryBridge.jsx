import { ArrowRight, Lightbulb, Search, Settings2, TrendingUp } from "lucide-react";
import Reveal from "../ui/Reveal";

const beats = [
  {
    icon: Lightbulb,
    label: "Idea",
    title: "A business goal appears",
    text: "You know what should improve, but the product shape is still fuzzy.",
  },
  {
    icon: Search,
    label: "Friction",
    title: "We find the bottleneck",
    text: "Manual work, disconnected data and slow decisions become visible.",
  },
  {
    icon: Settings2,
    label: "System",
    title: "We design the workflow",
    text: "AI, automation and product screens connect into one usable system.",
  },
  {
    icon: TrendingUp,
    label: "Momentum",
    title: "Your team moves faster",
    text: "The outcome is clearer operations, cleaner releases and room to scale.",
  },
];

export default function StoryBridge() {
  return (
    <section className="story-bridge section-pull relative overflow-hidden bg-surface py-16" aria-label="Product story">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="story-shell section-frame rounded-3xl bg-white/80 p-4 ring-1 ring-ink/5 sm:p-6">
            <div className="grid gap-3 lg:grid-cols-4">
              {beats.map((beat, index) => {
                const Icon = beat.icon;

                return (
                  <article key={beat.label} className="story-beat relative rounded-2xl p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-100">
                        <Icon size={14} aria-hidden="true" />
                        {beat.label}
                      </span>
                      {index < beats.length - 1 && (
                        <ArrowRight className="hidden text-brand-600/60 lg:block" size={18} aria-hidden="true" />
                      )}
                    </div>
                    <h2 className="mt-4 text-lg font-extrabold tracking-tight">{beat.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{beat.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
