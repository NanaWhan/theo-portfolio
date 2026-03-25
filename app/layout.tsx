import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import FilmGrain from "@/components/effects/FilmGrain";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Theo — Videographer & Editor",
  description: "Cinematic videography and editing. Visual narratives that move people.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} bg-film-bg text-film-text`}>
        <CustomCursor />
        <FilmGrain />
        {children}
      </body>
    </html>
  );
}
