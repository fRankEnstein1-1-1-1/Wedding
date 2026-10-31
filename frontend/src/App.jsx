import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Figma assets
import heroCoupleImg from './assets/figma/hero-couple.png';
import petalImg from './assets/figma/petal.png';
import scrollBannerImg from './assets/figma/scroll-banner.png';
import quoteBgImg from './assets/figma/quote-bg.png';
import jesusImg from './assets/figma/jesus.png';
import ringAndLeafImg from './assets/figma/ring-and-leaf.png';
import lineEndImg from './assets/figma/line-end.png';
import flowerImg from './assets/figma/flower.png';
import leafDecorImg from './assets/figma/leaf-decor.png';
import roceBrideImg from './assets/figma/roce-bride.png';
import roceGroomImg from './assets/figma/roce-groom.png';
import weddingImg from './assets/figma/wedding.png';
import receptionImg from './assets/figma/reception.png';
import calendarImg from './assets/figma/calendar.png';
import timeBannerImg from './assets/figma/ornament-border.png';
import coupleGalleryImg from './assets/figma/couple-gallery.png';

/* ── Floating lanterns / petals on hero ───────────────────── */
const heroLanterns = [
  { top: 42, left: 44, w: 56, h: 84, rot: 14.82 },
  { top: -41, left: -65, w: 91, h: 137, rot: -33.85 },
  { top: 107, left: 21, w: 37, h: 55, rot: -25.92 },
  { top: -20, left: 350, w: 69, h: 103, rot: -36.35 },
  { top: 69, left: 349, w: 51, h: 77, rot: 14.82 },
  { top: 259, left: -40, w: 102, h: 153, rot: 14.82 },
  { top: 346, left: 35, w: 56, h: 84, rot: -20.76 },
  { top: 346, left: 311, w: 56, h: 84, rot: -22.79 },
  { top: 386, left: 367, w: 43, h: 64, rot: 14.82 },
  { top: 409, left: 178, w: 78, h: 117, rot: 14.82 },
  { top: 514, left: 197, w: 46, h: 68, rot: 42.03 },
  { top: 557, left: 156, w: 43, h: 64, rot: -30.64 },
  { top: 544, left: 363, w: 49, h: 73, rot: -28.75 },
  { top: 582, left: 318, w: 67, h: 100, rot: 36.34 },
  { top: 542, left: -18, w: 47, h: 70, rot: 170.71 },
  { top: 678, left: -32, w: 51, h: 76, rot: -42.16 },
  { top: 717, left: -32, w: 57, h: 86, rot: 33.9 },
  { top: 724, left: 172, w: 51, h: 76, rot: 14.82 },
  { top: 776, left: 177, w: 57, h: 86, rot: -35.34 },
  { top: 796, left: 377, w: 61, h: 92, rot: 146.21 },
];

