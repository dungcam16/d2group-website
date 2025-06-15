
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

// Custom gradient shader material
const GradientMaterial = shaderMaterial(
  {
    time: 0,
    color1: new THREE.Color('#1e40af'), // Metallic blue
    color2: new THREE.Color('#8b5cf6'), // Purple neon
    color3: new THREE.Color('#0f172a'), // Deep black
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec2 uv = vUv;
      float wave1 = sin(uv.x * 10.0 + time * 0.5) * 0.5 + 0.5;
      float wave2 = cos(uv.y * 8.0 + time * 0.3) * 0.5 + 0.5;
      
      vec3 color = mix(color3, color1, wave1);
      color = mix(color, color2, wave2 * 0.7);
      
      float alpha = 0.3 + wave1 * wave2 * 0.4;
      gl_FragColor = vec4(color, alpha);
    }
  `
);

extend({ GradientMaterial });

const DynamicBackground = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);
  const light3Ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.02;
      sphereRef.current.rotation.y = time * 0.01;
    }
    
    if (materialRef.current) {
      materialRef.current.time = time;
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
      
      {/* Gradient background sphere */}
      <Sphere ref={sphereRef} args={[40, 64, 64]} position={[0, 0, -25]}>
        <gradientMaterial
          ref={materialRef}
          transparent
          side={THREE.BackSide}
          color1={new THREE.Color('#1e40af')}
          color2={new THREE.Color('#8b5cf6')}
          color3={new THREE.Color('#0f172a')}
        />
      </Sphere>
    </>
  );
};

export default DynamicBackground;
