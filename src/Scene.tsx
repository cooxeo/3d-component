import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const Scene = () => {
  const tex = useTexture("./banner.png");
  const scene = useRef<THREE.Mesh>(null);

  const { viewport } = useThree();
  const { width, height } = viewport;

  // Rotate the mesh itself, not the group
  useFrame((_state, delta) => {
    if (scene.current) {
      scene.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1, 0.2]}>
      <mesh ref={scene}>
        <cylinderGeometry
          // Dynamically set radius and height based on viewport dimensions
          args={[width / 6, width / 6, height / 5, 40, 40, true]}
        />
        <meshStandardMaterial
          map={tex}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Scene;

{
  /* <mesh>
        <torusKnotGeometry args={[1.7, 0.3, 256, 256]} />
        <meshToonMaterial color={0x00bfff} />
      </mesh>
      <directionalLight position={[4, 2, 3]} /> */
}
