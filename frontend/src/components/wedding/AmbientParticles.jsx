import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function AmbientParticles({ count = 25 }) {
  // Generate random particles with varying sizes, speeds, and golden tones
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * (100 / count) + Math.random() * 4).toFixed(1)}%`,
      size: Math.random() * 3 + 2, // 2px to 5px
      duration: Math.random() * 10 + 12, // 12s to 22s
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.3,
      drift: (Math.random() - 0.5) * 40,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: -20,
            width: p.size,
            height: p.size,
            backgroundColor: '#ddae65',
            boxShadow: '0 0 6px #f5d898, 0 0 12px rgba(221,174,101,0.5)',
          }}
          initial={{ y: -20, x: 0, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, p.drift, 0, -p.drift, 0],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
