
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CircuitLines = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const lineObjects = [];
    
    for (let i = 0; i < 6; i++) {
      const points: THREE.Vector3[] = [];
      const segments = 15;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const x = (t - 0.5) * 20 + Math.sin(t * Math.PI * 3) * 3;
        const y = Math.sin(t * Math.PI * 2) * 4 + (Math.random() - 0.5) * 2;
        const z = Math.cos(t * Math.PI * 2) * 4 + (Math.random() - 0.5) * 2;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const color = i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4";
      
      lineObjects.push({
        geometry,
        color,
        opacity: 0.4 + Math.random() * 0.3,
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ] as [number, number, number]
      });
    }
    
    return lineObjects;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.z = time * 0.03;
      groupRef.current.rotation.y = time * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((lineData, index) => (
        <mesh key={index} rotation={lineData.rotation}>
          <bufferGeometry attach="geometry" {...lineData.geometry} />
          <lineBasicMaterial 
            attach="material" 
            color={lineData.color}
            transparent
            opacity={lineData.opacity}
            linewidth={2}
          />
        </mesh>
      ))}
    </group>
  );
};

export default CircuitLines;
