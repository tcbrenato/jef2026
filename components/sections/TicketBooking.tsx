'use client';

import { useState } from 'react';

export function TicketBooking({ price, whatsapp }: { price: number; whatsapp: string }) {
  const [qty, setQty] = useState(1);
  const total = qty * price;

  function handleBook() {
    const msg = encodeURIComponent(
      "Bonjour, je veux payer " + qty + " ticket" + (qty > 1 ? "s" : "") + " pour la JEF 2026.\nMontant total : " + total.toLocaleString('fr-FR') + " F CFA."
    );
    window.open("https://wa.me/" + whatsapp + "?text=" + msg, "_blank");
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-black text-gray-500 uppercase tracking-widest">Nombre de tickets</span>
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center font-black text-gray-600 hover:border-jef-dark hover:text-jef-dark transition-all"
          >
            −
          </button>
          <span className="text-xl font-black text-jef-dark w-8 text-center">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center font-black text-gray-600 hover:border-jef-dark hover:text-jef-dark transition-all"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between py-3 border-t border-gray-200">
        <span className="text-sm text-gray-500 font-bold">Total</span>
        <span className="text-2xl font-black text-jef-dark">{total.toLocaleString('fr-FR')} F</span>
      </div>

      <button
        onClick={handleBook}
        className="w-full py-4 bg-[#25D366] text-white rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.139 1.535 5.877L.058 23.5l5.78-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.667-.523-5.18-1.43l-.371-.22-3.432.9.916-3.342-.242-.385A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Réserver via WhatsApp
      </button>
      <p className="text-[10px] text-gray-400 text-center">
        Un message pré-rempli s'ouvrira dans WhatsApp. Le paiement se confirme avec l'équipe BUE.
      </p>
    </div>
  );
}