"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background"

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative mt-20 flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Elevate Your Fitness Experience
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Build Your Ultimate Workout Space Today!
        </div>
        <button className="bg-black hover:bg-white hover:border-2 border-black animate-pulse hover:shadow-2xl hover:text-black  dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Get Started
        </button>
      </motion.div>
    </AuroraBackground>
  );
}


