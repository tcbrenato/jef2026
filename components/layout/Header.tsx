'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Ticket } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Accueil',   href: '/' },
    { name: "J'y serai", href: '/jy-serai' },
    { name: 'Contact',   href: '/contact' },
  ];

  return (
    <>
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
              <Link
                href="/contact"
                className="bg-[#2f8b09] text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#246d07] transition-all shadow-md hover:shadow-[#2f8b09]/20"
              >
                <Ticket size={14} />
                Prendre mon Ticket
              </Link>
            </nav>

            {/* MOBILE BUTTONS */}
            <div className="md:hidden flex items-center gap-3">
              <Link
                href="/contact"
                className="bg-[#2f8b09] p-2.5 rounded-full text-white shadow-lg"
              >
                <Ticket size={20} />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-900 transition-transform active:scale-90"
                aria-label="Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU — en dehors du header pour éviter les conflits z-index */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-[99] md:hidden flex flex-col"
            style={{ paddingTop: '64px' }}
          >
            {/* Header fantôme pour aligner avec le vrai header */}
            <nav className="flex flex-col px-8 pt-10 pb-8 space-y-2 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center py-5 border-b border-gray-100 group"
                  >
                    <span className="text-3xl font-black uppercase text-gray-900 group-hover:text-[#2f8b09] transition-colors">
                      {link.name}
                    </span>
                    <span className="text-[#2f8b09] text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </motion.div>
              ))}

              <div className="flex-1" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#2f8b09] text-white w-full py-5 rounded-2xl text-center font-black uppercase text-lg flex items-center justify-center gap-3 hover:bg-[#246d07] transition-all"
                >
                  <Ticket size={24} />
                  Acheter mon Pass
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}