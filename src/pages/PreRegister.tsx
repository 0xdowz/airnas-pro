import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import Logo from "../components/Logo";
import emailjs from '@emailjs/browser';

export default function PreRegister() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);

    try {
      if ("YOUR_PUBLIC_KEY_HERE".includes("YOUR")) {
        // Mock successful registration for GitHub Pages presentation
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Initialize EmailJS with your Public Key
        emailjs.init("YOUR_PUBLIC_KEY_HERE");

        await emailjs.send(
          "service_oxaunbv",
          "YOUR_TEMPLATE_ID_HERE", // Replace with your actual Template ID
          {
            email: email, // Maps to {{email}} in the EmailJS template
          }
        );
      }

      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    } catch (error: any) {
      setIsLoading(false);
      alert("Failed to subscribe: " + (error.text || error.message || JSON.stringify(error)));
    }
  };

  return (
    <div className="bg-space-black min-h-screen text-apple-text overflow-hidden flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 relative noise-bg">
        <div className="container max-w-2xl mx-auto flex flex-col items-center text-center z-10 relative">
          
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white/[0.03] rounded-full flex items-center justify-center mb-10 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <Logo className="w-7 h-7 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight-pro text-white mb-6 select-none">
                Early Access.
              </h1>
              
              <p className="text-apple-subtext text-xl md:text-2xl mb-12 max-w-lg leading-relaxed">
                Be the first to experience the ultimate receiver engine. Register now to be notified when AirNas Pro is available.
              </p>

              <form onSubmit={handleSubmit} className="w-full max-w-md relative flex flex-col gap-4 group cursor-text">
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-full py-3 md:py-4 pl-5 md:pl-6 pr-24 md:pr-28 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-300 text-base md:text-lg peer"
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading || !email}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,255,255,0.2)] ${isLoading ? 'px-4 h-10 text-sm font-semibold' : 'w-10 h-10'}`}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </button>
                </div>
                <p className="text-zinc-500 text-sm">We'll send you an invitation email when your spot is ready.</p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full flex flex-col items-center"
            >
               <div className="w-20 h-20 bg-white/[0.05] rounded-full flex items-center justify-center mb-8 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                <CheckCircle2 size={36} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight-pro text-white mb-6">
                You're on the list.
              </h2>
              <p className="text-apple-subtext text-xl max-w-md leading-relaxed mb-12">
                Thank you for registering. Keep an eye on your inbox—we will send you a notification email as soon as AirNas Pro goes live.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-pro-outline py-3 px-8"
              >
                Return
              </button>
            </motion.div>
          )}

        </div>
        
        {/* Large subtle background logo watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.015] mix-blend-screen">
          <Logo className="w-[120vw] max-w-[1000px] h-auto text-white rotate-[-5deg]" />
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white blur-[150px] rounded-full mix-blend-screen pointer-events-none opacity-[0.03]"></div>
      </main>

      <Footer />
    </div>
  );
}
