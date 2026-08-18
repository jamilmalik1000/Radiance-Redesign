import { Canvas, useFrame } from "@react-three/fiber";
import { Line, PointMaterial, Points } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
function Panels() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }) => {
    if (group.current) {
      group.current.rotation.y = pointer.x * 0.06;
      group.current.rotation.x = -0.12 + pointer.y * 0.025;
      group.current.position.y = Math.sin(clock.elapsedTime * 0.35) * 0.03;
    }
  });
  const cells = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        x: ((i % 6) - 2.5) * 0.54,
        z: (Math.floor(i / 6) - 1.5) * 0.65,
      })),
    [],
  );
  return (
    <group ref={group} rotation={[-0.12, -0.25, 0]} position={[0.2, -0.7, 0]}>
      {cells.map((c, i) => (
        <group key={i} position={[c.x, 0, c.z]}>
          <mesh castShadow>
            <boxGeometry args={[0.48, 0.045, 0.58]} />
            <meshStandardMaterial
              color="#102e57"
              metalness={0.7}
              roughness={0.24}
            />
          </mesh>
          <mesh position={[0, 0.027, 0]}>
            <planeGeometry args={[0.44, 0.54, 4, 5]} />
            <meshStandardMaterial
              color="#0b4c79"
              wireframe
              emissive="#2DD4FF"
              emissiveIntensity={0.12}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
function Particles() {
  const positions = useMemo(() => {
    const a = new Float32Array(90 * 3);
    for (let i = 0; i < a.length; i += 3) {
      a[i] = (Math.random() - 0.5) * 7;
      a[i + 1] = (Math.random() - 0.3) * 4;
      a[i + 2] = (Math.random() - 0.5) * 4;
    }
    return a;
  }, []);
  return (
    <Points positions={positions}>
      <PointMaterial
        transparent
        color="#FDB813"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        castShadow
        color="#ffd67a"
        intensity={2.5}
        position={[-3, 5, 3]}
      />
      <pointLight
        color="#2DD4FF"
        intensity={12}
        distance={5}
        position={[2, -0.4, 1]}
      />
      <Panels />
      <Particles />
      <Line
        points={[
          [-2, -0.55, 0.8],
          [-0.8, -0.25, 1],
          [0.5, -0.35, 0.8],
          [1.7, 0.25, 0.3],
          [2.5, 0.45, 0],
        ]}
        color="#2DD4FF"
        lineWidth={2}
      />
    </>
  );
}
export default function SolarHeroScene() {
  return (
    <div
      className="scene"
      role="img"
      aria-label="Interactive visualization of sunlight moving through a solar array into connected infrastructure"
    >
      <Canvas
        dpr={[1, 1.5]}
        frameloop="always"
        camera={{ position: [0, 1.5, 5.3], fov: 42 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
