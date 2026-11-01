import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import lanternImg from '../../assets/thalassa/lantern.png';

export default function FloatingLanterns({ count = 18, containerHeight = '100%' }) {
  // Generate random positions and animation offsets
  const lanterns = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const left = Math.floor(Math.random() * 92) + 4; // 4% to 96%
      const size = Math.floor(Math.random() * 26) + 32; // 32px to 58px
      const duration = Math.floor(Math.random() * 8) + 12; // 12s to 20s
      const delay = Math.random() * 8; // 0s to 8s
      const sway = Math.floor(Math.random() * 16) + 10; // sway range in px
      const rotation = (Math.random() - 0.5) * 16; // -8deg to +8deg
      const opacity = 0.75 + Math.random() * 0.25;

      return {
        id: i,
        left,
        size,
        duration,
        delay,
        sway,
        rotation,
        opacity,
      };
    });
  }, [count]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      style={{ height: containerHeight }}
      aria-hidden="true"
    >
      {lanterns.map((l) => (
        <motion.div
          key={l.id}
          className="absolute"
          style={{
            left: `${l.left}%`,
            width: `${l.size}px`,
            bottom: '-80px',
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ['0vh', '-130vh'],
            x: [0, l.sway, -l.sway, 0],
            rotate: [l.rotation, -l.rotation, l.rotation],
            opacity: [0, l.opacity, l.opacity, 0],
          }}
          transition={{
            duration: l.duration,
            repeat: Infinity,
            delay: l.delay,
            ease: 'linear',
          }}
        >
          <img
            src={lanternImg}
            alt=""
            className="w-full h-auto drop-shadow-[0_0_12px_rgba(255,140,50,0.85)] filter brightness-110 select-none"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
