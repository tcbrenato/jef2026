'use client';

export default function Concept() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Le grid s'adapte : 1 colonne centrée sur mobile, 2 colonnes alignées à gauche sur desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE : Toujours en premier sur mobile grâce à order-first */}
          <div className="order-first lg:order-last w-full flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="/about-image.png" 
                alt="Concept JEF" 
                className="w-full h-full object-cover"
                onError={(e) => e.currentTarget.src = "https://via.placeholder.com/600x600?text=Concept+JEF"}
              />
            </div>
          </div>

          {/* TEXTE : Centré sur mobile (items-center + text-center) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 border border-jef-green/20 rounded-full bg-jef-green/5">
              <span className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em]">Le Concept</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-jef-dark uppercase leading-[0.9] tracking-tighter">
              Plus qu'une sortie, <br />
              <span className="text-jef-red">une tradition.</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
              La JEF est le rendez-vous annuel incontournable de la FLLAC. 7 bus, une destination mystère et une ambiance légendaire.
            </p>

            <div className="pt-4">
              <div className="h-1 w-20 bg-jef-green rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}