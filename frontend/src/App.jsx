import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Gallery } from "./components/gallery/Gallery";
import LetterOpening from "./components/LetterOpening"; // 1. Added your envelope import

export default function App() {
  const [hasOpened, setHasOpened] = useState(false); // 2. Added the state

  const { scrollYProgress } = useScroll();
  const heroScale = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [1, 1.08]),
    { stiffness: 80, damping: 20 },
  );
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0.3]);
  const heroY = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [0, 60]),
    { stiffness: 80, damping: 20 },
  );

  // 3. If the envelope hasn't been opened, render ONLY the envelope
  if (!hasOpened) {
    return <LetterOpening onOpen={() => setHasOpened(true)} />;
  }

  // 4. Once opened, render the rest of the website
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white fade-in-website">
      {/* Hero */}
      <section className="relative flex h-[85vh] min-h-[560px] w-full items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale, y: heroY }}
        >
          <img
            src="https://images.pexels.com/photos/11557762/pexels-photo-11557762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1600&w=1600"
            alt="Dramatic mountain range under cloudy sky"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0b0b0d]" />
        </motion.div>
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-amber-200/90"
          >
            With the blessings of God
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl italic leading-tight text-white sm:text-6xl md:text-7xl"
          >
            Reema & Shailesh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-sm font-light text-white/70 sm:text-base"
          >
            December 30, 2026
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-[11px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-[1px] bg-gradient-to-b from-white/70 to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Intro strip */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl italic text-white sm:text-4xl"
        >
          The Journey Begins
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-lg text-sm font-light text-white/60 sm:text-base"
        >
          "And over all these virtues put on love, which binds them all together in perfect unity."
          <br /><br />
          - Colossians: 3:14
        </motion.p>
      </section>

      {/* Gallery */}
      <main className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <Gallery />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <p className="font-serif text-lg italic text-white/80">
          Your presence will be our treasured gift
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">
            RSVP: 9480301277
        </p>
      </footer>
    </div>
  );
}