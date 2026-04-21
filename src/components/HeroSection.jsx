import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 flex items-center bg-[#F8F5F0] overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1616594266964-c7a77e8c7c25?w=1920&q=80"
          alt="Espacio de consulta cálido y acogedor"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#F8F5F0]/20"></div>
        <div className="absolute inset-0 bg-[#2A221E]/10 md:hidden"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          className="bg-[#EBE4D8] p-10 md:p-16 lg:p-20 max-w-2xl shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-6xl text-[#2A221E] font-bold leading-tight mb-6">
            Porque mereces construir una vida que te haga feliz.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#2A221E]/80 mb-6 font-light">
            Demos juntos el primer paso.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-base text-[#2A221E]/70 mb-10 leading-relaxed max-w-lg">
            Te ofrezco un espacio seguro y sin juicios, respaldado por conocimientos clínicos constantemente actualizados. Mi objetivo es que encuentres alivio, te comprendas mejor y desarrolles herramientas para una vida plena.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="#contacto" className="inline-block bg-[#2A221E] text-[#F8F5F0] px-8 py-3 rounded-full font-medium hover:bg-[#A95C45] transition-colors duration-300 shadow-lg">
              Agenda una sesión
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
