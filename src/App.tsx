import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import DynamicBackground from './components/DynamicBackground';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Gallery from './components/Gallery';
import Support from './components/Support'; // Keep Support import as it's used in Home
import Footer from './components/Footer';
import LorePage from './pages/LorePage';
// ResourcesPage import is removed as the route is removed

// ScrollToTop component to handle view reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Home = () => (
  <main className="relative z-10 w-full overflow-hidden">
    <Hero />
    <Lore />
    <Gallery />
    <Support /> {/* Support component is now part of Home */}
  </main>
);

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
    <>
      <ScrollToTop />
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
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
