import { motion } from "motion/react";
import { Target, Eye, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión por el Cliente",
      description: "Nuestra razón de ser es superar las expectativas de quienes nos eligen."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Integridad",
      description: "Actuamos con transparencia y ética en cada paso de nuestra cadena de valor."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excelencia",
      description: "Buscamos la perfección en cada detalle, desde el diseño hasta la entrega."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">Nuestra Esencia</h2>
            <h3 className="text-4xl font-light text-zinc-900 mb-8 leading-tight">
              Redefiniendo el estilo <br />
              <span className="font-serif italic">en el corazón de Colombia</span>
            </h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              "LA MODA ES VIDA" nace de la visión de integrar la elegancia global con la vibrante energía del mercado colombiano. Somos más que una marca de ropa; somos un manifiesto de identidad y sofisticación.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-50 border border-zinc-100 hover:border-brand-emerald/30 transition-all group"
            >
              <Target className="text-zinc-900 mb-4 group-hover:text-brand-emerald transition-colors" />
              <h4 className="text-lg font-medium text-zinc-900 mb-3">Misión</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Inspirar confianza y autenticidad a través de piezas de moda excepcionales que celebren la individualidad de cada persona.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-brand-emerald text-white shadow-xl"
            >
              <Eye className="text-brand-gold mb-4" />
              <h4 className="text-lg font-medium mb-3">Visión</h4>
              <p className="text-sm text-emerald-100 leading-relaxed">
                Ser la marca referente de moda premium en Colombia para el 2030, reconocida por nuestra innovación y compromiso social.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-light tracking-widest uppercase text-zinc-900">Nuestros Valores</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-50 text-zinc-900 mb-6">
                  {value.icon}
                </div>
                <h4 className="text-lg font-medium text-zinc-900 mb-3">{value.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mx-auto">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
