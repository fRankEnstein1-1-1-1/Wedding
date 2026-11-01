import React from 'react';
import { motion } from 'framer-motion';
import starburstBadgeImg from '../../assets/thalassa/starburst-badge.png';

export default function RouteBadge() {
  const mainMapUrl = "https://maps.google.com/?q=St+Sebastian+Church+Permannur+Thokkottu";

  return (
    <section className="relative w-full py-16 px-4 bg-[#320822] flex justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center justify-center text-center group cursor-pointer"
        onClick={() => window.open(mainMapUrl, '_blank', 'noopener,noreferrer')}
      >
        {/* Ornate Golden Starburst Crest */}
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
          <motion.img
            src={starburstBadgeImg}
            alt="See the route - Map location"
            className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(255,200,80,0.3)] transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Centered Text Overlay over the sunburst */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-[#4a0f2e]">
            <h3
              className="text-3xl sm:text-4xl font-normal tracking-wide leading-tight text-[#4a0f2e] drop-shadow-sm"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              See the
              <br />
              route
            </h3>

            <p
              className="text-xs sm:text-sm font-light tracking-wider mt-2 text-[#5a1438] opacity-90"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Click to open the map
            </p>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-3 text-[#5a1438]"
            >
              <svg
                className="w-6 h-6 mx-auto fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
