'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.mouse.x * 2), 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.mouse.y * 2), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full opacity-100 transition-opacity duration-1000">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <CameraRig />
        {/* جسيمات بلون النيون السماوي (Neon Cyan) */}
        <Sparkles count={150} scale={12} size={2} speed={0.2} opacity={0.4} color="#00FFFF" />
        {/* جسيمات بلون البنفسجي الكهربائي (Electric Violet) */}
        <Sparkles count={100} scale={15} size={3} speed={0.1} opacity={0.3} color="#8A2BE2" />
      </Canvas>
    </div>
  );
}
