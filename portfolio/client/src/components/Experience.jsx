import React from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

const experience = [
  {
    period: "Mar 2024 — 2025",
    role: "Payroll Clerk",
    org: "DAMRO Group - Nittambuwa",
    description:
      "Processing employee payroll and attendance records with high data accuracy. Generating analytical reports using Excel and internal payroll systems. Assisting with recruitment, onboarding, and maintaining confidential employee records.",
    // Damro Official Logo Image Link
    logo: "data:image/png;base64,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",
  },
  {
    period: "Certification",
    role: "Python for Beginners",
    org: "University of Moratuwa & DP Education",
    description:
      "Completed a Python programming course covering fundamentals of programming, problem solving, and scripting strengthening the foundation for backend and data-related development work.",
    // University of Moratuwa Official Logo
    logo: "https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png"
  },
  {
    period: "2025 — Present",
    role: "BSc (Hons) in Software Engineering | Undergraduate",
    org: "NSBM Green University",
    description:
      "Second year undergraduate studying core software engineering subjects including algorithms, databases, software design, REST APIs, and full stack development. Applying academic knowledge through hands on web application projects.",
    // NSBM Green University Official Logo
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/NSBM_Green_University_seal.png"
  },
  {
    period: "2020 — 2022",
    role: "GCE Advanced Level — Mathematics Stream",
    org: "Secondary Education",
    description:
      "Studied Combined Mathematics (S), Physics (S), and ICT (C) — building strong analytical and logical thinking skills that underpin software engineering practice.",
    // Sanghabodhi College Nittambuwa Official Logo
    logo: "https://srisanghabodhi.lk/wp-content/uploads/2026/03/SCHOOL-LOGO-copy.png"
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 2rem', background: 'var(--navy)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <SectionHeader label="Background" title="Experience & Education" />
        </FadeIn>
        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Vertical Timeline Line */}
          <div style={{ position: 'absolute', left: 16, top: 12, bottom: 0, width: 1, background: 'var(--border)' }} />
          
          {experience.map((item, i) => (
            <FadeIn key={i} delay={i * 120} from="left">
              <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                
                {/* Timeline Dot Indicator */}
                <div style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: 6,
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  boxShadow: '0 0 0 4px var(--navy)',
                  zIndex: 2
                }} />

                <div style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--gold)', fontWeight: 500, marginBottom: 6 }}>{item.period}</div>
                
                {/* Flex container to hold the square logo and headers together */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  
                  {/* Square Logo Container */}
                  <div style={{
                    width: 32, 
                    height: 32, 
                    flexShrink: 0,
                    borderRadius: '4px', // Modern square look with slightly rounded corners
                    background: '#ffffff', // White background to keep logos distinct
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border)'
                  }}>
                    <img 
                      src={item.logo} 
                      alt={item.org} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain',
                        padding: item.org.includes("DAMRO") ? '0px' : '2px'
                      }} 
                      onError={(e) => {
                        // Fallback hidden if image fails
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.style.background = 'var(--gold)';
                      }}
                    />
                  </div>

                  {/* Header Text Group */}
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.2 }}>{item.role}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: 2 }}>{item.org}</div>
                  </div>

                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.65 }}>{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}