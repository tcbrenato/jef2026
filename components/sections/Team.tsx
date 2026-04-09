'use client';

import { motion } from 'framer-motion';

export default function Team() {
  const members = [
    { name: "TEBE Jonathan", role: "SG-CO.JEF", img: "/jonathan.png" },
    { name: "Roger SOSSOU", img: "/roger.png" },
    { name: "Finel KUASSI", role: "7ème resp prov Ang1 grp2", img: "/finel.png" },
    { name: "DEGBEGNI Christine", img: "/christine.png" },
    { name: "Camilla WOLO", img: "/wolo.png" },
    { name: "Henri Joël AKOTEGNON", img: "/joel.png" },
    { name: "Edouard GBEYETIN", img: "/edouard.png" },
    { name: "Narcisse OUINSOU", role: "Président CO.JEF", img: "/narcisse.png" },
    { name: "Emmanuel Korede OGOUBI", img: "/ogoubi.png" },
    { name: "Socrate HONZOUNON", role: "OG CRA ANGLAIS", img: "/socrate.png" },
    { name: "TOSSA Farène", img: "/farene.png" },
    { name: "Candide AGUETON", img: "/candide.png" },
    { name: "KINKPO Lucrèce", role: "2ème resp prov Esp", img: "/lucrece.png" },
    { name: "AKOMIDJA I. Fiacre", role: "TG-CRA DSLC", img: "/fiacre.png" },
    { name: "ANAGONOU Roland", img: "/roland.png" },
    { name: "LAWSON Thalia", img: "/thalia.png" },
    { name: "TOGNI Elias", img: "/elias.png" },
    { name: "Leïla BABATOUNDE", img: "/leila.png" }
  ];

  const duplicatedMembers = [...members, ...members];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">Le Comité</h2>
        <h3 className="text-4xl md:text-5xl font-black text-jef-dark uppercase leading-none">
          L'équipe derrière <span className="text-jef-red">la JEF 2026</span>
        </h3>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-6 whitespace-nowrap px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 45, 
            repeat: Infinity 
          }}
        >
          {duplicatedMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-56 p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group transition-all"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md group-hover:border-jef-green transition-all bg-gray-200">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f3f4f6&color=2f8b09&bold=true`;
                  }}
                />
              </div>
              
              <div className="h-14 flex flex-col items-center justify-center">
                <h4 className="font-black text-jef-dark uppercase text-[11px] tracking-tighter whitespace-normal leading-tight">
                  {member.name}
                </h4>
                
                {member.role && (
                  <p className="text-jef-green text-[8px] font-black uppercase tracking-[0.15em] mt-2 whitespace-normal max-w-[180px]">
                    {member.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradients de fondu sur les bords pour l'effet "infini" */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}