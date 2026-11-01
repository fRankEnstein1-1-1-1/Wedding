import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FiligreeDivider from './FiligreeDivider';

import coupleMeadowImg from '../../assets/figma/couple-gallery.png';
import timeBoxImg from '../../assets/figma/crop_time_box.png';

// Additional moments photos for the interactive carousel
import w1 from '../../assets/images/wedding-01.jpg';
import w2 from '../../assets/images/wedding-02.jpg';
import w3 from '../../assets/images/wedding-03.jpg';
import w4 from '../../assets/images/wedding-04.jpg';
import w5 from '../../assets/images/wedding-05.jpg';
import w6 from '../../assets/images/wedding-06.jpg';

const momentsPhotos = [
  { id: 1, src: coupleMeadowImg, caption: "Our Journey Begins" },
  { id: 2, src: w2, caption: "Whispers of Love" },
  { id: 3, src: w1, caption: "Under the Golden Sunlight" },
  { id: 4, src: w5, caption: "Laughter & Companionship" },
  { id: 5, src: w4, caption: "Endless Horizons" },
  { id: 6, src: w6, caption: "Hand in Hand Forever" },
];

export default function StoryAndRsvpSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevPhoto = () => {
    setCurrentIdx((prev) => (prev === 0 ? momentsPhotos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIdx((prev) => (prev === momentsPhotos.length - 1 ? 0 : prev + 1));
  };

  // Calendar .ics download generator
  const downloadCalendarEvent = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Shailesh & Reema Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Shailesh & Reema Wedding Nuptials & Reception
DESCRIPTION:Join us to celebrate the Holy Nuptials and Wedding Reception of Shailesh Preetham & Reema Marita.\\nNuptials: 4:30 PM at St. Sebastian Church Permannur.\\nReception: 7:00 PM at St. Sebastian Auditorium.
LOCATION:St. Sebastian Church, Permannur, Thokkottu
DTSTART:20261230T110000Z
DTEND:20261230T170000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Shailesh-Reema-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full text-center overflow-hidden pt-4 pb-12">
      {/* ── 1. STORY HEADERS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-[440px] mx-auto px-4 mb-3"
      >
        <h2
          className="text-3xl sm:text-[35px] font-normal text-[#ddae65] tracking-[1.75px] leading-tight mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Moments to Remember
        </h2>

        <p
          className="text-xl sm:text-[23px] font-bold text-[#ddae65] tracking-[1.25px] uppercase"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          Our Story
        </p>
      </motion.div>

      {/* ── 2. MAIN FEATURED ARCH PORTRAIT ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-[440px] mx-auto px-4 my-6"
      >
        <div className="relative w-[320px] sm:w-[348px] h-[480px] sm:h-[522px] mx-auto rounded-[160px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.7)] border-2 border-[#ddae65]/50 p-1 bg-gradient-to-b from-[#ddae65]/40 via-transparent to-[#ddae65]/20">
          <img
            src={coupleMeadowImg}
            alt="Shailesh and Reema in green meadow"
            className="w-full h-full object-cover rounded-[156px]"
          />
        </div>
      </motion.div>

      {/* ── 3. INTERACTIVE MEMORIES CAROUSEL ── */}
      <div className="relative max-w-[440px] mx-auto px-4 my-8">
        <div className="relative w-full overflow-hidden rounded-2xl bg-black/40 border border-[#ddae65]/30 shadow-2xl p-3">
          <div className="relative h-[280px] sm:h-[320px] w-full rounded-xl overflow-hidden flex items-center justify-center bg-[#25050c]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIdx}
                src={momentsPhotos[currentIdx].src}
                alt={momentsPhotos[currentIdx].caption}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Previous Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-[#ddae65] border border-[#ddae65]/50 flex items-center justify-center transition-all cursor-pointer z-10"
              aria-label="Previous photo"
            >
              &#10094;
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-[#ddae65] border border-[#ddae65]/50 flex items-center justify-center transition-all cursor-pointer z-10"
              aria-label="Next photo"
            >
              &#10095;
            </button>

            {/* Caption bar */}
            <div className="absolute inset-x-0 bottom-0 py-2 px-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <p className="text-xs text-[#f5d898] font-serif tracking-wider font-light">
                {momentsPhotos[currentIdx].caption}
              </p>
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {momentsPhotos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIdx === idx ? 'w-5 bg-[#ddae65]' : 'w-1.5 bg-[#ddae65]/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Filigree Divider */}
      <FiligreeDivider className="my-4" />

      {/* ── 4. TREASURED GIFT BANNER BOX ── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative max-w-[440px] mx-auto px-4 my-4"
      >
        <div className="relative w-full max-w-[420px] mx-auto flex items-center justify-center">
          <img
            src={timeBoxImg}
            alt=""
            className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
          />

          <div className="absolute inset-0 flex items-center justify-center px-10 sm:px-12">
            <p
              className="text-[15px] sm:text-[18px] font-bold text-[#4a0f1d] leading-snug tracking-[0.5px] uppercase"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              Your presence will be our treasured gift
            </p>
          </div>
        </div>
      </motion.div>

      {/* Filigree Divider */}
      <FiligreeDivider className="my-4" />

      {/* ── 5. RSVP & INTERACTIVE CONTACT ACTIONS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative max-w-[440px] mx-auto px-4 my-4"
      >
        <p
          className="text-xl sm:text-[22px] font-bold text-[#ddae65] tracking-[1.5px] uppercase mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          RSVP: 9480301277
        </p>

        {/* Quick Action Buttons: WhatsApp RSVP + Call + Save Date */}
        <div className="flex flex-wrap items-center justify-center gap-3 my-4">
          {/* WhatsApp RSVP */}
          <a
            href="https://wa.me/919480301277?text=Hi%20Shailesh%20%26%20Reema%2C%20we%20will%20be%20delighted%20to%20attend%20your%20wedding%20celebrations!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b8a5a] hover:bg-[#157347] text-white font-medium text-xs tracking-wider uppercase shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer font-sans"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
            </svg>
            <span>RSVP via WhatsApp</span>
          </a>

          {/* Direct Phone Call */}
          <a
            href="tel:9480301277"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4a0f1d] hover:bg-[#6e171f] text-[#ddae65] border border-[#ddae65]/60 font-medium text-xs tracking-wider uppercase shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer font-sans"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>Call to RSVP</span>
          </a>

          {/* Add to Calendar */}
          <button
            onClick={downloadCalendarEvent}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#320712] hover:bg-[#4a0f1d] text-[#f5d898] border border-[#ddae65]/40 font-medium text-xs tracking-wider uppercase shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer font-sans"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>Add to Calendar</span>
          </button>
        </div>
      </motion.div>

      {/* ── 6. CLOSING COUPLE SIGNATURE ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-[440px] mx-auto px-4 my-6"
      >
        <div
          className="text-center"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          <p className="text-4xl sm:text-[42px] text-[#ddae65] leading-tight">
            Shailesh Preetham
          </p>
          <p className="text-3xl text-[#ddae65] my-0.5">
            &amp;
          </p>
          <p className="text-4xl sm:text-[42px] text-[#ddae65] leading-tight">
            Reema Marita
          </p>
        </div>
      </motion.div>

      {/* ── 7. FOOTER BAR & STUDIO CREDIT ── */}
      <div className="relative max-w-[440px] mx-auto px-4 mt-8">
        <div className="py-3 border-t border-b border-[#ddae65]/30 bg-black/40">
          <p
            className="text-[10px] sm:text-[11px] font-bold text-[#ddae65] tracking-[2px] uppercase opacity-90"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            An Art by Eternal Studios
          </p>
        </div>
      </div>
    </section>
  );
}
