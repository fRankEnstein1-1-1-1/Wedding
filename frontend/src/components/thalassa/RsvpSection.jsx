import React, { useState } from 'react';
import { motion } from 'framer-motion';
import shellRsvpImg from '../../assets/thalassa/shell-rsvp.png';
import RsvpModal from './RsvpModal';

export default function RsvpSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full py-20 px-4 bg-gradient-to-b from-[#073636] via-[#094141] to-[#250619] text-white overflow-hidden flex flex-col items-center text-center">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #17a2b8 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-xl mx-auto z-10 flex flex-col items-center">
          {/* Decorative Clam Shell with Pearl */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-64 sm:w-80 cursor-pointer group"
            onClick={() => setModalOpen(true)}
          >
            <div className="relative">
              <img
                src={shellRsvpImg}
                alt="Clam shell with pearl - RSVP"
                className="w-full h-auto object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Text inside clam shell */}
              <div className="absolute inset-x-0 top-12 sm:top-14 px-6 flex flex-col items-center justify-center pointer-events-none">
                <h3
                  className="text-2xl sm:text-3xl font-light text-[#f0fbfb] leading-tight drop-shadow-md"
                  style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
                >
                  Looking
                  <br />
                  forward to
                  <br />
                  see you
                </h3>

                <p
                  className="text-[11px] sm:text-xs tracking-widest uppercase text-teal-200 mt-2 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Click the link to RSVP
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-3"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-teal-950 font-semibold tracking-wider text-xs sm:text-sm uppercase shadow-xl transition-transform active:scale-95"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Confirm Your Attendance
            </button>

            <a
              href="https://wa.me/919480301277?text=Hi%20Shailesh%20%26%20Reema,%20we%20are%20excited%20to%20attend%20your%20wedding!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-teal-300/40 hover:bg-teal-300/10 text-teal-200 text-xs tracking-wider uppercase transition-colors"
            >
              WhatsApp RSVP (9480301277)
            </a>
          </motion.div>
        </div>
      </section>

      {/* RSVP Modal */}
      <RsvpModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
