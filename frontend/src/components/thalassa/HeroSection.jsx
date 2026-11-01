import React from 'react';
import { motion } from 'framer-motion';
import heroBeachImg from '../../assets/thalassa/hero-beach.jpg';
import aisleCarpetImg from '../../assets/thalassa/aisle-carpet.png';
import FloatingLanterns from './FloatingLanterns';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f7a072] via-[#e56b6f] to-[#6d214f] text-white">
      {/* Ambient floating lanterns */}
      <FloatingLanterns count={14} />

      {/* ── SKY & HEADLINE TITLE ──────────────────────────────── */}
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 text-center z-20">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm tracking-[0.35em] uppercase text-amber-200/90 font-light mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col items-center justify-center font-normal tracking-[0.18em] leading-tight select-none"
          style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
        >
          <span className="text-3xl sm:text-5xl md:text-6xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            SHAILESH
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-light text-amber-200/90 my-1 sm:my-2 tracking-[0.4em] font-serif italic">
            weds
          </span>
          <span className="text-3xl sm:text-5xl md:text-6xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            REEMA
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 flex items-center justify-center gap-3"
        >
          <div className="h-px w-10 sm:w-16 bg-amber-200/50" />
          <span className="text-xs sm:text-sm tracking-[0.25em] text-amber-100 font-light">
            30 DECEMBER 2026 • MANGALORE
          </span>
          <div className="h-px w-10 sm:w-16 bg-amber-200/50" />
        </motion.div>
      </div>

      {/* ── BEACH ALTAR CEREMONY SCENE ────────────────────────── */}
      <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 z-10 -mb-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative rounded-t-3xl overflow-hidden shadow-2xl border-t border-amber-300/30"
        >
          <img
            src={heroBeachImg}
            alt="Beach wedding altar with bride walking down the aisle"
            className="w-full h-auto object-cover max-h-[560px] sm:max-h-[640px]"
          />

          {/* Soft vignette gradient on bottom edge to blend into aisle */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#4a1236] to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* ── SEAMLESS FLOWING GOWN TRAIN & AISLE RUNNER ─────────── */}
      <div className="relative w-full -mt-2 z-20 flex justify-center overflow-hidden">
        <div className="w-full max-w-4xl relative">
          <img
            src={aisleCarpetImg}
            alt="Flowing royal purple wedding carpet"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
