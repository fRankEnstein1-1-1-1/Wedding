import React, { useState, useEffect } from 'react';
import './App.css';
// Ensure this path matches the video you want to use from your assets
import bgVideo from './assets/videos/wedding-film-02.mp4'; 

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <div className="hero-content fade-in-up">
            <h4 className="journey-text">The Journey Begins</h4>
            <h1 className="names">Reema & Shailesh</h1>
            <p className="date">30 • 12 • 2026</p>
          </div>
        </div>
      </section>

      {/* Parents & Quote Section */}
      <section className="intro-section">
        <div className="container">
          <p className="quote">
            "And over all these virtues put on love, which binds them all together in perfect unity."
            <br />
            <span>- Colossians: 3:14</span>
          </p>
          
          <h2 className="section-title">With the blessings of God</h2>
          <div className="parents-grid">
            <div className="parents-block">
              <h3>Eugine & Mabel Pinto</h3>
              <p>cordially invite you to bless the nuptials of their beloved daughter</p>
              <h2>Reema Marita</h2>
            </div>
            <div className="with-text">with</div>
            <div className="parents-block">
              <h2>Shailesh Preetham</h2>
              <p>(S/o. Bazil & Teresa Dsouza)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <h2 className="section-title">The Celebration Begins In</h2>
        <div className="countdown-timer">
          <div className="time-box">
            <span className="time-value">{timeLeft.days || '0'}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.hours || '0'}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.minutes || '0'}</span>
            <span className="time-label">Mins</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.seconds || '0'}</span>
            <span className="time-label">Secs</span>
          </div>
        </div>
      </section>

      {/* Itinerary / Events Section */}
      <section className="events-section">
        <h2 className="section-title">The Celebration</h2>
        
        <div className="event-card">
          <h3>Roce Ceremony</h3>
          <p className="event-date">Sunday, 27 December 2026</p>
          <p className="event-time">7:00 PM</p>
          <p className="event-venue">Holy Cross Church Hall<br/>Hospet, Moodbidri</p>
        </div>

        <div className="event-card main-event">
          <h3>Nuptials</h3>
          <p className="event-date">Wednesday, 30 December 2026</p>
          <p className="event-time">04:30 PM</p>
          <p className="event-venue">St. Sebastian Church<br/>Permannur, Thokkottu</p>
        </div>

        <div className="event-card">
          <h3>Wedding Reception</h3>
          <p className="event-date">Wednesday, 30 December 2026</p>
          <p className="event-time">07:00 PM</p>
          <p className="event-venue">St. Sebastian Auditorium<br/>Permannur, Thokkottu</p>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="footer">
        <p>Your presence will be our treasured gift</p>
        <p className="contact">RSVP: 9480301277</p>
      </footer>
    </div>
  );
}

export default App;
