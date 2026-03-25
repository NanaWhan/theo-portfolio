"use client";
import { motion } from "framer-motion";
import { hero } from "@/data";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={hero.videoSrc}
        autoPlay muted loop playsInline preload="auto"
      />

      {/* Overlay — just enough to read text */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-film-bg/80" />

      {/* Bottom-left: name + title */}
      <motion.div
        className="absolute bottom-10 left-8 md:left-14"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className="text-film-text leading-none tracking-tight mb-4"
          style={{
            fontWeight: 200,
            fontSize: "clamp(4.5rem, 14vw, 13rem)",
            letterSpacing: "-0.025em",
          }}
        >
          {hero.name}
        </h1>
        <p className="label" style={{ color: "rgba(240,237,232,0.45)" }}>
          {hero.eyebrow}
        </p>
      </motion.div>

      {/* Bottom-right: scroll + cta */}
      <motion.div
        className="absolute bottom-10 right-8 md:right-14 flex flex-col items-end gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href={hero.ctaLink}
          className="label text-film-text/40 hover:text-film-text/80 transition-colors duration-300"
        >
          View Work ↓
        </a>
        <span className="label" style={{ color: "rgba(240,237,232,0.2)" }}>
          © 2025
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
