import { motion } from "motion/react";
import { Zap, Monitor, Share2, Shield, Settings, Play } from "lucide-react";
import React, { useRef, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { type: "spring", stiffness: 100, damping: 20 }
};

const BentoCard = ({ children, className, delay = 0, style, ...props }: any) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay }}
      onMouseMove={handleMouseMove}
      className={`glass-pro rounded-[2rem] p-8 md:p-10 relative overflow-hidden group cursor-crosshair border border-white/[0.08] hover:border-white/[0.2] transition-colors duration-500 ${className}`}
      {...props}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 60%)`
        }}
      />
      {children}
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section id="features" className="py-32 px-6 bg-space-black relative z-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight-pro text-white mb-6"
          >
            Pro performance.<br/>
            <span className="text-gradient">Every pixel matters.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-full auto-rows-[300px] md:auto-rows-auto">
          
          {/* Main Feature - Large Bento */}
          <BentoCard className="md:col-span-4 md:row-span-1 flex flex-col justify-between" delay={0.1}>
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                 <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight-pro mb-4 text-white">
                Cinematic Engine.
              </h3>
              <p className="text-apple-subtext text-lg max-w-md leading-relaxed">
                Hardware-accelerated rendering paths deliver uncompressed frames with zero delay.
              </p>
            </div>
            {/* Abstract Graphic */}
            <div className="absolute right-0 bottom-0 w-2/3 h-full overflow-hidden pointer-events-none origin-bottom-right">
              <motion.div 
                whileInView={{ rotate: 180 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 -bottom-20 w-[400px] h-[400px] border border-white/5 rounded-full border-dashed opacity-50 transition-all duration-700 group-hover:border-white/20 group-hover:scale-110"
              />
              <motion.div 
                 whileInView={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute right-10 bottom-10 w-64 h-64 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors duration-700" 
              />
            </div>
          </BentoCard>

          {/* Small Feature */}
          <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-between" delay={0.2}>
            <Monitor size={28} className="text-white mb-auto transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
            <div className="transition-transform duration-500 group-hover:-translate-y-1">
              <h4 className="text-2xl font-bold tracking-tight-pro mb-2 text-white">True 4K UHD</h4>
              <p className="text-apple-subtext leading-relaxed">
                Crystal clear 60fps mirroring. Native resolution maintained across the stream.
              </p>
            </div>
          </BentoCard>

          {/* Small Feature */}
          <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-between" delay={0.3}>
            <Shield size={28} className="text-white mb-auto transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
            <div className="transition-transform duration-500 group-hover:-translate-y-1">
              <h4 className="text-2xl font-bold tracking-tight-pro mb-2 text-white">Secure Core</h4>
              <p className="text-apple-subtext leading-relaxed">
                End-to-end encrypted packet transmission over local networks.
              </p>
            </div>
          </BentoCard>

          {/* Medium Feature */}
          <BentoCard className="md:col-span-4 md:row-span-1 flex flex-col md:flex-row items-center gap-8 overflow-hidden" delay={0.4}>
            <div className="flex-1 relative z-10 w-full transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                 <Share2 className="text-white" size={24} />
              </div>
              <h4 className="text-3xl font-bold tracking-tight-pro mb-3 text-white">Universal Casting.</h4>
              <p className="text-apple-subtext text-lg max-w-sm">
                From an iPhone, iPad, or Mac. Direct connections with mDNS discovery instantly.
              </p>
            </div>
            
            {/* Interactive Graph Animation */}
            <div className="flex-1 w-full h-48 md:h-full relative right-0 flex items-center justify-center">
               <div className="relative w-full max-w-[200px] aspect-square transform transition-transform duration-700 group-hover:scale-110">
                 {[1,2,3].map((i) => (
                   <motion.div 
                     key={i}
                     initial={{ scale: 0, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: [0, 1, 0] }}
                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
                     className="absolute inset-0 border border-white/20 rounded-full"
                   />
                 ))}
                 <div className="absolute inset-0 m-auto w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110">
                   <Play fill="white" className="text-white ml-1 w-6 h-6" />
                 </div>
               </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
