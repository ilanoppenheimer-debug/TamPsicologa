import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 px-6 bg-[#EBE4D8]" id="contacto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Columna izquierda: info de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[#2A221E] font-bold mb-4">
            ¿Conversemos?
          </h2>
          <p className="text-[#2A221E]/70 text-base mb-12 leading-relaxed max-w-sm">
            Estoy aquí para escucharte. Escríbeme o contáctame directamente y damos juntos el primer paso.
          </p>

          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <div className="mt-1 text-[#A95C45] shrink-0"><MapPin size={22} /></div>
              <div>
                <p className="font-semibold text-[#2A221E] mb-1">Consulta presencial</p>
                <p className="text-[#2A221E]/70 text-sm leading-relaxed">
                  La Dehesa (Lo Barnechea) y Las Condes<br />
                  También atiendo online para todo Chile
                </p>
              </div>
            </li>
            <li>
              <a href="tel:+56950194693" className="flex items-center gap-4 group">
                <div className="text-[#A95C45] shrink-0"><Phone size={22} /></div>
                <div>
                  <p className="font-semibold text-[#2A221E] group-hover:text-[#A95C45] transition-colors">+56 9 5019 4693</p>
                </div>
              </a>
            </li>
            <li>
              <a href="mailto:ps.tamarcamhi@gmail.com" className="flex items-center gap-4 group">
                <div className="text-[#A95C45] shrink-0"><Mail size={22} /></div>
                <div>
                  <p className="font-semibold text-[#2A221E] group-hover:text-[#A95C45] transition-colors">ps.tamarcamhi@gmail.com</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://wa.me/56950194693" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="text-[#A95C45] shrink-0"><MessageCircle size={22} /></div>
                <div>
                  <p className="font-semibold text-[#2A221E] group-hover:text-[#A95C45] transition-colors underline">
                    Hablemos por WhatsApp
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Columna derecha: formulario */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#F8F5F0] p-8 md:p-10 shadow-sm"
        >
          <h3 className="font-serif text-2xl text-[#2A221E] font-bold mb-8">Envíame un mensaje</h3>
          <form
            action="mailto:ps.tamarcamhi@gmail.com"
            method="GET"
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-[#2A221E]/60 uppercase tracking-widest mb-2">
                  Nombre <span className="text-[#A95C45]">*</span>
                </label>
                <input
                  type="text"
                  name="Nombre"
                  required
                  className="border-b border-[#2A221E]/30 bg-transparent py-2 text-[#2A221E] placeholder-[#2A221E]/30 focus:outline-none focus:border-[#A95C45] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-[#2A221E]/60 uppercase tracking-widest mb-2">
                  Apellido <span className="text-[#A95C45]">*</span>
                </label>
                <input
                  type="text"
                  name="Apellido"
                  required
                  className="border-b border-[#2A221E]/30 bg-transparent py-2 text-[#2A221E] placeholder-[#2A221E]/30 focus:outline-none focus:border-[#A95C45] transition-colors"
                  placeholder="Tu apellido"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-[#2A221E]/60 uppercase tracking-widest mb-2">
                Email <span className="text-[#A95C45]">*</span>
              </label>
              <input
                type="email"
                name="Email"
                required
                className="border-b border-[#2A221E]/30 bg-transparent py-2 text-[#2A221E] placeholder-[#2A221E]/30 focus:outline-none focus:border-[#A95C45] transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-[#2A221E]/60 uppercase tracking-widest mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="Telefono"
                className="border-b border-[#2A221E]/30 bg-transparent py-2 text-[#2A221E] placeholder-[#2A221E]/30 focus:outline-none focus:border-[#A95C45] transition-colors"
                placeholder="+56 9 XXXX XXXX"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-[#2A221E]/60 uppercase tracking-widest mb-2">
                Mensaje
              </label>
              <textarea
                name="Mensaje"
                rows={4}
                className="border-b border-[#2A221E]/30 bg-transparent py-2 text-[#2A221E] placeholder-[#2A221E]/30 focus:outline-none focus:border-[#A95C45] transition-colors resize-none"
                placeholder="Cuéntame en qué puedo ayudarte..."
              />
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-[#2A221E] text-[#F8F5F0] px-10 py-3 font-semibold hover:bg-[#A95C45] transition-colors duration-300"
              >
                Enviar consulta
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
