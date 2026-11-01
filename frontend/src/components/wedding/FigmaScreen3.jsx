import React from 'react';
import { motion } from 'framer-motion';

import coupleStoryImg from '../../assets/figma/couple-story.png';
import timeImg from '../../assets/figma/time.png';
import lineEndImg from '../../assets/figma/line end.png';

export default function FigmaScreen3() {
  return (
    <div
      className="bg-[#6e171f] relative w-[440px] h-[3123px] overflow-hidden select-none"
      data-name="iPhone 16 & 17 Pro Max - 3"
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

      {/* ── Title: Moments to Remember with scroll reveal ── */}
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Playfair_Display','Cinzel_Decorative',serif] font-normal leading-[2] left-[219px] text-[#ddae65] text-[35px] text-center top-[12px] tracking-[1.75px] whitespace-nowrap drop-shadow-[0_0_12px_rgba(221,174,101,0.4)]"
      >
        Moments to Remember
      </motion.p>

      {/* ── Subtitle: Our Story ── */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[219.5px] text-[#ddae65] text-[25px] text-center top-[57px] tracking-[1.25px] whitespace-nowrap uppercase drop-shadow-[0_0_10px_rgba(221,174,101,0.3)]"
      >
        Our Story
      </motion.p>

      {/* ── Arch/Capsule Portrait of the Couple (Shailesh & Reema) with breathing motion ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute h-[522px] left-[45px] rounded-[161px] top-[140px] w-[348px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_30px_rgba(221,174,101,0.3)] border-2 border-[#ddae65]/50"
      >
        <motion.img
          alt="Shailesh & Reema Moments"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[161px] size-full"
          src={coupleStoryImg}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ── Group 9: Treasured Presence Banner & RSVP ── */}
      <div className="absolute contents left-[-415px] top-[2590px]">
        {/* Banner Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute h-[307px] left-[-415px] top-[2590px] w-[1287px] pointer-events-none"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-[910.98%] left-0 max-w-none top-[-415.85%] w-full"
              src={timeImg}
            />
          </div>
        </motion.div>

        {/* Line End 5 */}
        <div className="absolute h-[41px] left-[5px] top-[2656px] w-[428px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[2280.92%] left-[0.09%] max-w-none top-[-1055.98%] w-full"
              src={lineEndImg}
            />
          </div>
        </div>

        {/* Line End 6 */}
        <div className="absolute h-[41px] left-[5px] top-[2796px] w-[428px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[2280.92%] left-[0.09%] max-w-none top-[-1055.98%] w-full"
              src={lineEndImg}
            />
          </div>
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[219px] text-[#ddae65] text-[20px] text-center top-[2704px] tracking-[1px] w-[406px] drop-shadow-[0_0_10px_rgba(221,174,101,0.4)]"
        >
          Your presence will be our treasured gift
        </motion.p>

        {/* Interactive RSVP Phone / WhatsApp Button with pulsing golden aura */}
        <motion.a
          href="https://wa.me/919480301277?text=Hi%20Shailesh%20%26%20Reema%2C%20we%20will%20be%20delighted%20to%20attend%20your%20wedding%20celebrations!"
          target="_blank"
          rel="noopener noreferrer"
          title="Click to RSVP via WhatsApp (9480301277)"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="-translate-x-1/2 absolute left-[220px] top-[2862px] z-20 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#3d0912]/80 backdrop-blur-md border border-[#ddae65] shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_20px_rgba(221,174,101,0.35)] text-[#ddae65] hover:text-[#fff4d6] hover:border-[#fff4d6] transition-all cursor-pointer group"
        >
          {/* WhatsApp green/gold badge icon */}
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366] text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.52 0-3-.4-4.3-1.17l-.31-.18-3.19.84.85-3.11-.2-.32a8.217 8.217 0 01-1.26-4.3c0-4.57 3.72-8.29 8.29-8.29 2.22 0 4.3 0.86 5.87 2.43a8.23 8.23 0 012.43 5.86c-.01 4.58-3.73 8.29-8.29 8.29zm4.54-6.2c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"/>
            </svg>
          </span>

          <span className="font-['Cinzel_Decorative',serif] font-bold text-[17px] tracking-[1px] whitespace-nowrap">
            RSVP: 9480301277
          </span>

          {/* Animated pulse halo around RSVP */}
          <motion.span
            className="absolute -inset-1 rounded-full border border-[#ddae65]/50 pointer-events-none"
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.a>
      </div>

      {/* ── Couple Script Closing Signature with warm glow ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Great_Vibes',cursive] font-normal h-[103px] leading-[0] left-[223.5px] text-[#ddae65] text-[35px] text-center top-[2947px] tracking-[1.75px] w-[243px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
      >
        <p className="leading-none mb-0 text-[#f5d898]">Shailesh Preetham</p>
        <p className="leading-none mb-0 text-[#ddae65]">&amp;</p>
        <p className="leading-none text-[#f5d898]">Reema Marita</p>
      </motion.div>

      {/* ── Bottom Credit Bar ── */}
      <div className="absolute h-[28px] left-[-44px] top-[3107px] w-[494px] pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute h-[5383.49%] left-[-21.03%] max-w-none top-[-2712.44%] w-[140.59%]"
            src={timeImg}
          />
        </div>
      </div>

      {/* ── Studio Credit ── */}
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[219.5px] text-[#ddae65] text-[8px] text-center top-[3108px] tracking-[0.4px] whitespace-nowrap uppercase opacity-90"
      >
        an art by eternal studios
      </p>
    </div>
  );
}
