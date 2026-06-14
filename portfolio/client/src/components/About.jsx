import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

export default function About({ data }) {
  const [isMobile, setIsMobile] = useState(false);
  // State for custom cursor position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointerHovering, setIsPointerHovering] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Custom cursor movement tracker
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const customStats = [
    { number: "2nd", label: "Year Undergraduate" },
    { number: "3+", label: "Full-stack projects" },
    { number: "1+", label: "Year work experience" },
    { number: "10+", label: "Technologies learned" }
  ];

  return (
    <section id="about" style={{ padding: isMobile ? '4rem 1rem' : '6rem 2rem', background: 'var(--navy2)', position: 'relative', cursor: 'none' }}>
      
      {/* Custom Cursor Element */}
      {!isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointerHovering ? '30px' : '12px',
          height: isPointerHovering ? '30px' : '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--gold)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${mousePos.x - (isPointerHovering ? 15 : 6)}px, ${mousePos.y - (isPointerHovering ? 15 : 6)}px)`,
          transition: 'width 0.2s, height 0.2s, transform 0.1s',
          mixBlendMode: 'difference'
        }} />
      )}

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? '2.5rem' : '4rem', 
          alignItems: 'center' 
        }}>
          
          <div>
            <FadeIn delay={0}>
              <SectionHeader label="About Me" title={"Passionate about\nbuilding things"} />
            </FadeIn>
            <FadeIn delay={100}>
              <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontWeight: 300 }}>
                {data?.about || "Software Engineering undergraduate at NSBM Green University, passionate about building real-world solutions through clean code and eager to contribute as an IT intern."}
              </p>
            </FadeIn>
            <FadeIn delay={180}>
              <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontWeight: 300 }}>
                Experienced in developing responsive web applications using Java, Spring Boot, and React with REST API integration and MySQL databases.
              </p>
            </FadeIn>
            <FadeIn delay={250}>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontWeight: 300 }}>
                Strong analytical thinking and debugging skills, with practical data-handling experience gained from a corporate environment.
              </p>
            </FadeIn>

            {/* CV Download Button with Cursor Trigger & Color Updates */}
            <FadeIn delay={300}>
              <a
                href="/Sudeesha-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Sudeesha-Resume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'transparent',
                  color: 'var(--gold)',
                  border: '1px solid var(--gold)',
                  borderRadius: '8px',
                  padding: '0.8rem 1.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out',
                  cursor: 'none' // Hide default cursor over button
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gold)'; // Fills background with solid gold
                  e.currentTarget.style.color = 'var(--navy)';       // Switches text/icon color to dark navy
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  setIsPointerHovering(true);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'; // Resets background to transparent
                  e.currentTarget.style.color = 'var(--gold)';       // Resets text/icon color back to gold
                  e.currentTarget.style.transform = 'translateY(0)';
                  setIsPointerHovering(false);
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8L14 2Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M14 2v6h6" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                  <path d="M9 14.5l3 3 3-3" />
                </svg>
                Download Resume
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={150} from={isMobile ? "bottom" : "right"}> 
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
              gap: '1.5rem' 
            }}>
              {customStats.map((s, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: 'var(--card)', 
                    border: '1px solid var(--border)', 
                    borderRadius: 16, 
                    padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem', 
                    textAlign: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontSize: isMobile ? '1.8rem' : '2.2rem', 
                    color: 'var(--gold)', 
                    fontWeight: 600 
                  }}>
                    {s.number}
                  </div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--muted)', 
                    marginTop: 8,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}