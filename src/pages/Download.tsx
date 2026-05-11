import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Download as DownloadIcon, Monitor } from "lucide-react";
import Logo from "../components/Logo";

export default function Download() {
  return (
    <div className="bg-space-black min-h-screen text-apple-text overflow-hidden flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 relative noise-bg">
        <div className="container max-w-2xl mx-auto flex flex-col items-center text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-16 h-16 bg-white/[0.03] rounded-full flex items-center justify-center mb-10 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <Logo className="w-7 h-7 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-8xl font-bold tracking-tight-pro text-white mb-6 select-none"
          >
            Get AirNas Pro.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-apple-subtext text-xl md:text-2xl mb-16 max-w-lg leading-relaxed"
          >
            Download the ultimate receiver engine. Exclusively engineered for Windows architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            className="w-full"
          >
            <div
              className="glass-pro p-10 md:p-12 rounded-[2.5rem] flex flex-col items-center group hover:bg-white/[0.04] transition-all duration-500 hover:scale-[1.02] border border-white/5 hover:border-white/20 relative overflow-hidden"
            >
              {/* Subtle radial glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <Monitor size={56} className="text-white mb-8 transform group-hover:scale-110 transition-transform duration-700 opacity-90" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold tracking-tight-pro text-white mb-3">AirNas Pro for Windows</h3>
              <p className="text-apple-subtext mb-10 text-lg">Optimized for Windows 10 & 11.</p>
              <button disabled className="btn-pro-primary w-full max-w-sm text-lg py-4 px-8 mt-4 opacity-50 cursor-not-allowed">Coming Soon</button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white blur-[150px] rounded-full mix-blend-screen pointer-events-none opacity-[0.03]"></div>
      </main>

      <Footer />
    </div>
  );
}
