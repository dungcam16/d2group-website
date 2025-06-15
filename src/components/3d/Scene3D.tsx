
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
}

const Scene3D = ({ className = "", enableControls = false }: Scene3DProps) => {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <DynamicBackground />
          <FloatingObjects count={12} />
          <CircuitLines />
          <ParticleField />
          
          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
          )}
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
