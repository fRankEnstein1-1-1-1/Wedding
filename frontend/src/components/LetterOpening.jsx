import React, { useState } from 'react';
import './LetterOpening.css';

const LetterOpening = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Wait 1.5 seconds for the envelope to open, then trigger the main website
      setTimeout(() => {
        if (onOpen) onOpen();
      }, 1500);
    }
  };

  return (
    <div className="envelope-wrapper">
      <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
        <div className="flap"></div>
        <div className="stamp">RS</div>
        <div className="letter">
          <h3>Reema & Shailesh</h3>
          <p>December 30, 2026</p>
        </div>
      </div>
      {!isOpen && <p className="tap-text">Tap to open invitation</p>}
    </div>
  );
};

export default LetterOpening;