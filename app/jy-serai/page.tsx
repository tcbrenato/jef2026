'use client';

import { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { supabase } from '../../lib/supabase';

function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
}

const FILIERES = ['DSLC', 'Anglais', 'Allemand', 'Lettres Modernes', 'Espagnol', 'Autres'];

const TEMPLATES = [
  { id: 1, file: '/templatejef1.png', label: 'Fond Vert',   textColor: '#FFFFFF' },
  { id: 2, file: '/templatejef2.png', label: 'Fond Blanc',  textColor: '#2f8b09' },
];

const PHOTO       = { x: 71.1,  y: 526.5,  w: 747,   h: 747  };
const FILIERE_BOX = { x: 218.5, y: 1424.4, w: 356.8, h: 69.1 };
const NOM_BOX     = { x: 692.3, y: 1410.4, w: 820.2, h: 97.1 };

export default function JySerai() {
  const [name, setName]                     = useState('');
  const [filiere, setFiliere]               = useState('');
  const [filiereCustom, setFiliereCustom]   = useState('');
  const [image, setImage]                   = useState<string | null>(null);
  const [templateId, setTemplateId]         = useState(1);
  const [isGenerating, setIsGenerating]     = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [saved, setSaved]                   = useState(false);

  const activeTemplate = TEMPLATES.find(t => t.id === templateId)!;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setGeneratedImage(null);
        setSaved(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const getFiliereLabel = () => {
    if (filiere === 'Autres') return filiereCustom.trim() || 'Autres';
    return filiere;
  };

  const generateCanvas = (): Promise<HTMLCanvasElement> => {
    return new Promise(async (resolve, reject) => {
      const SIZE = 1800;
      const canvas = document.createElement('canvas');
      canvas.width = SIZE;
      canvas.height = SIZE;
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject(new Error('Canvas non supporté'));

      const loadImage = (src: string): Promise<HTMLImageElement> =>
        new Promise((res, rej) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload  = () => res(img);
          img.onerror = rej;
          img.src = src;
        });

      const bg = await loadImage(activeTemplate.file);
      ctx.drawImage(bg, 0, 0, SIZE, SIZE);

      if (image) {
        const { x, y, w, h } = PHOTO;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, Math.min(w, h) / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        const photo = await loadImage(image);
        const pa = photo.naturalWidth / photo.naturalHeight;
        const za = w / h;
        let sx = 0, sy = 0, sw = photo.naturalWidth, sh = photo.naturalHeight;
        if (pa > za) { sw = photo.naturalHeight * za; sx = (photo.naturalWidth - sw) / 2; }
        else         { sh = photo.naturalWidth / za;  sy = 0; }
        ctx.drawImage(photo, sx, sy, sw, sh, x, y, w, h);
        ctx.restore();
      }

      const textColor = activeTemplate.textColor;
      const filiereLabel = getFiliereLabel();

      if (filiereLabel) {
        const { x, y, w, h } = FILIERE_BOX;
        ctx.save();
        ctx.fillStyle = textColor;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        let fs = Math.round(h * 0.75);
        ctx.font = `900 ${fs}px "Arial Black", Arial, sans-serif`;
        while (ctx.measureText(filiereLabel).width > w - 10 && fs > 12) {
          fs--;
          ctx.font = `900 ${fs}px "Arial Black", Arial, sans-serif`;
        }
        ctx.fillText(filiereLabel, x, y + h / 2);
        ctx.restore();
      }

      const displayName = name.trim().toUpperCase() || 'VOTRE NOM';
      const { x: nx, y: ny, w: nw, h: nh } = NOM_BOX;
      ctx.save();
      ctx.fillStyle = textColor;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      let nfs = Math.round(nh * 0.8);
      ctx.font = `900 ${nfs}px "Arial Black", Arial, sans-serif`;
      while (ctx.measureText(displayName).width > nw - 10 && nfs > 12) {
        nfs--;
        ctx.font = `900 ${nfs}px "Arial Black", Arial, sans-serif`;
      }
      ctx.fillText(displayName, nx, ny + nh / 2);
      ctx.restore();

      resolve(canvas);
    });
  };

  const saveToSupabase = async (blob: Blob, fileName: string) => {
    try {
      // 1. Upload photo originale dans le bucket gallery
      let photoUrl: string | null = null;
      if (image) {
        // Convertir base64 en blob pour upload de la photo de profil
        const res = await fetch(image);
        const photoBlob = await res.blob();
        const photoFileName = fileName.replace('.png', '-photo.jpg');
        const { error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(photoFileName, photoBlob, { contentType: 'image/jpeg', upsert: false });

        if (!uploadError) {
          const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(photoFileName);
          photoUrl = urlData.publicUrl;
        }
      }

      // 2. Upload du visuel généré
      await supabase.storage
        .from('gallery')
        .upload(fileName, blob, { contentType: 'image/png', upsert: false });

      // 3. Insérer dans la table participants
      await supabase.from('participants').insert({
        name: name.trim() || 'Anonyme',
        filiere: getFiliereLabel(),
        photo_url: photoUrl,
      });

      setSaved(true);
    } catch (err) {
      console.error('Erreur Supabase :', err);
    }
  };

  const downloadVisuel = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const canvas = await generateCanvas();
      const safeName = (name.trim() || 'partant').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const fileName = `jef2026-${safeName}-${Date.now()}.png`;

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        // Sauvegarde Supabase en arrière-plan
        saveToSupabase(blob, fileName);

        if (isIOS()) {
          setGeneratedImage(canvas.toDataURL('image/png', 1.0));
        } else {
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(blobUrl); }, 2000);
        }
      }, 'image/png', 1.0);

    } catch (err) {
      console.error('Erreur :', err);
      alert("Erreur de génération. Réessaie.");
    } finally {
      setIsGenerating(false);
    }
  };

  const PREVIEW_SIZE = 500;
  const scale = PREVIEW_SIZE / 1800;
  const displayName = name.trim().toUpperCase() || 'VOTRE NOM';
  const filiereDisplay = getFiliereLabel();
  const textColor = activeTemplate.textColor;

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

              {/* Templates */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-3">Choisis ton design</label>
                <div className="grid grid-cols-2 gap-3">
                  {TEMPLATES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setTemplateId(t.id); setGeneratedImage(null); setSaved(false); }}
                      className={`relative rounded-2xl overflow-hidden border-2 transition-all ${
                        templateId === t.id
                          ? 'border-jef-green shadow-lg shadow-jef-green/20 scale-[1.02]'
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <img src={t.file} alt={t.label} className="w-full aspect-square object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 py-2 bg-black/40 text-white text-[10px] font-black uppercase tracking-widest text-center">
                        {t.label}
                      </div>
                      {templateId === t.id && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-jef-green rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nom */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-2">Nom &amp; Prénom</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Rénato TCHOBO"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-jef-dark font-bold focus:outline-none focus:ring-2 focus:ring-jef-green/40 transition-all placeholder:font-normal placeholder:text-gray-300"
                />
              </div>

              {/* Filière */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-2">Filière</label>
                <select
                  value={filiere}
                  onChange={(e) => setFiliere(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-jef-dark font-bold focus:outline-none focus:ring-2 focus:ring-jef-green/40 transition-all"
                >
                  <option value="">-- Sélectionne ta filière --</option>
                  {FILIERES.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
                {filiere === 'Autres' && (
                  <input
                    type="text"
                    value={filiereCustom}
                    onChange={(e) => setFiliereCustom(e.target.value)}
                    placeholder="Précise ta filière"
                    className="mt-3 w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-jef-dark font-bold focus:outline-none focus:ring-2 focus:ring-jef-green/40 transition-all placeholder:font-normal placeholder:text-gray-300"
                  />
                )}
              </div>

              {/* Photo */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-2">Ta Photo</label>
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

              {/* Bouton */}
              <button
                onClick={downloadVisuel}
                disabled={isGenerating}
                className="w-full py-5 bg-jef-dark text-white rounded-2xl font-black uppercase tracking-[0.15em] hover:bg-jef-green transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isGenerating ? '⏳ Génération en cours...' : '↓ Télécharger mon visuel'}
              </button>

              {/* Confirmation */}
              {saved && (
                <div className="flex items-center gap-3 p-4 bg-jef-green/10 border border-jef-green/20 rounded-2xl">
                  <div className="w-8 h-8 bg-jef-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-jef-green text-xs font-black uppercase tracking-widest">Tu es dans la galerie !</p>
                    <p className="text-[10px] text-gray-400">Ton nom apparaît maintenant dans la section communauté.</p>
                  </div>
                </div>
              )}

              {/* Zone iOS */}
              {generatedImage && (
                <div className="rounded-2xl border-2 border-jef-green/30 bg-jef-green/5 p-4 text-center space-y-3">
                  <p className="text-jef-green text-xs font-black uppercase tracking-widest">
                    📱 Appuie longuement → "Enregistrer dans Photos"
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
                Format carré 1800×1800px · Prêt pour Instagram &amp; WhatsApp
              </p>
            </div>
          </div>

          {/* APERÇU LIVE */}
          <div className="flex flex-col items-center gap-4 order-1 lg:order-2 w-full">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Aperçu en temps réel</p>
            <div className="w-full flex justify-center items-start">
              <div
                style={{
                  position: 'relative',
                  width: `${PREVIEW_SIZE}px`,
                  height: `${PREVIEW_SIZE}px`,
                  flexShrink: 0,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  transformOrigin: 'top center',
                }}
                className="shadow-2xl scale-[0.6] xs:scale-[0.7] sm:scale-[0.8] md:scale-100"
              >
                <img src={activeTemplate.file} alt="Template" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                {image && (
                  <div style={{
                    position: 'absolute',
                    left: `${PHOTO.x * scale}px`,
                    top: `${PHOTO.y * scale}px`,
                    width: `${PHOTO.w * scale}px`,
                    height: `${PHOTO.h * scale}px`,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    zIndex: 1,
                  }}>
                    <img src={image} alt="Photo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                  </div>
                )}
                {filiereDisplay && (
                  <div style={{
                    position: 'absolute',
                    left: `${FILIERE_BOX.x * scale}px`,
                    top: `${FILIERE_BOX.y * scale}px`,
                    width: `${FILIERE_BOX.w * scale}px`,
                    height: `${FILIERE_BOX.h * scale}px`,
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 2,
                  }}>
                    <span style={{ color: textColor, fontSize: `${FILIERE_BOX.h * scale * 0.75}px`, fontWeight: '900', fontFamily: '"Arial Black", Arial, sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                      {filiereDisplay}
                    </span>
                  </div>
                )}
                <div style={{
                  position: 'absolute',
                  left: `${NOM_BOX.x * scale}px`,
                  top: `${NOM_BOX.y * scale}px`,
                  width: `${NOM_BOX.w * scale}px`,
                  height: `${NOM_BOX.h * scale}px`,
                  display: 'flex',
                  alignItems: 'center',
                  zIndex: 2,
                }}>
                  <span style={{ color: textColor, fontSize: `${NOM_BOX.h * scale * 0.8}px`, fontWeight: '900', fontFamily: '"Arial Black", Arial, sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
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