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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXhrXMVTAFy2df7UDuDlnGe9X6F3AlWEIDaEdthA_&s=10"
  },
  {
    period: "Certification",
    role: "Certifications",
    org: "University of Moratuwa & DP Education",
    subItems: [
      {
        title: "Web Design for Beginners",
        description: "Gained a foundational understanding of front-end design, responsive layout structures, and core web architecture through practical modules and design assessments."
      },
      {
        title: "Python for Beginners",
        description: "Completed a Python programming course covering fundamentals of programming, problem solving, and scripting, strengthening the foundation for backend and data-related development work."
      }
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png"
  },
  {
    period: "2025 — Present",
    role: "BSc (Hons) in Software Engineering | Undergraduate",
    org: "NSBM Green University",
    description:
      "Second year undergraduate studying core software engineering subjects including algorithms, databases, software design, REST APIs, and full stack development. Applying academic knowledge through hands on web application projects.",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/NSBM_Green_University_seal.png"
  },
  {
    period: "2020 — 2022",
    role: "GCE Advanced Level — Mathematics Stream",
    org: "Secondary Education",
    description:
      "Studied Combined Mathematics (S), Physics (S), and ICT (C) — building strong analytical and logical thinking skills that underpin software engineering practice.",
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  
                  {/* Square Logo Container */}
                  <div style={{
                    width: 32, 
                    height: 32, 
                    flexShrink: 0,
                    borderRadius: '4px',
                    background: item.logo ? '#ffffff' : 'var(--gold)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border)'
                  }}>
                    {item.logo && (
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
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.style.background = 'var(--gold)';
                        }}
                      />
                    )}
                  </div>

                  {/* Header Text Group */}
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.2 }}>{item.role}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: 2 }}>{item.org}</div>
                  </div>

                </div>

                {/* Content Rendering Logic */}
                {item.subItems ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', paddingLeft: '0.25rem' }}>
                    {item.subItems.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 6 }}>
                          {/* Premium SVG Certificate/Document Icon */}
                          <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="var(--gold)" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            style={{ flexShrink: 0 }}
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                          <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#ffffff' }}>
                            {sub.title}
                          </div>
                        </div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.65, margin: 0, paddingLeft: '1.4rem' }}>
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.65, margin: 0 }}>
                    {item.description}
                  </p>
                )}
                
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}