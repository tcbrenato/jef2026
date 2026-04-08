import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Info Gauche */}
          <div>
            <div className="text-2xl font-black tracking-tighter uppercase mb-6">
              Jef<span className="text-jef-green">2026</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              La Journée de l'Étudiant de la FLLAC est l'événement récréatif majeur organisé par le Bureau d'Union d'Entité.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="font-bold text-jef-dark uppercase text-xs tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><Link href="/" className="hover:text-jef-green">Accueil</Link></li>
              <li><Link href="/jy-serai" className="hover:text-jef-green">Générer mon visuel</Link></li>
              <li><Link href="/contact" className="hover:text-jef-green">Contactez-nous</Link></li>
              <li><Link href="/billetterie" className="hover:text-jef-green">Billetterie</Link></li>
            </ul>
          </div>

          {/* Contact / Réseaux */}
          <div>
            <h4 className="font-bold text-jef-dark uppercase text-xs tracking-widest mb-6">Contact</h4>
            <p className="text-sm text-gray-600 mb-2">Université d'Abomey-Calavi</p>
            <p className="text-sm text-gray-600 mb-6">Faculté des Lettres (FLLAC), BUE</p>
            <div className="flex gap-4">
               {/* Ici tu pourras ajouter des icônes de réseaux sociaux plus tard */}
               <span className="text-[10px] font-black uppercase text-jef-red border border-jef-red/20 px-3 py-1 rounded-full">BUE FLLAC Officiel</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} JEF FLLAC - Tous droits réservés.
          </p>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            Design Épuré & Professionnel
          </p>
        </div>
      </div>
    </footer>
  );
}