import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Flashback from '../components/sections/Flashback';
import Concept from '../components/sections/Concept';
import Inclus from '../components/sections/Inclus';
import Testimonials from '../components/sections/Testimonials';
import Countdown from '../components/sections/Countdown';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/layout/Footer';
import FadeIn from '../components/layout/FadeIn'; // Import de l'animation

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      
      <FadeIn><Flashback /></FadeIn>
      <FadeIn><Concept /></FadeIn>
      <FadeIn><Inclus /></FadeIn>
      <FadeIn><Testimonials /></FadeIn>
      <FadeIn><Countdown /></FadeIn>
      <FadeIn><FinalCTA /></FadeIn>
      
      <Footer />
    </main>
  );
}