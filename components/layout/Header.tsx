'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Ticket } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Effet subtil sur le logo au scroll
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: "J'y serai", href: '/jy-serai' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LOGO */}
          <Link href="/" className="relative flex items-center">
            <motion.div style={{ scale }} className="flex items-center">
              <img 
                src="/logojeff.png" 
                alt="Logo JEF" 
                className="h-12 md:h-16 w-auto object-contain" 
              />
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold uppercase tracking-tighter text-gray-600 hover:text-[#2f8b09] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* BOUTON TICKET CTA */}
            <Link 
              href="/boutique" 
              className="bg-[#2f8b09] text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#246d07] transition-all shadow-md hover:shadow-[#2f8b09]/20"
            >
              <Ticket size={14} />
              Prendre mon Ticket
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center gap-4">
             <Link 
              href="/boutique" 
              className="bg-[#2f8b09] p-2 rounded-full text-white shadow-lg"
            >
              <Ticket size={20} />
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-900 transition-transform active:scale-90"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 bg-white z-[110] md:hidden"
          >
            <nav className="flex flex-col p-8 space-y-8 h-full">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black uppercase text-gray-900 border-b border-gray-50 pb-4 flex justify-between items-center"
                >
                  {link.name}
                  <span className="text-[#2f8b09] text-sm">→</span>
                </Link>
              ))}
              
              <Link 
                href="/boutique"
                onClick={() => setIsOpen(false)}
                className="mt-auto bg-[#2f8b09] text-white w-full py-5 rounded-2xl text-center font-black uppercase text-lg flex items-center justify-center gap-3"
              >
                <Ticket size={24} />
                Acheter mon Pass
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}