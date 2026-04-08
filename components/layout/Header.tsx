import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase">
          Jef<span className="text-jef-green">2026</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-600">
          <Link href="/" className="hover:text-jef-green transition-colors">Accueil</Link>
          <Link href="/jy-serai" className="hover:text-jef-green transition-colors">J'y serai</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="bg-jef-red text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-jef-red/20"
          >
            Tickets
          </Link>
        </div>
      </div>
    </header>
  );
}