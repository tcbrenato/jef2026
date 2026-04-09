import { Bus, Map, Sparkles, ShieldCheck } from 'lucide-react';

export default function Inclus() {
  const items = [
    {
      icon: <Bus className="text-jef-red" size={32} />,
      title: "Transport VIP",
      desc: "7 Bus climatisés pour un voyage sécurisé et tout confort."
    },
    {
      icon: <Map className="text-jef-red" size={32} />,
      title: "Exploration",
      desc: "Visite guidée des lieux les plus spectaculaires de la région."
    },
    {
      icon: <Sparkles className="text-jef-red" size={32} />,
      title: "Fun & Chill",
      desc: "Soirées, jeux de plage et moments de détente inoubliables."
    },
    {
      icon: <ShieldCheck className="text-jef-red" size={32} />,
      title: "Assistance",
      desc: "Encadrement total et assistance médicale disponible à tout moment."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">Tout est prévu</h2>
          <h3 className="text-4xl md:text-5xl font-black text-jef-dark uppercase leading-none">
            Ce qui est <span className="text-jef-red">inclus</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-jef-red/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-black text-jef-dark uppercase mb-3 tracking-tighter">
                {item.title}
              </h4>
              <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}