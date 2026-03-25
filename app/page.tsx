import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
