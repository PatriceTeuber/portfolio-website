import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";


const Seagulls = () => {
  const { scene } = useGLTF("./seagulls/seagulls_animated.glb");
  const ref = useRef<THREE.Group>(null);

  // Nach dem Laden alle Materialien in Wireframe umwandeln
  useEffect(() => {
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
    <group ref={ref} position={[-3, 4, -5]} scale={0.25}>
      <primitive object={scene} />
    </group>
  );
};

export default Seagulls;

useGLTF.preload("./seagulls/seagulls_animated.glb");