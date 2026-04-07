import React from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

export default function About({ data }) {
  const initials = data?.name ? data.name.split(' ').map(w => w[0]).join('') : 'Sudeesha';

  return (
    <section id="about" style={{ padding: '6rem 2rem', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
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
                Strong analytical thinking and debugging skills, with practical data-handling experience gained from a corporate environment at DAMRO Group.
              </p>
            </FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
              {(data?.stats || []).map((s, i) => (
                <FadeIn key={i} delay={300 + i * 80}>
                  <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '1.2rem 1.5rem' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'var(--gold)', fontWeight: 600 }}>{s.number}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 2 }}>{s.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn delay={150} from="right">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 280, height: 320, background: 'var(--navy3)',
                border: '2px solid var(--border)', borderRadius: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(201,168,76,0.08), transparent)' }} />
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '5rem', color: 'var(--gold)', opacity: 0.6 }}>{initials}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
