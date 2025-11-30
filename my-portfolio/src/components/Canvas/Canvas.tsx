import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
} from "@react-three/drei";
import CanvasLoader from "./Loader";
import CameraController from "./CameraController";
import ScrollLighthouse from "./ScrollLightHouse";
import Seagulls from "./Seagulls";


const CustomCanvas = () => {

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
        <ambientLight intensity={0.6} />
        <PresentationControls
          enabled={true}
          global={false}
          polar={[0, Math.PI / 9]}
          azimuth={[-0.2, 0.2]}
          snap={true}
        >        
          <ScrollLighthouse/>
          <Seagulls />
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default CustomCanvas;
