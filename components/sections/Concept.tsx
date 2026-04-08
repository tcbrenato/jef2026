export default function Concept() {
  return (
    <section className="py-24 bg-jef-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Partie Gauche : Texte */}
        <div className="flex-1">
          <h2 className="text-jef-red font-black text-sm uppercase tracking-[0.3em] mb-4">Le Concept</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8">
            Plus qu'un voyage, <br />
            <span className="text-jef-green">une évasion totale.</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Chaque année, le BUE FLLAC mobilise un convoi impressionnant pour offrir aux étudiants une parenthèse récréative loin des amphis.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-jef-red rounded-full"></div>
              <span>Découverte de lieux historiques et culturels</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-jef-green rounded-full"></div>
              <span>Ambiance assurée dans chaque bus</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-jef-red rounded-full"></div>
              <span>Détente et "enjaillement" au bord de la plage</span>
            </li>
          </ul>
        </div>

        {/* Partie Droite : Chiffre Impact */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="text-[15rem] md:text-[25rem] font-black text-white/5 leading-none select-none">
            7
          </div>
          <div className="absolute text-center">
            <span className="block text-5xl md:text-7xl font-black text-jef-green">BUS</span>
            <span className="block text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">Minimum</span>
          </div>
        </div>

      </div>
    </section>
  );
}