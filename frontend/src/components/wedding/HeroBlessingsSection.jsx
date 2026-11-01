import React from 'react';
import { motion } from 'framer-motion';
import FloatingLanterns from './FloatingLanterns';
import FiligreeDivider from './FiligreeDivider';

import heroCoupleImg from '../../assets/figma/hero-couple.png';
import scrollVerseImg from '../../assets/figma/crop_scroll.png';
import diamondCrestImg from '../../assets/figma/crop_verse.png';
import jesusCrossImg from '../../assets/figma/jesus.png';
import ringWreathImg from '../../assets/figma/ring-and-leaf.png';
import petalImg from '../../assets/figma/petal.png';

export default function HeroBlessingsSection() {
  return (
    <section className="relative w-full text-center overflow-hidden">
      {/* ── 1. SKY CANOPY & FLOATING LANTERNS ── */}
      <div className="relative w-full pt-16 pb-8 px-4 bg-gradient-to-b from-[#0c142b] via-[#1e1335] to-[#5a1222] overflow-hidden">
        <FloatingLanterns />

        {/* Ambient starry backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/10 via-transparent to-transparent pointer-events-none" />

        {/* Headline Couple Script Typography */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-20 max-w-[420px] mx-auto select-none"
        >
          <h1
            className="text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            <span className="block text-4xl sm:text-5xl leading-tight text-[#fffbf2] tracking-wide">
              Shailesh Preetham
            </span>
            <span className="block text-2xl sm:text-3xl my-1 text-[#f5d898] font-normal tracking-widest italic opacity-95">
              Weds
            </span>
            <span className="block text-4xl sm:text-5xl leading-tight text-[#fffbf2] tracking-wide">
              Reema Marita
            </span>
          </h1>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ddae65]" />
            <span
              className="text-[12px] tracking-[0.3em] uppercase text-[#f5d898] font-medium"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              30 December 2026
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ddae65]" />
          </div>
        </motion.div>
      </div>

      {/* ── 2. HERO COUPLE EMBRACE PORTRAIT (Arch Bottom) ── */}
      <div className="relative w-full flex justify-center -mt-2 z-10">
        <div className="relative w-full max-w-[440px] px-2 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative w-full h-[520px] sm:h-[580px] overflow-hidden rounded-b-[220px] shadow-[0_15px_40px_rgba(0,0,0,0.7)] border-b-2 border-amber-300/30"
          >
            <img
              src={heroCoupleImg}
              alt="Shailesh & Reema embracing at golden hour sunset"
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05]"
            />

            {/* Subtle bottom shadow vignette */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#4a0f1d]/90 to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating gold leaf accents around arch */}
          <motion.img
            src={petalImg}
            alt=""
            className="absolute -left-3 top-20 w-12 h-auto opacity-70 pointer-events-none rotate-12"
            animate={{ y: [0, -10, 0], rotate: [12, 18, 12] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={petalImg}
            alt=""
            className="absolute -right-3 top-44 w-10 h-auto opacity-70 pointer-events-none -rotate-45"
            animate={{ y: [0, 8, 0], rotate: [-45, -35, -45] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>
      </div>

      {/* ── 3. BIBLICAL SCROLL VERSE WITH CHERUBS ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-[440px] mx-auto px-3 pt-8 pb-3 z-10"
      >
        <div className="relative w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
          <img
            src={scrollVerseImg}
            alt="And over all these virtues put on love, which binds them all together in perfect unity. - Colossians 3:14"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      </motion.div>

      {/* Filigree Divider */}
      <FiligreeDivider className="my-2" />

      {/* ── 4. DIAMOND RUBY CREST: THE START OF SOMETHING NEW ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-[380px] mx-auto px-4 py-4 z-10"
      >
        <div className="relative drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          <img
            src={diamondCrestImg}
            alt="The Start of Something New"
            className="w-full h-auto object-contain mx-auto max-h-[380px]"
          />
        </div>
      </motion.div>

      {/* ── 5. DIVINE BLESSINGS & PARENTS ANNOUNCEMENT ── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-[430px] mx-auto px-4 pt-6 pb-2 z-10"
      >
        <h2
          className="text-2xl sm:text-[26px] font-bold text-[#ddae65] tracking-[1.5px] uppercase mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          WITH THE BLESSINGS OF GOD
        </h2>

        {/* Christ Cross, Holy Bible & Dove Symbol */}
        <div className="w-[110px] h-[120px] mx-auto my-3 flex items-center justify-center">
          <img
            src={jesusCrossImg}
            alt="Holy Cross, Open Bible and White Dove"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_15px_rgba(221,174,101,0.4)]"
          />
        </div>

        {/* Host Families */}
        <div
          className="mt-6 mb-4 text-[#ddae65] tracking-[1px]"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          <p className="text-[19px] sm:text-[21px] font-bold leading-relaxed">
            BAZIL &amp; TERESA DSOUZA
          </p>
          <p
            className="text-3xl text-[#ddae65] my-1"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            &amp;
          </p>
          <p className="text-[19px] sm:text-[21px] font-bold leading-relaxed">
            EUGINE &amp; MABEL PINTO
          </p>
        </div>

        <p
          className="text-[16px] sm:text-[17px] font-bold text-[#ddae65] tracking-[1px] leading-loose max-w-[380px] mx-auto my-5 uppercase"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          CORDIALLY INVITE YOU TO BLESS THE NUPTIALS
        </p>

        {/* Geometric Hexagonal Gold Wreath with Couple Calligraphy */}
        <div className="relative w-full max-w-[390px] h-[280px] mx-auto my-4 flex items-center justify-center">
          <img
            src={ringWreathImg}
            alt=""
            className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          />
          <div
            className="relative z-10 text-center px-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            <p className="text-4xl sm:text-5xl text-[#ddae65] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Shailesh Preetham
            </p>
            <p className="text-3xl text-[#ddae65] my-0 leading-tight">
              &amp;
            </p>
            <p className="text-4xl sm:text-5xl text-[#ddae65] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Reema Marita
            </p>
          </div>
        </div>
      </motion.div>

      {/* Filigree Divider */}
      <FiligreeDivider className="my-3" />
    </section>
  );
}
