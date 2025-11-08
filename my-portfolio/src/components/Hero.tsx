import Canvas from "./Canvas/Canvas";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
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
    </div>
  );
};

export default Hero;