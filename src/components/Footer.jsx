import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#6D3B07] text-[#F8F5F0] py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h2 className="font-serif text-2xl font-bold mb-1">Tamar Camhi V.</h2>
          <p className="text-[#F8F5F0]/50 text-sm">Psicóloga Clínica</p>
        </div>
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-[#F8F5F0]/50">Menú</h3>
          <ul className="space-y-3 text-[#F8F5F0]/80 text-sm">
            <li><a href="#inicio" className="hover:text-[#A95C45] transition-colors">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-[#A95C45] transition-colors">Sobre mí</a></li>
            <li><a href="#especialidades" className="hover:text-[#A95C45] transition-colors">Especialidades</a></li>
            <li><a href="#contacto" className="hover:text-[#A95C45] transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-[#F8F5F0]/50">Redes sociales</h3>
          <ul className="space-y-3 text-[#F8F5F0]/80 text-sm">
            <li>
              <a href="https://www.instagram.com/tam.psicologa" target="_blank" rel="noreferrer"
                className="hover:text-[#A95C45] transition-colors flex items-center gap-2">
                <Instagram size={16} /> @tam.psicologa
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tamarcamhi" target="_blank" rel="noreferrer"
                className="hover:text-[#A95C45] transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 text-center text-[#F8F5F0]/30 text-xs">
        © {new Date().getFullYear()} Tamar Camhi Vainroj. Todos los derechos reservados.
      </div>
    </footer>
  );
}
