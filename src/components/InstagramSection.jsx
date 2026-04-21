import { Instagram } from 'lucide-react';

/*
  Para activar el feed de Instagram:
  1. Ve a https://snapwidget.com
  2. Regístrate gratis y conecta tu cuenta @tam.psicologa
  3. Crea un widget y copia el código del <iframe>
  4. Reemplaza el src del <iframe> de abajo con tu URL de SnapWidget
     (se ve así: https://snapwidget.com/embed/XXXXXXX)
*/
const SNAPWIDGET_URL = ''; // ← Pega aquí tu URL de SnapWidget

export default function InstagramSection() {
  return (
    <section className="py-20 px-6 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Instagram size={28} className="text-[#A95C45]" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#2A221E] font-bold">
              Sígueme en Instagram
            </h2>
          </div>
          <a
            href="https://www.instagram.com/tam.psicologa"
            target="_blank"
            rel="noreferrer"
            className="text-[#A95C45] font-semibold text-lg hover:underline"
          >
            @tam.psicologa
          </a>
        </div>

        {SNAPWIDGET_URL ? (
          <iframe
            src={SNAPWIDGET_URL}
            className="w-full border-0"
            height="450"
            title="Feed de Instagram @tam.psicologa"
            scrolling="no"
            allowTransparency="true"
          />
        ) : (
          <div className="bg-[#EBE4D8] rounded-xl p-12 text-center">
            <Instagram size={48} className="text-[#A95C45] mx-auto mb-4" />
            <p className="text-[#2A221E]/70 mb-6 text-base max-w-md mx-auto">
              Comparto recursos, reflexiones y contenido sobre bienestar emocional semana a semana.
            </p>
            <a
              href="https://www.instagram.com/tam.psicologa"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#2A221E] text-[#F8F5F0] px-8 py-3 rounded-full font-medium hover:bg-[#A95C45] transition-colors duration-300"
            >
              Ver publicaciones en Instagram →
            </a>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/tam.psicologa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#2A221E] font-semibold hover:text-[#A95C45] transition-colors underline"
          >
            <Instagram size={18} /> Ver todas las publicaciones
          </a>
        </div>
      </div>
    </section>
  );
}
