import React from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

export default function Experience({ data }) {
  return (
    <section id="experience" style={{ padding: '6rem 2rem', background: 'var(--navy)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <SectionHeader label="Background" title="Experience & Education" />
        </FadeIn>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{ position: 'absolute', left: 0, top: 6, bottom: 0, width: 1, background: 'var(--border)' }} />
          {(data?.experience || []).map((item, i) => (
            <FadeIn key={i} delay={i * 120} from="left">
              <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                <div style={{
                  position: 'absolute', left: '-2.38rem', top: 6,
                  width: 10, height: 10, borderRadius: '50%',
                  background: 'var(--gold)', border: '2px solid var(--navy)',
                  transition: 'transform 0.3s',
                }} />
                <div style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--gold)', fontWeight: 500, marginBottom: 4 }}>{item.period}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 500, marginBottom: 2 }}>{item.role}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '0.6rem' }}>{item.org}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.65 }}>{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
