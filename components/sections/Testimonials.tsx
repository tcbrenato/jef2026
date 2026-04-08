export default function Testimonials() {
  const reviews = [
    {
      name: "Sébastien K.",
      role: "Étudiant SLC",
      text: "L'édition à Lomé était juste incroyable. Voyager avec autant d'étudiants, c'est une expérience qu'on ne vit qu'à la FLLAC.",
      color: "border-jef-green"
    },
    {
      name: "Mariam O.",
      role: "Alumni Lettres Modernes",
      text: "Le mélange entre visites culturelles et fête à la plage est parfaitement dosé. On revient avec des souvenirs plein la tête.",
      color: "border-jef-red"
    },
    {
      name: "Arnaud V.",
      role: "Étudiant Anglais",
      text: "L'organisation était au top. Les 7 bus qui roulent ensemble, ça impose le respect sur la route !",
      color: "border-jef-green"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-jef-green font-black text-sm uppercase tracking-[0.3em] mb-2">Ils l'ont vécu</h2>
          <h3 className="text-4xl md:text-5xl font-black text-jef-dark uppercase">Témoignages</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div key={index} className={`bg-white p-10 rounded-3xl border-l-8 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
              <p className="text-gray-600 italic mb-8 text-lg">"{item.text}"</p>
              <div>
                <h4 className="font-black text-jef-dark">{item.name}</h4>
                <p className="text-sm text-jef-green font-bold uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}