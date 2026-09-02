"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function Architecture() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.15) * 0.08;
    group.current.position.y = Math.sin(t * 0.35) * 0.06;
  });

  return (
    <group ref={group} rotation={[-0.08, -0.25, 0]}>
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[3.6, 4.1, 0.18, 6]} />
        <meshStandardMaterial color="#2a2a25" roughness={0.8} metalness={0.15} />
      </mesh>

      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[4.8, 1.25, 2.35]} />
        <meshStandardMaterial color="#c79049" roughness={0.48} metalness={0.28} />
      </mesh>

      <mesh position={[0, 0.2, -0.2]}>
        <boxGeometry args={[3.9, 0.55, 1.9]} />
        <meshStandardMaterial color="#eee2c4" roughness={0.52} metalness={0.08} />
      </mesh>

      <mesh position={[0, 1.15, -0.15]}>
        <boxGeometry args={[1.35, 1.9, 1.25]} />
        <meshStandardMaterial color="#d5a25b" roughness={0.38} metalness={0.3} />
      </mesh>

      <mesh position={[0, 2.16, -0.15]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.95, 0.85, 4]} />
        <meshStandardMaterial color="#f0d9a5" roughness={0.42} metalness={0.2} />
      </mesh>

      {[-1.55, -0.52, 0.52, 1.55].map((x) => (
        <mesh key={x} position={[x, -0.62, 1.22]}>
          <boxGeometry args={[0.18, 1.05, 0.15]} />
          <meshStandardMaterial color="#f0d9a5" roughness={0.5} />
        </mesh>
      ))}

      <mesh position={[0, -0.25, 1.24]}>
        <boxGeometry args={[4.15, 0.12, 0.12]} />
        <meshStandardMaterial color="#f0d9a5" roughness={0.45} />
      </mesh>
    </group>
  );
}

function LightThread() {
  return (
    <Float speed={0.7} rotationIntensity={0.15} floatIntensity={0.25}>
      <mesh position={[0.1, 0.25, 0.5]} rotation={[0, 0, -0.28]}>
        <torusGeometry args={[2.9, 0.018, 8, 160, Math.PI * 1.4]} />
        <meshBasicMaterial color="#f6c66f" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.1, 7.8], fov: 38 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 6, 5]} intensity={4.8} color="#ffe2a6" />
      <pointLight position={[-4, 0, 4]} intensity={14} distance={10} color="#8f5a28" />
      <Architecture />
      <LightThread />
    </Canvas>
  );
}
