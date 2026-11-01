import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import timeImg from '../../assets/figma/time.png';
import lineEndImg from '../../assets/figma/line end.png';
import flowerImg from '../../assets/figma/flower.png';
import leafImg from '../../assets/figma/leaf.png';
import roceBrideImg from '../../assets/figma/roce bride.png';
import roceGroomImg from '../../assets/figma/roce groom.png';
import wedImg from '../../assets/figma/wed.png';
import resImg from '../../assets/figma/res.png';
import calendarImg from '../../assets/figma/calander.png';

export default function FigmaScreen2() {
  // Target date: Dec 27, 2026 19:00 IST (First celebration - Roce)
  const targetDate = new Date('2026-12-27T19:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      className="bg-[#6e171f] relative w-[440px] h-[3123px] overflow-hidden select-none"
      data-name="iPhone 16 & 17 Pro Max - 2"
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

      {/* ── Heading: The Celebration Begins In with subtle shimmer ── */}
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[219.5px] text-[#ddae65] text-[25px] text-center top-[12px] tracking-[1.25px] whitespace-nowrap drop-shadow-[0_0_12px_rgba(221,174,101,0.45)]"
      >
        The Celebration Begins In
      </motion.p>

      {/* ── Time Ornate Banner Box ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute h-[189px] left-[-176px] top-[55px] w-[793px] pointer-events-none"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute h-[910.98%] left-0 max-w-none top-[-415.85%] w-full"
            src={timeImg}
          />
        </div>
      </motion.div>

      {/* ── Live Countdown Numbers Overlay inside the Banner with breathing pulse ── */}
      <div className="absolute left-[30px] top-[105px] w-[380px] flex items-center justify-center gap-5 z-10 text-center font-['Cinzel_Decorative',serif]">
        <div className="flex flex-col items-center">
          <motion.span
            key={`days-${timeLeft.days}`}
            initial={{ scale: 0.92, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-2xl sm:text-3xl font-bold text-[#4a0f1d] leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
          >
            {String(timeLeft.days).padStart(2, '0')}
          </motion.span>
          <span className="text-[9px] font-bold tracking-widest uppercase text-[#6e171f] font-sans mt-0.5">
            Days
          </span>
        </div>
        <span className="text-[#4a0f1d] font-bold text-xl mb-3 animate-pulse">:</span>
        <div className="flex flex-col items-center">
          <motion.span
            key={`hours-${timeLeft.hours}`}
            initial={{ scale: 0.92, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-2xl sm:text-3xl font-bold text-[#4a0f1d] leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
          >
            {String(timeLeft.hours).padStart(2, '0')}
          </motion.span>
          <span className="text-[9px] font-bold tracking-widest uppercase text-[#6e171f] font-sans mt-0.5">
            Hours
          </span>
        </div>
        <span className="text-[#4a0f1d] font-bold text-xl mb-3 animate-pulse">:</span>
        <div className="flex flex-col items-center">
          <motion.span
            key={`mins-${timeLeft.minutes}`}
            initial={{ scale: 0.92, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-2xl sm:text-3xl font-bold text-[#4a0f1d] leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
          >
            {String(timeLeft.minutes).padStart(2, '0')}
          </motion.span>
          <span className="text-[9px] font-bold tracking-widest uppercase text-[#6e171f] font-sans mt-0.5">
            Mins
          </span>
        </div>
        <span className="text-[#4a0f1d] font-bold text-xl mb-3 animate-pulse">:</span>
        <div className="flex flex-col items-center">
          <motion.span
            key={`secs-${timeLeft.seconds}`}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-[#4a0f1d] leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
          >
            {String(timeLeft.seconds).padStart(2, '0')}
          </motion.span>
          <span className="text-[9px] font-bold tracking-widest uppercase text-[#6e171f] font-sans mt-0.5">
            Secs
          </span>
        </div>
      </div>

      {/* ── Flower 1 (top-left) with gentle breeze sway ── */}
      <motion.div
        animate={{ rotate: [180, 183, 178, 180] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute flex h-[240px] items-center justify-center left-[-13px] top-[223px] w-[166px] pointer-events-none z-10"
      >
        <div className="flex-none">
          <div className="h-[240px] relative w-[166px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover size-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              src={flowerImg}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Leaf 1 (top-right) with gentle sway ── */}
      <motion.div
        animate={{ rotate: [0, -3, 3, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute flex h-[238px] items-center justify-center left-[314px] top-[222px] w-[196px] pointer-events-none z-10"
      >
        <div className="-scale-y-100 flex-none">
          <div className="h-[238px] relative w-[196px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover size-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              src={leafImg}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Calendar Card (December 2026) with Entrance Reveal ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1 }}
        className="absolute h-[318px] left-0 top-[244px] w-[440px]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
          <img
            alt="December 2026 Calendar"
            className="absolute h-[100.12%] left-[-14.32%] max-w-none top-[-0.06%] w-[128.64%]"
            src={calendarImg}
          />
        </div>

        {/* ── Heart Pulse highlight directly on December 30 Date ── */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1, 1.18, 1],
            opacity: [0.55, 0.95, 0.55],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[202px] top-[140px] w-[34px] h-[34px] rounded-full pointer-events-none flex items-center justify-center z-20"
        >
          <div className="w-full h-full rounded-full border-2 border-[#ddae65] bg-[#e83e60]/20 shadow-[0_0_12px_rgba(232,62,96,0.8),inset_0_0_8px_rgba(221,174,101,0.5)]" />
        </motion.div>
      </motion.div>

      {/* ── Line End 1 ── */}
      <div className="absolute h-[41px] left-[6px] top-[587px] w-[428px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[2280.92%] left-[0.09%] max-w-none top-[-1055.98%] w-full"
            src={lineEndImg}
          />
        </div>
      </div>

      {/* ── The Celebration Title with Golden Shimmer ── */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[220px] text-[#ddae65] text-[25px] text-center top-[628px] tracking-[1.25px] whitespace-nowrap drop-shadow-[0_0_12px_rgba(221,174,101,0.4)]"
      >
        The Celebration
      </motion.p>

      {/* ── Line End 2 ── */}
      <div className="absolute h-[41px] left-[6px] top-[678px] w-[428px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[2280.92%] left-[0.09%] max-w-none top-[-1055.98%] w-full"
            src={lineEndImg}
          />
        </div>
      </div>

      {/* ── EVENT 1: Bride's Roce Ceremony ── */}
      <motion.a
        href="https://maps.google.com/?q=Holy+Cross+Church+Hall+Hospet+Moodbidri"
        target="_blank"
        rel="noopener noreferrer"
        title="View location on Google Maps: Holy Cross Church Hall, Hospet"
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileTap={{ scale: 0.97 }}
        className="block cursor-pointer group"
      >
        {/* Wreath Image */}
        <div className="absolute h-[372px] left-[79px] top-[739px] w-[282px] overflow-hidden rounded-[50%] transition-all duration-500 group-hover:scale-[1.03] group-hover:drop-shadow-[0_12px_30px_rgba(221,174,101,0.4)]">
          <img
            alt="Bride's Roce Ceremony"
            className="absolute h-[100.07%] left-[-62.35%] max-w-none top-[-0.03%] w-[234.82%]"
            src={roceBrideImg}
          />
        </div>

        {/* Title */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[224.5px] text-[#ddae65] text-[25px] text-center top-[1106px] tracking-[1.25px] whitespace-nowrap group-hover:text-[#fff4d6] transition-colors drop-shadow-[0_0_10px_rgba(221,174,101,0.35)]">
          Bride’s Roce Ceremony
        </p>

        {/* Date & Time */}
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[0] left-[220px] text-[#ddae65] text-[15px] text-center top-[1156px] tracking-[0.75px] whitespace-nowrap">
          <p className="leading-[2] mb-0 text-[#f5d898]">Sunday, 27 December 2026</p>
          <p className="leading-[2]">7:00 PM</p>
        </div>

        {/* Venue */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[1.6] left-[220px] text-[#ddae65] text-[12px] text-center top-[1214px] tracking-[0.6px] whitespace-nowrap opacity-95">
          Holy Cross Church Hall
          <br />
          Hospet, Moodbidri
        </p>

        {/* Interactive "See The Route" Navigation Badge */}
        <div className="absolute -translate-x-1/2 left-[220px] top-[1258px] z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3d0912]/80 backdrop-blur-sm border border-[#ddae65]/60 text-[10px] font-sans tracking-widest uppercase text-[#f5d898] group-hover:bg-[#ddae65] group-hover:text-[#320712] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <span className="animate-bounce">📍</span> See The Route
          </span>
        </div>
      </motion.a>

      {/* ── Line End 3 ── */}
      <div className="absolute h-[41px] left-[6px] top-[1290px] w-[428px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[2280.92%] left-[0.09%] max-w-none top-[-1055.98%] w-full"
            src={lineEndImg}
          />
        </div>
      </div>

      {/* ── EVENT 2: Groom's Roce Ceremony ── */}
      <motion.a
        href="https://maps.google.com/?q=Bela+Church+Road+Bela+Kerala"
        target="_blank"
        rel="noopener noreferrer"
        title="View location on Google Maps: Residence, Bela"
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileTap={{ scale: 0.97 }}
        className="block cursor-pointer group"
      >
        {/* Wreath Image */}
        <div className="absolute h-[372px] left-[77px] top-[1338px] w-[286px] overflow-hidden rounded-[50%] transition-all duration-500 group-hover:scale-[1.03] group-hover:drop-shadow-[0_12px_30px_rgba(221,174,101,0.4)]">
          <img
            alt="Groom's Roce Ceremony"
            className="absolute h-full left-[-60.77%] max-w-none top-0 w-[231.54%]"
            src={roceGroomImg}
          />
        </div>

        {/* Title */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[224.5px] text-[#ddae65] text-[25px] text-center top-[1706px] tracking-[1.25px] whitespace-nowrap group-hover:text-[#fff4d6] transition-colors drop-shadow-[0_0_10px_rgba(221,174,101,0.35)]">
          Groom’s Roce Ceremony
        </p>

        {/* Date & Time */}
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[0] left-[220.5px] text-[#ddae65] text-[15px] text-center top-[1756px] tracking-[0.75px] whitespace-nowrap">
          <p className="leading-[2] mb-0 text-[#f5d898]">Monday, 28 December 2026</p>
          <p className="leading-[2]">7:00 PM</p>
        </div>

        {/* Venue */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[220.5px] text-[#ddae65] text-[12px] text-center top-[1804px] tracking-[0.6px] whitespace-nowrap uppercase opacity-95">
          At Our Residence, Bela
        </p>

        {/* Interactive "See The Route" Navigation Badge */}
        <div className="absolute -translate-x-1/2 left-[220px] top-[1840px] z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3d0912]/80 backdrop-blur-sm border border-[#ddae65]/60 text-[10px] font-sans tracking-widest uppercase text-[#f5d898] group-hover:bg-[#ddae65] group-hover:text-[#320712] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <span className="animate-bounce">📍</span> See The Route
          </span>
        </div>
      </motion.a>

      {/* ── Line End 4 ── */}
      <div className="absolute h-[41px] left-[6px] top-[1870px] w-[428px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[2280.92%] left-[0.09%] max-w-none top-[-1055.98%] w-full"
            src={lineEndImg}
          />
        </div>
      </div>

      {/* ── EVENT 3: Nuptials ── */}
      <motion.a
        href="https://maps.google.com/?q=St+Sebastian+Church+Permannur+Thokkottu"
        target="_blank"
        rel="noopener noreferrer"
        title="View location on Google Maps: St. Sebastian Church, Permannur"
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileTap={{ scale: 0.97 }}
        className="block cursor-pointer group"
      >
        {/* Wreath Image */}
        <div className="absolute h-[372px] left-[79px] top-[1915px] w-[282px] overflow-hidden rounded-[50%] transition-all duration-500 group-hover:scale-[1.03] group-hover:drop-shadow-[0_12px_30px_rgba(221,174,101,0.4)]">
          <img
            alt="Nuptials Ceremony"
            className="absolute h-full left-[-62%] max-w-none top-0 w-[234.24%]"
            src={wedImg}
          />
        </div>

        {/* Title */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[224.5px] text-[#ddae65] text-[25px] text-center top-[2285px] tracking-[1.25px] whitespace-nowrap group-hover:text-[#fff4d6] transition-colors drop-shadow-[0_0_10px_rgba(221,174,101,0.35)]">
          Nuptials
        </p>

        {/* Date & Time */}
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[0] left-[225px] text-[#ddae65] text-[15px] text-center top-[2335px] tracking-[0.75px] whitespace-nowrap">
          <p className="leading-[2] mb-0 text-[#f5d898]">Wednesday, 30 December 2026</p>
          <p className="leading-[2]">04:30 PM</p>
        </div>

        {/* Venue */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[1.6] left-[220.5px] text-[#ddae65] text-[12px] text-center top-[2390px] tracking-[0.6px] whitespace-nowrap opacity-95">
          St. Sebastian Church
          <br />
          Permannur, Thokkottu
        </p>

        {/* Interactive "See The Route" Navigation Badge */}
        <div className="absolute -translate-x-1/2 left-[220px] top-[2430px] z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3d0912]/80 backdrop-blur-sm border border-[#ddae65]/60 text-[10px] font-sans tracking-widest uppercase text-[#f5d898] group-hover:bg-[#ddae65] group-hover:text-[#320712] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <span className="animate-bounce">📍</span> See The Route
          </span>
        </div>
      </motion.a>

      {/* ── Line End 5 ── */}
      <div className="absolute h-[41px] left-[7px] top-[2465px] w-[428px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[2280.92%] left-[0.09%] max-w-none top-[-1055.98%] w-full"
            src={lineEndImg}
          />
        </div>
      </div>

      {/* ── EVENT 4: Wedding Reception ── */}
      <motion.a
        href="https://maps.google.com/?q=St+Sebastian+Auditorium+Permannur+Thokkottu"
        target="_blank"
        rel="noopener noreferrer"
        title="View location on Google Maps: St. Sebastian Auditorium, Permannur"
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileTap={{ scale: 0.97 }}
        className="block cursor-pointer group"
      >
        {/* Wreath Image */}
        <div className="absolute h-[372px] left-[81px] top-[2510px] w-[282px] overflow-hidden rounded-[50%] transition-all duration-500 group-hover:scale-[1.03] group-hover:drop-shadow-[0_12px_30px_rgba(221,174,101,0.4)]">
          <img
            alt="Wedding Reception"
            className="absolute h-[100.06%] left-[-60.42%] max-w-none top-[-0.03%] w-[231.25%]"
            src={resImg}
          />
        </div>

        {/* Title */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[2] left-[224.5px] text-[#ddae65] text-[25px] text-center top-[2880px] tracking-[1.25px] whitespace-nowrap group-hover:text-[#fff4d6] transition-colors drop-shadow-[0_0_10px_rgba(221,174,101,0.35)]">
          Wedding Reception
        </p>

        {/* Date & Time */}
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[0] left-[225px] text-[#ddae65] text-[15px] text-center top-[2930px] tracking-[0.75px] whitespace-nowrap">
          <p className="leading-[2] mb-0 text-[#f5d898]">Wednesday, 30 December 2026</p>
          <p className="leading-[2]">07:00 PM</p>
        </div>

        {/* Venue */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cinzel_Decorative',serif] font-bold leading-[1.6] left-[220px] text-[#ddae65] text-[12px] text-center top-[2985px] tracking-[0.6px] whitespace-nowrap opacity-95">
          St. Sebastian Auditorium
          <br />
          Permannur, Thokkottu
        </p>

        {/* Interactive "See The Route" Navigation Badge */}
        <div className="absolute -translate-x-1/2 left-[220px] top-[3030px] z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3d0912]/80 backdrop-blur-sm border border-[#ddae65]/60 text-[10px] font-sans tracking-widest uppercase text-[#f5d898] group-hover:bg-[#ddae65] group-hover:text-[#320712] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <span className="animate-bounce">📍</span> See The Route
          </span>
        </div>
      </motion.a>
    </div>
  );
}
