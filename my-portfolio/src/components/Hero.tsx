import { motion } from "motion/react";
import Canvas from "./Canvas/Canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen" id="hero">
      <Canvas />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex justify-between w-[80%] text-6xl font-semibold tracking-widest">
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] text-xl">
            Patrice
          </span>
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] text-xl">
            Teuber
          </span>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 3.0,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;