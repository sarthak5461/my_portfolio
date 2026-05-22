import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-4 sm:px-6 bg-mint brutal-border border-x-0"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] px-3 py-1.5 bg-cream brutal-border rounded-full">
            // Experience
          </span>
          <div className="h-[2px] flex-1 bg-ink/20" />
        </div>

        <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] max-w-4xl mb-14">
          Where I've shipped real things.
        </h2>

        <div className="relative">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-[2px] bg-ink/20 hidden md:block" />

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`grid md:grid-cols-2 gap-6 items-start ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
                data-testid={`experience-card-${idx}`}
              >
                <div className={`p-6 md:p-8 brutal-border rounded-xl shadow-brutal ${exp.color} relative`}>
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-ink text-cream brutal-border rounded-full font-mono text-[10px] uppercase tracking-widest">
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 mt-2 mb-1 font-mono text-xs uppercase tracking-widest text-ink/70">
                    <Briefcase size={12} />
                    {exp.company}
                  </div>
                  <h3 className="font-display font-black text-3xl md:text-4xl leading-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2 text-sm text-ink/70">
                    <MapPin size={12} /> {exp.location}
                  </div>
                </div>
                <ul className="space-y-3 pt-2">
                  {exp.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-3 p-4 brutal-border rounded-lg bg-cream shadow-brutal-sm"
                    >
                      <span className="font-display font-black text-tomato shrink-0">→</span>
                      <span className="text-ink/85 leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
