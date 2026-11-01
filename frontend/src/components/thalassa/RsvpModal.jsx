import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RsvpModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [guestsCount, setGuestsCount] = useState('1');
  const [attendingEvents, setAttendingEvents] = useState({
    roce: true,
    nuptials: true,
    reception: true,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleToggleEvent = (key) => {
    setAttendingEvents((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Build WhatsApp message
    const eventList = [];
    if (attendingEvents.roce) eventList.push('Roce');
    if (attendingEvents.nuptials) eventList.push('Nuptials');
    if (attendingEvents.reception) eventList.push('Reception');

    const text = encodeURIComponent(
      `Hello Shailesh & Reema! 💍\n\nI am ${name.trim() || 'a guest'}.\nGuests attending: ${guestsCount}\nEvents: ${eventList.join(', ') || 'All'}\n\nWe are overjoyed to celebrate with you!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919480301277?text=${text}`, '_blank');
    }, 900);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#2a071c] text-[#f7e1b5] p-6 sm:p-8 rounded-3xl border border-amber-400/30 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center mb-6">
                <span
                  className="text-xs uppercase tracking-[0.3em] text-amber-300 font-semibold"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  PLEASE CELEBRATE WITH US
                </span>
                <h3
                  className="text-3xl text-amber-100 font-normal mt-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  RSVP Confirmation
                </h3>
                <p className="text-xs text-amber-200/70 mt-1">
                  Kindly reply on or before 15 December 2026
                </p>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-200 mb-1 font-medium">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John & Mary Dsouza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-amber-300/30 text-white placeholder-amber-200/40 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-200 mb-1 font-medium">
                  Number of Guests Attending
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-amber-300/30 text-white focus:outline-none focus:border-amber-400 text-sm"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Family Members</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-200 mb-2 font-medium">
                  Events You'll Attend
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'roce', label: 'Roce' },
                    { key: 'nuptials', label: 'Nuptials' },
                    { key: 'reception', label: 'Reception' },
                  ].map((evt) => (
                    <button
                      key={evt.key}
                      type="button"
                      onClick={() => handleToggleEvent(evt.key)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                        attendingEvents[evt.key]
                          ? 'bg-amber-400/25 border-amber-400 text-amber-100 shadow-[0_0_10px_rgba(251,191,36,0.3)]'
                          : 'bg-black/20 border-white/10 text-white/50'
                      }`}
                    >
                      {attendingEvents[evt.key] ? '✓ ' : ''}{evt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#320822] font-semibold tracking-wider text-sm shadow-xl transition-transform active:scale-98"
                >
                  Send RSVP via WhatsApp (9480301277)
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href="tel:9480301277"
                  className="text-xs text-amber-300/80 hover:text-amber-200 underline underline-offset-4"
                >
                  Or call directly: +91 9480301277
                </a>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <span className="text-5xl block animate-bounce">💍</span>
              <h3
                className="text-3xl text-amber-100"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Thank You, {name || 'Dear Friend'}!
              </h3>
              <p className="text-sm text-amber-200/90 max-w-sm mx-auto leading-relaxed">
                Opening WhatsApp to confirm your RSVP with Shailesh &amp; Reema. We can’t wait to celebrate together!
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-full border border-amber-400/50 text-amber-200 text-xs tracking-widest uppercase hover:bg-amber-400/20"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
