"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoProject, videos } from "@/data";
import LightboxModal from "@/components/ui/LightboxModal";

const Work = () => {
  const [preview, setPreview] = useState<VideoProject>(videos[0]);
  const [activeModal, setActiveModal] = useState<VideoProject | null>(null);

  return (
    <section id="work" className="bg-film-bg" style={{ borderTop: "1px solid rgba(240,237,232,0.07)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT: project list ── */}
        <div>
          {/* Section label */}
          <div
            className="px-8 md:px-14 py-12 flex items-baseline justify-between"
            style={{ borderBottom: "1px solid rgba(240,237,232,0.07)" }}
          >
            <span className="label">Selected Work</span>
            <span className="label">{String(videos.length).padStart(2, "0")} Projects</span>
          </div>

          {/* Rows */}
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              className="group px-5 md:px-14 py-6 md:py-8 flex items-center justify-between cursor-pointer"
              style={{ borderBottom: "1px solid rgba(240,237,232,0.07)" }}
              onMouseEnter={() => setPreview(video)}
              onClick={() => setActiveModal(video)}
              whileHover={{ backgroundColor: "rgba(240,237,232,0.02)" }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-center gap-8">
                {/* Number */}
                <span
                  className="label tabular-nums"
                  style={{ minWidth: "1.5rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + category */}
                <div>
                  <h3
                    className="text-film-text font-light leading-tight mb-0.5 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)", letterSpacing: "-0.01em" }}
                  >
                    {video.title}
                  </h3>
                  <p className="label">{video.category}</p>
                </div>
              </div>

              {/* Arrow — appears on hover */}
              <span
                className="text-film-text/20 text-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
              >
                ↗
              </span>
            </motion.div>
          ))}

          <div className="px-8 md:px-14 py-6">
            <span className="label">Click any project to watch</span>
          </div>
        </div>

        {/* ── RIGHT: sticky video preview ── */}
        <div
          className="hidden lg:block sticky top-0 h-screen overflow-hidden"
          style={{ borderLeft: "1px solid rgba(240,237,232,0.07)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={preview.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <video
                className="w-full h-full object-cover"
                src={preview.src}
                autoPlay muted loop playsInline
              />
              <div className="absolute inset-0 bg-black/25" />

              {/* Label overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="label mb-1" style={{ color: "rgba(240,237,232,0.35)" }}>
                    Now Previewing
                  </p>
                  <p
                    className="text-film-text font-light"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "-0.01em" }}
                  >
                    {preview.title}
                  </p>
                </div>
                <span className="label" style={{ color: "rgba(240,237,232,0.25)" }}>
                  {preview.category}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <LightboxModal project={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
