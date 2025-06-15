
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DynamicBackground = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);
  const light3Ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.02;
      sphereRef.current.rotation.y = time * 0.01;
    }
    
    // Dynamic lighting movement
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(time * 0.5) * 15;
      light1Ref.current.position.z = Math.cos(time * 0.5) * 15;
      light1Ref.current.intensity = 0.8 + Math.sin(time * 2) * 0.3;
    }
    
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(time * 0.3) * 12;
      light2Ref.current.position.y = Math.sin(time * 0.4) * 10;
      light2Ref.current.intensity = 0.6 + Math.cos(time * 1.5) * 0.2;
    }
    
    if (light3Ref.current) {
      light3Ref.current.position.y = Math.sin(time * 0.6) * 8;
      light3Ref.current.position.z = Math.cos(time * 0.7) * 10;
      light3Ref.current.intensity = 0.4 + Math.sin(time * 3) * 0.2;
    }
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.1} color="#1e40af" />
      
      {/* Dynamic point lights with metallic colors */}
      <pointLight
        ref={light1Ref}
        position={[10, 10, 5]}
        intensity={0.8}
        color="#3b82f6"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight
        ref={light2Ref}
        position={[-8, -8, -5]}
        intensity={0.6}
        color="#8b5cf6"
        castShadow
      />
      <pointLight
        ref={light3Ref}
        position={[0, 15, -10]}
        intensity={0.4}
        color="#fbbf24"
      />
      
      {/* Gradient background sphere with standard material */}
      <mesh ref={sphereRef} position={[0, 0, -25]}>
        <sphereGeometry args={[40, 64, 64]} />
        <meshStandardMaterial
          color="#1e40af"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </>
  );
};

export default DynamicBackground;
