/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientPortal from "@/components/ClientPortal";
import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <ClientPortal />
        
        {/* Contact Section */}
        <section id="contacto" className="py-24 bg-white border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Contacto</h2>
                <h3 className="text-4xl font-light text-zinc-900 mb-8">Estamos aquí para <br /><span className="font-serif italic">atenderle</span></h3>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Teléfono</p>
                      <p className="text-zinc-900">+57 (1) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Email</p>
                      <p className="text-zinc-900">contacto@lamodaesvida.com.co</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Sede Principal</p>
                      <p className="text-zinc-900">Bogotá, Colombia - Edificio LMV, Calle 90</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 p-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500">Nombre</label>
                      <input type="text" className="w-full bg-white border border-zinc-200 p-3 focus:outline-none focus:border-zinc-900 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500">Email</label>
                      <input type="email" className="w-full bg-white border border-zinc-200 p-3 focus:outline-none focus:border-zinc-900 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500">Mensaje</label>
                    <textarea rows={4} className="w-full bg-white border border-zinc-200 p-3 focus:outline-none focus:border-zinc-900 transition-colors"></textarea>
                  </div>
                  <button className="w-full py-4 bg-zinc-900 text-white text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-emerald text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-emerald">
                  <Sparkles size={16} />
                </div>
                <span className="text-2xl font-light tracking-[0.2em] uppercase">
                  La Moda <span className="font-bold text-brand-gold">Es Vida</span>
                </span>
              </div>
              <p className="text-emerald-100/70 max-w-sm leading-relaxed">
                Llevando la sofisticación y el estilo a cada rincón de Colombia. Nuestra pasión es su expresión personal.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-brand-gold">Explorar</h4>
              <ul className="space-y-4 text-emerald-100/70 text-sm">
                <li><a href="#inicio" className="hover:text-brand-gold transition-colors">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-brand-gold transition-colors">Nosotros</a></li>
                <li><a href="#portal" className="hover:text-brand-gold transition-colors">Portal Clientes</a></li>
                <li><a href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest mb-6 font-bold text-brand-gold">Síguenos</h4>
              <div className="flex gap-6">
                <motion.a whileHover={{ y: -5, color: "#d4af37" }} href="#" className="text-emerald-100/70 transition-colors"><Instagram size={20} /></motion.a>
                <motion.a whileHover={{ y: -5, color: "#d4af37" }} href="#" className="text-emerald-100/70 transition-colors"><Facebook size={20} /></motion.a>
                <motion.a whileHover={{ y: -5, color: "#d4af37" }} href="#" className="text-emerald-100/70 transition-colors"><Twitter size={20} /></motion.a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-emerald-100/40 uppercase tracking-widest">
            <p>© 2026 LA MODA ES VIDA. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
