'use client';

export default function Flashback() {
  const pastEditions = [
    { year: '2025', location: 'Bopa Possotomé', theme: 'CULTURE & DÉTENTE' },
    { year: '2024', location: 'Lomé (Togo)', theme: 'ESCALE INTERNATIONALE' },
    { year: '2023', location: 'Aného & Grand Popo', theme: 'HISTOIRE & PLAGE' },
    { year: '2022', location: 'Ouidah', theme: 'ROUTE DES ESCLAVES' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE : Centrage forcé sur mobile (flex-col items-center) */}
        <div className="mb-12 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-jef-green text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Notre Héritage
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-jef-dark uppercase tracking-tighter leading-none">
            Ils ont marqué <br className="hidden md:block" /> l'histoire
          </h3>
        </div>

        {/* GRILLE : justify-items-center pour que les cartes soient centrées sur mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {pastEditions.map((edition, index) => (
            <div 
              key={index} 
              className="w-full max-w-[320px] p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-jef-green transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-jef-green/20"
            >
              <span className="block text-5xl font-black text-gray-200 group-hover:text-white/20 transition-colors mb-6">
                {edition.year}
              </span>
              <h4 className="text-xl font-black text-jef-dark group-hover:text-white transition-colors mb-2">
                {edition.location}
              </h4>
              <p className="text-[10px] font-bold text-gray-400 group-hover:text-white/70 tracking-[0.2em] uppercase">
                {edition.theme}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}