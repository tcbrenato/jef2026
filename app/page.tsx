import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Concept from '../components/sections/Concept';
import Flashback from '../components/sections/Flashback';
import Team from '../components/sections/Team';
import Inclus from '../components/sections/Inclus';
import Testimonials from '../components/sections/Testimonials';
import SocialProof from '../components/sections/SocialProof'; // 1. Import du nouveau composant
import Countdown from '../components/sections/Countdown';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/layout/Footer';
import FadeIn from '../components/layout/FadeIn';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      
      <FadeIn><Concept /></FadeIn>
      
      <FadeIn><Flashback /></FadeIn>
      
      <FadeIn><Team /></FadeIn>
      
      <FadeIn><Countdown /></FadeIn>
      
      <FadeIn><Inclus /></FadeIn>
      
      {/* Preuve sociale : Témoignages des anciennes éditions */}
      <FadeIn><Testimonials /></FadeIn>

      {/* 2. Nouveau : Mur des partants de CETTE édition (2026) */}
      <FadeIn><SocialProof /></FadeIn>
      
      <FadeIn><FinalCTA /></FadeIn>
      
      <Footer />
    </main>
  );
}