
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const DynamicBackground = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
    
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 10;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 10;
      lightRef.current.intensity = 0.5 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Dynamic directional light */}
      <directionalLight
        ref={lightRef}
        position={[10, 10, 5]}
        intensity={0.5}
        color="#3b82f6"
        castShadow
      />
      
      {/* Additional accent lights */}
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
      <pointLight position={[10, -10, 10]} intensity={0.3} color="#06b6d4" />
      
      {/* Background sphere with gradient material */}
      <Sphere ref={sphereRef} args={[50, 32, 32]} position={[0, 0, -30]}>
        <MeshDistortMaterial
          color="#0f172a"
          roughness={0.8}
          metalness={0.2}
          distort={0.1}
          speed={1}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </>
  );
};

export default DynamicBackground;
