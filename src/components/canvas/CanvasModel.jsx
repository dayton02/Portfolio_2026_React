import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshDistortMaterial } from '@react-three/drei';

const AbstractObject = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Rotate slowly and follow mouse subtly
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t / 4) / 2 + (state.mouse.x * 0.5);
      meshRef.current.rotation.x = Math.cos(t / 4) / 2 + (state.mouse.y * -0.5);
    }
  });

  return (
    <Float
      speed={2} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
        position={[3, 0, 0]} // Offset to the right
      >
        <icosahedronGeometry args={[1.5, 2]} />
        <MeshDistortMaterial
          color={hovered ? "#00f0ff" : "#0a6c75"}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.3}
          speed={hovered ? 5 : 2}
        />
      </mesh>
    </Float>
  );
};

const CanvasModel = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffb000" />
        
        <AbstractObject />
        
        <Environment preset="city" />
        <ContactShadows position={[3, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
};

export default CanvasModel;
