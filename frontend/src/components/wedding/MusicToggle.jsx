import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt auto-play when user first touches/scrolls the window
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          // Browser prevented autoplay without click
        });
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [hasInteracted, isPlaying]);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch((err) => {
        console.warn('Audio play error:', err);
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

      {/* Floating Gold Music Pill */}
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          onClick={toggleAudio}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#3d0912]/80 backdrop-blur-md border border-[#ddae65]/60 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(221,174,101,0.25)] text-[#ddae65] hover:border-[#ddae65] transition-all cursor-pointer"
          title={isPlaying ? "Mute music" : "Play wedding melody"}
        >
          {/* Animated sound wave bars or music icon */}
          <div className="flex items-center gap-0.5 h-3.5 w-3.5 justify-center">
            {isPlaying ? (
              <>
                <motion.span
                  animate={{ height: ['4px', '14px', '6px'] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                  className="w-0.5 bg-[#ddae65] rounded-full inline-block"
                />
                <motion.span
                  animate={{ height: ['12px', '4px', '14px'] }}
                  transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse', delay: 0.15 }}
                  className="w-0.5 bg-[#ddae65] rounded-full inline-block"
                />
                <motion.span
                  animate={{ height: ['6px', '14px', '4px'] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: 0.3 }}
                  className="w-0.5 bg-[#ddae65] rounded-full inline-block"
                />
              </>
            ) : (
              <svg className="w-3.5 h-3.5 fill-current text-[#ddae65]/80" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            )}
          </div>

          <span className="text-[11px] font-serif tracking-widest uppercase font-semibold text-[#f5d898]">
            {isPlaying ? "Music Playing" : "Play Music"}
          </span>

          {/* Glowing pulse ring when playing */}
          {isPlaying && (
            <span className="absolute -inset-0.5 rounded-full border border-[#ddae65]/40 animate-ping pointer-events-none" />
          )}
        </motion.button>
      </div>
    </>
  );
}
