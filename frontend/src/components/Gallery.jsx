import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import GalleryItem from './GalleryItem';

/* ═══════════════════════════════════════════════════════════════════════
   Gallery — Staggered masonry grid with parallax header
   ═══════════════════════════════════════════════════════════════════════
   Props:
     images  – Array of { src, alt, span? } objects
     title   – Section heading text
     subtitle – Optional tagline
   ═══════════════════════════════════════════════════════════════════════ */

/* ── Masonry layout config ─────────────────────────────────────────── */
// Define which items get special sizing for visual rhythm.
// span: 2 = large tile (2×2),  'wide' = horizontal (2×1), 1 = normal
const LAYOUT_PATTERN = [2, 1, 1, 'wide', 1, 1, 2, 1];

function Gallery({ images = [], title = 'Our Story', subtitle }) {
  /* ── Assign span pattern to images ──────────────────────────────── */
  const tilesWithLayout = useMemo(() =>
    images.map((img, i) => ({
      ...img,
      span: LAYOUT_PATTERN[i % LAYOUT_PATTERN.length],
      index: i,
    })),
    [images]
  );

  return (
    <section className="gallery-premium relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* ── Ambient background glow ──────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.04]"
             style={{ background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.03]"
             style={{ background: 'radial-gradient(circle, #721c24 0%, transparent 70%)' }} />
      </div>

      {/* ── Section header ───────────────────────────────────────── */}
      <motion.div
        className="text-center mb-14 sm:mb-20 px-5 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {subtitle && (
          <motion.p
            className="text-sm sm:text-base tracking-[0.3em] uppercase mb-4"
            style={{ color: '#c5a059', fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide"
          style={{
            fontFamily: "'Cinzel', serif",
            color: '#721c24',
            lineHeight: 1.2,
          }}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {title}
        </motion.h2>

        {/* Ornamental line */}
        <motion.div
          className="mx-auto mt-5"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: 'center' }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg, transparent, #c5a059)' }} />
            <div className="w-2 h-2 rotate-45 border" style={{ borderColor: '#c5a059' }} />
            <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(90deg, #c5a059, transparent)' }} />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Masonry grid ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px]">
          {tilesWithLayout.map((tile, i) => (
            <GalleryItem
              key={i}
              src={tile.src}
              alt={tile.alt}
              span={tile.span}
              index={tile.index}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom fade-out gradient ─────────────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, var(--bg-light, #fcf9f5), transparent)' }}
      />
    </section>
  );
}

export default Gallery;
