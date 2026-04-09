'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: "J'y serai", href: '/jy-serai' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO CLIQUABLE */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logojeff.png" 
              alt="Logo JEF 2026" 
              className="h-14 w-auto object-contain py-1" 
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-jef-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-jef-red text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-jef-red/20 hover:scale-105 active:scale-95 transition-all"
            >
              Prendre mon ticket
            </Link>
          </nav>

          {/* BOUTON MENU MOBILE */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-jef-dark"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY MENU MOBILE (Mobile First) */}
      <div className={`
        fixed inset-0 top-20 bg-white z-[90] transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}
      `}>
        <nav className="flex flex-col p-8 space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black uppercase tracking-tighter text-jef-dark border-b border-gray-50 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-jef-red text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-jef-red/20"
          >
            Prendre mon ticket
          </Link>
        </nav>
      </div>
    </header>
  );
}