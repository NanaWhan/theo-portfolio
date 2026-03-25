"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { contact, socialLinks } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
  Instagram: <FaInstagram />,
  TikTok:    <FaTiktok />,
  WhatsApp:  <FaWhatsapp />,
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-film-bg min-h-screen flex flex-col justify-between"
      style={{ borderTop: "1px solid rgba(240,237,232,0.07)" }}
    >
      {/* Top label */}
      <div
        className="px-8 md:px-14 py-12"
        style={{ borderBottom: "1px solid rgba(240,237,232,0.07)" }}
      >
        <span className="label">Contact</span>
      </div>

      {/* Main content */}
      <motion.div
        className="px-8 md:px-14 py-20 flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <p className="label mb-8">{contact.eyebrow}</p>

        {/* Big heading */}
        <h2
          className="text-film-text font-light leading-none mb-16"
          style={{
            fontSize: "clamp(3rem, 10vw, 10rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {contact.heading.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>

        {/* Email link */}
        <a
          href={`mailto:${contact.email}`}
          className="inline-block text-film-text font-light hover:text-film-muted transition-colors duration-300 border-b border-film-text/10 hover:border-film-text/30 pb-1 w-fit mb-4"
          style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", letterSpacing: "-0.01em" }}
        >
          {contact.email}
        </a>

        {/* WhatsApp link */}
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-film-muted hover:text-film-text transition-colors duration-300 w-fit"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
        >
          <FaWhatsapp className="text-lg" />
          <span className="font-light">+233 24 005 6130</span>
        </a>
      </motion.div>

      {/* Footer bar */}
      <div
        className="px-8 md:px-14 py-8 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(240,237,232,0.07)" }}
      >
        <span className="label">© {new Date().getFullYear()} Theo. All rights reserved.</span>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-film-muted hover:text-film-text transition-colors duration-200 text-sm"
            >
              {iconMap[link.name]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
