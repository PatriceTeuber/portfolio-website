import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Head = () => {
  const HeadModel = useGLTF("./head/head.glb");
  const ref = useRef<THREE.Group>(null);
  const materialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const lightRef = useRef<THREE.PointLight>(null);

  useEffect(() => {
    if (HeadModel.scene) {
      HeadModel.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const materials = Array.isArray(child.material) 
            ? child.material 
            : [child.material];
          
          materials.forEach((material) => {
            material.toneMapped = false;
            material.emissive = new THREE.Color(0x00ffff);
            material.emissiveIntensity = 0.3; // Basis-Intensität sehr niedrig
            materialsRef.current.push(material);
          });
        }
      });
    }
  }, [HeadModel]);

  useFrame((state) => {
    // Langsame, lineare Animation (0.3 = sehr langsam)
    const t = (1 + Math.sin(state.clock.elapsedTime * 0.4)) / 2;
    
    // Sanfte Emissive-Animation
    materialsRef.current.forEach((material) => {
      material.emissive.setRGB(
        0.1 + t * 0.4,   // Sehr subtil: von 0.1 bis 0.5
        0.2 + t * 0.5,   // Etwas mehr Grün
        0.5 + t * 1.5    // Blau dominiert sanft: von 0.5 bis 2.0
      );
      material.emissiveIntensity = 0.3 + t * 0.4; // Von 0.3 bis 0.7
    });
    
    // Sanftes Licht-Pulsieren
    if (lightRef.current) {
      lightRef.current.intensity = 3 + t * 8; // Von 1 bis 3
    }
  });

  return (
    <group ref={ref} position={[0, 0, 0]} scale={9}>
      <primitive castShadow receiveShadow object={HeadModel.scene} />
      <pointLight 
        ref={lightRef}
        intensity={2} 
        color={[0.5, 1, 2]} // Sanftere Lichtfarbe
        distance={12} 
        position={[0, 1, 0]}
      />
    </group>
  );
};

export default Head;
useGLTF.preload("./head/head.glb");