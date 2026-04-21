import { motion } from 'framer-motion';
import fotoBase64 from '../assets/fotoBase64';

export default function AboutSection() {
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
            Quien soy?
          </h2>
          <h3 className="font-serif text-2xl md:text-3xl mb-6 text-[#A95C45] font-semibold">
            Tamar Camhi V.
          </h3>
          <p className="text-lg font-bold text-[#2A221E] mb-6">
            Psicologa Clinica UC especializada en Terapia Conductual Dialectica (DBT).
          </p>
          <p className="text-base mb-6 leading-relaxed text-[#2A221E]/80">
            Entiendo que iniciar terapia puede ser un desafio. Por lo mismo, creo que es importante encontrar un profesional que te haga sentir seguro, protegido y validado mientras te guia a traves del proceso.
          </p>
          <p className="text-base mb-10 leading-relaxed text-[#2A221E]/80">
            Es por esto que mi proposito es apoyar y promover un cambio que te permita formar relaciones saludables, regular tus emociones de manera efectiva y fomentar un bienestar general, utilizando herramientas basadas en evidencia.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="#contacto" className="bg-[#596C61] text-[#F8F5F0] px-8 py-3 font-medium hover:bg-[#46554C] transition-colors duration-300 shadow-sm">
              Conversemos
            </a>
            <a href="https://www.linkedin.com/in/tamarcamhi" target="_blank" rel="noreferrer" className="underline text-[#2A221E] hover:text-[#A95C45] transition-colors">
              Mas acerca de mi
            </a>
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
            className="absolute inset-0 w-full h-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
