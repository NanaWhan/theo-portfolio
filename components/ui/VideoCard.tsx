"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { VideoProject } from "@/data";

interface VideoCardProps {
  project: VideoProject;
  onOpen: () => void;
}

const VideoCard = ({ project, onOpen }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = async () => {
    if (!videoRef.current) return;
    setIsHovered(true);
    videoRef.current.preload = "auto";
    try {
      await videoRef.current.play();
    } catch {
      // silently fail
    }
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    setIsHovered(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      className="relative flex-shrink-0 overflow-hidden cursor-pointer"
      style={{
        width: "clamp(300px, 42vw, 620px)",
        height: "clamp(280px, 62vh, 680px)",
        border: isHovered
          ? "1px solid rgba(0,212,255,0.5)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: isHovered
          ? "0 0 40px rgba(0,212,255,0.2), inset 0 0 40px rgba(0,0,0,0.4)"
          : "none",
        transition: "border 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        src={project.src}
        poster={project.poster}
        muted
        loop
        playsInline
        preload="none"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,16,0.95) 0%, rgba(5,5,16,0.4) 50%, rgba(5,5,16,0.1) 100%)",
          opacity: isHovered ? 0.7 : 1,
        }}
      />

      {/* Cyan corner accent */}
      {isHovered && (
        <div
          className="absolute top-0 left-0 w-16 h-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.3) 0%, transparent 60%)",
          }}
        />
      )}

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="flex items-center justify-center rounded-full border"
          animate={{
            width: isHovered ? 72 : 56,
            height: isHovered ? 72 : 56,
            borderColor: isHovered
              ? "rgba(0,212,255,0.8)"
              : "rgba(255,255,255,0.3)",
            boxShadow: isHovered
              ? "0 0 30px rgba(0,212,255,0.4)"
              : "none",
          }}
          transition={{ duration: 0.25 }}
        >
          <svg
            style={{ width: isHovered ? 22 : 18, marginLeft: 3 }}
            fill={isHovered ? "#00d4ff" : "white"}
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>
      </div>

      {/* Card number */}
      <div className="absolute top-4 right-5">
        <span
          className="font-bebas text-5xl leading-none"
          style={{
            color: isHovered ? "rgba(0,212,255,0.5)" : "rgba(255,255,255,0.08)",
            transition: "color 0.3s ease",
          }}
        >
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* Info bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span
          className="text-[10px] tracking-[0.35em] uppercase mb-2 block"
          style={{ color: isHovered ? "#00d4ff" : "rgba(255,255,255,0.4)" }}
        >
          {project.category}
        </span>
        <p className="font-bebas text-white text-3xl tracking-wider leading-none">
          {project.title}
        </p>
      </div>
    </motion.div>
  );
};

export default VideoCard;
