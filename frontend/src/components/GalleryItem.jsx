import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════════════
   GalleryItem — A single image tile with scroll-driven zoom + tilt
   ═══════════════════════════════════════════════════════════════════════
   Animation pipeline:
     1. useScroll() tracks this element's viewport position (0→1)
     2. scrollYProgress drives scale (0.82→1.05→1) and opacity (0→1→1)
     3. Mouse position drives subtle 3D perspective tilt (rotateX/Y)
     4. All values pass through useSpring() for heavy, organic damping
     5. CSS will-change + transform3d ensure GPU compositing
   ═══════════════════════════════════════════════════════════════════════ */

const SPRING_CONFIG = { stiffness: 90, damping: 22, mass: 1.2 };
const TILT_SPRING  = { stiffness: 150, damping: 20, mass: 0.8 };

function GalleryItem({ src, alt, span = 1, index = 0 }) {
  const containerRef = useRef(null);

  /* ── Scroll progress for THIS element ────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = element top hits viewport bottom  → 0
    // "end start"  = element bottom hits viewport top → 1
    offset: ['start end', 'end start'],
  });

  /* ── Scroll-driven transforms (raw) ──────────────────────────── */
  const rawScale   = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], [0.82, 0.95, 1.04, 1.04, 0.96]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.85, 1], [0, 0.6, 1, 1, 0.7]);
  const rawY       = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [60, 10, 0, -20]);

  /* ── Smooth everything through springs ───────────────────────── */
  const scale   = useSpring(rawScale,   SPRING_CONFIG);
  const opacity = useSpring(rawOpacity, SPRING_CONFIG);
  const y       = useSpring(rawY,       SPRING_CONFIG);

  /* ── Mouse-driven 3D tilt ────────────────────────────────────── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), TILT_SPRING);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), TILT_SPRING);

  function handleMouseMove(e) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width  - 0.5;
    const py = (e.clientY - rect.top)  / rect.height - 0.5;
    mouseX.set(px);
    mouseY.set(py);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  /* ── Stagger class for masonry ───────────────────────────────── */
  const spanClass =
    span === 2
      ? 'sm:col-span-2 sm:row-span-2'
      : span === 'wide'
        ? 'sm:col-span-2'
        : '';

  const aspectClass =
    span === 2
      ? 'aspect-[4/5]'
      : span === 'wide'
        ? 'aspect-[16/9]'
        : index % 3 === 0
          ? 'aspect-[3/4]'
          : 'aspect-square';

  return (
    <motion.div
      ref={containerRef}
      className={`gallery-tile relative overflow-hidden rounded-2xl cursor-pointer ${spanClass}`}
      style={{
        scale,
        opacity,
        y,
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      {/* Inner wrapper for the overflow-clip zoom on hover */}
      <motion.div
        className={`relative w-full h-full ${aspectClass} overflow-hidden rounded-2xl`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Lazy-loaded image with GPU-composited zoom */}
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
          initial={{ scale: 1.15, filter: 'brightness(0.85) saturate(0.85)' }}
          whileInView={{ scale: 1, filter: 'brightness(1) saturate(1)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{
            scale: 1.12,
            filter: 'brightness(1.08) saturate(1.15)',
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
        />

        {/* Subtle gradient vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Gold border glow on hover — purely decorative */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            boxShadow: '0 0 0 0px rgba(197,160,89,0)',
          }}
          whileHover={{
            boxShadow: '0 0 0 2px rgba(197,160,89,0.4), 0 8px 30px rgba(197,160,89,0.12)',
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default GalleryItem;
