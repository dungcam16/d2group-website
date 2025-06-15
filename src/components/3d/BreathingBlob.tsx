
import { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// Gradient utility
function lerpColor(a: THREE.Color, b: THREE.Color, t: number) {
  return a.clone().lerp(b, t);
}

const metallicBlue = new THREE.Color("#1e40af");
const neonPurple = new THREE.Color("#8b5cf6");
const goldAccent = new THREE.Color("#fbbf24");

const BreathingBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [bounce, setBounce] = useState(false);

  useFrame(({ clock, mouse, viewport }) => {
    const t = clock.getElapsedTime();
    // Breathing: scale the shape subtly
    const scale = 1 + Math.sin(t * 1.5) * 0.08 + (bounce ? 0.2 * Math.abs(Math.sin(t * 5)) : 0);

    // Mouse hover for tilt
    const mx = mouse.x * Math.PI * 0.08;
    const my = mouse.y * Math.PI * 0.08;

    if (meshRef.current) {
      meshRef.current.rotation.x = my;
      meshRef.current.rotation.y = mx + Math.sin(t * 0.5) * 0.15;
      meshRef.current.scale.set(scale, scale, scale);

      // Color breathing: interpolate blue <-> purple, gold accent on peak
      // t ∈ [0, 1]
      const colorLerp = (Math.sin(t) + 1) / 2;
      // base color blend metallic blue ↔ neon purple
      const base = lerpColor(metallicBlue, neonPurple, colorLerp);

      // gold highlight "pulse" at scaling peak
      let accent = base.clone();
      if (colorLerp > 0.82) {
        accent = lerpColor(base, goldAccent, (colorLerp - 0.82) * 5); // subtle yellow only at high
      }
      if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
        meshRef.current.material.color.copy(accent);
        // Specular "highlight"
        meshRef.current.material.metalness = 0.92;
        meshRef.current.material.roughness = 0.18;
        meshRef.current.material.envMapIntensity = 1.3;
      }
    }
  });

  // Click = bounce effect for a while
  const handlePointerDown = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 500);
  };

  return (
    <Float speed={1.7} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        onPointerDown={handlePointerDown}
        onPointerOver={e => { document.body.style.cursor = 'pointer'; }}
        onPointerOut={e => { document.body.style.cursor = 'auto'; }}
      >
        {/* Lower segments on mobile */}
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial
          color={metallicBlue}
          metalness={0.92}
          roughness={0.18}
          envMapIntensity={1.3}
        />
      </mesh>
    </Float>
  );
};

export default BreathingBlob;
