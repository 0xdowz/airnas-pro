import { motion, useScroll, useTransform } from "motion/react";
import { Download, Apple } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const isOverview = location.pathname === "/overview";

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center justify-center ${isScrolled ? 'pt-4 px-4' : 'pt-6 px-6'}`}
    >
      <div className={`w-full max-w-5xl flex items-center justify-between transition-all duration-500 ${isScrolled ? 'glass-pro rounded-full py-3 px-6 shadow-2xl' : 'py-3'}`}>
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-apple-text rounded-full flex items-center justify-center text-space-black transition-transform duration-300 group-hover:scale-110">
            <Logo className="w-5 h-5 ml-0.5" />
          </div>
          <span className="font-semibold text-lg tracking-tight-pro text-white">AirNas Pro</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-apple-subtext">
          {isOverview ? (
            <>
              <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors duration-300 cursor-pointer">Features</button>
              <button onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors duration-300 cursor-pointer">Engine</button>
              <button onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors duration-300 cursor-pointer">Specs</button>
              <Link to="/" className="hover:text-white transition-colors duration-300">Early Access</Link>
            </>
          ) : (
            <>
              <Link to="/overview" className="hover:text-white transition-colors duration-300">Overview</Link>
              <Link to="/" className="text-white transition-colors duration-300">Early Access</Link>
            </>
          )}
        </div>

        <Link to="/" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]">
          <span className="hidden sm:inline">Pre-Register</span>
        </Link>
      </div>
    </motion.nav>
  );
}
