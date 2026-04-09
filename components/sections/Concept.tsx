'use client';

export default function Concept() {
  return (
    <section className="relative py-20 md:py-36 bg-white overflow-hidden">

      {/* Fond décoratif — grand texte fantôme */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 left-0 w-full text-[clamp(80px,18vw,200px)] font-black uppercase text-gray-100 leading-none tracking-tighter overflow-hidden whitespace-nowrap"
      >
        FLLAC&nbsp;JEF&nbsp;2026
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* TEXTE — 7 colonnes */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">

            {/* Pill badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-jef-green/30 bg-jef-green/5 w-fit">
              <span className="block w-2 h-2 rounded-full bg-jef-green animate-pulse"></span>
              <span className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em]">Le Concept</span>
            </div>

            {/* Titre */}
            <div className="space-y-1">
              <h2 className="text-5xl md:text-7xl font-black text-jef-dark uppercase leading-[0.88] tracking-tighter">
                Plus qu'une
              </h2>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.88] tracking-tighter text-jef-red">
                sortie,
              </h2>
              <h2 className="text-5xl md:text-7xl font-black text-jef-dark uppercase leading-[0.88] tracking-tighter">
                une tradition.
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
              La JEF est le rendez-vous annuel incontournable de la FLLAC.&nbsp;
              <strong className="text-jef-dark font-bold">7 bus</strong>, une destination mystère et une ambiance légendaire.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md pt-2">
              {[
                { num: '7', label: 'Bus' },
                { num: '1', label: 'Destination mystère' },
                { num: '∞', label: 'Souvenirs' },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col items-center lg:items-start gap-1 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-3xl font-black text-jef-dark leading-none">{num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{label}</span>
                </div>
              ))}
            </div>

            {/* Ligne déco */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-1 w-16 bg-jef-green rounded-full"></div>
              <div className="h-1 w-6 bg-jef-red rounded-full"></div>
            </div>
          </div>

          {/* IMAGE — 5 colonnes */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">

              {/* Cadre décoratif décalé */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem] border-2 border-jef-red/20"
              ></div>
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] border-2 border-jef-green/20"
              ></div>

              {/* Image */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/hero9.png"
                  alt="Concept JEF — ambiance bus et plage"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://via.placeholder.com/420x525/1a1a2e/ffffff?text=JEF+2026';
                  }}
                />
                {/* Overlay badge flottant */}
                <div className="absolute bottom-6 left-6 right-6 bg-jef-dark/90 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Édition</p>
                    <p className="text-white font-black text-lg leading-none">JEF 2026</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="block w-2 h-2 rounded-full bg-jef-green animate-pulse"></span>
                    <span className="text-jef-green text-[10px] font-black uppercase tracking-widest">À venir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}