// src/components/RotatingLightBeam.tsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useDepthBuffer, SpotLight } from "@react-three/drei";

interface RotatingLightBeamProps {
  radius?: number;   // wie weit um den Turm
  height?: number;   // Höhe des Leuchtturmkopfs
  speed?: number;    // Rotationsgeschwindigkeit
  color?: string;
}

export default function RotatingLightBeam({
  radius = 3.5,
  height = 2.5,  // <- dein Turmkopf
  speed = 0.4,
  color = "#88ccff",
}: RotatingLightBeamProps) {
  const lightRef = useRef<any>(null);
  const depthBuffer = useDepthBuffer({ frames: 1 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;

    if (lightRef.current) {
      // Lichtquelle bewegt sich auf Kreisbahn
      lightRef.current.position.set(0, height, 0);

      // Zeigt immer auf den Mittelpunkt des Turmkopfs
      lightRef.current.target.position.set(x, height, z);
      lightRef.current.target.updateMatrixWorld();

      // leichtes Pulsieren für Realismus
      lightRef.current.intensity = 2.5 + Math.sin(t * 2) * 0.2;
    }
  });

  return (
    <SpotLight
      ref={lightRef}
      depthBuffer={depthBuffer}
      castShadow
      penumbra={1}
      distance={20}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={3}
      color={color}
    />
  );
}
