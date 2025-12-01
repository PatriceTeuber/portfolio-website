// ScrollLighthouse.tsx
import { forwardRef } from "react";
import Lighthouse from "./Lighthouse";
import LightBeam from "./LightBeam";
import * as THREE from "three";
import type { DisplaySizeProps } from "./Canvas"; // pfad prüfen (Canvas.tsx / CustomCanvas.tsx)

const ScrollLighthouse = forwardRef<THREE.Group, DisplaySizeProps>(
  ({ small = false }, ref) => {
    return (
      <group ref={ref}>
        {/* Hier small (nicht isSmall) verwenden */}
        <Lighthouse small={small} />
        <LightBeam />
      </group>
    );
  }
);

ScrollLighthouse.displayName = "ScrollLighthouse";

export default ScrollLighthouse;
