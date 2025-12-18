import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

function SteamParticles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, [count]);

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
        <pointsMaterial size={0.12} color="#ff6b1a" opacity={0.6} />
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
      group.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 2;
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
      <mesh position={[0, 0, -20]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshPhongMaterial color="#00ff41" wireframe opacity={0.5} transparent />
      </mesh>
    </group>
  );
}

function AnimatedTorus() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -12]}>
      <torusGeometry args={[4, 1, 32, 100]} />
      <meshPhongMaterial color="#ff6b1a" wireframe />
    </mesh>
  );
}

export function BackgroundScene() {
  const isMobile = useIsMobile();
  const particleCount = isMobile ? 1200 : 3000;

  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 25], fov: 75 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#1e90ff" />
        <SteamParticles count={particleCount} />
        <FloatingObjects />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
}
