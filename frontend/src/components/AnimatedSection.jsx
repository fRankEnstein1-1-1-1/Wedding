import React from 'react';
import { motion } from 'framer-motion';

/* ── Scroll-triggered section wrapper ────────────────────────── */
export default function AnimatedSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered children (for grids / lists) ──────────────────── */
export function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Text reveal (letter by letter) ──────────────────────────── */
export function TextReveal({ text, className = '', tag = 'h1' }) {
  const Tag = motion[tag] || motion.h1;
  const letters = text.split('');

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04 } },
      }}
      style={{ display: 'inline-block' }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30, rotateX: -90 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.5, ease: 'easeOut' },
            },
          }}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter}
        </motion.span>
      ))}
    </Tag>
  );
}

/* ── Parallax floating element ───────────────────────────────── */
export function FloatingElement({ children, className = '', yRange = 20 }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yRange, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
