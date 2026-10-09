import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, CheckCircle2, FileText, Headset, Package, Send, UserPlus } from "lucide-react";
import CountUp from "../ui/CountUp";

const stats = [
  { label: "Tasks automated", to: 12480, decimals: 0, suffix: "" },
  { label: "Hours saved", to: 860, decimals: 0, suffix: "h" },
  { label: "Accuracy", to: 98.4, decimals: 1, suffix: "%" },
];

const feed = [
  { icon: FileText, title: "Invoice #2041 processed", time: "just now" },
  { icon: Headset, title: "Support ticket auto-resolved", time: "just now" },
  { icon: Send, title: "Weekly report sent to team", time: "just now" },
  { icon: Package, title: "Low stock routed to supplier", time: "just now" },
  { icon: UserPlus, title: "New hire onboarding started", time: "just now" },
];

const LINE = "M0 82 C25 78 40 55 70 58 S115 30 145 38 S200 18 230 24 S275 8 300 10";

function Float({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function ActivityFeed() {
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(2);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const visible = [tick, tick - 1, tick - 2];

  return (
    <ul className="relative mt-3 h-44 space-y-2 overflow-hidden" aria-label="Recent activity">
      <AnimatePresence initial={false}>
        {visible.map((id, position) => {
          const item = feed[id % feed.length];
          return (
            <motion.li
              key={id}
              layout
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: position === 0 ? 1 : 0.6, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-xl bg-surface px-3 py-2.5"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <item.icon size={16} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{item.title}</span>
                <span className="block text-xs text-muted">
                  {position === 0 ? "just now" : `${position * 3}s ago`}
                </span>
              </span>
              <CheckCircle2 size={16} className="shrink-0 text-emerald-500" aria-hidden="true" />
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}

export default function HeroMockup() {
  return (
    <div className="relative mx-auto mt-14 max-w-4xl text-left">
      <div className="rounded-2xl bg-white p-3 shadow-2xl shadow-brand-600/10 ring-1 ring-ink/10">
        <div className="flex items-center justify-between px-2 pb-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <p className="text-xs font-semibold text-muted">Automation overview</p>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>

        <div className="grid gap-4 rounded-xl bg-surface p-4 lg:grid-cols-5">
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5">
            {stats.map((stat, i) => (
              <div key={stat.label} className="rounded-xl bg-white p-4 ring-1 ring-ink/5">
                <p className="text-xs text-muted">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold tabular-nums">
                  <CountUp
                    to={stat.to}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    delay={0.6 + i * 0.15}
                  />
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-white p-4 ring-1 ring-ink/5 lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Runs this week</p>
              <span className="text-xs font-bold text-emerald-600">+24%</span>
            </div>

            <svg
              viewBox="0 0 300 100"
              preserveAspectRatio="none"
              className="mt-4 h-36 w-full"
              role="img"
              aria-label="Line chart showing automation runs increasing through the week"
            >
              <defs>
                <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" style={{ stopColor: "var(--color-brand-500)", stopOpacity: 0.35 }} />
                  <stop offset="100%" style={{ stopColor: "var(--color-brand-500)", stopOpacity: 0 }} />
                </linearGradient>
              </defs>

              {[25, 50, 75].map((y) => (
                <line key={y} x1="0" x2="300" y1={y} y2={y} className="stroke-ink/5" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              ))}

              <motion.path
                d={`${LINE} L300 100 L0 100 Z`}
                fill="url(#hero-area)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <motion.path
                d={LINE}
                fill="none"
                className="stroke-brand-600"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="rounded-xl bg-white p-4 ring-1 ring-ink/5 lg:col-span-2">
            <p className="text-sm font-semibold">Live activity</p>
            <ActivityFeed />
          </div>
        </div>
      </div>

      <Float className="absolute -left-6 top-24 hidden items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-xl ring-1 ring-ink/10 lg:flex">
        <CheckCircle2 size={18} className="text-emerald-500" />
        Workflow synced
      </Float>

      <Float
        delay={1.5}
        className="absolute -right-6 bottom-16 hidden items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-xl ring-1 ring-ink/10 lg:flex"
      >
        <Bot size={18} className="text-brand-600" />
        AI agent online
      </Float>
    </div>
  );
}