'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {
  const heroImages = [
    '/hero1.png', '/hero2.png', '/hero3.png', '/hero4.png', '/hero5.png',
    '/hero6.png', '/hero7.png', '/hero8.png', '/hero9.png', '/hero10.png',
    '/hero11.png', '/hero12.png'
  ];

  return (
    // Utilisation de padding (pt) pour éviter le chevauchement avec le header fixed
    // h-auto sur mobile pour laisser défiler si besoin, h-screen sur desktop
    <section className="relative min-h-screen lg:h-screen w-full flex items-center bg-jef-dark pt-20 md:pt-28 pb-12 overflow-hidden">
      
      {/* BACKGROUND IMAGE (bg1.png) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg1.png" 
          alt="Background JEF" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-jef-dark"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center">
          
          {/* 1. BLOC IMAGE : PREMIER SUR MOBILE (order-1) */}
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-sm aspect-[4/5] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border-[8px] lg:border-[12px] border-white/10 shadow-2xl backdrop-blur-sm">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect={'fade'}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="w-full h-full"
                >
                  {heroImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={src} 
                        alt="JEF 2026 Experience" 
                        className="w-full h-full object-cover"
                        onError={(e) => e.currentTarget.src = `https://via.placeholder.com/400x500?text=JEF+2026`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
             </div>
          </div>

          {/* 2. BLOC TEXTE : DEUXIÈME SUR MOBILE (order-2) + CENTRÉ */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 border border-jef-green/50 rounded-full bg-black/40 backdrop-blur-sm">
              <span className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em]">Édition 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              L'aventure <br />
              <span className="text-white">continue</span>
            </h1>

            <p className="text-gray-200 text-sm md:text-base max-w-sm font-medium leading-relaxed opacity-95">
              Rejoignez plus de 400 étudiants de la FLLAC pour une journée mémorable. 7 bus, 1 destination surprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="bg-jef-red text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest shadow-xl shadow-jef-red/40 hover:scale-105 active:scale-95 transition-all text-[11px] text-center"
              >
                Payer le ticket
              </Link>
              <Link 
                href="/jy-serai" 
                className="bg-jef-green text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest shadow-xl shadow-jef-green/40 hover:scale-105 active:scale-95 transition-all text-[11px] text-center"
              >
                J'y serai
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}