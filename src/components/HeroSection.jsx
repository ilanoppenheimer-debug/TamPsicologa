import { motion } from 'framer-motion';
import arbol from '../assets/arbol.png';

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
    <section
      id="inicio"
      className="relative min-h-screen pt-28 flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(110deg, #E8DDD0 0%, #EDE6DA 30%, #F2EDE5 60%, #F8F5F0 100%)' }}
    >
      {/* Mancha radial sutil detrás del árbol */}
      <div
        className="absolute right-0 top-0 w-2/3 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 60%, #EBE4D8 0%, transparent 70%)' }}
      />

      {/* Árbol móvil de fondo — cubre toda la sección */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none z-0"
        style={{
          backgroundImage: `url(${arbol})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-center min-h-[calc(100vh-7rem)]">

        {/* Texto sin cuadro duro */}
        <motion.div
          className="max-w-xl py-16 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-6xl text-[#2A221E] font-bold leading-tight mb-6">
            Porque mereces construir una vida que te haga feliz.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#2A221E]/75 mb-6 font-light">
            Comencemos a construir esa vida hoy mismo.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-base text-[#2A221E]/60 mb-10 leading-relaxed max-w-lg">
            Te ofrezco un espacio seguro y sin juicios, respaldado por conocimientos clínicos constantemente actualizados. Mi objetivo es que encuentres alivio, te comprendas mejor y desarrolles herramientas para una vida plena.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="#contacto" className="inline-block bg-[#A95C45] text-[#F8F5F0] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#8B4A36] transition-colors duration-300 shadow-lg">
              Agenda una sesión
            </a>
          </motion.div>
        </motion.div>

        {/* Árbol con blend multiply para fondo continuo */}
        <motion.div
          className="hidden md:flex flex-1 justify-center items-end self-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src={arbol}
            alt=""
            aria-hidden="true"
            className="w-[520px] lg:w-[620px] xl:w-[700px] object-contain select-none"
            style={{
              mixBlendMode: 'multiply',
              maskImage: 'radial-gradient(ellipse 72% 80% at 50% 46%, black 30%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 72% 80% at 50% 46%, black 30%, transparent 100%)',
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
