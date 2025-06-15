
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingObjectsProps {
  count?: number;
}

const FloatingObjects = ({ count = 8 }: FloatingObjectsProps) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const objects = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 20
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ] as [number, number, number],
        scale: 0.3 + Math.random() * 0.7,
        type: Math.floor(Math.random() * 4),
        speed: 0.5 + Math.random() * 1.5,
        rotationSpeed: 0.2 + Math.random() * 0.5
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.position.y = Math.sin(time * 0.3) * 0.5;
    }
  });

  const getGeometry = (type: number) => {
    switch (type) {
      case 0:
        return <icosahedronGeometry args={[1, 1]} />;
      case 1:
        return <octahedronGeometry args={[1, 0]} />;
      case 2:
        return <dodecahedronGeometry args={[1, 0]} />;
      case 3:
        return <tetrahedronGeometry args={[1, 0]} />;
      default:
        return <icosahedronGeometry args={[1, 1]} />;
    }
  };

  const getColor = (type: number) => {
    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#fbbf24"];
    return colors[type] || "#3b82f6";
  };

  return (
    <group ref={groupRef}>
      {objects.map((obj, index) => (
        <Float
          key={index}
          speed={obj.speed}
          rotationIntensity={obj.rotationSpeed}
          floatIntensity={0.3}
          position={obj.position}
        >
          <mesh
            rotation={obj.rotation}
            scale={obj.scale}
            castShadow
            receiveShadow
          >
            {getGeometry(obj.type)}
            <MeshDistortMaterial
              color={getColor(obj.type)}
              roughness={0.1}
              metalness={0.9}
              distort={0.2}
              speed={1.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default FloatingObjects;
