'use client';

import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function JySerai() {
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const flyerRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // VERSION ROBUSTE DU TELECHARGEMENT
  const downloadVisuel = async () => {
    if (flyerRef.current === null) return;
    
    try {
      const dataUrl = await toPng(flyerRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        width: 500,
        height: 500,
      });

      const link = document.createElement('a');
      link.download = `jef2026-${(name || 'partant').toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Erreur lors de la génération :", err);
    }
  };

  const displayName = name.trim() || 'Votre Nom';

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 border border-jef-green/20 rounded-full bg-jef-green/5 mb-4">
            <span className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em]">Générateur de visuel</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-jef-dark uppercase leading-none tracking-tighter">
            Je suis <span className="text-jef-green">Partant(e)</span>
          </h1>
          <p className="text-gray-400 mt-3 text-sm">Génère ton visuel JEF 2026 et partage-le !</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* FORMULAIRE - TA STRUCTURE ORIGINALE CONSERVÉE */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/80">
            <h2 className="text-xl font-black text-jef-dark uppercase mb-8 tracking-tight">Personnalise ton flyer</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Nom &amp; Prénom
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Rénato TCHOBO"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-jef-dark font-bold focus:outline-none focus:ring-2 focus:ring-jef-green/40 transition-all placeholder:font-normal placeholder:text-gray-300"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Ta Photo
                </label>
                <label className="flex flex-col items-center justify-center w-full h-40 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:border-jef-green/40 hover:bg-jef-green/5 transition-all group">
                  {image ? (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src={image} alt="Aperçu" className="w-full h-full object-cover rounded-2xl" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all rounded-2xl">
                        <span className="text-white text-xs font-black uppercase tracking-widest">Changer</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="8" r="4" strokeWidth="2"/>
                          <path strokeLinecap="round" strokeWidth="2" d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400 font-bold">Clique pour alignésouter ta photo</span>
                      <span className="text-[10px] text-gray-300">JPG, PNG — photo portrait recommandée</span>
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>

              <button
                onClick={downloadVisuel}
                className="w-full py-5 bg-jef-dark text-white rounded-2xl font-black uppercase tracking-[0.15em] hover:bg-jef-green transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                ↓ Télécharger mon visuel
              </button>

              <p className="text-center text-[10px] text-gray-300 uppercase tracking-widest">
                Format carré · Prêt pour Instagram &amp; WhatsApp
              </p>
            </div>
          </div>

          {/* APERÇU - TES POSITIONS PRÉCISES */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Aperçu en temps réel</p>

            <div
              ref={flyerRef}
              style={{
                position: 'relative',
                width: '500px',
                height: '500px',
                flexShrink: 0,
                overflow: 'hidden',
                backgroundColor: 'white'
              }}
              className="shadow-2xl"
            >
              {/* ① Fond */}
              <img
                src="/jeftcb1.png"
                alt="Template JEF 2026"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                }}
              />

              {/* ② Photo (Calée sur tes mesures) */}
              {image && (
                <div
                  style={{
                    position: 'absolute',
                    top: '19%',
                    left: '3%',
                    width: '40%',
                    height: '50%',
                    overflow: 'hidden',
                    borderRadius: '18px',
                    zIndex: 1,
                  }}
                >
                  <img
                    src={image}
                    alt="Photo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                </div>
              )}

              {/* ③ Nom (Calé sur tes mesures) */}
              <div
                style={{
                  position: 'absolute',
                  top: '73%',
                  left: '2%',
                  right: '4%',
                  height: '10%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    color: 'white',
                    fontSize: '23px',
                    fontWeight: '900',
                    fontFamily: '"Arial Black", Arial, sans-serif',
                    letterSpacing: '1px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                  }}
                >
                  {displayName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}