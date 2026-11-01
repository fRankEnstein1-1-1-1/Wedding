import React from 'react';
import { motion } from 'framer-motion';
import iconInsta from '../../assets/thalassa/icon-instagram.png';
import iconWeather from '../../assets/thalassa/icon-weather.png';
import iconAttire from '../../assets/thalassa/icon-attire.png';
import iconParking from '../../assets/thalassa/icon-parking.png';

const details = [
  {
    icon: iconInsta,
    title: 'Instagram',
    description: 'We request you tag your photos & stories using our wedding hashtag #ShaileshWedsReema',
  },
  {
    icon: iconWeather,
    title: 'Weather',
    description: 'Pleasant coastal winter evening with temperatures averaging around 24°C at the venues.',
  },
  {
    icon: iconAttire,
    title: 'Attire',
    description: 'Traditional Festive for Roce ceremonies; Formal Suits & Evening Gowns for Nuptials & Reception.',
  },
  {
    icon: iconParking,
    title: 'Parking',
    description: 'Designated parking will be available for all our guests at both church and auditorium premises.',
  },
];

export default function ThingsToKnow() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#250619] text-[#f7e1b5] overflow-hidden">
      {/* Background patterned overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #58143a 0%, #170310 100%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span
            className="text-xs sm:text-sm tracking-[0.35em] uppercase text-amber-300 font-semibold"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            GUEST INFORMATION
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-100 mt-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Things to know
          </h2>
          <p
            className="text-sm sm:text-base text-amber-200/80 font-light mt-3 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            To help you feel at ease and enjoy every moment of the celebrations, we’ve gathered a few thoughtful details we’d love for you to know before the big day.
          </p>
          <div className="h-0.5 w-16 bg-amber-400/50 mx-auto mt-4" />
        </motion.div>

        {/* ── 4 ITEMS GRID ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/25 border border-amber-300/15 backdrop-blur-sm shadow-lg hover:border-amber-300/35 transition-colors"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center p-2 rounded-2xl bg-amber-400/10 border border-amber-400/20">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain filter invert sepia saturate-200 hue-rotate-15 brightness-125"
                  loading="lazy"
                />
              </div>

              <h3
                className="text-xl font-normal text-amber-200 mb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {item.title}
              </h3>

              <p
                className="text-xs sm:text-sm text-amber-100/75 leading-relaxed font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
