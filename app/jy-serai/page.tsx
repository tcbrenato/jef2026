'use client';

import { useState, useRef } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

// Détecte iOS (iPhone/iPad)
function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
}

export default function JySerai() {
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const flyerRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setGeneratedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateCanvas = (): Promise<HTMLCanvasElement> => {
    return new Promise(async (resolve, reject) => {
      const SIZE = 500;
      const canvas = document.createElement('canvas');
      canvas.width = SIZE;
      canvas.height = SIZE;
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject(new Error('Canvas non supporté'));

      const loadImage = (src: string): Promise<HTMLImageElement> =>
        new Promise((res, rej) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => res(img);
          img.onerror = rej;
          img.src = src;
        });

      // 1. Fond
      const bg = await loadImage('/jeftcb1.png');
      ctx.drawImage(bg, 0, 0, SIZE, SIZE);

      // 2. Photo
      if (image) {
        const px = Math.round(0.034 * SIZE);
        const py = Math.round(0.192 * SIZE);
        const pw = Math.round(0.398 * SIZE);
        const ph = Math.round(0.50 * SIZE);
        const radius = 18;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(px + radius, py);
        ctx.lineTo(px + pw - radius, py);
        ctx.quadraticCurveTo(px + pw, py, px + pw, py + radius);
        ctx.lineTo(px + pw, py + ph - radius);
        ctx.quadraticCurveTo(px + pw, py + ph, px + pw - radius, py + ph);
        ctx.lineTo(px + radius, py + ph);
        ctx.quadraticCurveTo(px, py + ph, px, py + ph - radius);
        ctx.lineTo(px, py + radius);
        ctx.quadraticCurveTo(px, py, px + radius, py);
        ctx.closePath();
        ctx.clip();

        const photo = await loadImage(image);
        const photoAspect = photo.naturalWidth / photo.naturalHeight;
        const zoneAspect = pw / ph;
        let sx = 0, sy = 0, sw = photo.naturalWidth, sh = photo.naturalHeight;
        if (photoAspect > zoneAspect) {
          sw = photo.naturalHeight * zoneAspect;
          sx = (photo.naturalWidth - sw) / 2;
        } else {
          sh = photo.naturalWidth / zoneAspect;
          sy = 0;
        }
        ctx.drawImage(photo, sx, sy, sw, sh, px, py, pw, ph);
        ctx.restore();
      }

      // 3. Nom
      const displayName = name.trim() || 'Votre Nom';
      const tx = Math.round(0.02 * SIZE);
      const ty = Math.round(0.73 * SIZE);
      const tw = Math.round(0.94 * SIZE);
      const th = Math.round(0.10 * SIZE);

      ctx.save();
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      let fontSize = 23;
      ctx.font = `900 ${fontSize}px "Arial Black", Arial, sans-serif`;
      while (ctx.measureText(displayName.toUpperCase()).width > tw - 10 && fontSize > 10) {
        fontSize -= 1;
        ctx.font = `900 ${fontSize}px "Arial Black", Arial, sans-serif`;
      }
      ctx.fillText(displayName.toUpperCase(), tx + tw / 2, ty + th / 2);
      ctx.restore();

      resolve(canvas);
    });
  };

  const downloadVisuel = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const canvas = await generateCanvas();
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const fileName = `jef2026-${(name.trim() || 'partant').toLowerCase().replace(/\s+/g, '-')}.png`;

      if (isIOS()) {
        // Sur iOS : afficher l'image inline — l'utilisateur appuie longuement pour enregistrer
        setGeneratedImage(dataUrl);
      } else {
        // Android / Desktop : téléchargement direct via blob
        canvas.toBlob((blob) => {
          if (!blob) return;
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(blobUrl);
          }, 2000);
        }, 'image/png', 1.0);
      }
    } catch (err) {
      console.error('Erreur lors de la génération :', err);
      alert("Erreur de génération. Réessaie ou fais un appui long sur l'aperçu.");
    } finally {
      setIsGenerating(false);
    }
  };

  const displayName = name.trim() || 'Votre Nom';

  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
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

          {/* FORMULAIRE */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/80 order-2 lg:order-1">
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
                      <span className="text-xs text-gray-400 font-bold">Clique pour ajouter ta photo</span>
                      <span className="text-[10px] text-gray-300">JPG, PNG — Portrait recommandé</span>
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>

              <button
                onClick={downloadVisuel}
                disabled={isGenerating}
                className="w-full py-5 bg-jef-dark text-white rounded-2xl font-black uppercase tracking-[0.15em] hover:bg-jef-green transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isGenerating ? '⏳ Génération en cours...' : '↓ Télécharger mon visuel'}
              </button>

              {/* Zone d'enregistrement iOS */}
              {generatedImage && (
                <div className="rounded-2xl border-2 border-jef-green/30 bg-jef-green/5 p-4 text-center space-y-3">
                  <p className="text-jef-green text-xs font-black uppercase tracking-widest">
                    📱 Appuie longuement sur l'image → "Enregistrer dans Photos"
                  </p>
                  <img
                    src={generatedImage}
                    alt="Ton visuel JEF 2026"
                    className="w-full rounded-xl shadow-lg"
                    style={{ touchAction: 'manipulation', WebkitUserSelect: 'none' }}
                  />
                </div>
              )}

              <p className="text-center text-[10px] text-gray-300 uppercase tracking-widest">
                Format carré · Prêt pour Instagram &amp; WhatsApp
              </p>
            </div>
          </div>

          {/* APERÇU */}
          <div className="flex flex-col items-center gap-4 order-1 lg:order-2 w-full">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Aperçu en temps réel</p>

            <div className="w-full flex justify-center items-start min-h-[350px] md:min-h-[500px]">
              <div
                ref={flyerRef}
                style={{
                  position: 'relative',
                  width: '500px',
                  height: '500px',
                  flexShrink: 0,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  transformOrigin: 'top center',
                }}
                className="shadow-2xl scale-[0.6] xs:scale-[0.7] sm:scale-[0.8] md:scale-100"
              >
                <img
                  src="/jeftcb1.png"
                  alt="Template JEF 2026"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
                />
                {image && (
                  <div style={{ position: 'absolute', top: '19.2%', left: '3.4%', width: '39.8%', height: '50%', overflow: 'hidden', borderRadius: '18px', zIndex: 1 }}>
                    <img src={image} alt="Photo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                  </div>
                )}
                <div style={{ position: 'absolute', top: '73%', left: '2%', right: '4%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <span style={{ color: 'white', fontSize: '23px', fontWeight: '900', fontFamily: 'Arial Black, sans-serif', letterSpacing: '1px', textAlign: 'center', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                    {displayName}
                  </span>
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