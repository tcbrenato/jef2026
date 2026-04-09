'use client';

export default function Countdown() {
  return (
    <section className="relative py-20 lg:py-32 bg-jef-dark overflow-hidden">
      {/* Texture de fond subtile */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2f8b09_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Conteneur Flex pour tout centrer verticalement et horizontalement */}
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-block px-6 py-2 bg-jef-red text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-8 shadow-lg shadow-jef-red/20">
            Annonce imminente
          </div>

          <h3 className="text-4xl md:text-7xl font-black text-white uppercase mb-10 leading-[0.9] tracking-tighter">
            La destination sera <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jef-green to-white">dévoilée bientôt</span>
          </h3>

          {/* GRID : 2 colonnes sur petit mobile, 4 sur desktop pour rester pro */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-12">
            {['??', '??', '??', '??'].map((unit, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center group hover:border-jef-green/50 transition-colors"
              >
                <span className="block text-4xl md:text-5xl font-black text-white mb-1 group-hover:scale-110 transition-transform">
                  {unit}
                </span>
                <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-black tracking-[0.2em]">
                  {['Jours', 'Heures', 'Minutes', 'Secondes'][i]}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-base md:text-lg italic max-w-2xl leading-relaxed">
            "Préparez vos sacs, l'édition 2026 va dépasser toutes vos attentes."
          </p>
        </div>
      </div>
    </section>
  );
}