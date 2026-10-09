export default function GridSpotlight() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="fx-blob fx-blob-green" />
      <div className="fx-blob fx-blob-violet" />
      <div className="fx-grid absolute inset-0" />
      <div className="fx-grid-lit absolute inset-0" />
      <div className="fx-glow absolute inset-0" />
    </div>
  );
}