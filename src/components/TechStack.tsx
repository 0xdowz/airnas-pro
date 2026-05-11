import { motion } from "motion/react";

export default function TechStack() {
  return (
    <section id="tech" className="py-32 px-6 bg-space-black relative overflow-hidden min-h-[90vh] flex items-center justify-center">
      
      {/* Infinite Marquee Background */}
      <div className="absolute inset-0 flex flex-col justify-center overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap pb-8"
        >
          <span className="text-[180px] font-bold tracking-tighter">FFMPEG C++ CORE AUDIO MIDI NETWORK STREAMS </span>
          <span className="text-[180px] font-bold tracking-tighter">FFMPEG C++ CORE AUDIO MIDI NETWORK STREAMS </span>
        </motion.div>
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-[180px] font-bold tracking-tighter">SDL2 VULKAN METAL DIRECTX OPENGL </span>
          <span className="text-[180px] font-bold tracking-tighter">SDL2 VULKAN METAL DIRECTX OPENGL </span>
        </motion.div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 50 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-200px" }}
           transition={{ duration: 1, type: "spring", stiffness: 80, damping: 20 }}
           className="glass-pro rounded-[3rem] p-16 md:p-24 max-w-4xl w-full flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group hover:scale-[1.02] hover:-translate-y-4 transition-all duration-700"
        >
          {/* Subtle Glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight-pro text-white mb-6">
            The power behind <br/> the pixels.
          </h2>
          <p className="text-apple-subtext text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
            AirNas Pro isn't just a wrapper. It leverages mature, enterprise-grade frameworks compiled directly to native binaries.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16 w-full justify-center">
             <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:scale-110">
               <span className="text-5xl font-bold text-white mb-2 tracking-tight-pro">99.9%</span>
               <span className="text-apple-subtext text-sm font-medium uppercase tracking-widest">Reliability</span>
             </div>
             <div className="w-[1px] h-16 bg-white/10 hidden sm:block"></div>
             <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:scale-110">
               <span className="text-5xl font-bold text-white mb-2 tracking-tight-pro">&lt; 1%</span>
               <span className="text-apple-subtext text-sm font-medium uppercase tracking-widest">Drop Rate</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
