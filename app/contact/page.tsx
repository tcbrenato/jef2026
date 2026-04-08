import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* GAUCHE : INFOS & BILLETS */}
          <div>
            <h1 className="text-5xl font-black text-jef-dark uppercase mb-6 leading-none">
              Préparez <br /> <span className="text-jef-red">votre départ</span>
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-md">
              Les billets seront bientôt disponibles. Restez connectés pour l'annonce du tarif et de la destination surprise.
            </p>

            {/* État de la Billetterie */}
            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-jef-red rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Statut : Bientôt disponible</span>
              </div>
              <h3 className="text-xl font-bold text-jef-dark mb-2">Ticket Standard JEF 2026</h3>
              <p className="text-sm text-gray-500 mb-6">Inclus : Transport AR, Accès sites, Ambiance plage & Sécurité.</p>
              <button disabled className="w-full py-4 bg-gray-200 text-gray-400 rounded-xl font-bold uppercase tracking-widest cursor-not-allowed">
                Vente fermée
              </button>
            </div>
          </div>

          {/* DROITE : FORMULAIRE DE CONTACT */}
          <div className="bg-jef-dark p-10 md:p-12 rounded-[3rem] text-white">
            <h2 className="text-2xl font-black uppercase mb-8">Une question ?</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Nom & Prénom</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-jef-green outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">WhatsApp / Téléphone</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-jef-green outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-jef-green outline-none transition-all"></textarea>
              </div>
              <button className="w-full py-4 bg-jef-green text-white rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all">
                Envoyer au BUE
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}