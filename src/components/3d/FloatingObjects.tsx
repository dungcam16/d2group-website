
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingObjectsProps {
  count?: number;
}

const FloatingObjects = ({ count = 15 }: FloatingObjectsProps) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const objects = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: 0.2 + Math.random() * 0.8,
        type: Math.floor(Math.random() * 3)
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {objects.map((obj, index) => (
        <Float
          key={index}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.5 + Math.random() * 0.5}
          floatIntensity={0.5 + Math.random() * 0.5}
        >
          <mesh
            position={obj.position as [number, number, number]}
            rotation={obj.rotation as [number, number, number]}
            scale={obj.scale}
          >
            {obj.type === 0 && <icosahedronGeometry args={[1, 0]} />}
            {obj.type === 1 && <octahedronGeometry args={[1, 0]} />}
            {obj.type === 2 && <dodecahedronGeometry args={[1, 0]} />}
            
            <MeshDistortMaterial
              color={obj.type === 0 ? "#3b82f6" : obj.type === 1 ? "#8b5cf6" : "#06b6d4"}
              roughness={0.2}
              metalness={0.8}
              distort={0.3}
              speed={2}
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default FloatingObjects;
