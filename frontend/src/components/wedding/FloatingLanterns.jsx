import React from 'react';
import { motion } from 'framer-motion';

const lanterns = [
  { id: 1, left: '6%', size: 38, delay: 0, duration: 14, opacity: 0.85 },
  { id: 2, left: '18%', size: 28, delay: 2.5, duration: 17, opacity: 0.7 },
  { id: 3, left: '32%', size: 44, delay: 1, duration: 15, opacity: 0.9 },
  { id: 4, left: '72%', size: 36, delay: 3, duration: 16, opacity: 0.8 },
  { id: 5, left: '88%', size: 48, delay: 0.5, duration: 13, opacity: 0.95 },
  { id: 6, left: '48%', size: 32, delay: 4, duration: 18, opacity: 0.75 },
  { id: 7, left: '82%', size: 26, delay: 5, duration: 15, opacity: 0.65 },
  { id: 8, left: '12%', size: 42, delay: 6, duration: 14, opacity: 0.85 },
];

export default function FloatingLanterns() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {lanterns.map((l) => (
        <motion.div
          key={l.id}
          className="absolute bottom-[-60px]"
          style={{
            left: l.left,
            width: l.size,
            height: l.size * 1.35,
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: [-20, -780],
            x: [0, (l.id % 2 === 0 ? 25 : -25), 0],
            opacity: [0, l.opacity, l.opacity, 0],
          }}
          transition={{
            duration: l.duration,
            delay: l.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Glowing paper sky lantern shape */}
          <div className="relative w-full h-full rounded-t-xl rounded-b-md bg-gradient-to-t from-[#ff4d2e] via-[#ff8c42] to-[#ffda79] shadow-[0_0_18px_rgba(255,140,66,0.85),0_0_35px_rgba(255,77,46,0.5)] border border-amber-200/40 opacity-90 flex flex-col justify-end items-center pb-1">
            {/* Inner flame candle glow */}
            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#fff,0_0_14px_#ffbf00] animate-pulse" />
            {/* Bottom rim */}
            <div className="w-3/4 h-0.5 bg-amber-950/60 rounded-full mt-1" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
