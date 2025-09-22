// src/components/Animation/GlobeAnimation.jsx
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GlobeAnimation() {
  const globeRef = useRef();
  const arcsRef = useRef();

  useEffect(() => {
    const arcs = [];
    const arcGroup = new THREE.Group();

    // Create multiple arcs representing orange power lines
    for (let i = 0; i < 16; i++) {
      const curve = new THREE.EllipseCurve(
        0, 0,  // ax, aY
        1.02, 1.02, // xRadius, yRadius
        0, 2 * Math.PI,
        false,
        i * (Math.PI / 8)
      );

      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, p.y, 0))
      );

      const material = new THREE.LineBasicMaterial({
        color: 0xff8c00, // orange
        transparent: true,
        opacity: 0.6,
        linewidth: 2,
      });

      const line = new THREE.Line(geometry, material);
      arcGroup.add(line);
      arcs.push(line);
    }

    arcsRef.current = arcGroup;
    globeRef.current.add(arcGroup);
  }, []);

  useFrame(({ clock }) => {
    if (arcsRef.current) {
      arcsRef.current.rotation.y = clock.getElapsedTime() * 0.02; // slow rotation
    }
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Globe Sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={0x111111}
          roughness={1}
          metalness={0.1}
          emissive={0x050505}
        />
      </mesh>
    </group>
  );
}
