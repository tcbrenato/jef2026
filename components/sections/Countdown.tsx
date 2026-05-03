'use client';

import { useEffect, useState } from 'react';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-06-13T00:00:00');

    function update() {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Secondes' },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-jef-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2f8b09_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center w-full">

          <div className="inline-block px-6 py-2 bg-jef-red text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-8 shadow-lg shadow-jef-red/20">
            Destination confirmée
          </div>

          <h3 className="text-4xl md:text-7xl font-black text-white uppercase mb-4 leading-[1] tracking-tighter w-full">
            La prochaine édition vous emmène à <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jef-green to-white">
              Ouidah & Grand-Popo
            </span>
          </h3>

          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold mb-10">
            📅 13 Juin 2026 — Compte à rebours
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-12 justify-center justify-items-center">
            {units.map(({ value, label }, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 w-full aspect-square max-w-[140px] md:max-w-none md:aspect-auto md:p-8 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center group hover:border-jef-green/50 transition-colors"
              >
                <span className="block text-4xl md:text-5xl font-black text-white mb-1 group-hover:scale-110 transition-transform tabular-nums">
                  {pad(value)}
                </span>
                <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-black tracking-[0.2em]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm md:text-lg italic max-w-2xl leading-relaxed mx-auto">
            "Préparez vos sacs, l'édition 2026 va dépasser toutes vos attentes."
          </p>
        </div>
      </div>
    </section>
  );
}