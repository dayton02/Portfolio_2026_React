import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function InteractiveWireframe() {
  const meshRef = useRef();

  useFrame((state) => {
    // Subtle continuous rotation
    meshRef.current.rotation.y += 0.001;
    meshRef.current.rotation.z += 0.0005;
    
    // Smoothly interpolate rotation based on mouse position
    const targetX = (state.pointer.y * 0.5);
    const targetY = (state.pointer.x * 0.5);
    
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.02;
  });

  return (
    <Float floatIntensity={2} speed={1.5} rotationIntensity={0.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        {/* We use an indigo/purple color to match the brand. Minimal opacity for the elegant deep background vibe */}
        <meshBasicMaterial color="#a855f7" wireframe={true} transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

const HeroScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <InteractiveWireframe />
      </Canvas>
    </div>
  );
};

export default HeroScene;
