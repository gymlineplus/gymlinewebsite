"use client";

import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import Image from "next/image";

// Function to render image logos from public directory
const ImageLogo = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} {...props} style={{ width: "100%", height: "auto" }} />
);

const allLogos = [
  { name: "Gold's Gym", id: 1, img: () => <ImageLogo src="/gold.svg" alt="Gold's Gym Logo" /> },
  { name: "Kenzo", id: 2, img: () => <ImageLogo src="/kenzo-fitness logo.png" alt="Kenzo Logo" /> },
  { name: "Cult.fit", id: 3, img: () => <ImageLogo src="/cult-fit.webp" alt="Cult.fit Logo" /> },
  { name: "Talso", id: 4, img: () => <ImageLogo src="/taiso-logo.png" alt="Talso Logo" /> },
  { name: "Anytime Fitness", id: 5, img: () => <ImageLogo src="/af.png" alt="Anytime Fitness Logo" /> },
  { name: "Indofit", id: 6, img: () => <ImageLogo src="/indofit-logos.jpg" alt="Indofit Logo" /> },
  // Fixed the syntax error: Removed "Image" and added a proper object
  { name: "ABS Fitness", id: 7, img: () => <ImageLogo src="/abs-fitness.png" alt="ABS Fitness Logo" /> },
  // Optionally keep or remove remaining logos
  // { name: "Vercel", id: 8, img: VercelIcon },
  // { name: "Lowes", id: 9, img: LowesIcon },
  // { name: "Ally", id: 10, img: AllyLogo },
  // { name: "Pierre", id: 11, img: PierreIcon },
  // { name: "BMW", id: 12, img: BMWIcon },
  // { name: "Claude", id: 13, img: ClaudeAIIcon },
  // { name: "Nextjs", id: 14, img: NextjsIcon },
];

export default function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24 ">
      <div className="mx-auto flex w-full min-h-80 max-w-screen-lg flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary">
            The best are already here
          </GradientHeading>
          <GradientHeading size="xxl" href="https://www.newcult.co" target="_blank">
            Join new cult
          </GradientHeading>
        </div>

        <LogoCarousel columnCount={3} logos={allLogos} /> 
      </div>
    </div>
  );
}