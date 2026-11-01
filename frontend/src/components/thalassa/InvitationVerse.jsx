import React from 'react';
import { motion } from 'framer-motion';
import FloatingLanterns from './FloatingLanterns';
import scrollBannerImg from '../../assets/figma/scroll-banner.png';
import jesusImg from '../../assets/figma/jesus.png';
import ringAndLeafImg from '../../assets/figma/ring-and-leaf.png';

export default function InvitationVerse() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 bg-[#3d0f2b] text-[#f7e1b5] overflow-hidden">
      {/* Background radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #6e1c4a 0%, #29081c 80%)',
        }}
      />

      <FloatingLanterns count={10} />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        {/* Blessings of God symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <img
            src={jesusImg}
            alt="Blessings of God"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-amber-300 font-semibold mb-4"
          style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}
        >
          WITH THE BLESSINGS OF GOD
        </motion.p>

        {/* Parents Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-6 space-y-1"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-amber-100 font-normal tracking-wide">
            Bazil &amp; Teresa Dsouza
          </p>
          <p className="text-lg sm:text-xl font-normal text-amber-300/80 italic font-serif">&amp;</p>
          <p className="text-xl sm:text-2xl md:text-3xl text-amber-100 font-normal tracking-wide">
            Eugine &amp; Mabel Pinto
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg font-light text-amber-200/90 tracking-wide max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          cordially invite you to bless the nuptials and celebrate the holy matrimony of their beloved children
        </motion.p>

        {/* Ring & Leaf motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex justify-center my-4"
        >
          <img
            src={ringAndLeafImg}
            alt="Wedding Rings"
            className="w-28 sm:w-36 h-auto object-contain opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-6"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-amber-200 tracking-wide leading-tight"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Shailesh Preetham
          </h2>
          <span className="block text-2xl sm:text-3xl text-amber-300/80 my-1 font-serif italic">&amp;</span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-amber-200 tracking-wide leading-tight"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Reema Marita
          </h2>
        </motion.div>

        {/* Biblical Scroll Quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <div className="relative p-6 rounded-2xl bg-amber-950/40 border border-amber-400/20 backdrop-blur-sm shadow-xl">
            <p
              className="text-base sm:text-lg italic text-amber-100/95 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              &ldquo;And over all these virtues put on love, which binds them all together in perfect unity.&rdquo;
            </p>
            <span className="block mt-2 text-xs sm:text-sm tracking-widest uppercase text-amber-300 font-medium">
              — Colossians 3:14
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
