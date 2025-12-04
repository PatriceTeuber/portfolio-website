import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import type { DisplaySizeProps } from "./Canvas";

const Seagulls = ({ small = false }: DisplaySizeProps) => {
  const { scene, animations } = useGLTF(
    "./seagulls/seagulls_animated.glb"
  );
  const { actions } = useAnimations(animations, scene);

  const ref = useRef<THREE.Group>(null);

  // Nach dem Laden alle Materialien in Wireframe umwandeln
  useEffect(() => {
    // Animationen abspielen und Geschwindigkeit anpassen
    Object.values(actions).forEach((action) => {
      action!.timeScale = 0.5; // 0.5 = 50% Geschwindigkeit
      action?.play();
    });
    // Alle Mesh-Materialien in Wireframe ändern
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: "#0ea5e9",
          wireframe: true,
        });
      }
    });
  }, [scene, actions]);

  return (
    // Seagulls Gruppe mit Position und Skalierung basierend auf der "small" Prop
    <group
      ref={ref}
      position={small ? [-3, 3.5, -5] : [-3.5, 2.75, -4]}
      scale={small ? 0.25 : 0.275}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Seagulls;

useGLTF.preload("./seagulls/seagulls_animated.glb");
