import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";


const Seagulls = () => {
  const { scene, animations } = useGLTF("./seagulls/seagulls_animated.glb");
  const { actions } = useAnimations(animations, scene);

  const ref = useRef<THREE.Group>(null);
  

  // Nach dem Laden alle Materialien in Wireframe umwandeln
  useEffect(() => {
    //Object.values(actions).forEach((action) => action?.play());
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: "white",
          wireframe: true,
        });
      }
    });
  }, [scene, actions]);

  return (
    <group ref={ref} position={[-3, 3.5, -5]} scale={0.25}>
      <primitive object={scene} />
    </group>
  );
};

export default Seagulls;

useGLTF.preload("./seagulls/seagulls_animated.glb");