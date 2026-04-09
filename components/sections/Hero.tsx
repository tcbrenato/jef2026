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
    // mt-16 sur mobile et mt-20 sur desktop force le Hero à commencer APRÈS le header
    <section className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] mt-16 md:mt-20 w-full flex items-center bg-jef-dark overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg1.png" 
          alt="Background JEF" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* gap-32 pour vraiment séparer le texte de l'image sur desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          <div className="flex flex-col text-left space-y-6">
            <div className="inline-block w-fit px-4 py-1.5 border border-jef-green/50 rounded-full bg-black/40 backdrop-blur-md">
              <span className="text-jef-green text-[10px] font-black uppercase tracking-[0.4em]">Édition 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              L'aventure <br />
              continue
            </h1>

            {/* max-w-[350px] pour que le texte reste bien à gauche loin de l'image */}
            <p className="text-gray-200 text-sm md:text-base max-w-[350px] font-medium leading-relaxed opacity-95">
              Rejoignez plus de 400 étudiants de la FLLAC pour une journée mémorable. 7 bus, 1 destination surprise.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/contact" 
                className="bg-jef-red text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest shadow-2xl shadow-jef-red/40 hover:scale-105 transition-all text-[11px] text-center min-w-[160px]"
              >
                Payer le ticket
              </Link>
              <Link 
                href="/jy-serai" 
                className="bg-jef-green text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest shadow-2xl shadow-jef-green/40 hover:scale-105 transition-all text-[11px] text-center min-w-[160px]"
              >
                J'y serai
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="w-full max-w-sm ml-auto aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl backdrop-blur-sm">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect={'fade'}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  loop={true}
                  className="w-full h-full"
                >
                  {heroImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={src} 
                        alt="JEF 2026" 
                        className="w-full h-full object-cover"
                        onError={(e) => e.currentTarget.src = `https://via.placeholder.com/400x500?text=Image+${index+1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}