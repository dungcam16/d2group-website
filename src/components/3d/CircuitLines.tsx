
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CircuitLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 8; i++) {
      const points = [];
      const segments = 20;
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const x = (t - 0.5) * 15 + Math.sin(t * Math.PI * 4) * 2;
        const y = Math.sin(t * Math.PI * 2) * 3 + (Math.random() - 0.5) * 2;
        const z = Math.cos(t * Math.PI * 2) * 3 + (Math.random() - 0.5) * 2;
        points.push(new THREE.Vector3(x, y, z));
      }
      temp.push({
        points,
        color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6",
        opacity: 0.3 + Math.random() * 0.4
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.05;
      linesRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Line) {
          child.rotation.y = state.clock.elapsedTime * (0.1 + index * 0.02);
        }
      });
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((line, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(line.points);
        return (
          <line key={index}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial
              attach="material"
              color={line.color}
              transparent
              opacity={line.opacity}
              linewidth={2}
            />
          </line>
        );
      })}
    </group>
  );
};

export default CircuitLines;
