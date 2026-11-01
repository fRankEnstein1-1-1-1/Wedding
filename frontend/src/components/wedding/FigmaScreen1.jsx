import React from 'react';
import { motion } from 'framer-motion';

import canvasImg2 from '../../assets/figma/canvas img 2.png';
import lanternGlowImg from '../../assets/figma/lantern-glow.png';
import quortImg from '../../assets/figma/quort.png';
import verseImg from '../../assets/figma/And over all these virtues put on love, which binds them all together in perfect unity..png';
import jesusImg from '../../assets/figma/jesus.png';
import ringLeafImg from '../../assets/figma/ring and leaf.png';
import lineEndImg from '../../assets/figma/line end.png';
import leafLineSvg from '../../assets/figma/leaf-line.svg';

// Exact Figma positions, sizes, and rotations for all 20 sky lanterns
const LANTERNS = [
  { id: 1, left: 363, top: 544, w: 77.985, h: 87.629, innerW: 48.806, innerH: 73.174, rot: -28.75, dur: 4.8, delay: 0.2, drift: 8 },
  { id: 2, left: 318, top: 582, w: 114.041, h: 121.197, innerW: 67.322, innerH: 100.934, rot: 36.34, dur: 5.5, delay: 0.8, drift: -10 },
  { id: 3, left: 349, top: 68.92, w: 69.744, h: 88.076, innerW: 51.651, innerH: 77.438, rot: 14.82, dur: 4.2, delay: 1.2, drift: 7 },
  { id: 4, left: 349.64, top: -20, w: 117.115, h: 124.456, innerW: 69.133, innerH: 103.649, rot: -36.35, dur: 6.0, delay: 0.5, drift: -9 },
  { id: 5, left: -18, top: 542.17, w: 57.721, h: 77.076, innerW: 46.967, innerH: 70.416, rot: 170.71, dur: 4.6, delay: 1.5, drift: 6 },
  { id: 6, left: 367.31, top: 385.82, w: 58.231, h: 73.536, innerW: 43.124, innerH: 64.655, rot: 14.82, dur: 5.0, delay: 0.9, drift: -7 },
  { id: 7, left: 311, top: 346, w: 84.943, h: 100.027, innerW: 56.526, innerH: 84.747, rot: -22.79, dur: 4.4, delay: 0.3, drift: 8 },
  { id: 8, left: 377.48, top: 796.53, w: 102.493, h: 110.946, innerW: 61.563, innerH: 92.299, rot: 146.21, dur: 5.8, delay: 1.7, drift: -8 },
  { id: 9, left: 197.23, top: 514.2, w: 80.02, h: 81.696, innerW: 45.815, innerH: 68.689, rot: 42.03, dur: 4.9, delay: 0.7, drift: 6 },
  { id: 10, left: 178.31, top: 409, w: 106.019, h: 133.885, innerW: 78.515, innerH: 117.714, rot: 14.82, dur: 5.2, delay: 1.1, drift: -11 },
  { id: 11, left: 156, top: 557, w: 69.809, h: 77.331, innerW: 42.971, innerH: 64.425, rot: -30.64, dur: 4.3, delay: 1.9, drift: 7 },
  { id: 12, left: -40, top: 259, w: 137.696, h: 173.887, innerW: 101.973, innerH: 152.885, rot: 14.82, dur: 6.2, delay: 0.4, drift: -12 },
  { id: 13, left: 35, top: 345.96, w: 82.894, h: 99.28, innerW: 56.526, innerH: 84.747, rot: -20.76, dur: 4.7, delay: 1.4, drift: 8 },
  { id: 14, left: 177.18, top: 776.24, w: 97.303, h: 104.15, innerW: 57.815, innerH: 86.68, rot: -35.34, dur: 5.4, delay: 0.6, drift: -9 },
  { id: 15, left: 172, top: 724, w: 69.176, h: 87.358, innerW: 51.23, innerH: 76.807, rot: 14.82, dur: 4.5, delay: 1.6, drift: 7 },
  { id: 16, left: 44.04, top: 42, w: 76.327, h: 96.388, innerW: 56.526, innerH: 84.747, rot: 14.82, dur: 5.1, delay: 0.3, drift: -8 },
  { id: 17, left: -65.58, top: -41.25, w: 152.545, h: 165.045, innerW: 91.582, innerH: 137.306, rot: -33.85, dur: 6.5, delay: 1.0, drift: 12 },
  { id: 18, left: 21, top: 107.03, w: 57.701, h: 66.269, innerW: 37.114, innerH: 55.644, rot: -25.92, dur: 4.1, delay: 1.8, drift: -6 },
  { id: 19, left: -32, top: 717.22, w: 96.33, h: 104.192, innerW: 57.815, innerH: 86.68, rot: 33.9, dur: 5.6, delay: 0.5, drift: 9 },
  { id: 20, left: -32, top: 678, w: 89.53, h: 91.32, innerW: 51.23, innerH: 76.807, rot: -42.16, dur: 4.6, delay: 1.3, drift: -7 },
];

