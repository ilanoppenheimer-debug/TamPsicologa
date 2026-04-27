import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mi' },
  { href: '#especialidades', label: 'Especialidades' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#4A2805] text-[#F8F5F0] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-wide">
            Tamar Camhi Vainroj
          </span>
          <span className="text-xs md:text-sm text-[#F8F5F0]/70 font-light">
            Psicóloga Clínica niños, adolescentes y adultos.
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-light">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="hover:text-[#A95C45] transition-colors">{l.label}</a>
          ))}
          <a href="https://wa.me/56950194693" target="_blank" rel="noreferrer" className="ml-2 bg-[#EBE4D8] text-[#4A2805] px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
            Reservar hora
          </a>
        </div>
        <button className="md:hidden text-[#F8F5F0] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#4A2805] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  className="text-[#F8F5F0]/80 hover:text-[#A95C45] transition-colors text-lg font-light py-1 border-b border-white/10"
                  onClick={() => setMenuOpen(false)}>{l.label}</a>
              ))}
              <a href="https://wa.me/56950194693" target="_blank" rel="noreferrer"
                className="mt-2 bg-[#EBE4D8] text-[#4A2805] px-6 py-3 text-center font-semibold rounded-full hover:bg-white transition-colors"
                onClick={() => setMenuOpen(false)}>
                Reservar hora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
