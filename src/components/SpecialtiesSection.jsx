import { motion } from 'framer-motion';
import { Brain, Leaf, HeartHandshake } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const specialties = [
  {
    icon: Brain,
    title: 'Regulacion Emocional',
    description: 'Obtén herramientas practicas para tolerar el malestar, manejar emociones intensas como la ansiedad y la impulsividad, y aprender a confiar en las senales que tu mente y tu cuerpo te dan.',
    border: true,
  },
  {
    icon: Leaf,
    title: 'Conducta Alimentaria',
    description: 'Abordaje integral y libre de juicios de los Trastornos de la Conducta Alimentaria (TCA). Aprende a reconstruir sanamente la relacion con tu cuerpo, tu alimentacion y tu propia historia.',
    border: true,
  },
  {
    icon: HeartHandshake,
    title: 'Crisis y Vinculos',
    description: 'Proporciono un entorno seguro que permite abordar traumas, atravesar procesos de duelo y etapas dificiles y desarrollar metodos de comunicacion efectivos para mejorar tus relaciones interpersonales.',
    border: false,
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="py-24 px-6 bg-[#EBE4D8]" id="especialidades">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-[#2A221E] mb-4 font-bold">Especialidades</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12">
          {specialties.map(({ icon: Icon, title, description, border }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className={`flex flex-col items-center text-center px-8 ${border ? 'md:border-r border-[#2A221E]/20' : ''}`}
            >
              <div className="mb-6 text-[#2A221E]"><Icon size={80} strokeWidth={1} /></div>
              <h3 className="font-serif text-2xl mb-4 text-[#A95C45] font-bold">{title}</h3>
              <p className="text-[#2A221E]/80 leading-relaxed mb-6">{description}</p>
              <a href="#contacto" className="underline text-[#2A221E] hover:text-[#A95C45] transition-colors mt-auto">Leer mas.</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
