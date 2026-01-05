"use client"; // Wajib untuk animasi di Next.js App Router

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function ScrollTriggered() {
  return (
    // Container Utama (Tailwind)
    <div className="mx-auto w-full max-w-[500px] py-24 pb-40">
      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      // Card Container (Tailwind)
      // -mb-32 memberikan efek tumpuk (negative margin)
      className={`overflow-hidden flex justify-center items-center relative pt-5 -mb-32`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8, once: true }} // once: true agar animasi cuma sekali pas scroll
    >
      {/* Background Splash dengan ClipPath khusus */}
      <div
        className="absolute inset-0"
        style={{
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
        }}
      />

      {/* Kartu Utama (Tailwind) */}
      <motion.div
        variants={cardVariants}
        className="flex justify-center items-center rounded-[20px] bg-[#f5f5f5] w-[300px] h-[430px] text-[164px] shadow-2xl origin-[10%_60%]"
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300, // Mulai dari bawah (tersembunyi)
    opacity: 0,
  },
  onscreen: {
    y: 50, // Muncul ke posisi ini
    rotate: -10, // Miring sedikit
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

// Data Dummy (Bisa diganti nanti)
const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];
