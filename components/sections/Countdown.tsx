export default function Countdown() {
  return (
    <section className="py-24 bg-jef-dark relative overflow-hidden">
      {/* Texture de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2f8b09_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-6 py-2 bg-jef-red text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-8">
          Annonce imminente
        </div>

        <h3 className="text-4xl md:text-7xl font-black text-white uppercase mb-8 leading-tight">
          La destination sera <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-jef-green to-white">dévoilée bientôt</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['??', '??', '??', '??'].map((unit, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <span className="block text-4xl font-black text-white">{unit}</span>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                {['Jours', 'Heures', 'Minutes', 'Secondes'][i]}
              </span>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-lg italic">
          "Préparez vos sacs, l'édition 2026 va dépasser toutes vos attentes."
        </p>
      </div>
    </section>
  );
}