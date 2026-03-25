"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/data";

const About = () => {
  return (
    <section id="about" className="bg-film-bg" style={{ borderTop: "1px solid rgba(240,237,232,0.07)" }}>
      {/* Section label */}
      <div
        className="px-8 md:px-14 py-12"
        style={{ borderBottom: "1px solid rgba(240,237,232,0.07)" }}
      >
        <span className="label">About</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left — image */}
        <motion.div
          className="relative"
          style={{
            height: "clamp(360px, 60vh, 720px)",
            borderRight: "1px solid rgba(240,237,232,0.07)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src={about.image}
            alt="Theo"
            fill
            className="object-cover object-top"
            style={{ filter: "grayscale(100%) contrast(1.05)" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right — text */}
        <motion.div
          className="px-8 md:px-14 py-16 flex flex-col justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div>
            {/* Large opening line */}
            <p
              className="text-film-text font-light leading-snug mb-10"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {about.heading.replace("\n", " ")}
            </p>

            <div
              className="mb-8"
              style={{
                width: "2rem",
                height: "1px",
                background: "rgba(240,237,232,0.2)",
              }}
            />

            {about.bio.map((p, i) => (
              <p key={i} className="text-film-muted font-light text-sm leading-relaxed mb-4" style={{ fontSize: "0.9rem" }}>
                {p}
              </p>
            ))}
          </div>

          {/* Specialisms */}
          <div style={{ borderTop: "1px solid rgba(240,237,232,0.07)", paddingTop: "2rem", marginTop: "2rem" }}>
            <p className="label mb-5">Specialisms</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {about.skills.map((s) => (
                <span key={s} className="label" style={{ color: "rgba(240,237,232,0.35)" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
