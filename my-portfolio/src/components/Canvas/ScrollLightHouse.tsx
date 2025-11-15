// ScrollLighthouse.tsx
import { forwardRef } from "react";
import Lighthouse from "./Lighthouse";
import LightBeam from "./LightBeam";
import * as THREE from "three";

const ScrollLighthouse = forwardRef<THREE.Object3D>((props, ref) => {
  return (
    <group ref={ref} {...props}>
      <Lighthouse />
      <LightBeam />
    </group>
  );
});

export default ScrollLighthouse;
