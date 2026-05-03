'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

interface Participant {
  id: string;
  name: string;
  filiere: string | null;
  photo_url: string | null;
}

export default function SocialProof() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchParticipants() {
      try {
        const { data, error } = await supabase
          .from('participants')
          .select('id, name, filiere, photo_url')
          .order('created_at', { ascending: false })
          .limit(20);

        if (error) throw error;

        if (data && data.length > 0) {
          setParticipants(data);
        } else {
          setParticipants([
            { id: '1', name: 'Rénato T.',     filiere: 'DSLC',            photo_url: null },
            { id: '2', name: 'Merveille K.',  filiere: 'Anglais',         photo_url: null },
            { id: '3', name: 'Jonathan K.',   filiere: 'Lettres Modernes',photo_url: null },
            { id: '4', name: 'Awa D.',         filiere: 'Espagnol',        photo_url: null },
            { id: '5', name: 'Kevin L.',       filiere: 'Allemand',        photo_url: null },
          ]);
        }
      } catch (err) {
        console.error('Erreur Supabase:', err);
        setParticipants([{ id: '1', name: 'Test Connexion', filiere: null, photo_url: null }]);
      } finally {
        setLoading(false);
      }
    }
    fetchParticipants();
  }, []);

  if (loading) return null;

  const repeated = [...participants, ...participants, ...participants, ...participants];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em] mb-4">La communauté s'agrandit</h2>
        <h3 className="text-3xl md:text-4xl font-black text-jef-dark uppercase leading-none">
          Ils seront de <span className="text-jef-red">l'aventure</span>, et toi ?
        </h3>
        <div className="inline-flex items-center gap-2 mt-5 px-5 py-2 bg-jef-dark rounded-full">
          <div className="w-2 h-2 bg-jef-green rounded-full animate-pulse"></div>
          <span className="text-white text-xs font-black uppercase tracking-widest">
            {participants.length} partant{participants.length > 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          {repeated.map((p, i) => (
            <div key={`${p.id}-${i}`} className="flex-none">
              <div className="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl shadow-sm hover:border-jef-green/50 hover:shadow-md transition-all transform hover:scale-105 duration-300 flex items-center gap-4">
                
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-jef-green/10 flex items-center justify-center border-2 border-white shadow-sm">
                  {p.photo_url ? (
                    <img
                      src={p.photo_url}
                      alt={p.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-jef-green font-black text-lg uppercase">
                      {p.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Infos */}
                <div>
                  <span className="block text-jef-dark font-black uppercase text-sm tracking-tighter">
                    {p.name}
                  </span>
                  <span className="block text-[9px] text-jef-green font-bold uppercase mt-0.5">
                    {p.filiere ? p.filiere : 'Sera présent(e)'}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
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