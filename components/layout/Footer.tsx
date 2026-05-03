'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-jef-dark pt-16 pb-8 overflow-hidden text-white">
      {/* Background Image avec Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg2.png" 
          alt="Footer Background" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Grid : items-center + text-center sur mobile / md:items-start + md:text-left sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-center text-center md:items-start md:text-left">
          
          {/* Info Gauche */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-black tracking-tighter uppercase mb-6">
              Jef<span className="text-jef-green">2026</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              La Journée de l'Étudiant de la FLLAC est l'événement récréatif majeur organisé par le Bureau d'Union d'Entité.
            </p>
          </div>

          {/* Liens Rapides */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-medium">
              <li><Link href="/" className="hover:text-jef-green transition-colors">Accueil</Link></li>
              <li><Link href="/jy-serai" className="hover:text-jef-green transition-colors">Générer mon visuel</Link></li>
              <li><Link href="/contact" className="hover:text-jef-green transition-colors">Contactez-nous</Link></li>
              <li><Link href="/billetterie" className="hover:text-jef-green transition-colors">Billetterie</Link></li>
            </ul>
          </div>

          {/* Contact / Réseaux */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-6">Contact</h4>
            <p className="text-sm text-gray-300 mb-2">Université d'Abomey-Calavi</p>
            <p className="text-sm text-gray-300 mb-6">Faculté des Lettres, Langues, Arts et Communication (FLLAC), BUE</p>
            <div className="flex gap-4">
               <span className="text-[10px] font-black uppercase text-jef-red border border-jef-red/40 bg-jef-red/10 px-4 py-2 rounded-full shadow-lg shadow-jef-red/20">
                 BUE FLLAC Officiel
               </span>
            </div>
          </div>

        </div>

        {/* Bas du Footer : Déjà configuré pour être centré sur mobile et justify-between sur desktop */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">
            © {currentYear} JEF 2026 / BUE FLLAC - Tous droits réservés.
          </p>
          <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">
            Développé par <span className="text-white">Rénato TCHOBO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}