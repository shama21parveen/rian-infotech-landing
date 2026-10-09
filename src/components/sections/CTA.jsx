import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import useSpotlight from "../../hooks/useSpotlight";
import SectionBackdrop from "../ui/SectionBackdrop";

export default function CTA() {
  const spotlightRef = useSpotlight(0.14);

  return (
    <section id="contact" className="section-pull section-creative scroll-mt-16 overflow-hidden px-5 py-24">
      <SectionBackdrop variant="cta" />
      <Reveal>
        <div
          ref={spotlightRef}
          className="fx-spot section-frame relative z-10 mx-auto max-w-5xl overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="fx-cta-wash absolute inset-0" />
            <div className="fx-cta-grid absolute inset-0" />
            <div className="fx-cta-grid-lit absolute inset-0" />
            <div className="fx-cta-glow absolute inset-0" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-150 -translate-x-1/2 rounded-full bg-brand-600/50 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-0 h-60 w-60 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-100">
              06 · The next move
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
              Build your next product with us
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Tell us what you are trying to build. We will come back with a clear
              plan, a realistic timeline and honest advice.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
             <Button href="mailto:hello@rianinfotech.com" variant="light" withArrow>
  Start your project
</Button>
              <Button href="#work" variant="outline">
                See our work
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
