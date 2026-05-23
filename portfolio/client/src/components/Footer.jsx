import React from 'react';

export default function Footer() {
  const resumePath = '/Sudeesha-Resume.pdf';

  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid var(--border)', padding: '2.5rem 2rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { 
              label: 'Email', 
              href: 'mailto:sudeesharavisara2@gmail.com',
              showLabel: false,
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              )
            },
            { 
              label: 'GitHub', 
              href: 'https://github.com/sudeesharavisara2-sys',
              showLabel: false,
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              )
            },
            { 
              label: 'LinkedIn', 
              href: 'https://linkedin.com/in/sudeesha-ravisara-073741274',
              showLabel: false,
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              )
            },
            { 
              label: 'Resume (PDF)', 
              href: resumePath,
              showLabel: true,
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              )
            },
          ].map(({ label, href, icon, showLabel }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={!showLabel ? label : undefined}
              style={{
                color: 'var(--muted)',
                fontSize: '0.88rem',
                transition: 'all 0.2s ease-in-out',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              {icon}
              {showLabel && <span>{label}</span>}
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '2rem' }}>
          © 2026 Sudeesha Ravisara · Built with React & CSS
        </p>
      </div>
    </footer>
  );
}