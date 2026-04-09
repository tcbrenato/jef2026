'use client';

import { CheckCircle2 } from 'lucide-react';

export default function Inclus() {
  const items = [
    { title: "Transport VIP", desc: "7 Bus climatisés" },
    { title: "Restauration", desc: "Buffet complet & Boissons" },
    { title: "Kit Participant", desc: "T-shirt & Gadgets" },
    { title: "Sécurité", desc: "Assistance médicale 24h" }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE : Centré sur mobile */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-16">
          <h2 className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            Tout est prévu
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-jef-dark uppercase tracking-tighter">
            Ce qui est <span className="text-jef-green">inclus</span>
          </h3>
        </div>

        {/* GRILLE : justify-items-center pour le centrage mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 w-full max-w-[280px]"
            >
              <div className="bg-jef-green/10 p-4 rounded-2xl">
                <CheckCircle2 className="w-8 h-8 text-jef-green" />
              </div>
              <div>
                <h4 className="text-xl font-black text-jef-dark uppercase">{item.title}</h4>
                <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}