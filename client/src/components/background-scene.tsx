import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SteamParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = new Float32Array(3000 * 3);
  for (let i = 0; i < 3000; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 50;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 50;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0001;
      ref.current.rotation.y += 0.0002;
    }
  });

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={particles} count={particles.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} color="#ff6b1a" opacity={0.6} />
      </points>
    </group>
  );
}

function FloatingObjects() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[5, 5, -10]}>
        <icosahedronGeometry args={[2, 4]} />
        <meshPhongMaterial color="#1e90ff" wireframe />
      </mesh>
      <mesh position={[-8, -3, -15]}>
        <octahedronGeometry args={[1.5, 3]} />
        <meshPhongMaterial color="#ffd700" wireframe />
      </mesh>
      <mesh position={[3, -5, -8]}>
        <tetrahedronGeometry args={[1.2]} />
        <meshPhongMaterial color="#ff6b1a" wireframe />
      </mesh>
    </group>
  );
}

export function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SteamParticles />
        <FloatingObjects />
      </Canvas>
    </div>
  );
}
