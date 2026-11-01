import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;

    // Try auto-play on first click anywhere if user hasn't explicitly interacted
    const handleFirstClick = () => {
      if (!hasInteracted) {
        audio.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          // Browser prevented autoplay
        });
      }
    };

    window.addEventListener('click', handleFirstClick, { once: true });
    return () => {
      window.removeEventListener('click', handleFirstClick);
    };
  }, [hasInteracted]);

  const togglePlay = (e) => {
    e.stopPropagation();
    setHasInteracted(true);
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn('Playback error:', err);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/wedding-music.mp3"
        loop
        preload="auto"
      />

      <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden sm:flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-pink-400/30 text-xs text-pink-200 tracking-wider font-light"
          >
            <span>Wedding Melody</span>
            <span className="flex items-end gap-0.5 h-3 ml-1">
              <span className="w-0.5 h-full bg-pink-400 animate-pulse" />
              <span className="w-0.5 h-2/3 bg-pink-300 animate-pulse [animation-delay:150ms]" />
              <span className="w-0.5 h-4/5 bg-pink-400 animate-pulse [animation-delay:300ms]" />
            </span>
          </motion.div>
        )}

        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isPlaying ? 'Pause music' : 'Play wedding music'}
          className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
          style={{
            background: isPlaying
              ? 'linear-gradient(135deg, #e91e63, #9c27b0)'
              : 'linear-gradient(135deg, #d81b60, #8e24aa)',
            boxShadow: isPlaying
              ? '0 0 20px rgba(233, 30, 99, 0.6), 0 0 40px rgba(156, 39, 176, 0.3)'
              : '0 4px 15px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Subtle pulse ring when playing */}
          {isPlaying && (
            <span className="absolute inset-0 rounded-full border border-pink-300/60 animate-ping pointer-events-none" />
          )}

          {isPlaying ? (
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>
      </div>
    </>
  );
}
