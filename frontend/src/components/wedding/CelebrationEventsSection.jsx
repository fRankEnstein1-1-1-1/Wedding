import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FiligreeDivider from './FiligreeDivider';

import timeBoxImg from '../../assets/figma/crop_time_box.png';
import calendarImg from '../../assets/figma/calendar.png';
import flowerImg from '../../assets/figma/flower.png';
import leafImg from '../../assets/figma/leaf.png';

import roceBrideImg from '../../assets/figma/roce-bride.png';
import roceGroomImg from '../../assets/figma/roce-groom.png';
import nuptialsImg from '../../assets/figma/wedding.png';
import receptionImg from '../../assets/figma/reception.png';

const events = [
  {
    id: 'roce-bride',
    title: "Bride’s Roce Ceremony",
    date: "Sunday, 27 December 2026",
    time: "7:00 PM",
    venue: "Holy Cross Church Hall",
    subVenue: "Hospet, Moodbidri",
    image: roceBrideImg,
    mapUrl: "https://maps.google.com/?q=Holy+Cross+Church+Hall+Hospet+Moodbidri",
  },
  {
    id: 'roce-groom',
    title: "Groom’s Roce Ceremony",
    date: "Monday, 28 December 2026",
    time: "7:00 PM",
    venue: "At our residence, Bela",
    subVenue: "",
    image: roceGroomImg,
    mapUrl: "https://maps.google.com/?q=Bela+Church+Road+Bela+Kerala",
  },
  {
    id: 'nuptials',
    title: "Nuptials",
    date: "Wednesday, 30 December 2026",
    time: "04:30 PM",
    venue: "St. Sebastian Church",
    subVenue: "Permannur, Thokkottu",
    image: nuptialsImg,
    mapUrl: "https://maps.google.com/?q=St+Sebastian+Church+Permannur+Thokkottu",
  },
  {
    id: 'reception',
    title: "Wedding Reception",
    date: "Wednesday, 30 December 2026",
    time: "07:00 PM",
    venue: "St. Sebastian Auditorium",
    subVenue: "Permannur, Thokkottu",
    image: receptionImg,
    mapUrl: "https://maps.google.com/?q=St+Sebastian+Auditorium+Permannur+Thokkottu",
  },
];

export default function CelebrationEventsSection() {
  // Target date: Bride's Roce Ceremony - Dec 27, 2026 19:00 IST
  const targetDate = new Date('2026-12-27T19:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative w-full text-center overflow-hidden pt-4 pb-8">
      {/* ── 1. COUNTDOWN SECTION ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-[440px] mx-auto px-4"
      >
        <h2
          className="text-2xl sm:text-[25px] font-bold text-[#ddae65] tracking-[1.25px] leading-relaxed mb-4 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          The Celebration Begins In
        </h2>

        {/* Vintage Ornate Banner Box with Live Digits */}
        <div className="relative w-full max-w-[420px] mx-auto my-3 flex items-center justify-center">
          <img
            src={timeBoxImg}
            alt=""
            className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
          />

          {/* Countdown Numbers Grid inside the Cream Box */}
          <div className="absolute inset-0 flex items-center justify-center px-10 sm:px-12">
            <div className="w-full grid grid-cols-4 gap-2 text-center">
              <div className="flex flex-col items-center">
                <span
                  className="text-2xl sm:text-3xl font-bold text-[#4a0f1d] leading-none"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#6e171f] mt-1 font-sans">
                  Days
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className="text-2xl sm:text-3xl font-bold text-[#4a0f1d] leading-none"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#6e171f] mt-1 font-sans">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className="text-2xl sm:text-3xl font-bold text-[#4a0f1d] leading-none"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#6e171f] mt-1 font-sans">
                  Mins
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className="text-2xl sm:text-3xl font-bold text-[#4a0f1d] leading-none"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#6e171f] mt-1 font-sans">
                  Secs
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 2. DECEMBER 2026 CALENDAR CARD (with Swans & Floral Accents) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-[440px] mx-auto px-2 my-6"
      >
        <div className="relative w-full flex justify-center items-center">
          {/* Top-left floral flourish */}
          <img
            src={flowerImg}
            alt=""
            className="absolute -left-3 -top-6 w-[120px] h-auto object-contain pointer-events-none z-10 rotate-180 opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          />

          {/* Top-right leaf flourish */}
          <img
            src={leafImg}
            alt=""
            className="absolute -right-3 -top-6 w-[130px] h-auto object-contain pointer-events-none z-10 -scale-y-100 opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          />

          {/* Calendar Image Card */}
          <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.6)]">
            <img
              src={calendarImg}
              alt="December 2026 Wedding Calendar with Swans"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </motion.div>

      {/* Filigree Divider */}
      <FiligreeDivider className="my-4" />

      {/* ── 3. "THE CELEBRATION" SECTION TITLE ── */}
      <div className="relative max-w-[440px] mx-auto px-4 my-2">
        <h2
          className="text-2xl sm:text-[27px] font-bold text-[#ddae65] tracking-[1.5px] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          The Celebration
        </h2>
      </div>

      {/* Filigree Divider */}
      <FiligreeDivider className="my-4" />

      {/* ── 4. THE 4 CEREMONIAL EVENTS (with Gilded Wreath Vignettes) ── */}
      <div className="relative max-w-[440px] mx-auto px-4 space-y-2">
        {events.map((ev, index) => (
          <React.Fragment key={ev.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              className="py-4"
            >
              {/* Golden Wheat / Feather Oval Wreath Illustration */}
              <div className="relative w-[280px] h-[370px] mx-auto my-3 overflow-hidden rounded-[50%] drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] border-2 border-amber-300/20">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover object-center filter brightness-[1.02]"
                />
              </div>

              {/* Ceremony Title */}
              <h3
                className="text-xl sm:text-[23px] font-bold text-[#ddae65] tracking-[1.25px] uppercase mt-4 mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
                style={{ fontFamily: "'Cinzel Decorative', serif" }}
              >
                {ev.title}
              </h3>

              {/* Date & Time */}
              <div
                className="text-[#ddae65] tracking-[0.75px] font-bold text-[14px] sm:text-[15px] space-y-0.5 mb-2 uppercase"
                style={{ fontFamily: "'Cinzel Decorative', serif" }}
              >
                <p>{ev.date}</p>
                <p>{ev.time}</p>
              </div>

              {/* Venue & Location */}
              <div
                className="text-[#ddae65] tracking-[0.6px] font-bold text-[12px] sm:text-[13px] leading-relaxed uppercase mb-4 opacity-95"
                style={{ fontFamily: "'Cinzel Decorative', serif" }}
              >
                <p>{ev.venue}</p>
                {ev.subVenue && <p>{ev.subVenue}</p>}
              </div>

              {/* Interactive "See the Route" Button */}
              <div className="mt-2 mb-2">
                <a
                  href={ev.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#4a0f1d] via-[#6e171f] to-[#4a0f1d] border border-[#ddae65]/60 hover:border-[#ddae65] text-[#ddae65] hover:text-[#fff4d6] shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all transform hover:scale-105 active:scale-95 text-xs font-semibold uppercase tracking-widest font-sans"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>See The Route</span>
                </a>
              </div>
            </motion.div>

            {/* Filigree Divider between events */}
            <FiligreeDivider className="my-3" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
