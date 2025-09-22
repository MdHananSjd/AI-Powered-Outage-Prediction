import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function GlobeAnimation() {
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#111"
        emissive="#222"
        roughness={0.7}
        metalness={0.4}
      />
    </mesh>
  );
}
