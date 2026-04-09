import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Concept from '../components/sections/Concept';
import Flashback from '../components/sections/Flashback';
import Team from '../components/sections/Team'; // Ne pas oublier le carrousel !
import Inclus from '../components/sections/Inclus';
import Testimonials from '../components/sections/Testimonials';
import Countdown from '../components/sections/Countdown';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/layout/Footer';
import FadeIn from '../components/layout/FadeIn';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      
      {/* 1. On explique le concept juste après le Hero */}
      <FadeIn><Concept /></FadeIn>
      
      {/* 2. On montre l'historique */}
      <FadeIn><Flashback /></FadeIn>
      
      {/* 3. On présente l'équipe avec le carrousel défilant */}
      <FadeIn><Team /></FadeIn>
      
      {/* 4. Le compte à rebours pour créer l'urgence */}
      <FadeIn><Countdown /></FadeIn>
      
      {/* 5. Les détails logistiques */}
      <FadeIn><Inclus /></FadeIn>
      
      {/* 6. La preuve sociale */}
      <FadeIn><Testimonials /></FadeIn>
      
      {/* 7. L'appel à l'action final */}
      <FadeIn><FinalCTA /></FadeIn>
      
      <Footer />
    </main>
  );
}