import React from 'react';
import { motion } from 'framer-motion';
import card1 from '../../assets/thalassa/card-event-1.png';
import card2 from '../../assets/thalassa/card-event-2.png';
import card3 from '../../assets/thalassa/card-event-3.png';
import card4 from '../../assets/thalassa/card-event-4.png';

const events = [
  {
    id: 1,
    title: "Bride's Roce Ceremony",
    date: "Sunday, 27 December 2026",
    time: "7:00 PM Onwards",
    venue: "Holy Cross Church Hall",
    location: "Hospet, Moodbidri",
    image: card1,
    mapUrl: "https://maps.google.com/?q=Holy+Cross+Church+Hall+Hospet+Moodbidri",
  },
  {
    id: 2,
    title: "Groom's Roce Ceremony",
    date: "Monday, 28 December 2026",
    time: "7:00 PM Onwards",
    venue: "At our residence",
    location: "Bela, Kasaragod",
    image: card2,
    mapUrl: "https://maps.google.com/?q=Bela+Church+Road+Bela+Kerala",
  },
  {
    id: 3,
    title: "Nuptials",
    date: "Wednesday, 30 December 2026",
    time: "04:30 PM",
    venue: "St. Sebastian Church",
    location: "Permannur, Thokkottu",
    image: card3,
    mapUrl: "https://maps.google.com/?q=St+Sebastian+Church+Permannur+Thokkottu",
  },
  {
    id: 4,
    title: "Wedding Reception",
    date: "Wednesday, 30 December 2026",
    time: "07:00 PM Onwards",
    venue: "St. Sebastian Auditorium",
    location: "Permannur, Thokkottu",
    image: card4,
    mapUrl: "https://maps.google.com/?q=St+Sebastian+Auditorium+Permannur+Thokkottu",
  },
];

export default function EventSchedule() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#320822] text-[#f7e1b5] overflow-hidden">
      {/* Background radial accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #7d1d58 0%, #1d0313 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs sm:text-sm tracking-[0.35em] uppercase text-amber-300 font-medium"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            CELEBRATION ITINERARY
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-100 mt-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            On the following events
          </h2>
          <div className="h-0.5 w-16 bg-amber-400/50 mx-auto mt-4" />
        </motion.div>

        {/* ── EVENTS GRID ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-center">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-5 rounded-3xl bg-black/25 border border-amber-300/20 backdrop-blur-sm shadow-xl transition-transform"
            >
              {/* Circular Wreath Card Illustration */}
              <div className="relative w-48 h-56 sm:w-52 sm:h-60 mb-5 overflow-hidden flex items-center justify-center">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                  loading="lazy"
                />
              </div>

              {/* Event Title */}
              <h3
                className="text-2xl sm:text-2xl font-normal text-amber-200 mb-2 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {evt.title}
              </h3>

              {/* Date & Time */}
              <p
                className="text-sm font-medium text-amber-100/90 tracking-wide mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {evt.date}
              </p>
              <p
                className="text-xs text-amber-300 font-light tracking-wider uppercase mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {evt.time}
              </p>

              {/* Venue */}
              <div className="text-xs sm:text-sm text-amber-200/80 mb-5 leading-relaxed font-light">
                <p className="font-medium text-amber-100">{evt.venue}</p>
                <p>{evt.location}</p>
              </div>

              {/* See the route button */}
              <a
                href={evt.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-semibold text-amber-300 hover:text-amber-100 underline underline-offset-4 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>See the route</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
