export default function Inclus() {
  const services = [
    {
      title: "Transport AR",
      desc: "Voyage en convoi sécurisé dans des bus grand confort (7 bus minimum).",
      icon: "🚌"
    },
    {
      title: "Sites Touristiques",
      desc: "Accès et visites guidées des lieux historiques et culturels de la destination.",
      icon: "🏛️"
    },
    {
      title: "Ambiance & Fun",
      desc: "Animation DJ, jeux, et moments de détente 'enjaillement' à la plage.",
      icon: "🎉"
    },
    {
      title: "Sécurité",
      desc: "Une organisation rigoureuse par le BUE FLLAC pour votre tranquillité.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-jef-red font-black text-sm uppercase tracking-[0.3em] mb-2">Tout compris</h2>
          <h3 className="text-4xl md:text-5xl font-black text-jef-dark uppercase">Dans votre ticket</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-10 rounded-[2rem] border border-transparent hover:border-jef-red/10 transition-all hover:shadow-xl hover:shadow-jef-red/5 text-center">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-jef-dark mb-4">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-jef-green/5 rounded-3xl border border-jef-green/10 text-center">
          <p className="text-jef-green font-bold italic">
            "Le prix du ticket est calculé pour être accessible à tous les étudiants de la FLLAC."
          </p>
        </div>
      </div>
    </section>
  );
}