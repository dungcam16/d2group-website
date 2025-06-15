
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import DynamicBackground from './DynamicBackground';
import FloatingObjects from './FloatingObjects';
import CircuitLines from './CircuitLines';
import ParticleField from './ParticleField';

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
  console.log('Scene3D rendering...');
  
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
        shadows
      >
        <Suspense fallback={null}>
          {enableDynamicBackground && <DynamicBackground />}
          {enableFloatingObjects && <FloatingObjects count={8} />}
          {enableCircuits && <CircuitLines />}
          {enableParticles && <ParticleField />}
          
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
