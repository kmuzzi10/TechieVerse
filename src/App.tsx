import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CounterTest from './pages/CounterTest';
// Optional: Add a NotFound page
import NotFoundPage from './pages/NotFoundPage'; 
import { useLoading } from './context/LoadingContext';
import avatar1 from './assets/avatar1.png';

function App() {
  const location = useLocation();
  const { setLoading } = useLoading();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate loading for smoothness
    return () => clearTimeout(timeout);
  }, [location.pathname, setLoading]);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000); // Show for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(circle at 60% 40%, #a5b4fc 0%, #f0abfc 40%, #f9fafb 100%)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* Animated Glow Behind Card */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '420px',
            height: '240px',
            borderRadius: '2.5rem',
            background: 'radial-gradient(circle, #a5b4fc55 0%, #f0abfc33 60%, transparent 100%)',
            filter: 'blur(32px)',
            opacity: 0.7,
            zIndex: 1,
            animation: 'glowPulse 2.5s infinite alternate',
            pointerEvents: 'none',
          }} />
          {/* 3D Card Popup with Glassmorphism */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(224,231,255,0.85) 100%)',
              borderRadius: '2rem',
              padding: '2.5rem 3.5rem',
              boxShadow: '0 24px 64px 0 rgba(59,130,246,0.22), 0 2px 8px rgba(168,139,250,0.10)',
              fontSize: '2.1rem',
              fontWeight: 800,
              color: '#3730a3',
              textAlign: 'center',
              minWidth: '340px',
              maxWidth: '90vw',
              transform: 'perspective(900px) rotateX(8deg) rotateY(-8deg) scale(1.04)',
              transition: 'transform 0.5s cubic-bezier(.25,.8,.25,1)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              backdropFilter: 'blur(16px) saturate(1.2)',
              WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
              animation: 'popupIn 0.7s cubic-bezier(.25,.8,.25,1)',
            }}
          >
            {/* 3D SVG Logos Row */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.2rem' }}>
              {/* Graduation Cap SVG */}
              <svg width="48" height="48" viewBox="0 0 44 44" fill="none" style={{ filter: 'drop-shadow(0 4px 16px #6366f1aa)' }}>
                <g filter="url(#capShadow)">
                  <path d="M22 8L40 16L22 24L4 16L22 8Z" fill="url(#capGrad)" stroke="#6366f1" strokeWidth="2"/>
                  <rect x="16" y="24" width="12" height="6" rx="2" fill="#6366f1" fillOpacity="0.12" stroke="#6366f1" strokeWidth="2"/>
                  <path d="M22 24V32" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="22" cy="34" r="2" fill="#6366f1" fillOpacity="0.18"/>
                </g>
                <defs>
                  <linearGradient id="capGrad" x1="22" y1="8" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a5b4fc"/>
                    <stop offset="1" stopColor="#6366f1"/>
                  </linearGradient>
                  <filter id="capShadow" x="0" y="4" width="44" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#6366f1" floodOpacity="0.12"/>
                  </filter>
                </defs>
              </svg>
              {/* Rocket SVG */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ filter: 'drop-shadow(0 4px 16px #f472b6aa)' }}>
                <g filter="url(#rocketShadow)">
                  <path d="M24 6C30 12 36 30 24 42C12 30 18 12 24 6Z" fill="url(#rocketGrad)" stroke="#f472b6" strokeWidth="2"/>
                  <circle cx="24" cy="18" r="3" fill="#fff" stroke="#f472b6" strokeWidth="1.5"/>
                </g>
                <defs>
                  <linearGradient id="rocketGrad" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f9a8d4"/>
                    <stop offset="1" stopColor="#f472b6"/>
                  </linearGradient>
                  <filter id="rocketShadow" x="10" y="4" width="28" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#f472b6" floodOpacity="0.12"/>
                  </filter>
                </defs>
              </svg>
              {/* Laptop SVG */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ filter: 'drop-shadow(0 4px 16px #10b981aa)' }}>
                <g filter="url(#laptopShadow)">
                  <rect x="10" y="16" width="28" height="14" rx="3" fill="url(#laptopGrad)" stroke="#10b981" strokeWidth="2"/>
                  <rect x="6" y="32" width="36" height="4" rx="2" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="2"/>
                </g>
                <defs>
                  <linearGradient id="laptopGrad" x1="24" y1="16" x2="24" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6ee7b7"/>
                    <stop offset="1" stopColor="#10b981"/>
                  </linearGradient>
                  <filter id="laptopShadow" x="4" y="14" width="40" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#10b981" floodOpacity="0.12"/>
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Beautifully styled headline */}
            <span style={{
              fontWeight: 900,
              fontSize: '2.3rem',
              letterSpacing: '0.03em',
              marginBottom: '0.5rem',
              display: 'block',
              background: 'linear-gradient(90deg, #6366f1 30%, #f472b6 60%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: '0 2px 16px #a5b4fc55',
            }}>
              Welcome to the Techieverse
            </span>
            <span style={{fontSize: '1.2rem', color: '#6366f1', marginBottom: '0.5rem', display: 'block'}}>
              <span role="img" aria-label="party">✨</span> Learn. Build. Innovate. <span role="img" aria-label="rocket">🚀</span>
            </span>
            {/* Decorative floating emoji for 3D effect */}
            <span style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-1.5rem',
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 4px 16px #a5b4fc88)'
            }}>💡</span>
            <span style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 4px 16px #f472b688)'
            }}>🦄</span>
            <span style={{
              position: 'absolute',
              top: '-1.5rem',
              right: '-1.5rem',
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 4px 16px #fbbf2488)'
            }}>💻</span>
            <span style={{
              position: 'absolute',
              bottom: '-1.5rem',
              left: '-1.5rem',
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 4px 16px #10b98188)'
            }}>🌟</span>
          </div>
          {/* Keyframes for animation (inject as style tag) */}
          <style>{`
            @keyframes popupIn {
              0% { opacity: 0; transform: perspective(900px) scale(0.7) rotateX(24deg) rotateY(-24deg); }
              100% { opacity: 1; transform: perspective(900px) scale(1.04) rotateX(8deg) rotateY(-8deg); }
            }
            @keyframes glowPulse {
              0% { opacity: 0.7; filter: blur(32px); }
              100% { opacity: 1; filter: blur(40px); }
            }
          `}</style>
        </div>
      )}
      <Routes>
        {/* Main layout wrapper for all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="counter-test" element={<CounterTest />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
