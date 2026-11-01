import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cakeTopperImg from '../../assets/thalassa/cake-topper.png';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("December 30, 2026 16:30:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#250619] via-[#1a0411] to-[#0d0108] text-[#f7e1b5] overflow-hidden flex flex-col items-center text-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #a22567 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Wedding Cake / Couple Pedestal Topper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-64 sm:w-80 md:w-96 mb-8"
        >
          <img
            src={cakeTopperImg}
            alt="Wedding Cake & Couple Pedestal"
            className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            loading="lazy"
          />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-100 tracking-wide"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The countdown begins
          </h2>
        </motion.div>

        {/* ── LIVE DIGITAL COUNTDOWN TIMER ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-12 p-4 sm:p-6 rounded-3xl bg-black/40 border border-amber-400/25 backdrop-blur-md shadow-2xl"
        >
          {/* Days */}
          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[72px]">
            <span
              className="text-3xl sm:text-5xl md:text-6xl font-light text-amber-200 tracking-wider"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {formatNumber(timeLeft.days)}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-amber-300/80 font-medium mt-1">
              DAYS
            </span>
          </div>

          <span className="text-2xl sm:text-4xl text-amber-400/60 font-light -mt-4">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[72px]">
            <span
              className="text-3xl sm:text-5xl md:text-6xl font-light text-amber-200 tracking-wider"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-amber-300/80 font-medium mt-1">
              HOURS
            </span>
          </div>

          <span className="text-2xl sm:text-4xl text-amber-400/60 font-light -mt-4">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[72px]">
            <span
              className="text-3xl sm:text-5xl md:text-6xl font-light text-amber-200 tracking-wider"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-amber-300/80 font-medium mt-1">
              MINS
            </span>
          </div>

          <span className="text-2xl sm:text-4xl text-amber-400/60 font-light -mt-4">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[72px]">
            <span
              className="text-3xl sm:text-5xl md:text-6xl font-light text-amber-200 tracking-wider"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-amber-300/80 font-medium mt-1">
              SECS
            </span>
          </div>
        </motion.div>

        {/* Heartfelt Family Note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl font-light text-amber-100/90 italic max-w-xl mx-auto leading-relaxed mb-8"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          &ldquo;Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.&rdquo;
        </motion.p>

        {/* Couple Signatures */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-4"
        >
          <p
            className="text-4xl sm:text-5xl text-amber-200 tracking-wide"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Shailesh &amp; Reema
          </p>
        </motion.div>

        {/* Footer info & RSVP reminder */}
        <div className="mt-12 pt-8 border-t border-amber-300/15 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60 font-light">
          <p>© 2026 Shailesh Preetham &amp; Reema Marita Wedding Celebration</p>
          <p>RSVP Contact: +91 9480301277</p>
        </div>
      </div>
    </section>
  );
}
