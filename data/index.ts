export interface VideoProject {
  id: number;
  title: string;
  category: string;
  description: string;
  src: string;
  poster?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
}

// ---- Navigation ----
export const navItems = [
  { name: "Work", link: "#work" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

// ---- Hero ----
export const hero = {
  eyebrow: "Videographer & Editor",
  name: "Theo",
  tagline: "Cinematic stories that move people",
  videoSrc: "/videos/hero.mp4",
  ctaLink: "#work",
};

// ---- About ----
export const about = {
  eyebrow: "The Filmmaker",
  heading: "I craft visual\nnarratives.",
  bio: [
    "I'm Theo, a videographer and editor with a passion for cinematic storytelling. From commercial campaigns to short films, I bring each project to life with intention and craft.",
    "With years behind the lens and in the edit suite, I collaborate with brands, musicians, and directors to produce work that doesn't just look good — it resonates.",
  ],
  image: "/images/about.jpg",
  skills: [
    "Cinematography",
    "Color Grading",
    "Video Editing",
    "Motion Graphics",
    "DaVinci Resolve",
    "Adobe Premiere",
    "After Effects",
    "Drone Operation",
    "Sound Design",
    "Directing",
  ],
};

// ---- Work / Videos (ordered 1 → 7) ----
export const videos: VideoProject[] = [
  {
    id: 1,
    title: "Project One",
    category: "Short Film",
    description: "A cinematic journey through light and shadow.",
    src: "/videos/1.mov",
  },
  {
    id: 2,
    title: "Project Two",
    category: "Commercial",
    description: "A brand campaign exploring texture and identity.",
    src: "/videos/2.mp4",
  },
  {
    id: 3,
    title: "Project Three",
    category: "Music Video",
    description: "Visual identity for an independent artist.",
    src: "/videos/3.mov",
  },
  {
    id: 4,
    title: "Project Four",
    category: "Documentary",
    description: "A portrait of craft, culture, and tradition.",
    src: "/videos/4.mov",
  },
  {
    id: 5,
    title: "Project Five",
    category: "Commercial",
    description: "Product storytelling with dramatic lighting.",
    src: "/videos/5.mov",
  },
  {
    id: 6,
    title: "Project Six",
    category: "Music Video",
    description: "High-energy performance edit for a live set.",
    src: "/videos/6.mp4",
  },
  {
    id: 7,
    title: "Project Seven",
    category: "Short Film",
    description: "An intimate character study shot on location.",
    src: "/videos/7.mov",
  },
];

// ---- Contact ----
export const contact = {
  eyebrow: "Let's Create Something",
  heading: "Ready to tell\nyour story?",
  email: "theo@email.com",
};

// ---- Social Links ----
export const socialLinks: SocialLink[] = [
  { id: 1, name: "Instagram", url: "https://instagram.com" },
  { id: 2, name: "Vimeo", url: "https://vimeo.com" },
  { id: 3, name: "YouTube", url: "https://youtube.com" },
];
