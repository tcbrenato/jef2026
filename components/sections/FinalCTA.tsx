import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-jef-dark rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">
          
          {/* Cercles décoratifs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-jef-green/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-jef-red/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">
              Prêt à faire partie de <span className="text-jef-green">l'histoire ?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Ne reste pas seul dans ton coin. Rejoins la plus grande communauté estudiantine pour une journée qui s'annonce légendaire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jy-serai" className="bg-white text-jef-dark px-10 py-4 rounded-full font-extrabold hover:bg-jef-green hover:text-white transition-all">
                GÉNÉRER MON VISUEL
              </Link>
              <Link href="/achat" className="bg-jef-red text-white px-10 py-4 rounded-full font-extrabold hover:shadow-[0_0_20px_rgba(254,7,5,0.4)] transition-all">
                RÉSERVER MON TICKET
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}