import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 30, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 30, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const x = (e.clientX / rect.width) - 0.5;
      const y = (e.clientY / rect.height) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-200, 200]), { damping: 40, stiffness: 40 });
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-200, 200]), { damping: 40, stiffness: 40 });

  const titleText1 = "Receiver.";
  const titleText2 = "Redefined.";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", damping: 20, stiffness: 100 } }
  };

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex flex-col items-center justify-start pt-40 px-6 overflow-hidden bg-space-black noise-bg perspective-1000">
      
      {/* Interactive Cinematic Glow */}
      <motion.div 
        style={{ x: glowX, y: glowY }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.09, 0.06]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -ml-[400px] -mt-[400px] w-[800px] h-[800px] bg-white blur-[200px] rounded-full mix-blend-screen pointer-events-none"
      />

      {/* Large subtle background logo watermark */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none overflow-hidden opacity-[0.02] mix-blend-screen z-0">
        <Logo className="w-[120vw] max-w-[1200px] h-auto text-white" />
      </div>

      <div className="container max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 w-full mb-32 h-[40vh] justify-center">
        <motion.div style={{ y: yText, opacity: opacityText }} className="flex flex-col items-center">


          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-6xl md:text-[140px] font-bold leading-[0.9] tracking-tight-pro text-white mb-6 select-none flex flex-col items-center"
          >
            <div className="flex">
              {titleText1.split("").map((char, index) => (
                <motion.span key={`t1-${index}`} variants={charVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex text-gradient mt-2 md:mt-4">
              {titleText2.split("").map((char, index) => (
                <motion.span key={`t2-${index}`} variants={charVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.9 }}
            className="text-apple-subtext text-xl md:text-3xl max-w-3xl leading-snug mb-10"
          >
            Experience zero-latency AirPlay mirroring in majestic 4K. 
            The ultimate engine for cinematic hardware.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.1 }}
          >
             <Link to="/" className="btn-pro-primary text-lg py-4 px-10 inline-flex items-center gap-3">
              Get Early Access
             </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
         style={{ scale: scaleImage, opacity: opacityImage }}
         className="absolute bottom-0 left-0 w-full flex justify-center mt-20"
      >
        <div className="relative w-full max-w-7xl px-4" style={{ perspective: 1200 }}>
          <div className="hero-mask absolute inset-0 bottom-0 z-20 pointer-events-none"></div>
          <motion.div
            initial={{ y: 200, opacity: 0, rotateX: 10 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.4 }}
            className="relative will-change-transform group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent z-10 h-full w-full pointer-events-none rounded-t-[3rem]"></div>
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2400" 
              alt="AirNas Pro Interface" 
              className="w-full h-[60vh] md:h-[80vh] object-cover rounded-t-[3rem] shadow-[0_-20px_100px_rgba(0,0,0,0.8)] border-t border-x border-white/10 group-hover:border-white/20 transition-colors duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Interactive Glowing Hardware Points with Parallax effect */}
            <motion.div 
              style={{ translateZ: 60 }}
              whileHover={{ scale: 1.5 }}
              className="absolute top-[25%] right-[25%] w-3 h-3 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.8)] cursor-pointer z-30"
            />
            <motion.div 
              style={{ translateZ: 40 }}
              whileHover={{ scale: 1.5 }}
              className="absolute top-[35%] left-[30%] w-2 h-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] cursor-pointer z-30"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
