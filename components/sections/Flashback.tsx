export default function Flashback() {
  const archives = [
    { year: "2025", place: "Bopa Possotomé", theme: "Culture & Détente" },
    { year: "2024", place: "Lomé (Togo)", theme: "Escale Internationale" },
    { year: "2023", place: "Aného & Grand Popo", theme: "Histoire & Plage" },
    { year: "2022", place: "Ouidah", theme: "Route des Esclaves" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-jef-green font-black text-sm uppercase tracking-[0.3em] mb-2">Notre Héritage</h2>
          <h3 className="text-4xl md:text-5xl font-black text-jef-dark uppercase">Ils ont marqué l'histoire</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {archives.map((item, index) => (
            <div key={index} className="group p-8 border border-gray-100 rounded-3xl hover:border-jef-green/20 hover:bg-gray-50 transition-all">
              <span className="text-5xl font-black text-gray-100 group-hover:text-jef-green/10 transition-colors block mb-4">
                {item.year}
              </span>
              <h4 className="text-xl font-bold text-jef-dark mb-2">{item.place}</h4>
              <p className="text-gray-500 text-sm uppercase tracking-wider">{item.theme}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}