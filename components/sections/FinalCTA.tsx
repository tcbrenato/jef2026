import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function FinalCTA() {
  const contacts = [
    { number: "0167404084", display: "01 67 40 40 84" },
    { number: "0193503664", display: "01 93 50 36 64" },
    { number: "0162223389", display: "01 62 22 33 89" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-jef-dark rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">

          <div className="absolute top-0 right-0 w-64 h-64 bg-jef-green/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-jef-red/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">
              Prêt à faire partie de <span className="text-jef-green">l'histoire ?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Ne reste pas seul dans ton coin. Rejoins la plus grande communauté estudiantine pour une journée qui s'annonce légendaire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/jy-serai"
                className="bg-white text-jef-dark px-10 py-4 rounded-full font-extrabold hover:bg-jef-green hover:text-white transition-all text-center"
              >
                GÉNÉRER MON VISUEL
              </Link>
              <Link
                href="/contact"
                className="bg-jef-red text-white px-10 py-4 rounded-full font-extrabold hover:shadow-[0_0_20px_rgba(254,7,5,0.4)] transition-all text-center"
              >
                RÉSERVER MON TICKET
              </Link>
            </div>

            <div className="border-t border-white/10 pt-10">
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                Pour toutes informations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {contacts.map((c) => (
                  <a
                    key={c.number}
                    href={"tel:" + c.number}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-jef-green/50 hover:bg-white/10 transition-all px-6 py-3 rounded-2xl group"
                  >
                    <div className="w-8 h-8 rounded-full bg-jef-green/10 flex items-center justify-center group-hover:bg-jef-green/20 transition-colors">
                      <Phone size={14} className="text-jef-green" />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wide">
                      {c.display}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}