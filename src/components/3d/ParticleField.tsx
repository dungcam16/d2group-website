
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorPalette = [
      new THREE.Color("#3b82f6"), // Metallic blue
      new THREE.Color("#8b5cf6"), // Purple neon
      new THREE.Color("#06b6d4"), // Cyan
      new THREE.Color("#fbbf24")  // Gold accent
    ];
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Create more organic distribution
      const radius = Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Assign colors
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (pointsRef.current) {
      pointsRef.current.rotation.x = time * 0.01;
      pointsRef.current.rotation.y = time * 0.015;
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        
        // Gentle floating movement
        positions[i + 1] = y + Math.sin(time * 0.5 + x * 0.1) * 0.002;
        positions[i + 2] = z + Math.cos(time * 0.3 + y * 0.1) * 0.001;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points 
      ref={pointsRef} 
      positions={positions} 
      colors={colors} 
      stride={3} 
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        alphaTest={0.001}
      />
    </Points>
  );
};

export default ParticleField;
