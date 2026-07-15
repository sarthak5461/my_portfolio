import { skills } from "../data/portfolio";

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden brutal-border border-x-0 py-6 bg-cream">
      <div
        className={`flex gap-12 whitespace-nowrap ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {doubled.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="font-display font-black text-6xl md:text-8xl text-stroke flex items-center gap-12"
          >
            {s}
            <span className="text-tomato" style={{ WebkitTextStroke: 0, color: "#FF4500" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const first = skills.slice(0, Math.ceil(skills.length / 2));
  const second = skills.slice(Math.ceil(skills.length / 2));
  return (
    <section id="skills" className="py-20 md:py-28" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] px-3 py-1.5 bg-aqua brutal-border rounded-full">
            // Skills
          </span>
          <div className="h-[2px] flex-1 bg-ink/20" />
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] max-w-4xl">
          The stack I ship with — HubSpot & beyond.
        </h2>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={first} />
        <MarqueeRow items={second} reverse />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 brutal-border rounded-full bg-cream font-mono text-xs uppercase tracking-widest hover:bg-gold transition-colors"
              data-testid={`skill-tag-${s}`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
