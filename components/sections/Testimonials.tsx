'use client';

import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcelle",
      role: "Étudiante FLLAC",
      text: "L'édition à Lomé était juste incroyable. L'organisation était au top du début à la fin !",
      img: "/marcelle.png"
    },
    {
      name: "Marie DAGBEGNON",
      role: "Alumni",
      text: "C'est ma 3ème JEF et je ne m'en lasse pas. La destination mystère, c'est le meilleur concept.",
      img: "/marie.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE : Centré sur mobile */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-16">
          <h2 className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            Témoignages
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-jef-dark uppercase tracking-tighter">
            Ils l'ont <span className="text-jef-red">vécue</span>
          </h3>
        </div>

        {/* GRILLE : Centrage des cartes d'avis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center lg:items-start lg:text-left bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 w-full max-w-[500px] relative"
            >
              <Quote className="text-jef-green/20 w-12 h-12 absolute top-6 right-8" />
              
              <p className="text-gray-600 italic text-lg mb-8 relative z-10">
                "{review.text}"
              </p>

              <div className="flex flex-col items-center lg:flex-row lg:gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-jef-green mb-3 lg:mb-0">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-jef-dark uppercase text-sm">{review.name}</h4>
                  <p className="text-jef-green text-[10px] font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}