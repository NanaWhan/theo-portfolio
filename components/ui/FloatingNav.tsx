"use client";
import Link from "next/link";

// mix-blend-mode: difference makes the white text invert against any background
// — white on dark = white, white on light = appears black. Always readable.
export const FloatingNav = ({
  navItems,
}: {
  navItems: { name: string; link: string }[];
}) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[5000] flex items-center justify-between px-8 md:px-14 py-7 pointer-events-none"
      style={{ mixBlendMode: "difference" }}
    >
      <span className="text-white font-light text-base tracking-tight pointer-events-auto">
        Theophilus Tetteh Quarshie.
      </span>
      <nav className="flex items-center gap-5 md:gap-10 pointer-events-auto">
        {navItems.map((item, i) => (
          <Link
            key={item.name}
            href={item.link}
            className={`label text-white hover:opacity-60 transition-opacity duration-200${i === 0 ? " hidden sm:block" : ""}`}
            style={{ color: "white" }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
