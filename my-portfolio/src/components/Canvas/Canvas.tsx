import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
} from "@react-three/drei";
import CanvasLoader from "./Loader";
import CameraController from "./CameraController";
import ScrollLighthouse from "./ScrollLightHouse";
import * as THREE from "three";

const CustomCanvas = () => {
  const lighthouseGroupRef = useRef<THREE.Object3D | null>(null);

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      frameloop="always"
      camera={{ position: [0, 2, 8], fov: 45 }}
      style={{ background: "radial-gradient(#020617, #000)" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Environment preset="night" />
        <CameraController />
        <ambientLight intensity={0.4} />
        <ScrollLighthouse ref={lighthouseGroupRef} />
      </Suspense>
    </Canvas>
  );
};

export default CustomCanvas;
