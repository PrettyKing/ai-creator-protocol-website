import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={4.5} position={[0, -1.3, 0]} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={0.5} intensity={0.8} />
        <pointLight position={[-5, 5, 2]} intensity={0.6} />
        <pointLight position={[5, -5, 2]} intensity={0.4} />
        <Suspense fallback={null}>
          <Model url="/chalee.glb" />
        </Suspense>
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}