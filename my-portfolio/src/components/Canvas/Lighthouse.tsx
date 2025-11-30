import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";


const Lighthouse = () => {
  const { scene } = useGLTF("./lighthouse/lighthouse_blender.glb");
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
    <group ref={ref} position={[0, -7.25, 0]} scale={0.25}>
      <primitive object={scene} />
    </group>
  );
};

export default Lighthouse;

useGLTF.preload("./lighthouse/lighthouse_blender.glb");
