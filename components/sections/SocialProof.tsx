'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

interface Participant {
  id: string;
  name: string;
}

export default function SocialProof() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchParticipants() {
      try {
        const { data, error } = await supabase
          .from('participants')
          .select('id, name')
          .order('created_at', { ascending: false })
          .limit(20);

        if (error) throw error;

        if (data && data.length > 0) {
          setParticipants(data);
        } else {
          // NOMS DE TEST : Si la BDD est vide, on affiche ça pour vérifier que ça marche
          setParticipants([
            { id: '1', name: 'Rénato T.' },
            { id: '2', name: 'Merveille K.' },
            { id: '3', name: 'Jonathan K.' },
            { id: '4', name: 'Awa D.' },
            { id: '5', name: 'Kevin L.' }
          ]);
        }
      } catch (err) {
        console.error("Erreur Supabase:", err);
        // En cas d'erreur de connexion, on met aussi les noms de test
        setParticipants([{ id: '1', name: 'Test Connexion' }]);
      } finally {
        setLoading(false);
      }
    }
    fetchParticipants();
  }, []);

  if (loading) return null;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">La communauté s'agrandit</h2>
        <h3 className="text-3xl md:text-4xl font-black text-jef-dark uppercase leading-none">
          Ils seront de <span className="text-jef-red">l'aventure</span>, et toi ?
        </h3>
      </div>

      {/* Conteneur du défilement */}
      <div className="relative flex overflow-hidden">
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          {/* On répète la liste 4 fois pour être sûr que le défilement est fluide sur les grands écrans */}
          {[...participants, ...participants, ...participants, ...participants].map((p, i) => (
            <div key={`${p.id}-${i}`} className="flex-none">
              <div className="bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl shadow-sm hover:border-jef-green/50 transition-all transform hover:scale-105 duration-300">
                <span className="text-jef-dark font-black uppercase text-sm tracking-tighter">
                  {p.name}
                </span>
                <div className="text-[9px] text-jef-green font-bold uppercase mt-1">Sera présent(e)</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } 
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}