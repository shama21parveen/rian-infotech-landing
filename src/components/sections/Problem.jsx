import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import SectionBackdrop from "../ui/SectionBackdrop";
import { problems } from "../../data/problems";
import ProblemIcon from "../ui/ProblemIcon";

const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];
const cardTilts = ["problem-tilt-left", "problem-tilt-right", "problem-tilt-soft-left"];
const marqueeProblems = [...problems, ...problems];

export default function Problem() {
  return (
    <section className="section-pull section-creative overflow-hidden bg-surface py-24" aria-labelledby="problem-heading">
      <SectionBackdrop variant="problem" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="01 · The friction"
          title="Growing businesses hit the same walls"
          description="Every product story starts with a constraint. We look for the hidden drag before we design the system."
        />
      </div>

      <Reveal>
        <div className="problem-wall relative z-10 mt-14 overflow-hidden" aria-label="Common business challenges">
          <div className="problem-marquee flex w-max gap-6 px-5">
            {marqueeProblems.map((problem, index) => (
              <article
                key={`${problem.title}-${index}`}
                aria-hidden={index >= problems.length}
                data-card-cursor="Glide"
                className={`group/problem problem-card problem-card-${problem.tone} ${cardTilts[index % cardTilts.length]} relative h-full w-[min(82vw,22rem)] shrink-0 overflow-hidden rounded-2xl p-6 ring-1 ring-ink/5`}
              >
                <span aria-hidden="true" className="problem-card-grid absolute inset-0" />
                <span aria-hidden="true" className="problem-card-light absolute inset-0" />
                <span aria-hidden="true" className="problem-card-corner absolute right-5 top-5" />

                <div className="relative z-10">
                  <ProblemIcon icon={problem.icon} motionType={problem.motion} />

                  <h3 className="mt-5 text-xl font-bold transition-colors duration-300 group-hover/problem:text-ink">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-muted transition-colors duration-300 group-hover/problem:text-ink/70">
                    {problem.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2" aria-hidden="true">
                    {problem.chips.map((chip, i) => (
                      <span
                        key={chip}
                        className={`problem-chip rounded-lg bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 ring-1 ring-red-100 ${tilts[i % tilts.length]}`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
