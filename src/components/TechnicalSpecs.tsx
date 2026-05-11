import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function TechnicalSpecs() {
  const specs = [
    { label: "Core Protocol", value: "AirPlay 2 (Lossless)" },
    { label: "Video Decoding", value: "Hardware HEVC / H.264" },
    { label: "Audio Output", value: "48kHz ALAC / AAC" },
    { label: "Latency", value: "Sub 15ms target" },
    { label: "Platform", value: "Windows 10, Windows 11" }
  ];

  return (
    <section id="specs" className="py-32 px-6 bg-space-black relative border-t border-white/5">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
        
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight-pro text-white mb-6"
          >
            Engineering specs.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-apple-subtext text-lg leading-relaxed"
          >
            Precision tuned for silicon. Uncompromised rendering loop written entirely in C++ for absolute control over the memory layout.
          </motion.p>
        </div>

        <div className="md:w-1/2 flex flex-col">
          {specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, type: "spring", stiffness: 100 }}
              className="flex items-center justify-between py-6 border-b border-white/10 group hover:border-white/40 hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-apple-subtext font-medium text-lg group-hover:text-white transition-colors duration-300">{spec.label}</span>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-white font-semibold text-lg tracking-tight-pro group-hover:-translate-x-2 transition-transform duration-300">{spec.value}</span>
                 <ArrowRight size={18} className="text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
