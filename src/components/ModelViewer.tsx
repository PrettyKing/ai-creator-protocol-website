import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ModelProps {
  url: string;
  onLoad?: () => void;
  onError?: () => void;
}

function Model({ url, onLoad, onError }: ModelProps) {
  const { scene } = useGLTF(url);
  React.useEffect(() => {
    if (scene) {
      onLoad?.();
    }
  }, [scene, onLoad]);
  
  return <primitive object={scene} scale={4.5} position={[0, -1.3, 0]} />;
}

const LoadingAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-400/30 rounded-full animate-spin">
            <div className="absolute inset-2 border-4 border-purple-400/50 rounded-full animate-spin animate-reverse"></div>
            <div className="absolute inset-4 border-4 border-pink-400/70 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        <p className="text-cyan-400 font-mono text-sm tracking-wider animate-pulse">
          Loading Model...
        </p>
      </div>
    </div>
  );
};

export default function ModelViewer() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleModelLoad = () => {
    setIsLoading(false);
  };

  const handleModelError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="w-full h-96 relative">
      {isLoading && <LoadingAnimation />}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-red-400 text-lg mb-2">⚠️</div>
            <p className="text-red-400 font-mono text-sm">Failed to load model</p>
            <button 
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
              }}
              className="mt-2 px-4 py-1 bg-red-600/20 border border-red-400 text-red-400 rounded hover:bg-red-600/30 transition-colors text-xs"
            >
              Retry
            </button>
          </div>
        </div>
      )}
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
          <Model 
            url="http://chalee-typora.oss-cn-beijing.aliyuncs.com/glb/chalee.glb" 
            onLoad={handleModelLoad}
            onError={handleModelError}
          />
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