/* ── Animation variants ───────────────────────────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, delay, ease: 'easeOut' },
  }),
};

/* ── Reusable Gold Divider Component ──────────────────────── */
function LineDivider({ style }) {
  return (
    <div className="line-divider-wrapper" style={style}>
      <div className="line-divider-crop">
        <img src={lineEndImg} alt="" className="line-divider-img" />
      </div>
    </div>
  );
}

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showContent, setShowContent] = useState(false);

  function calculateTimeLeft() {
    const targetDate = new Date("December 30, 2026 16:30:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let tl = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      tl = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return tl;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    const showTimer = setTimeout(() => setShowContent(true), 300);
    return () => {
      clearInterval(timer);
      clearTimeout(showTimer);
    };
  }, []);

  return (
    <div className="wedding-app">
      {/* Background with royal gold patterned gradient */}
      <div className="royal-bg">
        <div className="royal-bg-overlay" />
        <div className="royal-bg-shimmer" />
      </div>

      <main className="wedding-phone-frame">
        <AnimatePresence>
          {showContent && (
            <div className="wedding-content">
              {/* ════════════════════════════════════════════════
                  SCREEN 1: HERO & BLESSINGS
                  ════════════════════════════════════════════════ */}
              <section className="screen-section screen-hero">
                {/* Hero Sunset Canvas with floating lanterns */}
                <div className="hero-canvas-container">
                  <div className="hero-canvas-crop">
                    <img
                      src={heroCoupleImg}
                      alt="Shailesh & Reema"
                      className="hero-canvas-img"
                    />

                    {/* Floating Lanterns / Petals */}
                    {heroLanterns.map((l, idx) => (
                      <motion.div
                        key={idx}
                        className="floating-lantern"
                        style={{
                          top: `${(l.top / 880) * 100}%`,
                          left: `${(l.left / 440) * 100}%`,
                          width: `${l.w}px`,
                          height: `${l.h}px`,
                          transform: `rotate(${l.rot}deg)`,
                        }}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{
                          opacity: [0.75, 1, 0.75],
                          y: [0, -6, 0],
                        }}
                        transition={{
                          opacity: { duration: 3 + (idx % 3), repeat: Infinity, ease: 'easeInOut' },
                          y: { duration: 4 + (idx % 2) * 2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.15 },
                          default: { duration: 1, delay: 0.2 + idx * 0.04 },
                        }}
                      >
                        <img src={petalImg} alt="" className="lantern-img" />
                      </motion.div>
                    ))}

                    {/* Headline overlaid on sky */}
                    <motion.div
                      className="hero-couple-titles"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    >
                      <h1 className="hero-script-names">
                        <span>Shailesh Preetham</span>
                        <span className="weds-tag">Weds</span>
                        <span>Reema Marita</span>
                      </h1>
                    </motion.div>
                  </div>
                </div>

                {/* Biblical Scroll Quote */}
                <motion.div
                  className="scroll-quote-container"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.1}
                >
                  <div className="scroll-quote-crop">
                    <img
                      src={scrollBannerImg}
                      alt="Biblical verse on scroll banner"
                      className="scroll-quote-img"
                    />
                  </div>
                </motion.div>

                {/* Gold Line Divider */}
                <LineDivider style={{ marginTop: '20px', marginBottom: '10px' }} />

                {/* "THE START OF SOMETHING NEW" diamond badge */}
                <motion.div
                  className="start-something-new-container"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.2}
                >
                  <div className="start-something-new-crop">
                    <img
                      src={quoteBgImg}
                      alt="The Start of Something New"
                      className="start-something-new-img"
                    />
                  </div>
                </motion.div>

                {/* "WITH THE BLESSINGS OF GOD" Section */}
                <motion.div
                  className="blessings-block"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.h2
                    className="blessings-heading"
                    variants={fadeInUp}
                    custom={0.1}
                  >
                    WITH THE BLESSINGS OF GOD
                  </motion.h2>

                  <motion.div
                    className="jesus-symbol-wrap"
                    variants={fadeInUp}
                    custom={0.2}
                  >
                    <img src={jesusImg} alt="Cross, Dove and Bible" className="jesus-img" />
                  </motion.div>

                  <motion.div
                    className="parents-announcement"
                    variants={fadeInUp}
                    custom={0.3}
                  >
                    <p className="parents-names-line">BAZIL &amp; TERESA DSOUZA</p>
                    <p className="parents-ampersand">&amp;</p>
                    <p className="parents-names-line">EUGINE &amp; MABEL PINTO</p>
                  </motion.div>

                  <motion.p
                    className="cordially-invite-text"
                    variants={fadeInUp}
                    custom={0.4}
                  >
                    CORDIALLY INVITE YOU TO BLESS THE NUPTIALS
                  </motion.p>

                  {/* Geometric Gold Wreath with Script Names */}
                  <motion.div
                    className="geometric-wreath-wrap"
                    variants={fadeInUp}
                    custom={0.5}
                  >
                    <img src={ringAndLeafImg} alt="" className="geometric-wreath-img" />
                    <div className="wreath-inner-names">
                      <p className="wreath-script-name">Shailesh Preetham</p>
                      <p className="wreath-ampersand">&amp;</p>
                      <p className="wreath-script-name">Reema Marita</p>
                    </div>
                  </motion.div>
                </motion.div>
              </section>

              {/* ════════════════════════════════════════════════
                  SCREEN 2: COUNTDOWN, CALENDAR & EVENTS
                  ════════════════════════════════════════════════ */}
              <section className="screen-section screen-events">
                {/* Countdown Section */}
                <motion.div
                  className="countdown-block"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.h2
                    className="countdown-title"
                    variants={fadeInUp}
                    custom={0.1}
                  >
                    THE CELEBRATION BEGINS IN
                  </motion.h2>

                  {/* Ornate Timer Box with Live Countdown */}
                  <motion.div
                    className="timer-ornate-container"
                    variants={fadeInUp}
                    custom={0.2}
                  >
                    <div className="timer-ornate-crop">
                      <img
                        src={timeBannerImg}
                        alt=""
                        className="timer-ornate-bg"
                      />
                    </div>

                    {/* Live countdown timer tiles overlaid on banner */}
                    <div className="timer-live-tiles">
                      {[
                        { val: timeLeft.days, label: 'Days' },
                        { val: timeLeft.hours, label: 'Hours' },
                        { val: timeLeft.minutes, label: 'Mins' },
                        { val: timeLeft.seconds, label: 'Secs' },
                      ].map((item) => (
                        <div key={item.label} className="timer-tile">
                          <motion.span
                            key={item.val}
                            className="timer-digit"
                            initial={{ scale: 1.25, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                          >
                            {String(item.val).padStart(2, '0')}
                          </motion.span>
                          <span className="timer-unit">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* December 2026 Calendar with Floral Flankers */}
                <motion.div
                  className="calendar-wrapper"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}
                  custom={0.2}
                >
                  <div className="calendar-decor-left">
                    <img src={flowerImg} alt="" />
                  </div>
                  <div className="calendar-decor-right">
                    <img src={leafDecorImg} alt="" />
                  </div>

                  <div className="calendar-crop">
                    <img
                      src={calendarImg}
                      alt="December 2026 Calendar with Heart on December 30"
                      className="calendar-img"
                    />
                  </div>
                </motion.div>

                {/* Line Divider */}
                <LineDivider style={{ marginTop: '25px', marginBottom: '15px' }} />

                {/* "THE CELEBRATION" Heading */}
                <motion.h2
                  className="celebration-main-title"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  custom={0.1}
                >
                  THE CELEBRATION
                </motion.h2>

                {/* Line Divider */}
                <LineDivider style={{ marginTop: '10px', marginBottom: '35px' }} />

                {/* ── Event 1: Bride's Roce Ceremony ── */}
                <motion.article
                  className="event-card-item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.15}
                >
                  <div className="event-wreath-crop">
                    <img
                      src={roceBrideImg}
                      alt="Bride's Roce Ceremony"
                      className="event-wreath-img bride-crop"
                    />
                  </div>
                  <h3 className="event-title">BRIDE’S ROCE CEREMONY</h3>
                  <p className="event-timing">
                    SUNDAY, 27 DECEMBER 2026<br />
                    7:00 PM
                  </p>
                  <p className="event-location">
                    HOLY CROSS CHURCH HALL<br />
                    HOSPET, MOODBIDRI
                  </p>
                </motion.article>

                <LineDivider style={{ marginTop: '25px', marginBottom: '35px' }} />

                {/* ── Event 2: Groom's Roce Ceremony ── */}
                <motion.article
                  className="event-card-item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.15}
                >
                  <div className="event-wreath-crop">
                    <img
                      src={roceGroomImg}
                      alt="Groom's Roce Ceremony"
                      className="event-wreath-img groom-crop"
                    />
                  </div>
                  <h3 className="event-title">GROOM’S ROCE CEREMONY</h3>
                  <p className="event-timing">
                    MONDAY, 28 DECEMBER 2026<br />
                    7:00 PM
                  </p>
                  <p className="event-location">
                    AT OUR RESIDENCE, BELA
                  </p>
                </motion.article>

                <LineDivider style={{ marginTop: '25px', marginBottom: '35px' }} />

                {/* ── Event 3: Nuptials ── */}
                <motion.article
                  className="event-card-item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.15}
                >
                  <div className="event-wreath-crop">
                    <img
                      src={weddingImg}
                      alt="Nuptials Ceremony"
                      className="event-wreath-img wedding-crop"
                    />
                  </div>
                  <h3 className="event-title">NUPTIALS</h3>
                  <p className="event-timing">
                    WEDNESDAY, 30 DECEMBER 2026<br />
                    04:30 PM
                  </p>
                  <p className="event-location">
                    ST. SEBASTIAN CHURCH<br />
                    PERMANNUR, THOKKOTTU
                  </p>
                </motion.article>

                <LineDivider style={{ marginTop: '25px', marginBottom: '35px' }} />

                {/* ── Event 4: Wedding Reception ── */}
                <motion.article
                  className="event-card-item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.15}
                >
                  <div className="event-wreath-crop">
                    <img
                      src={receptionImg}
                      alt="Wedding Reception"
                      className="event-wreath-img reception-crop"
                    />
                  </div>
                  <h3 className="event-title">WEDDING RECEPTION</h3>
                  <p className="event-timing">
                    WEDNESDAY, 30 DECEMBER 2026<br />
                    07:00 PM
                  </p>
                  <p className="event-location">
                    ST. SEBASTIAN AUDITORIUM<br />
                    PERMANNUR, THOKKOTTU
                  </p>
                </motion.article>
              </section>

              {/* ════════════════════════════════════════════════
                  SCREEN 3: OUR STORY & FOOTER
                  ════════════════════════════════════════════════ */}
              <section className="screen-section screen-gallery-footer">
                <LineDivider style={{ marginTop: '10px', marginBottom: '25px' }} />

                <motion.div
                  className="story-headings"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.h2
                    className="moments-title"
                    variants={fadeInUp}
                    custom={0.1}
                  >
                    Moments to Remember
                  </motion.h2>
                  <motion.h3
                    className="our-story-title"
                    variants={fadeInUp}
                    custom={0.2}
                  >
                    OUR STORY
                  </motion.h3>
                </motion.div>

                {/* Arch-framed couple portrait */}
                <motion.div
                  className="story-portrait-wrap"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.3}
                >
                  <div className="story-portrait-frame">
                    <img
                      src={coupleGalleryImg}
                      alt="Shailesh and Reema together"
                      className="story-portrait-img"
                    />
                  </div>
                </motion.div>

                {/* Footer Section */}
                <footer className="wedding-footer">
                  <div className="footer-ornate-card">
                    <LineDivider style={{ margin: '0 auto 18px' }} />

                    <motion.p
                      className="footer-cherished-message"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeInUp}
                      custom={0.1}
                    >
                      YOUR PRESENCE WILL BE OUR TREASURED GIFT
                    </motion.p>

                    <LineDivider style={{ margin: '18px auto 20px' }} />

                    <motion.p
                      className="footer-rsvp-line"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeInUp}
                      custom={0.2}
                    >
                      RSVP: 9480301277
                    </motion.p>
                  </div>

                  {/* Couple Signature Names */}
                  <motion.div
                    className="footer-signature"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    custom={0.3}
                  >
                    <p className="sig-name">Shailesh Preetham</p>
                    <p className="sig-amp">&amp;</p>
                    <p className="sig-name">Reema Marita</p>
                  </motion.div>

                  {/* Bottom Studio Credit */}
                  <div className="footer-studio-credit">
                    <p>AN ART BY ETERNAL STUDIOS</p>
                  </div>
                </footer>
              </section>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
