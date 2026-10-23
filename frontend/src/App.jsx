import React, { useState } from 'react';
import LetterOpening from './components/LetterOpening';
import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import bgVideo from './assets/videos/wedding-film-02.mp4';


// 3D Components (lazy loaded for performance)
const FloatingPetals = React.lazy(() => import('./components/FloatingPetals'));
const WeddingRings3D = React.lazy(() => import('./components/WeddingRings3D'));
const GoldenDust = React.lazy(() => import('./components/GoldenDust'));

// Animation components
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
  TextReveal,
  FloatingElement,
} from './components/AnimatedSection';

// Decorative components
import { OrnamentDivider, HeartDivider, CornerFlourish } from './components/Ornaments';

// Premium Gallery
import Gallery from './components/Gallery';

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showContent, setShowContent] = useState(false);

  function calculateTimeLeft() {
    const targetDate = new Date("December 30, 2026 16:30:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Delayed content reveal for cinematic entrance
    const showTimer = setTimeout(() => setShowContent(true), 500);
    return () => {
      clearInterval(timer);
      clearTimeout(showTimer);
    };
  }, []);

  return (
    <div className="app-container">
      {/* ── 3D Overlays ──────────────────────────────────────── */}
      <Suspense fallback={null}>
        <FloatingPetals />
        <GoldenDust />
      </Suspense>

      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="hero-section">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="hero-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <OrnamentDivider color="#c5a059" width={160} />
                </motion.div>

                <motion.h4
                  className="journey-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  The Journey Begins
                </motion.h4>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
                >
                  <h1 className="names">Reema & Shailesh</h1>
                </motion.div>

                <motion.p
                  className="date"
                  initial={{ opacity: 0, letterSpacing: '12px' }}
                  animate={{ opacity: 1, letterSpacing: '6px' }}
                  transition={{ duration: 1.2, delay: 1.5 }}
                >
                  30 • 12 • 2026
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.0 }}
                >
                  <OrnamentDivider color="#c5a059" width={160} />
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                  className="scroll-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{
                    opacity: { delay: 2.5, duration: 1 },
                    y: { delay: 3, duration: 2, repeat: Infinity },
                  }}
                >
                  <span>↓</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── 3D Wedding Rings ─────────────────────────────────── */}
      <section className="rings-section">
        <Suspense fallback={<div style={{ height: 220 }} />}>
          <AnimatedSection>
            <WeddingRings3D />
          </AnimatedSection>
        </Suspense>
      </section>

      {/* ── Parents & Quote Section ──────────────────────────── */}
      <section className="intro-section">
        <div className="container">
          {/* Corner flourishes */}
          <div className="flourish-corners">
            <CornerFlourish position="top-left" />
            <CornerFlourish position="top-right" />
            <CornerFlourish position="bottom-left" />
            <CornerFlourish position="bottom-right" />
          </div>

          <AnimatedSection delay={0.1}>
            <p className="quote">
              "And over all these virtues put on love, which binds them all together in perfect unity."
              <br />
              <span>— Colossians 3:14</span>
            </p>
          </AnimatedSection>

          <HeartDivider />

          <AnimatedSection delay={0.2}>
            <h2 className="section-title">With the blessings of God</h2>
          </AnimatedSection>

          <StaggerContainer className="parents-grid">
            <StaggerItem>
              <div className="parents-block glass-card">
                <h3>Eugine & Mabel Pinto</h3>
                <p>cordially invite you to bless the nuptials of their beloved daughter</p>
                <h2>Reema Marita</h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <FloatingElement yRange={8}>
                <div className="with-text">with</div>
              </FloatingElement>
            </StaggerItem>

            <StaggerItem>
              <div className="parents-block glass-card">
                <h2>Shailesh Preetham</h2>
                <p>(S/o. Bazil & Teresa Dsouza)</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Countdown Section ────────────────────────────────── */}
      <section className="countdown-section">
        <AnimatedSection>
          <h2 className="section-title">The Celebration Begins In</h2>
        </AnimatedSection>

        <StaggerContainer className="countdown-timer">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Mins' },
            { value: timeLeft.seconds, label: 'Secs' },
          ].map(({ value, label }) => (
            <StaggerItem key={label}>
              <div className="time-box glass-card-dark">
                <motion.span
                  className="time-value"
                  key={value}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {value || '0'}
                </motion.span>
                <span className="time-label">{label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Events Section ───────────────────────────────────── */}
      <section className="events-section">
        <AnimatedSection>
          <h2 className="section-title">The Celebration</h2>
          <OrnamentDivider />
        </AnimatedSection>

        <StaggerContainer className="events-grid">
          <StaggerItem>
            <motion.div
              className="event-card glass-card"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="event-icon">🥥</div>
              <h3>Roce Ceremony</h3>
              <p className="event-date">Sunday, 27 December 2026</p>
              <p className="event-time">7:00 PM</p>
              <HeartDivider color="#c5a059" />
              <p className="event-venue">Holy Cross Church Hall<br/>Hospet, Moodbidri</p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="event-card main-event glass-card"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="event-icon">💍</div>
              <h3>Nuptials</h3>
              <p className="event-date">Wednesday, 30 December 2026</p>
              <p className="event-time">04:30 PM</p>
              <HeartDivider color="#c5a059" />
              <p className="event-venue">St. Sebastian Church<br/>Permannur, Thokkottu</p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="event-card glass-card"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="event-icon">🥂</div>
              <h3>Wedding Reception</h3>
              <p className="event-date">Wednesday, 30 December 2026</p>
              <p className="event-time">07:00 PM</p>
              <HeartDivider color="#c5a059" />
              <p className="event-venue">St. Sebastian Auditorium<br/>Permannur, Thokkottu</p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ── Premium Gallery ────────────────────────────────────── */}
      <Gallery
        title="Our Story"
        subtitle="Moments to Remember"
        images={[1, 2, 3, 4, 5, 6, 7, 8].map((num) => ({
          src: new URL(`./assets/images/wedding-0${num}.jpg`, import.meta.url).href,
          alt: `Wedding moment ${num}`,
        }))}
      />

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="footer">
        <AnimatedSection>
          <OrnamentDivider color="#c5a059" />
          <FloatingElement yRange={6}>
            <p className="footer-message">Your presence will be our treasured gift</p>
          </FloatingElement>
          <HeartDivider color="#c5a059" />
          <p className="contact">RSVP: 9480301277</p>
          <div className="footer-names">Reema & Shailesh</div>
        </AnimatedSection>
      </footer>
    </div>
  );
}

export default App;
