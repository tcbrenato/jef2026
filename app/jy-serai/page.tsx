'use client';

import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function JySerai() {
  const [name, setName] = useState('VOTRE NOM');
  const [dept, setDept] = useState('VOTRE FILIÈRE');
  const [image, setImage] = useState<string | null>(null);
  const flyerRef = useRef<HTMLDivElement>(null);

  // Fonction pour charger l'image de l'étudiant
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour télécharger le visuel
  const downloadVisuel = () => {
    if (flyerRef.current === null) return;
    toPng(flyerRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `jef2026-${name.toLowerCase()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* FORMULAIRE */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50">
          <h1 className="text-3xl font-black text-jef-dark uppercase mb-8">
            Générer mon <span className="text-jef-green">Visuel</span>
          </h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Nom Complet</label>
              <input 
                type="text" 
                onChange={(e) => setName(e.target.value.toUpperCase())}
                placeholder="Ex: Jean KODJA"
                className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-jef-green transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Filière / Fonction</label>
              <input 
                type="text" 
                onChange={(e) => setDept(e.target.value.toUpperCase())}
                placeholder="Ex: SLC - LICENCE 3"
                className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-jef-green transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Ta Photo</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:uppercase file:bg-jef-dark file:text-white hover:file:bg-jef-green transition-all"
              />
            </div>

            <button 
              onClick={downloadVisuel}
              className="w-full py-5 bg-jef-red text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg shadow-jef-red/30 hover:scale-[1.02] transition-all pt-6"
            >
              Télécharger mon visuel
            </button>
          </div>
        </div>

        {/* APERÇU DU VISUEL (Le flyer) */}
        <div className="flex justify-center">
          <div 
            ref={flyerRef}
            className="w-[400px] h-[500px] bg-jef-dark relative overflow-hidden shadow-2xl"
          >
            {/* Design du Flyer */}
            <div className="absolute inset-0 bg-gradient-to-b from-jef-green/20 to-transparent z-10"></div>
            
            {/* Photo de l'étudiant */}
            {image ? (
              <img src={image} alt="Profil" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-4xl text-center px-10 uppercase italic">
                Ta photo <br/> ici
              </div>
            )}

            {/* Overlays Texte */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-jef-dark via-jef-dark/80 to-transparent">
              <div className="h-1 w-12 bg-jef-red mb-4"></div>
              <h2 className="text-3xl font-black text-white leading-none mb-1">{name}</h2>
              <p className="text-jef-green font-bold text-sm tracking-widest uppercase mb-6">{dept}</p>
              
              <div className="flex justify-between items-end">
                <div className="text-white/50 text-[8px] font-bold uppercase tracking-[0.3em]">
                  JEF 2026 <br/> Bureau d'Union d'Entité
                </div>
                <div className="text-white font-black text-xl italic uppercase">
                  J'y <span className="text-jef-red">serai</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}