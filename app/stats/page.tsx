import { supabase } from '@/lib/supabase';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Empêche la mise en cache pour avoir des stats en temps réel à chaque actualisation
export const revalidate = 0;

export default async function StatsPage() {
  // 1. Récupérer le nombre total de visuels générés
  const { count: totalParticipants, error: countError } = await supabase
    .from('participants') 
    .select('*', { count: 'exact', head: true });

  // 2. Récupérer les derniers inscrits pour l'activité récente
  const { data: recentInscriptions, error: dataError } = await supabase
    .from('participants')
    .select('name, created_at')
    .order('created_at', { ascending: false })
    .limit(10);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex-grow pt-32 pb-20 max-w-5xl mx-auto px-6 w-full">
        {/* En-tête du Dashboard */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-jef-green/10 border border-jef-green/20 mb-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-jef-green flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jef-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-jef-green"></span>
                </span>
                Live Stats
              </span>
            </div>
            <h1 className="text-4xl font-black text-jef-dark uppercase tracking-tighter leading-none">
              Monitoring <span className="text-jef-green">JEF 2026</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm font-medium italic">
            Dernière mise à jour : {new Date().toLocaleTimeString('fr-FR')}
          </p>
        </div>

        {/* Grille de Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Carte Principale : Total */}
          <div className="lg:col-span-2 bg-jef-dark p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Total Participants</span>
              <div className="flex items-baseline gap-4 mt-4">
                <span className="text-8xl font-black text-white leading-none tracking-tighter">
                  {totalParticipants || 0}
                </span>
                <span className="text-jef-green font-bold uppercase text-sm tracking-widest">Inscrits</span>
              </div>
            </div>
            {/* Décoration graphique en fond */}
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg className="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
               </svg>
            </div>
          </div>

          {/* Carte Secondaire : Status */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Statut Système</span>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-2xl">
                  <span className="text-xs font-bold uppercase">Supabase DB</span>
                  <span className={`text-[10px] font-black px-2 py-1 rounded-md ${countError ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {countError ? 'ERREUR' : 'ONLINE'}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-2xl">
                  <span className="text-xs font-bold uppercase">Netlify Edge</span>
                  <span className="text-[10px] font-black px-2 py-1 rounded-md bg-green-100 text-green-600 uppercase">Actif</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
               <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                 Objectif JEF 2026 : 7 Bus complets
               </p>
            </div>
          </div>
        </div>

        {/* Liste des Inscriptions */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-sm font-black uppercase tracking-widest text-jef-dark">Flux d'activité récent</h2>
            <span className="text-[10px] font-bold text-gray-400 uppercase">10 derniers visuels</span>
          </div>
          <div className="divide-y divide-gray-50">
            {recentInscriptions && recentInscriptions.length > 0 ? (
              recentInscriptions.map((participant, index) => (
                <div key={index} className="p-6 px-8 flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-jef-green/10 flex items-center justify-center text-jef-green font-black text-xs">
                      {participant.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-bold text-jef-dark uppercase text-sm tracking-tight">{participant.name}</span>
                  </div>
                  <span className="text-[10px] font-black text-gray-300 uppercase">
                    {new Date(participant.created_at).toLocaleString('fr-FR', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-20 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                   <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <p className="text-sm font-bold text-gray-300 uppercase">Aucun visuel généré pour le moment</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}