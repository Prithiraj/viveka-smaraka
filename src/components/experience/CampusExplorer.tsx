"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";
import type { Facility } from "@/types/content";

const BLOCKS: Array<{
  position: [number, number, number];
  scale: [number, number, number];
  rotation?: [number, number, number];
}> = [
  { position: [-1.8, 0.55, 0.2], scale: [1.7, 1.1, 1.2] },
  { position: [0, 0.45, -0.65], scale: [1.4, 0.9, 1.05] },
  { position: [1.75, 0.32, -0.2], scale: [1.25, 0.64, 1.1] },
  { position: [0.3, 0.22, 1.15], scale: [2.25, 0.44, 0.72], rotation: [0, -0.12, 0] },
  { position: [-1.65, 0.24, 1.55], scale: [1.25, 0.48, 0.72] },
  { position: [1.95, 0.3, 1.25], scale: [1.1, 0.6, 0.82] },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

function CampusModel({ selected, count }: { selected: number; count: number }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const target = -0.18 + state.pointer.x * 0.08;
    group.current.rotation.y += (target - group.current.rotation.y) * Math.min(1, delta * 2.2);
    group.current.rotation.x = -0.08 + state.pointer.y * 0.025;
  });

  return (
    <group ref={group} rotation={[-0.08, -0.18, 0]} position={[0, -0.55, 0]}>
      {BLOCKS.slice(0, count).map((block, index) => {
        const active = selected === index;
        return (
          <mesh
            key={index}
            position={block.position}
            scale={block.scale}
            rotation={block.rotation}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={active ? "#f1c06f" : "#5f513b"}
              emissive={active ? "#7b4d18" : "#141812"}
              emissiveIntensity={active ? 0.75 : 0.16}
              roughness={0.68}
              metalness={0.08}
            />
          </mesh>
        );
      })}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0.55]} receiveShadow>
        <planeGeometry args={[7.2, 5.4]} />
        <meshStandardMaterial color="#171b15" roughness={1} />
      </mesh>
    </group>
  );
}

function StaticCampus({ selected, count }: { selected: number; count: number }) {
  return (
    <div className="campus-static" aria-hidden="true">
      {BLOCKS.slice(0, count).map((_, index) => (
        <span className={selected === index ? "is-active" : ""} key={index} />
      ))}
    </div>
  );
}

export function CampusExplorer({ facilities }: { facilities: readonly Facility[] }) {
  const [selected, setSelected] = useState(0);
  const reducedMotion = useReducedMotion();
  const spatialFacilities = facilities.slice(0, BLOCKS.length);

  if (!spatialFacilities.length) {
    return <div className="campus-explorer campus-explorer--empty">Spatial records are awaiting publication.</div>;
  }

  const activeIndex = Math.min(selected, spatialFacilities.length - 1);
  const facility = spatialFacilities[activeIndex];

  return (
    <div className="campus-explorer">
      <div className="campus-explorer__visual">
        <div className="campus-explorer__coordinates" aria-hidden="true">
          <span>Conceptual plan</span>
          <span>Not to scale</span>
        </div>
        {reducedMotion ? (
          <StaticCampus selected={activeIndex} count={spatialFacilities.length} />
        ) : (
          <Canvas
            aria-hidden="true"
            dpr={[1, 1.5]}
            camera={{ position: [5.8, 4.5, 7.5], fov: 34 }}
            shadows
          >
            <ambientLight intensity={0.65} />
            <directionalLight position={[4, 8, 5]} intensity={2.2} color="#f2dfbd" castShadow />
            <pointLight position={[-4, 2, -2]} intensity={18} color="#b7762f" distance={9} />
            <CampusModel selected={activeIndex} count={spatialFacilities.length} />
          </Canvas>
        )}
        <div className="campus-explorer__caption">
          <span>Spatial study · abstract model</span>
          <strong>{facility.role}</strong>
        </div>
      </div>

      <div className="campus-explorer__panel">
        <div className="campus-explorer__active" aria-live="polite">
          <span>{facility.index} / {facility.role}</span>
          <h3>{facility.title}</h3>
          <p>{facility.description}</p>
        </div>
        <div className="campus-explorer__controls" aria-label="Explore Viveka Smaraka spaces">
          {spatialFacilities.map((item, index) => (
            <button
              type="button"
              key={item.slug}
              className={activeIndex === index ? "is-active" : ""}
              aria-pressed={activeIndex === index}
              onClick={() => setSelected(index)}
            >
              <span>{item.index}</span>
              <strong>{item.title}</strong>
              <small>{item.role}</small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
