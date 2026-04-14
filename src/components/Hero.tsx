import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Hero" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-6"
        >
          Nueva Colección 2026
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-light tracking-tight text-zinc-900 mb-8 leading-tight"
        >
          La elegancia es <br />
          <span className="font-serif italic font-normal">una forma de vida</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#065f46" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-brand-emerald text-white text-sm uppercase tracking-widest shadow-xl btn-interactive"
          >
            Ver Colección
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, borderColor: "#064e3b", color: "#064e3b" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-zinc-900 text-zinc-900 text-sm uppercase tracking-widest btn-interactive"
          >
            Nuestra Historia
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-zinc-300"></div>
      </div>
    </section>
  );
}
