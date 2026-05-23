import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

export default function About({ data }) {
  // State to track if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Sets to true if screen width is 768px or less (standard tablet/mobile breakpoint)
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check screen size on initial load
    handleResize(); 
    
    // Add event listener to handle screen resizing dynamically
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const customStats = [
    { number: "2nd", label: "Year Undergraduate" },
    { number: "3+", label: "Full-stack projects" },
    { number: "1+", label: "Year work experience" },
    { number: "10+", label: "Technologies learned" }
  ];

  return (
    // Adjusted padding for mobile screens to look cleaner
    <section id="about" style={{ padding: isMobile ? '4rem 1rem' : '6rem 2rem', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        
        {/* 
          Main Layout Grid: 
          - Mobile: Stacked vertically (1 column)
          - Desktop: Side-by-side (2 columns)
        */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? '2.5rem' : '4rem', 
          alignItems: 'center' 
        }}>
          
          {/* Left Column: Text Content */}
          <div>
            <FadeIn delay={0}>
              <SectionHeader label="About Me" title={"Passionate about\nbuilding things"} />
            </FadeIn>
            <FadeIn delay={100}>
              <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontWeight: 300 }}>
                {data?.about || "Second-year Software Engineering undergraduate at NSBM Green University seeking a Full-Stack Developer Internship."}
              </p>
            </FadeIn>
            <FadeIn delay={180}>
              <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontWeight: 300 }}>
                Experienced in developing responsive web applications using Java, Spring Boot, and React with REST API integration and MySQL databases.
              </p>
            </FadeIn>
            <FadeIn delay={250}>
              <p style={{ color: 'var(--muted)', fontWeight: 300 }}>
                Strong analytical thinking and debugging skills, with practical data-handling experience gained from a corporate environment.
              </p>
            </FadeIn>
          </div>

          {/* 
            Right Column: Stats Grid
            - Changed 'from' direction to 'bottom' on mobile to prevent unwanted horizontal page stretching.
          */}
          <FadeIn delay={150} from={isMobile ? "bottom" : "right"}> 
            <div style={{ 
              display: 'grid', 
              // Cards layout: 1 column on mobile to prevent text overlapping, 2 columns on desktop
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
                    // Reduced padding for mobile so cards don't take too much vertical space
                    padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem', 
                    textAlign: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    // Slightly scaled down the font size for smaller mobile screens
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