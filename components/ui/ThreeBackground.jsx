"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function ParticleField() {
  const ref = useRef();
  const parallaxRef = useRef();

  // Generate random points in a sphere
  const positions = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 * Math.cbrt(Math.random()); // Random radius up to 2.5
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = r * Math.cos(phi); // z
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    // Slowly rotate the inner starfield continuously
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;

    // Smoothly tilt the outer group based on mouse position (parallax)
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;

    parallaxRef.current.rotation.y += (targetX - parallaxRef.current.rotation.y) * 0.05;
    parallaxRef.current.rotation.x += (-targetY - parallaxRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={parallaxRef}>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#4f6fd3"
            size={0.015}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.6}
          />
        </Points>
      </group>
    </group>
  );
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 three-bg-container">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
