'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: "J'y serai", href: '/jy-serai' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hauteur réduite : h-16 (64px) sur mobile, h-24 sur desktop */}
        <div className="flex justify-between items-center h-16 md:h-24">
          
          {/* LOGO */}
          <Link href="/" className="relative flex items-center">
            <motion.div style={{ x }} className="relative">
              <img 
                src="/logojeff.png" 
                alt="Logo JEF" 
                className="h-10 md:h-16 w-auto object-contain" 
              />
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-jef-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-jef-red text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest"
            >
              Tickets
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-jef-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - S'ajuste au h-16 du header */}
      <div className={`
        fixed inset-0 top-16 bg-white z-[110] transition-all duration-300 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <nav className="flex flex-col p-6 space-y-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase text-jef-dark border-b border-gray-50 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}