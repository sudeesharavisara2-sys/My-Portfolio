import React from 'react';

export default function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.14em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
        {label}
      </div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '1rem' }}>
        {title}
      </h2>
      <div style={{ width: 50, height: 2, background: 'var(--gold)' }} />
    </div>
  );
}
