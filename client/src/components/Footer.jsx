import React from 'react';

export default function Footer({ data }) {
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid var(--border)', padding: '2.5rem 2rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Email', href: `mailto:${data?.email || 'sudeesha@email.com'}` },
            { label: 'GitHub', href: data?.github || '#' },
            { label: 'LinkedIn', href: data?.linkedin || '#' },
            { label: 'Resume (PDF)', href: '#' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              style={{ color: 'var(--muted)', fontSize: '0.88rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
              {label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
          © 2025 {data?.name || 'Sudeesha Ravisara'} · Built with React & Node.js
        </p>
      </div>
    </footer>
  );
}
