import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import DynamicBackground from './components/DynamicBackground';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Gallery from './components/Gallery';
import Support from './components/Support';
import Footer from './components/Footer';
import LorePage from './pages/LorePage';
import ResourcesPage from './pages/ResourcesPage';

const Home = () => (
  <main className="relative z-10 w-full overflow-hidden">
    <Hero />
    <Lore />
    <Gallery />
    <Support />
  </main>
);

function App() {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="relative antialiased selection:bg-neon selection:text-black">
        {/* Atmosphere Layers */}
        <div className="noise-overlay" />
        <div className="vignette" />
        <DynamicBackground />

        {/* Navigation */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lore" element={<LorePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
