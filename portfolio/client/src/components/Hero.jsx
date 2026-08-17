import React, { useState, useEffect } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import FadeIn from './FadeIn';

const roles = [
  'Software Engineering Undergrad',
  'React & Spring Boot Dev',
  'REST API Builder',
];

export default function Hero({ data }) {
  const typed = useTypewriter(roles, 80, 2000);
  
  // Track viewport width for responsive inline styling
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Initialize width on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      // Dynamic padding: top padding expands on mobile to clear fixed navbars safely
      padding: isMobile ? '120px 1.5rem 6rem' : '80px 2rem 0', 
      position: 'relative', 
      overflow: 'hidden',
    }}>
      {/* Glow effect */}
      <div style={{
        position: 'absolute', top: -200, right: -200, width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ─── BACKGROUND WATERMARK TEXT ─── */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: isMobile ? '45%' : '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: isMobile ? '18vw' : '14vw', 
        fontWeight: 800,
        letterSpacing: '0.05em',
        color: 'rgba(255, 255, 255, 0.04)', // Minimal faint opacity
        textTransform: 'uppercase',
        userSelect: 'none',
        pointerEvents: 'none', 
        zIndex: 0,
        whiteSpace: 'nowrap'
      }}>
        PORTFOLIO
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ 
          display: 'grid', 
          // Collapse from 2 columns to a single column on mobile viewports
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', 
          gap: isMobile ? '3.5rem' : '2rem', 
          alignItems: 'center',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          
          {/* Left side : Text Content */}
          <div>
            <FadeIn delay={0}>
              <span style={{
                display: 'inline-block', fontSize: '0.78rem', fontWeight: 500,
                letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase',
                border: '1px solid var(--border)', padding: '6px 16px', borderRadius: 20, marginBottom: '1.5rem',
              }}>
                {data?.title || 'Third-year Software Engineering Undergraduate'}
              </span>
            </FadeIn>

            <FadeIn delay={120}>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 600, lineHeight: 1.1, marginBottom: '1rem',
              }}>
                Sudeesha<br />
                <span style={{ color: 'var(--gold)' }}>Ravisara</span>
              </h1>
            </FadeIn>

            <FadeIn delay={220}>
              <div style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 300,
                color: 'var(--muted)', marginBottom: '1.25rem', minHeight: '2rem',
                display: 'flex', 
                alignItems: 'center', 
                gap: 4,
                justifyContent: isMobile ? 'center' : 'flex-start', // Center align typing effect on mobile
              }}>
                <span>{typed}</span>
                <span style={{
                  display: 'inline-block', width: 2, height: '1.2em',
                  background: 'var(--gold)', marginLeft: 2,
                  animation: 'blink 1s step-end infinite',
                }} />
              </div>
            </FadeIn>

            <FadeIn delay={340}>
              <p style={{
                fontSize: '1rem', color: 'var(--muted)',
                maxWidth: 500, marginBottom: '2.5rem', fontWeight: 300,
                // Center block margins on mobile viewports
                marginLeft: isMobile ? 'auto' : '0',
                marginRight: isMobile ? 'auto' : '0'
              }}>
                Software Engineering undergraduate at NSBM Green University, passionate about building real-world solutions through clean, purposeful code.
              </p>
            </FadeIn>

            <FadeIn delay={440}>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                flexWrap: 'wrap',
                justifyContent: isMobile ? 'center' : 'flex-start' // Center align action button flexbox row on mobile
              }}>
                <a href="#projects" style={{
                  padding: '12px 28px', background: 'var(--gold)', color: 'var(--navy)',
                  borderRadius: 6, fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none'
                }}>
                  View My Work
                </a>
                <a href="#contact" style={{
                  padding: '12px 28px', background: 'transparent', color: 'var(--text)',
                  border: '1px solid var(--border)', borderRadius: 6, fontWeight: 500,
                  fontSize: '0.9rem', textDecoration: 'none'
                }}>
                  Get in Touch
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right side : Image Container */}
          <FadeIn delay={500} from={isMobile ? "bottom" : "right"}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Gold Border Frame */}
              <div style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '300px',
                height: '380px',
                border: '2px solid var(--gold)',
                borderRadius: '16px',
                top: '20px',
                // Centers framing backdrop box mathematically when layout is stacked
                right: isMobile ? 'unset' : '10px',
                left: isMobile ? 'calc(50% - 140px)' : 'unset',
                zIndex: 0
              }} />
              
              {/* Image Container */}
              <div style={{
                width: '100%',
                maxWidth: '300px',
                height: '380px',
                background: 'var(--navy3)',
                borderRadius: '16px',
                overflow: 'hidden',
                zIndex: 1,
                border: '1px solid var(--border)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
                <img 
                  src="/profile.PNG" 
                  alt="Sudeesha Ravisara" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* ─── SCROLL DOWN INDICATOR ─── */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 3
        }}>
          <span style={{ 
            fontSize: '0.7rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            color: 'var(--muted)',
            fontWeight: 500
          }}>
            Scroll Down
          </span>
          <div style={{ 
            width: '40px', 
            height: '1px', 
            background: 'rgba(255,255,255,0.15)', 
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '50%',
              background: 'var(--gold)',
              animation: 'scrollLineMove 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            }} />
          </div>
        </div>
      )}

      {/* Embedded Animations */}
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollLineMove {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}