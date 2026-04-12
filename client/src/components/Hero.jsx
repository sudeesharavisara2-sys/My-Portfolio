import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import FadeIn from './FadeIn';

const roles = [
  'Full-Stack Developer',
  'React & Spring Boot Dev',
  'Software Engineering Undergrad',
  'REST API Builder',
];

export default function Hero({ data }) {
  const typed = useTypewriter(roles, 80, 2000);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '80px 2rem 0', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: -200, right: -200, width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.8fr', 
          gap: '2rem', 
          alignItems: 'center' 
        }}>
          
          {/* Left side : Text Content */}
          <div>
            <FadeIn delay={0}>
              <span style={{
                display: 'inline-block', fontSize: '0.78rem', fontWeight: 500,
                letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase',
                border: '1px solid var(--border)', padding: '6px 16px', borderRadius: 20, marginBottom: '1.5rem',
              }}>
                {data?.title || 'Second-year Software Engineering Undergraduate'}
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
                display: 'flex', alignItems: 'center', gap: 4,
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
              }}>
                Experienced in building responsive web apps with Java, Spring Boot, and React.
                Currently at NSBM Green University, seeking a Full-Stack Developer Internship.
              </p>
            </FadeIn>

            <FadeIn delay={440}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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

          {/* Right side : Image Container*/}
          <FadeIn delay={500} from="right">
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
                right: '10px',
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

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}