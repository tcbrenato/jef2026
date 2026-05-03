import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import { TicketBooking } from '../../components/sections/TicketBooking';

const phones = [
  { label: '0167 40 40 84', href: 'tel:+22967404084' },
  { label: '0195 75 47 33', href: 'tel:+22995754733' },
  { label: '0162 22 33 89', href: 'tel:+22962223389' },
];

const whatsapps = [
  { label: '67 40 40 84', href: 'https://wa.me/22967404084' },
  { label: '95 75 47 33', href: 'https://wa.me/22995754733' },
  { label: '62 22 33 89', href: 'https://wa.me/22962223389' },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* GAUCHE */}
          <div>
            <h1 className="text-5xl font-black text-jef-dark uppercase mb-6 leading-none">
              Préparez <br /> <span className="text-jef-red">votre départ</span>
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-md">
              Les billets sont disponibles. Réservez votre place dès maintenant avant rupture de stock.
            </p>

            {/* Ticket */}
            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 mb-8">
              <div className="relative w-full rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src="/ticketjef.png"
                  alt="Ticket JEF 2026"
                  width={600}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-jef-dark">Ticket Standard JEF 2026</h3>
                <span className="text-2xl font-black text-jef-red">6 000 F</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Inclus : Transport AR, Escale Ouidah, Vibes Grand-Popo, Restauration, Face Painting.
              </p>
              <TicketBooking price={6000} whatsapp="22995754733" />
            </div>

            {/* Téléphone */}
            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 mb-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-jef-dark rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Appel direct</span>
              </div>
              <div className="space-y-3">
                {phones.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-jef-dark hover:shadow-sm transition-all group"
                  >
                    <span className="font-bold text-jef-dark tracking-wide">{label}</span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-jef-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-8 bg-[#f0fdf4] rounded-[2rem] border border-green-100 mb-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.139 1.535 5.877L.058 23.5l5.78-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.667-.523-5.18-1.43l-.371-.22-3.432.9.916-3.342-.242-.385A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">WhatsApp</span>
              </div>
              <div className="space-y-3">
                {whatsapps.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white border border-green-100 rounded-xl hover:border-[#25D366] hover:shadow-sm transition-all group"
                  >
                    <span className="font-bold text-jef-dark tracking-wide">{label}</span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#25D366] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Vérification de ticket */}
            <div className="p-8 bg-jef-dark rounded-[2rem] border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-jef-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-jef-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Authenticité</span>
              </div>
              <h3 className="text-lg font-black text-white uppercase mb-2">Vérifier mon ticket</h3>
              <p className="text-gray-400 text-sm mb-5">
                Vous avez reçu un ticket ? Vérifiez son authenticité en tapant votre numéro de ticket sur notre plateforme officielle.
              </p>
              <a
                href="https://jef-logistique.vercel.app/verify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-jef-green text-white rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Vérifier mon ticket
              </a>
            </div>

          </div>

          {/* DROITE : FORMULAIRE */}
          <div className="bg-jef-dark p-10 md:p-12 rounded-[3rem] text-white">
            <h2 className="text-2xl font-black uppercase mb-2">Une question ?</h2>
            <p className="text-gray-400 text-sm mb-8">Écrivez-nous, le BUE vous répond rapidement.</p>
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Nom & Prénom</label>
                <input
                  type="text"
                  placeholder="Rénato TCHOBO"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-jef-green outline-none transition-all placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">WhatsApp / Téléphone</label>
                <input
                  type="text"
                  placeholder="+229 0192 37 77 77"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-jef-green outline-none transition-all placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Votre question sur la billetterie, le transport, etc."
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-jef-green outline-none transition-all resize-none placeholder:text-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-jef-green text-white rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Envoyer au BUE
              </button>
            </form>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">ou contactez-nous directement</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {whatsapps.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all group text-center"
                >
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.139 1.535 5.877L.058 23.5l5.78-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.667-.523-5.18-1.43l-.371-.22-3.432.9.916-3.342-.242-.385A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  <span className="text-[10px] font-bold text-gray-400 group-hover:text-white transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}