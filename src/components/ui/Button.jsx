import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-ink text-white shadow-lg shadow-ink/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-600/30",
  secondary:
    "bg-white text-ink ring-1 ring-ink/10 hover:bg-brand-50 hover:ring-brand-600/40",
  light:
    "bg-white text-ink shadow-lg hover:-translate-y-0.5",
  outline:
    "text-white ring-1 ring-white/30 hover:bg-white/10",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
};

const arrowSizes = {
  sm: "py-1.5 pl-5 pr-1.5 text-sm",
  md: "py-2 pl-6 pr-2 text-sm",
};

export default function Button({
  as: Tag = "a",
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...props
}) {
  const spacing = withArrow ? arrowSizes[size] : sizes[size];

  return (
    <Tag
      className={`group inline-flex items-center justify-center gap-3 rounded-full font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${variants[variant]} ${spacing} ${className}`}
      {...props}
    >
      {children}
      {withArrow && (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-white transition duration-300 group-hover:-rotate-45 group-hover:bg-accent">
          <ArrowRight size={14} aria-hidden="true" />
        </span>
      )}
    </Tag>
  );
}