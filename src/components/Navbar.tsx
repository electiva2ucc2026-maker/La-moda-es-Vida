import { motion } from "motion/react";
import { ShoppingBag, User, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-emerald/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-emerald rounded-full flex items-center justify-center text-brand-gold shadow-md">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-light tracking-[0.2em] uppercase text-zinc-900 hidden sm:block">
              La Moda <span className="font-bold text-brand-emerald">Es Vida</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-12">
            <a href="#inicio" className="text-xs uppercase tracking-widest text-zinc-600 hover:text-brand-emerald font-medium transition-colors">Inicio</a>
            <a href="#nosotros" className="text-xs uppercase tracking-widest text-zinc-600 hover:text-brand-emerald font-medium transition-colors">Nosotros</a>
            <a href="#portal" className="text-xs uppercase tracking-widest text-zinc-600 hover:text-brand-emerald font-medium transition-colors">Portal Clientes</a>
            <a href="#contacto" className="text-xs uppercase tracking-widest text-zinc-600 hover:text-brand-emerald font-medium transition-colors">Contacto</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-zinc-600 hover:text-brand-emerald">
              <ShoppingBag size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-zinc-600 hover:text-brand-emerald">
              <User size={20} />
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-zinc-100 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-widest text-zinc-600">Inicio</a>
          <a href="#nosotros" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-widest text-zinc-600">Nosotros</a>
          <a href="#portal" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-widest text-zinc-600">Portal Clientes</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="block text-xs uppercase tracking-widest text-zinc-600">Contacto</a>
        </motion.div>
      )}
    </nav>
  );
}
