import { Check } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/services";
import MotionCard from "../ui/MotionCard";
import SectionBackdrop from "../ui/SectionBackdrop";

export default function Services() {
  return (
    <section id="services" className="section-pull section-creative scroll-mt-16 overflow-hidden py-24">
      <SectionBackdrop variant="services" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="02 · The system"
          title="Everything you need to build and scale"
          description="Once the bottleneck is clear, we shape the product, automation and AI layers that make the workflow move."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 2) * 0.1}>
             <MotionCard
               index={index}
               data-card-cursor="Build"
               className="section-frame group h-full rounded-2xl bg-white/90 p-7 ring-1 ring-ink/10 transition-shadow duration-300 hover:ring-brand-500/40 hover:shadow-xl hover:shadow-brand-600/10"
             >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <service.icon size={24} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-muted">{service.text}</p>

                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium">
                      <Check size={16} className="text-brand-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </MotionCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
