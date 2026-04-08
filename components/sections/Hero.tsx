import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-jef-dark">
      {/* Effets de lumière décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-jef-green/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-jef-red/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="inline-block px-4 py-1 border border-jef-green/30 rounded-full mb-6">
          <span className="text-jef-green font-bold text-xs tracking-[0.3em] uppercase">Édition 2026</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight uppercase leading-none">
          L'aventure <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-jef-green to-jef-red">
            Continue
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
          Rejoignez plus de 400 étudiants pour une journée d'évasion. 
          Sites historiques, ambiance plage et plus de 7 bus en convoi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/achat" className="bg-jef-green text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(47,139,9,0.4)] transition-all w-full sm:w-auto">
            Acheter mon ticket
          </Link>
          <button className="text-white px-10 py-4 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-all w-full sm:w-auto">
            Voir le programme
          </button>
        </div>
      </div>
    </section>
  );
}