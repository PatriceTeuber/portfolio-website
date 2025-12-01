import { motion } from "motion/react";
import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./Canvas/Loader";
import { Environment, PresentationControls } from "@react-three/drei";
import CameraController from "./Canvas/CameraController";
import Head from "./Canvas/Head";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { BriefcaseBusiness, Globe, GraduationCap } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-start"
    >
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-center"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-secondary text-[17px] max-w-2xl leading-[30px] text-center"
      >
        I am a passionate developer focused on building elegant, responsive, and
        modern digital experiences. With a strong background in frontend and
        full‑stack development, I enjoy turning creative ideas into real
        applications.
      </motion.p>

      {/* Tiles */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Degree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className={styles.cards}
        >
          <div className="flex flex-col items-start gap-3">
            <GraduationCap className="w-8 h-8 text-white opacity-90" />
            <h3 className="text-xl font-semibold">Degree</h3>
            <p className="text-gray-300 text-sm">
              Bachelor of Science in Computer Science
            </p>
          </div>
        </motion.div>

        {/* Job */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className={styles.cards}
        >
          <div className="flex flex-col justify-center items-start gap-3">
            <BriefcaseBusiness className="w-8 h-8 text-white opacity-90" />
          <h3 className="text-xl font-semibold">Current Job</h3>
          <p className="text-gray-300 text-sm">
            Frontend / Full‑Stack Developer
          </p>
          </div>
          
        </motion.div>

        {/* Domains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className={styles.cards}
        >
          <div className="flex flex-col justify-center items-start gap-3">
            <Globe className="w-8 h-8 text-white opacity-90" />
          <h3 className="text-xl font-semibold">Domains</h3>
          <p className="text-gray-300 text-sm">
            Web & Mobile Applications
          </p>
          </div>
          
        </motion.div>
      </div>

      <div className="w-full h-full">
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          frameloop="always"
          camera={{ position: [0, 2, 8], fov: 45 }}
          style={{
            background: "radial-gradient(#020617, #000)",
            height: "600px",
          }}
          className="flex-1 w-full h-full mt-10"
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
              <Head />
            </PresentationControls>
            <EffectComposer enableNormalPass={false}>
              <Bloom luminanceThreshold={2} mipmapBlur />
              <ToneMapping />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
