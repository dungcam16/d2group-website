import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
// New
import BreathingBlob from './BreathingBlob';
import FloatingObjects from './FloatingObjects';
import CircuitLines from './CircuitLines';
import ParticleField from './ParticleField';
import DynamicBackground from './DynamicBackground';

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
        camera={{ position: [0, 0, 14], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        shadows="soft"
      >
        <Suspense fallback={null}>
          {/* 1. Nền gradient 3D động + ánh sáng động */}
          {enableDynamicBackground && <DynamicBackground />}

          {/* 2. AI Breathing Blob center */}
          <BreathingBlob />

          {/* 3. Các vật thể trôi nổi (multi-layer, depth) */}
          {enableFloatingObjects && <FloatingObjects count={10} />}
          {enableCircuits && <CircuitLines />}
          {enableParticles && <ParticleField />}

          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.27}
            />
          )}
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
