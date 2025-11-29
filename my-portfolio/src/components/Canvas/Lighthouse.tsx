import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";


const Lighthouse = () => {
  const { scene } = useGLTF("./lighthouse/lighthouse.glb");
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
    <group ref={ref} position={[0, 0, 0]} scale={15}>
      <primitive object={scene} />
    </group>
  );
};

export default Lighthouse;

useGLTF.preload("./lighthouse/lighthouse.glb");
