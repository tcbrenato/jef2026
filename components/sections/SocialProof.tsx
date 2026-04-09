'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

interface Participant {
  id: string;
  name: string;
}

export default function SocialProof() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    async function fetchParticipants() {
      const { data, error } = await supabase
        .from('participants')
        .select('id, name')
        .order('created_at', { ascending: false })
        .limit(20); // On prend les 20 derniers inscrits

      if (!error && data) {
        setParticipants(data);
      }
    }
    fetchParticipants();
  }, []);

  // Si personne n'est encore inscrit, on peut mettre des noms par défaut ou ne rien afficher
  if (participants.length === 0) return null;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">La communauté s'agrandit</h2>
        <h3 className="text-3xl md:text-4xl font-black text-jef-dark uppercase leading-none">
          Ils seront de <span className="text-jef-red">l'aventure</span>, et toi ?
        </h3>
      </div>

      <div className="flex gap-4 animate-scroll">
        {/* On double la liste pour l'effet de défilement infini */}
        {[...participants, ...participants].map((p, i) => (
          <div key={`${p.id}-${i}`} className="flex-none group">
            <div className="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl shadow-sm hover:border-jef-green/50 transition-all">
              <span className="text-jef-dark font-black uppercase text-sm tracking-tighter">
                {p.name}
              </span>
              <div className="text-[9px] text-jef-green font-bold uppercase mt-1">Sera présent(e)</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}