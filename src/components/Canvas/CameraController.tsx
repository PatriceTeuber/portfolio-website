import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraController() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 2.5, 0));

  useFrame(() => {
    camera.lookAt(target.current);
  });

  return null;
}
