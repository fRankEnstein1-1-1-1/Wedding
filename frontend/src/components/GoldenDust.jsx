import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── A single golden particle ────────────────────────────────── */
function GoldenParticles({ count = 100 }) {
  const ref = useRef();

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      sz[i] = Math.random();
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const posArray = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3 + 1] += Math.sin(t * 0.3 + i) * 0.002;
      posArray[i3] += Math.cos(t * 0.2 + i * 0.5) * 0.001;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c5a059"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Exported golden dust overlay ────────────────────────────── */
export default function GoldenDust() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        mixBlendMode: 'screen',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true }}
        dpr={[1, 1.5]}
      >
        <GoldenParticles count={80} />
      </Canvas>
    </div>
  );
}
