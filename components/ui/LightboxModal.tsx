"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { VideoProject } from "@/data";

const LightboxModal = ({ project, onClose }: { project: VideoProject; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/95 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* ── Always-visible close button ── */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-white/50 text-white text-xl transition-all duration-200"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Top meta bar */}
      <div
        className="flex items-center gap-4 px-5 md:px-14 py-5 flex-shrink-0 pr-20 md:pr-28"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="label">{project.category}</span>
        <span
          className="text-film-text font-light truncate"
          style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", letterSpacing: "-0.01em" }}
        >
          {project.title}
        </span>
      </div>

      {/* Video — centred, respects aspect ratio, won't overflow */}
      <div
        className="flex-1 flex items-center justify-center p-4 md:p-10 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.video
          className="max-w-full max-h-full w-auto h-auto"
          style={{ maxWidth: "min(900px, 100%)", maxHeight: "100%" }}
          src={project.src}
          controls
          autoPlay
          playsInline
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.25 }}
        />
      </div>

      {/* Bottom description */}
      <div
        className="px-5 md:px-14 py-4 flex-shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-film-muted font-light text-xs md:text-sm">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default LightboxModal;
