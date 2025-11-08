import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


const Lighthouse = () => {
  const lighthouseModel = useGLTF("./lighthouse/lighthouse.glb");
  const ref = useRef<THREE.Group>(null);


  return (
    <group ref={ref} position={[0, 0, 0]} scale={15}>
      <primitive object={lighthouseModel.scene} />
    </group>
  );
};

export default Lighthouse;

useGLTF.preload("./lighthouse/lighthouse.glb");
