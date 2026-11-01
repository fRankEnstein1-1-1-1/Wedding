import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MusicToggle from './components/wedding/MusicToggle';
import AmbientParticles from './components/wedding/AmbientParticles';
import FigmaScreen1 from './components/wedding/FigmaScreen1';
import FigmaScreen2 from './components/wedding/FigmaScreen2';
import FigmaScreen3 from './components/wedding/FigmaScreen3';
import './App.css';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 440
  );
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Total native Figma height across all 3 screens (3123px * 3 = 9369px)
  const FIGMA_WIDTH = 440;
  const TOTAL_HEIGHT = 3123 * 3;

  // Responsive scaling: On any phone width (e.g. 360px, 375px, 390px, 412px, 430px),
  // scale proportionally so the 440px canvas spans exactly 100vw with zero horizontal scroll.
  // On screens > 440px (desktop/tablets), scale remains 1 and is housed in a luxury phone mockup frame.
  const isMobile = windowWidth <= FIGMA_WIDTH;
  const scale = isMobile ? windowWidth / FIGMA_WIDTH : 1;
  const containerHeight = TOTAL_HEIGHT * scale;

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-start bg-[#1c0307] selection:bg-[#ddae65] selection:text-[#320712] overflow-x-hidden">
      {/* ── Ambient Desktop Luxury Wine Velvet Backdrop ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5e121a]/60 via-[#2e050d]/80 to-[#120104]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(#ddae65 1px, transparent 1px), radial-gradient(#ddae65 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0, 24px 24px',
          }}
        />
      </div>

      {/* ── Ambient Falling Gold Dust / Star Particles ── */}
      <AmbientParticles count={isMobile ? 18 : 28} />

      {/* ── Floating Wedding Background Music Player ── */}
      <MusicToggle />

      {/* ── Desktop Phone Shell Header (Only shown on desktop screens) ── */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-30 mt-6 mb-3 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3a0812]/80 border border-[#ddae65]/40 text-[#ddae65] shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <span className="text-sm">📱</span>
          <span className="text-[12px] font-['Cinzel_Decorative',serif] font-bold tracking-widest uppercase">
            Mobile Phone Invitation Preview
          </span>
        </motion.div>
      )}

      {/* ── Floating "Scroll to Explore" Mobile Helper ── */}
      <AnimatePresence>
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center gap-1.5 bg-[#25040a]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#ddae65]/50 shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
          >
            <span className="text-[10px] font-['Cinzel_Decorative',serif] font-bold tracking-widest text-[#f5d898] uppercase">
              Scroll to explore
            </span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[#ddae65] text-xs leading-none"
            >
              ↓
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Outer Mobile Container ── */}
      <div
        className={`relative z-10 transition-all duration-300 ${
          !isMobile
            ? 'my-4 rounded-[48px] p-2.5 bg-[#200408] border-2 border-[#ddae65]/40 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_60px_rgba(221,174,101,0.25)]'
            : 'w-full'
        }`}
      >
        {/* Sleek Dynamic Island / Speaker Notch for Desktop Phone Frame */}
        {!isMobile && (
          <div className="w-28 h-5 bg-[#120104] rounded-full mx-auto mb-2 flex items-center justify-center gap-2 border border-white/5 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1e0309] border border-[#ddae65]/20" />
            <div className="w-8 h-1 rounded-full bg-[#2a060e]" />
          </div>
        )}

        {/* Viewport Scaled Wrapper */}
        <div
          style={{
            width: isMobile ? `${windowWidth}px` : `${FIGMA_WIDTH}px`,
            height: `${containerHeight}px`,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: !isMobile ? '36px' : '0px',
          }}
          className="bg-[#6e171f]"
        >
          {/* Exact Native 440px Canvas Scaled Proportionally */}
          <main
            style={{
              width: `${FIGMA_WIDTH}px`,
              height: `${TOTAL_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            className="bg-[#6e171f] overflow-hidden"
          >
            {/* Screen 1: Hero Couple Embrace, Dancing Script, Floating Lanterns, Holy Scripture & Nuptials */}
            <FigmaScreen1 />

            {/* Screen 2: Countdown Timer, December 2026 Calendar, and 4 Celebration Ceremonies */}
            <FigmaScreen2 />

            {/* Screen 3: Moments to Remember, Meadow Couple Portrait, WhatsApp RSVP & Outro Signature */}
            <FigmaScreen3 />
          </main>
        </div>
      </div>
    </div>
  );
}
