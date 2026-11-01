import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Couple wedding photos from assets
import w1 from '../../assets/images/wedding-01.jpg';
import w2 from '../../assets/images/wedding-02.jpg';
import w3 from '../../assets/images/wedding-03.jpg';
import w4 from '../../assets/images/wedding-04.jpg';
import w5 from '../../assets/images/wedding-05.jpg';
import w6 from '../../assets/images/wedding-06.jpg';
import w7 from '../../assets/images/wedding-07.jpg';
import w8 from '../../assets/images/wedding-08.jpg';
import coupleArch from '../../assets/figma/couple-gallery.png';

const photos = [
  { src: coupleArch, caption: "Shailesh & Reema" },
  { src: w1, caption: "Cherished Moments" },
  { src: w2, caption: "Together Forever" },
  { src: w3, caption: "Love in Bloom" },
  { src: w4, caption: "Eternal Promise" },
  { src: w5, caption: "A Golden Chapter" },
  { src: w6, caption: "Joyous Smiles" },
  { src: w7, caption: "Hand in Hand" },
  { src: w8, caption: "Our Journey Begins" },
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-b from-[#115b5b] via-[#0d4d4d] to-[#073636] text-white overflow-hidden">
      {/* Subtle organic leaf silhouette background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span
            className="text-xs sm:text-sm tracking-[0.35em] uppercase text-teal-200 font-medium"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            OUR STORY
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mt-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Moments to Remember
          </h2>
          <p
            className="text-sm sm:text-base text-teal-100/80 font-light mt-3 max-w-md mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A glimpse into our love, laughter, and lifelong friendship.
          </p>
        </motion.div>

        {/* ── INTERACTIVE CAROUSEL STAGE ───────────────────────── */}
        <div className="relative max-w-3xl mx-auto flex items-center justify-center">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-2 sm:-left-6 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card Presentation */}
          <div className="w-full px-4 sm:px-10">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] max-h-[460px] mx-auto rounded-[32px] overflow-hidden shadow-2xl border-2 border-teal-300/30 bg-teal-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center">
                    <p
                      className="text-base sm:text-xl text-teal-100 font-light tracking-wider"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {photos[currentIndex].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-2 sm:-right-6 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── PAGINATION DOTS ──────────────────────────────────── */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-8 bg-teal-200 shadow-[0_0_8px_rgba(200,255,255,0.8)]'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
