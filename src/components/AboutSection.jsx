import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import fotoBase64 from '../assets/fotoBase64';

const credenciales = [
  'Psicóloga Clínica de la Pontificia Universidad Católica de Chile.',
  'Postítulo de Terapia Conductual Dialéctica en Grupo DBT Chile Las Tranqueras (en curso).',
];

export default function AboutSection() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <section className="py-24 px-6 bg-[#F8F5F0]" id="sobre-mi">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-4 text-[#1C1613] font-bold">
            ¿Quién soy?
          </h2>
          <h3 className="font-serif text-2xl md:text-3xl mb-6 text-[#A95C45] font-semibold">
            Tamar Camhi V.
          </h3>
          <p className="text-lg font-bold text-[#2A221E] mb-6">
            Psicóloga Clínica UC especializada en Terapia Conductual Dialéctica (DBT).
          </p>
          <p className="text-base mb-6 leading-relaxed text-[#2A221E]/80">
            Entiendo que iniciar terapia puede ser un desafío. Por lo mismo, creo que es importante encontrar un profesional que te haga sentir seguro, protegido y validado mientras te guía a través del proceso.
          </p>
          <p className="text-base mb-10 leading-relaxed text-[#2A221E]/80">
            Es por esto que mi propósito es apoyar y promover un cambio que te permita formar relaciones saludables, regular tus emociones de manera efectiva y fomentar un bienestar general, utilizando herramientas basadas en evidencia.
          </p>
          <p className="text-sm text-[#2A221E]/50 mb-8">
            Registro Nacional de Prestadores de Salud N° 895940
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="#contacto" className="bg-[#596C61] text-[#F8F5F0] px-8 py-3 font-medium hover:bg-[#46554C] transition-colors duration-300 shadow-sm">
              Conversemos
            </a>
            <button
              onClick={() => setModalAbierto(true)}
              className="underline text-[#2A221E] hover:text-[#A95C45] transition-colors"
            >
              Más acerca de mí
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 h-full min-h-[500px] relative"
        >
          <img
            src={"data:image/png;base64," + fotoBase64}
            alt="Ps. Tamar Camhi V."
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(to right, #F8F5F0 0%, transparent 22%),
              linear-gradient(to left, #F8F5F0 0%, transparent 10%),
              linear-gradient(to bottom, #F8F5F0 0%, transparent 18%),
              linear-gradient(to top, #F8F5F0 0%, transparent 25%)
            `
          }} />
        </motion.div>
      </div>

      {/* Modal credenciales */}
      <AnimatePresence>
        {modalAbierto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#2A221E]/60 backdrop-blur-sm" onClick={() => setModalAbierto(false)} />
            <motion.div
              className="relative bg-[#F8F5F0] p-10 max-w-lg w-full shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setModalAbierto(false)}
                className="absolute top-4 right-4 text-[#2A221E]/50 hover:text-[#A95C45] transition-colors"
                aria-label="Cerrar"
              >
                <X size={22} />
              </button>
              <h3 className="font-serif text-2xl text-[#2A221E] font-bold mb-6">Formación académica</h3>
              <ul className="space-y-4">
                {credenciales.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#A95C45] shrink-0" />
                    <p className="text-[#2A221E]/80 text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
