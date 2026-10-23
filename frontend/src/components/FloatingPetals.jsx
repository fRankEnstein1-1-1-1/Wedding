import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── A single rose petal ────────────────────────────────────── */
function Petal({ position, speed, rotSpeed, scale, color }) {
  const ref = useRef();
  const wobble = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.y -= speed * 0.008;
    ref.current.position.x += Math.sin(t * 0.5 + wobble) * 0.003;
    ref.current.position.z += Math.cos(t * 0.3 + wobble) * 0.002;
    ref.current.rotation.x += rotSpeed * 0.004;
    ref.current.rotation.z += rotSpeed * 0.003;

    if (ref.current.position.y < -6) {
      ref.current.position.y = 7;
      ref.current.position.x = (Math.random() - 0.5) * 12;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <planeGeometry args={[0.15, 0.22, 1, 1]} />
      <meshStandardMaterial
        color={color}
        side={THREE.DoubleSide}
        transparent
        opacity={0.65}
        roughness={0.9}
      />
    </mesh>
  );
}

/* ── Field of petals ────────────────────────────────────────── */
function PetalField({ count = 40 }) {
  const petals = useMemo(() => {
    const colors = ['#f8b4c8', '#f7a4bb', '#fcc5d4', '#e8899e', '#fdd6e1', '#fff0f3'];
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 4,
      ],
      speed: 0.25 + Math.random() * 0.6,
      rotSpeed: 0.4 + Math.random() * 1.2,
      scale: 0.6 + Math.random() * 1.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count]);

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      {petals.map((petal, i) => (
        <Petal key={i} {...petal} />
      ))}
    </>
  );
}

/* ── Exported canvas wrapper ────────────────────────────────── */
export default function FloatingPetals() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <PetalField count={35} />
      </Canvas>
    </div>
  );
}
