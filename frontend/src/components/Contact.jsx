import { motion } from "framer-motion";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../data/portfolio";

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 bg-ink text-cream overflow-hidden"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] px-3 py-1.5 brutal-border border-cream rounded-full">
            // Contact
          </span>
          <div className="h-[2px] flex-1 bg-cream/20" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black leading-[0.9] text-[16vw] sm:text-[12vw] lg:text-[10vw]"
        >
          LET'S BUILD
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px #FDFBF7" }}
          >
            SOMETHING
          </span>
          <span className="text-tomato">.</span>
        </motion.h2>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-cream/80">
          Got a project, a wild idea, or just want to say hi? My inbox is wide open.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
          <a
            href={`mailto:${profile.email}?subject=Let's%20build%20something`}
            data-testid="contact-mailto-btn"
            className="group flex items-center justify-between gap-3 px-6 py-5 bg-tomato text-cream brutal-border border-cream rounded-xl font-display font-bold text-lg shadow-[6px_6px_0px_#FDFBF7] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#FDFBF7] transition-all"
          >
            <span className="flex items-center gap-3">
              <Mail size={20} />
              Email me
            </span>
            <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform" />
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}?text=Hey%20Sarthak!`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-btn"
            className="group flex items-center justify-between gap-3 px-6 py-5 bg-mint text-ink brutal-border border-cream rounded-xl font-display font-bold text-lg shadow-[6px_6px_0px_#FDFBF7] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#FDFBF7] transition-all"
          >
            <span className="flex items-center gap-3">
              <FaWhatsapp size={22} />
              WhatsApp
            </span>
            <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        <a
          href={profile.resume}
          download
          target="_blank"
          rel="noopener noreferrer"
          data-testid="contact-download-resume-btn"
          className="inline-flex mt-4 items-center gap-2 px-5 py-3 bg-gold text-ink brutal-border border-cream rounded-full font-display font-bold text-sm shadow-[4px_4px_0px_#FDFBF7] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FDFBF7] transition-all"
        >
          <Download size={16} /> Download Resume
        </a>

        {/* Socials */}
        <div className="mt-16 flex flex-wrap items-center gap-3">
          <SocialButton
            href={profile.linkedin}
            label="LinkedIn"
            testId="social-linkedin"
            icon={<FaLinkedinIn />}
          />
          <SocialButton
            href={profile.github}
            label="GitHub"
            testId="social-github"
            icon={<FaGithub />}
          />
          <SocialButton
            href={`mailto:${profile.email}`}
            label="Gmail"
            testId="social-email"
            icon={<Mail size={14} />}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-cream/20 flex flex-wrap justify-between gap-4 font-mono text-xs uppercase tracking-widest text-cream/60">
          <span>© {year} Sarthak Sahu — Crafted with care.</span>
          <span>New Delhi · India</span>
        </div>
      </div>
    </section>
  );
}

function SocialButton({ href, label, icon, testId }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
      className="inline-flex items-center gap-2 px-4 py-2 bg-cream text-ink brutal-border border-cream rounded-full font-mono text-xs uppercase tracking-widest hover:bg-gold transition-colors"
    >
      <span className="text-base">{icon}</span> {label}
    </a>
  );
}
