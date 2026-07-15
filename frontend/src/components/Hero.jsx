import { motion } from "framer-motion";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 md:pt-40 pb-20 px-4 sm:px-6 overflow-hidden"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 brutal-border rounded-full bg-mint font-mono text-xs uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tomato opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tomato"></span>
          </span>
          Open to new opportunities
        </motion.div>

        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black leading-[0.85] text-[18vw] sm:text-[15vw] lg:text-[11vw]"
            >
              SARTHAK
              <br />
              <span className="text-stroke">SAHU</span>
              <span className="text-tomato">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] px-3 py-1.5 bg-gold brutal-border rounded-full inline-flex items-center gap-2">
                <Sparkles size={12} /> {profile.title}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] px-3 py-1.5 bg-butter brutal-border rounded-full inline-flex items-center gap-2">
                <MapPin size={12} /> {profile.location}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-ink/80"
            >
              I build fast, accessible & marketer-friendly HubSpot CMS experiences — from custom themes to multi-language builds. Currently deep in
              <span className="bg-gold px-1 mx-1 font-medium">HubL</span>,
              <span className="bg-mint px-1 mx-1 font-medium">HubDB</span> &
              <span className="bg-butter px-1 mx-1 font-medium">Core Web Vitals</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                data-testid="hero-cta-contact"
                className="inline-flex items-center gap-2 px-6 py-4 bg-tomato text-cream brutal-border rounded-full font-display font-bold text-base shadow-brutal hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-hover transition-all"
              >
                Say Hello <span className="text-xl">→</span>
              </a>
              <a
                href="#projects"
                data-testid="hero-cta-projects"
                className="inline-flex items-center gap-2 px-6 py-4 bg-cream brutal-border rounded-full font-display font-bold text-base shadow-brutal hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-hover transition-all"
              >
                See My Work
              </a>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-aqua brutal-border rounded-full -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold brutal-border rounded-full -z-10" />
              <div className="w-64 h-64 sm:w-72 sm:h-72 brutal-border rounded-3xl bg-butter shadow-brutal-lg overflow-hidden animate-float">
                <img
                  src={profile.avatar}
                  alt="Sarthak Sahu avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-mint brutal-border rounded-full font-mono text-xs uppercase tracking-widest shadow-brutal-sm">
                ✦ Hi, I'm Sarthak
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-ink/60"
        >
          <ArrowDown size={14} className="animate-bounce" />
          Scroll for more
        </motion.div>
      </div>
    </section>
  );
}