export default function FigmaScreen1() {
  return (
    <div
      className="bg-[#6e171f] relative w-[440px] h-[3123px] overflow-hidden select-none"
      data-name="iPhone 16 & 17 Pro Max - 1"
    >
      {/* ── Royal gold patterned background ── */}
      <div className="absolute h-[3459px] left-0 top-0 w-[440px] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(97.25deg, rgba(110, 23, 31, 0.72) 25%, rgba(90, 15, 29, 0.72) 50%, rgba(74, 15, 29, 0.72) 75%)',
          }}
        />
        {/* Subtle royal damask texture */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(#ddae65 1px, transparent 1px), radial-gradient(#ddae65 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
        />
      </div>

      {/* ── Hero Couple sunset image with arched bottom & subtle breathing motion ── */}
      <div className="absolute h-[1536px] left-[-311px] rounded-bl-[649px] rounded-br-[590px] top-[-65px] w-[1024px] overflow-hidden">
        <motion.img
          alt="Shailesh & Reema"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[649px] rounded-br-[590px] size-full"
          src={canvasImg2}
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ── Headline Couple Names over night sky with animated entrance & glow ── */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Dancing_Script',cursive] font-normal h-[146px] leading-[0] left-[223.5px] text-[50px] text-white text-center top-[222px] tracking-[2.5px] w-[403px] drop-shadow-[0_2px_15px_rgba(0,0,0,0.85)] z-20"
      >
        <p className="leading-none mb-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          Shailesh Preetham
        </p>
        <motion.p
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="leading-none mb-0 text-[42px] my-1 text-amber-200"
        >
          Weds
        </motion.p>
        <p className="leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          Reema Marita
        </p>
      </motion.div>

      {/* ── Animated Floating Sky Lanterns (20 total with organic drift & candle flicker) ── */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {LANTERNS.map((lantern) => (
          <motion.div
            key={lantern.id}
            className="absolute flex items-center justify-center"
            style={{
              left: `${lantern.left}px`,
              top: `${lantern.top}px`,
              width: `${lantern.w}px`,
              height: `${lantern.h}px`,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: [0.8, 1, 0.85],
              y: [0, -lantern.drift, 0],
              x: [0, lantern.drift * 0.3, 0],
            }}
            transition={{
              opacity: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: lantern.delay,
              },
              y: {
                duration: lantern.dur,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: lantern.delay,
              },
              x: {
                duration: lantern.dur * 1.3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: lantern.delay + 0.5,
              },
            }}
          >
            <motion.div
              style={{ transform: `rotate(${lantern.rot}deg)` }}
              animate={{
                rotate: [lantern.rot - 2, lantern.rot + 2, lantern.rot - 2],
              }}
              transition={{
                duration: lantern.dur * 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: lantern.delay,
              }}
              className="flex-none"
            >
              <div
                style={{
                  width: `${lantern.innerW}px`,
                  height: `${lantern.innerH}px`,
                }}
                className="relative"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover size-full drop-shadow-[0_0_14px_rgba(255,100,80,0.75)]"
                  src={lanternGlowImg}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── Leaf divider vector with entrance reveal ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-[50.4%_7.32%_48.58%_7.27%] pointer-events-none"
      >
        <div className="absolute inset-[-1.73%_-0.2%]">
          <img alt="" className="block max-w-none size-full" src={leafLineSvg} />
        </div>
      </motion.div>

      {/* ── Biblical Scripture Parchment Scroll with Cherubs & Scroll-triggered Reveal ── */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="absolute h-[214px] left-[2px] top-[1491px] w-[435px]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)]">
          <img
            alt="Scripture scroll: Colossians 3:14"
            className="absolute h-[442.06%] left-[-0.04%] max-w-none top-0 w-[100.07%]"
            src={quortImg}
          />
        </div>
      </motion.div>

      {/* ── Line end divider ── */}
      <div className="absolute h-[41px] left-[6px] top-[1725px] w-[428px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[2280.92%] left-[0.09%] max-w-none top-[-1055.98%] w-full"
            src={lineEndImg}
          />
        </div>
      </div>

      {/* ── "THE START OF SOMETHING NEW" Ruby Diamond Crest with Shimmer Light-Sweep ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute h-[542px] left-[2px] top-[1790px] w-[435px] group"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt="The Start of Something New"
            className="absolute h-[174.41%] left-0 max-w-none top-[-33.98%] w-full"
            src={verseImg}
          />

          {/* Sweeping golden shimmer light streak across the ruby crest */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)',
            }}
            animate={{ x: ['-120%', '160%'] }}
            transition={{
              repeat: Infinity,
              duration: 2.4,
              repeatDelay: 3.5,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* ── "With the blessings of God" with scroll reveal & golden text glow ── */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[219px] text-[#ddae65] text-[25px] text-center top-[2358px] tracking-[1.25px] whitespace-nowrap drop-shadow-[0_0_12px_rgba(221,174,101,0.45)]"
      >
        With the blessings of God
      </motion.p>

      {/* ── Jesus Cross, Dove & Open Bible emblem with breathing golden aura ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute h-[120px] left-[164px] top-[2408px] w-[111px] flex items-center justify-center"
      >
        {/* Radiating golden halo / aura behind the Holy Cross */}
        <motion.div
          className="absolute -inset-6 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(221,174,101,0.5) 0%, rgba(221,174,101,0) 70%)',
          }}
          animate={{ scale: [0.95, 1.25, 0.95], opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <img
          alt="Holy Cross and Dove"
          className="relative z-10 max-w-none object-contain pointer-events-none size-full drop-shadow-[0_4px_16px_rgba(221,174,101,0.5)]"
          src={jesusImg}
        />
      </motion.div>

      {/* ── Host Parents Announcement with smooth fade-in ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold h-[108px] leading-[0] left-[220px] text-[#ddae65] text-center top-[2545px] tracking-[1px] w-[328px]"
      >
        <p className="leading-[1.48] mb-0 text-[20px]">Bazil &amp; Teresa Dsouza</p>
        <p className="font-['Great_Vibes',cursive] font-normal leading-[1.48] mb-0 text-[25px]">
          &amp;
        </p>
        <p className="leading-[1.48] text-[20px]">Eugine &amp; Mabel Pinto</p>
      </motion.div>

      {/* ── Cordially Invite text ── */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold h-[71px] leading-[2] left-[220px] text-[#ddae65] text-[18px] text-center top-[2677px] tracking-[0.9px] w-[472px]"
      >
        cordially invite you to bless the nuptials
      </motion.p>

      {/* ── Geometric Hexagonal Wreath with Olive Leaves (gentle floating motion) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1 }}
        animate={{ y: [0, -6, 0] }}
        className="absolute h-[310px] left-[-16px] top-[2739px] w-[437px]"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full drop-shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
          src={ringLeafImg}
        />
      </motion.div>

      {/* ── Couple Script Names inside Wreath with glowing sheen ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Great_Vibes',cursive] font-normal h-[146px] leading-[0] left-[223.5px] text-[#ddae65] text-[45px] text-center top-[2854px] tracking-[2.25px] w-[433px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] z-10"
      >
        <p className="leading-none mb-0 text-[#f5d898]">Shailesh Preetham</p>
        <p className="leading-none mb-0 text-[#ddae65]">&amp;</p>
        <p className="leading-none text-[#f5d898]">Reema Marita</p>
      </motion.div>
    </div>
  );
}
