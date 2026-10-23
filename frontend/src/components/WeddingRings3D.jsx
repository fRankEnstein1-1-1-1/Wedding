import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

/* ── Single wedding ring ─────────────────────────────────────── */
function Ring({ position, rotationAxis, color, emissive }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (rotationAxis === 'y') {
      ref.current.rotation.y = t * 0.4;
      ref.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    } else {
      ref.current.rotation.x = t * 0.4;
      ref.current.rotation.z = Math.sin(t * 0.2) * 0.15;
    }
    ref.current.position.y = position[1] + Math.sin(t * 0.6) * 0.08;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.55, 0.08, 32, 64]} />
      <meshStandardMaterial
        color={color}
        metalness={0.95}
        roughness={0.12}
        emissive={emissive}
        emissiveIntensity={0.15}
        envMapIntensity={1}
      />
    </mesh>
  );
}

/* ── Sparkle particles around the rings ──────────────────────── */
function Sparkles({ count = 60 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 3;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.05;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.05;
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
        size={0.02}
        color="#ffd700"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Exported 3D rings scene ─────────────────────────────────── */
export default function WeddingRings3D() {
  return (
    <div
      style={{
        width: '100%',
        height: '220px',
        margin: '0 auto',
        maxWidth: '320px',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fffaf0" />
        <pointLight position={[-3, 2, 2]} intensity={0.6} color="#ffd700" />
        <pointLight position={[3, -2, -2]} intensity={0.4} color="#f0e6d3" />

        {/* Interlocking rings */}
        <Ring
          position={[-0.3, 0, 0]}
          rotationAxis="y"
          color="#ffd700"
          emissive="#cc9900"
        />
        <Ring
          position={[0.3, 0, 0]}
          rotationAxis="x"
          color="#ffecb3"
          emissive="#daa520"
        />

        <Sparkles count={50} />
      </Canvas>
    </div>
  );
}
