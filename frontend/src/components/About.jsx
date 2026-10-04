import { motion } from "framer-motion";
import { about, education } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-4 sm:px-6 bg-butter brutal-border border-x-0"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] px-3 py-1.5 bg-cream brutal-border rounded-full">
            // About
          </span>
          <div className="h-[2px] flex-1 bg-ink/20" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl"
        >
          A <span className="bg-tomato text-cream px-2">curious</span> developer
          who loves shipping <span className="bg-mint px-2">pixel-perfect</span>
          , performant web <span className="bg-aqua px-2">experiences</span>.
        </motion.h2>

        <div className="grid grid-cols-12 gap-6 mt-14">
          <div className="col-span-12 md:col-span-7 space-y-6 text-lg md:text-xl text-ink/85 leading-relaxed">
            <p>{about.intro}</p>
            <p>
              Over the years, I've worked on global websites, HubSpot CMS
              implementations, and full-stack applications built from the ground
              up with Next.js, Node.js, and MongoDB. I enjoy solving the details
              that make a product better — from a smoother user experience to
              faster page loads and reliable integrations.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-4">
            {about.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 brutal-border rounded-xl shadow-brutal-sm ${
                  i % 2 === 0 ? "bg-cream" : "bg-mint"
                } hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all`}
                data-testid={`about-stat-${i}`}
              >
                <div className="font-display font-black text-4xl md:text-5xl">
                  {h.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink/70">
                  {h.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em]">
              // Education
            </span>
            <div className="h-[2px] flex-1 bg-ink/20" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((e) => (
              <div
                key={e.degree}
                className="p-5 brutal-border bg-cream rounded-xl shadow-brutal-sm"
                data-testid={`education-card-${e.degree}`}
              >
                <div className="font-display font-bold text-xl">{e.degree}</div>
                <div className="text-ink/70 mt-1">{e.school}</div>
                <div className="font-mono text-xs uppercase tracking-widest mt-2 text-ink/60">
                  {e.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
