import { useEffect } from 'react';
import Lenis from 'lenis';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import DynamicBackground from './components/DynamicBackground';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import LorePage from './pages/LorePage';
import ResourcesPage from './pages/ResourcesPage';

function App() {

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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative antialiased selection:bg-neon selection:text-black">
      {/* Atmosphere Layers */}
      <div className="noise-overlay" />
      <div className="vignette" />
      <DynamicBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 w-full overflow-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Lore />
              <Gallery />
            </>
          } />
          <Route path="/lore" element={<LorePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
