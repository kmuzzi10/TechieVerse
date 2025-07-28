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
    const timer = setTimeout(() => setShowWelcome(false), 2500); // Show for 2 seconds
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
          background: 'radial-gradient(circle at 60% 40%, #101624 0%, #1e293b 60%, #0f172a 100%)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          transition: 'background 0.6s',
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
            background: 'radial-gradient(circle, #0ea5e955 0%, #6366f155 60%, transparent 100%)',
            filter: 'blur(40px)',
            opacity: 0.7,
            zIndex: 1,
            animation: 'glowPulse 2.5s infinite alternate',
            pointerEvents: 'none',
          }} />
          {/* 3D Card Popup with Glassmorphism */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(30,41,59,0.96) 60%, rgba(16,24,39,0.98) 100%)',
              borderRadius: '2rem',
              padding: '2.5rem 3.5rem',
              boxShadow: '0 24px 64px 0 #0ea5e955, 0 2px 8px #6366f155',
              fontSize: '2.1rem',
              fontWeight: 800,
              color: '#f1f5f9',
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
              backdropFilter: 'blur(24px) saturate(1.2)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
              animation: 'popupIn 0.7s cubic-bezier(.25,.8,.25,1)',
              border: '1.5px solid #334155',
            }}
          >
            {/* Top 3 floating emojis */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              gap: '2.2rem',
              marginBottom: '0.7rem',
              marginTop: '-2.2rem',
              position: 'relative',
              zIndex: 3,
            }}>
              <span style={{
                fontSize: '2.7rem',
                filter: 'drop-shadow(0 6px 24px #0ea5e9cc) drop-shadow(0 2px 8px #0ea5e988)',
                transform: 'rotate(-12deg) scale(1.08)',
                background: 'radial-gradient(circle, #0ea5e9 60%, transparent 100%)',
                borderRadius: '50%',
                padding: '0.1em 0.2em',
                display: 'inline-block',
              } as React.CSSProperties}>💡</span>
              <span style={{
                fontSize: '3.1rem',
                filter: 'drop-shadow(0 8px 32px #6366f1cc) drop-shadow(0 2px 8px #6366f188)',
                transform: 'rotate(6deg) scale(1.13)',
                background: 'radial-gradient(circle, #6366f1 60%, transparent 100%)',
                borderRadius: '50%',
                padding: '0.1em 0.2em',
                display: 'inline-block',
              } as React.CSSProperties}>🚀</span>
              <span style={{
                fontSize: '2.7rem',
                filter: 'drop-shadow(0 6px 24px #22d3eecc) drop-shadow(0 2px 8px #22d3ee88)',
                transform: 'rotate(10deg) scale(1.08)',
                background: 'radial-gradient(circle, #22d3ee 60%, transparent 100%)',
                borderRadius: '50%',
                padding: '0.1em 0.2em',
                display: 'inline-block',
              } as React.CSSProperties}>💻</span>
            </div>
            {/* Beautifully styled headline */}
            <span style={{
              fontWeight: 900,
              fontSize: '2.3rem',
              letterSpacing: '0.03em',
              marginBottom: '0.5rem',
              display: 'block',
              background: 'linear-gradient(90deg, #0ea5e9 30%, #6366f1 60%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 2px 16px #0ea5e955',
            }}>
              Welcome to the Techieverse
            </span>
            <span style={{fontSize: '1.2rem', color: '#38bdf8', marginBottom: '0.5rem', display: 'block'}}>
              <span role="img" aria-label="party">✨</span> Learn. Build. Innovate. <span role="img" aria-label="rocket">🚀</span>
            </span>
            {/* Decorative floating emoji for 3D effect */}
            <span style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-1.5rem',
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 4px 16px #0ea5e988)'
            }}>💡</span>
            <span style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 4px 16px #6366f188)'
            }}>🦄</span>
            <span style={{
              position: 'absolute',
              top: '-1.5rem',
              right: '-1.5rem',
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 4px 16px #22d3ee88)'
            }}>💻</span>
            <span style={{
              position: 'absolute',
              bottom: '-1.5rem',
              left: '-1.5rem',
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 4px 16px #38bdf888)'
            }}>🌟</span>
          </div>
          {/* Keyframes for animation (inject as style tag) */}
          <style>{`
            @keyframes popupIn {
              0% { opacity: 0; transform: perspective(900px) scale(0.7) rotateX(24deg) rotateY(-24deg); }
              100% { opacity: 1; transform: perspective(900px) scale(1.04) rotateX(8deg) rotateY(-8deg); }
            }
            @keyframes glowPulse {
              0% { opacity: 0.7; filter: blur(40px); }
              100% { opacity: 1; filter: blur(48px); }
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
