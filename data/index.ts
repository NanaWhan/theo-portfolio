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
    "I'm Theo, a mobile videographer and editor with a passion for cinematic storytelling. From commercial campaigns to short films, I bring each project to life with intention and craft.",
    "With years behind the lens and in the edit suite, I collaborate with brands, musicians, and directors to produce work that doesn't just look good — it resonates.",
  ],
  image: "/images/me.jpg",
  skills: [
    "Cinematography",
    "Color Grading",
    "Video Editing",
    "Motion Graphics",
    "DaVinci Resolve",
    "Adobe Premiere",
    "Drone Operation",
    "Sound Design",
    "Directing",
  ],
};

// ---- Work / Videos ----
export const videos: VideoProject[] = [
  {
    id: 1,
    title: "DeHideout Airbnb",
    category: "Commercial",
    description: "A cinematic walk-through of the DeHideout Airbnb space — showcasing atmosphere, comfort, and character.",
    src: "/videos/1.mp4",
  },
  {
    id: 2,
    title: "Phaneroo Oasis Living",
    category: "Real Estate",
    description: "Elevated property storytelling for Phaneroo Oasis Living — light, space, and lifestyle on full display.",
    src: "/videos/2.mp4",
  },
  {
    id: 3,
    title: "ZediTech",
    category: "Brand Film",
    description: "A sharp brand ad for ZediTech — innovation, identity, and tech brought to life on screen.",
    src: "/videos/11.mp4",
  },
  {
    id: 4,
    title: "Fusion Rave '23",
    category: "Event Film",
    description: "High-energy coverage of Fusion Rave 2023 — lights, movement, and atmosphere captured in full.",
    src: "/videos/8.mp4",
  },
  {
    id: 5,
    title: "Andos Lounge",
    category: "Commercial",
    description: "A mood-driven ad for Andos Lounge, capturing the ambience and energy of a premium dining experience.",
    src: "/videos/3.mp4",
  },
  {
    id: 6,
    title: "Torches Memories Restaurant",
    category: "Commercial",
    description: "Visual storytelling for Torches Memories Restaurant — food, feeling, and the magic of a shared meal.",
    src: "/videos/5.mp4",
  },
  {
    id: 7,
    title: "DeHideout Airbnb Lounge",
    category: "Commercial",
    description: "An intimate look at the lounge experience within the DeHideout Airbnb — warm tones, thoughtful framing.",
    src: "/videos/4.mp4",
  },
  {
    id: 8,
    title: "MRJ Creatives Studio",
    category: "Brand Film",
    description: "A brand identity film for MRJ Creatives Studio — creativity, craft, and a space built for makers.",
    src: "/videos/7.mp4",
  },
  {
    id: 9,
    title: "Coastal Hide Airbnb",
    category: "Real Estate",
    description: "A breezy, sun-soaked showcase of Coastal Hide Airbnb — where location meets laid-back luxury.",
    src: "/videos/6.mp4",
  },
  {
    id: 10,
    title: "Neverland",
    category: "Motion Graphics",
    description: "A dreamlike visual piece — imaginative storytelling with a cinematic eye.",
    src: "/videos/9.mp4",
  },
  {
    id: 11,
    title: "The Joint Pizza",
    category: "Commercial",
    description: "A mouth-watering commercial for The Joint Pizza — fresh ingredients, bold flavours, great light.",
    src: "/videos/10.mp4",
  },
];

// ---- Contact ----
export const contact = {
  eyebrow: "Let's Create Something",
  heading: "Ready to tell\nyour story?",
  email: "tettehquarshie055@gmail.com",
  whatsapp: "https://wa.me/233240056130",
};

// ---- Social Links ----
export const socialLinks: SocialLink[] = [
  { id: 1, name: "Instagram", url: "https://www.instagram.com/mrj_parker" },
  { id: 2, name: "TikTok",    url: "https://www.tiktok.com/@mrjcreatives" },
  { id: 3, name: "WhatsApp",  url: "https://wa.me/233240056130" },
];
