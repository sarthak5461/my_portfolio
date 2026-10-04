import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6"
      data-testid="projects-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] px-3 py-1.5 bg-tomato text-cream brutal-border rounded-full">
            // Projects
          </span>
          <div className="h-[2px] flex-1 bg-ink/20" />
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            Selected work.
            <br />
            <span className="text-stroke">Built with care.</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/60 max-w-xs">
            A handful of projects I'm proud of — more on GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`project-card-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group block p-5 md:p-6 brutal-border rounded-2xl shadow-brutal hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-hover transition-all ${p.cardBg}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden brutal-border rounded-xl bg-cream mb-5">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute top-3 right-3 w-10 h-10 brutal-border rounded-full flex items-center justify-center ${p.accent} text-cream`}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3 className="font-display font-black text-2xl md:text-3xl leading-tight">
                {p.name}
              </h3>
              <p className="mt-3 text-ink/80 leading-relaxed">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 brutal-border rounded-full bg-cream font-mono text-[10px] uppercase tracking-widest"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
