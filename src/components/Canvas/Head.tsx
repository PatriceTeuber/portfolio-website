import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const Head = () => {
  const { scene } = useGLTF("./portfolio-website/head/head.glb");
  const ref = useRef<THREE.Group>(null);

  // Nur Wireframe – keine Emissive, kein Licht, kein Pulsieren
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: "white",
          wireframe: true,
        });
      }
    });
  }, [scene]);

  return (
    <group ref={ref} position={[0, 0, 0]} scale={9}>
      <primitive object={scene} />
    </group>
  );
};

export default Head;

useGLTF.preload("./portfolio-website/head/head.glb");
