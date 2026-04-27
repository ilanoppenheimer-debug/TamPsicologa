import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const SNAPWIDGET_URL = 'https://snapwidget.com/embed/1122173';

export default function InstagramSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section className="py-20 px-6 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Instagram size={28} className="text-[#A95C45]" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#6D3B07] font-bold">
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
            className="snapwidget-widget w-full border-0"
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden', width: '100%' }}
            title="Posts from Instagram"
          />
        ) : (
          <div className="bg-[#EBE4D8] rounded-xl p-12 text-center">
            <Instagram size={48} className="text-[#A95C45] mx-auto mb-4" />
            <p className="text-[#6D3B07]/70 mb-6 text-base max-w-md mx-auto">
              Comparto recursos, reflexiones y contenido sobre bienestar emocional semana a semana.
            </p>
            <a
              href="https://www.instagram.com/tam.psicologa"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#6D3B07] text-[#F8F5F0] px-8 py-3 rounded-full font-medium hover:bg-[#A95C45] transition-colors duration-300"
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
            className="inline-flex items-center gap-2 text-[#6D3B07] font-semibold hover:text-[#A95C45] transition-colors underline"
          >
            <Instagram size={18} /> Ver todas las publicaciones
          </a>
        </div>
      </div>
    </section>
  );
}
