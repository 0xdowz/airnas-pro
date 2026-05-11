import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Book } from "lucide-react";
import { motion } from "motion/react";

export default function Docs() {
  return (
    <div className="bg-space-black min-h-screen text-apple-text overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 relative noise-bg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container max-w-3xl mx-auto flex flex-col items-center text-center z-10 relative"
        >
          <div className="w-16 h-16 bg-white/[0.03] rounded-full flex items-center justify-center mb-8 border border-white/10">
            <Book size={28} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight-pro text-white mb-6">Documentation</h1>
          <p className="text-apple-subtext text-xl">
            Comprehensive guides, API references, and configuration manuals will be published here upon release.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
