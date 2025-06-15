
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
// Temporarily disable problematic components
// import DynamicBackground from './DynamicBackground';
// import FloatingObjects from './FloatingObjects';
// import CircuitLines from './CircuitLines';
// import ParticleField from './ParticleField';

interface Scene3DProps {
  className?: string;
  enableControls?: boolean;
  enableParticles?: boolean;
  enableFloatingObjects?: boolean;
  enableCircuits?: boolean;
  enableDynamicBackground?: boolean;
}

const Scene3D = ({ 
  className = "", 
  enableControls = false,
  enableParticles = true,
  enableFloatingObjects = true,
  enableCircuits = true,
  enableDynamicBackground = true
}: Scene3DProps) => {
  console.log('Scene3D rendering safely...');
  
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {/* Basic lighting and environment */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 5]} intensity={0.5} />
          
          {/* Simple background gradient effect */}
          <mesh position={[0, 0, -15]}>
            <planeGeometry args={[50, 50]} />
            <meshBasicMaterial 
              color="#1e40af" 
              transparent 
              opacity={0.1}
            />
          </mesh>
          
          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.3}
            />
          )}
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
