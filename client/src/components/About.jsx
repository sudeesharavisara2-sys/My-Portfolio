import React from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

export default function About({ data }) {
 

  const customStats = [
    { number: "2nd", label: "Year Undergraduate" },
    { number: "3+", label: "Full-stack projects" },
    { number: "1+", label: "Year work experience" },
    { number: "10+", label: "Technologies learned" }
  ];

  return (
    <section id="about" style={{ padding: '6rem 2rem', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
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

          {/* Right Column: New Stats Grid (Replacing SR Box) */}
          <FadeIn delay={150} from="right">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1.5rem' 
            }}>
              {customStats.map((s, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: 'var(--card)', 
                    border: '1px solid var(--border)', 
                    borderRadius: 16, 
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontSize: '2.2rem', 
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