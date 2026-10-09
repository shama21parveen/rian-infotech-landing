export default function SectionBackdrop({ variant = "brand", dark = false }) {
  return (
    <div
      aria-hidden="true"
      className={`section-backdrop section-backdrop-${variant} ${dark ? "section-backdrop-dark" : ""}`}
    >
      <span className="section-orbit section-orbit-a" />
      <span className="section-orbit section-orbit-b" />
      <span className="section-ribbon" />
      <span className="section-grid-wash" />
    </div>
  );
}
