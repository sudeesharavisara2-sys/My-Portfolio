import React, { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const initials = name ? name.split(' ').map(w => w[0]).join('') : 'SR';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(15,28,46,0.97)' : 'rgba(15,28,46,0.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.3s',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'var(--gold)', letterSpacing: '0.04em' }}>
          {initials}.
        </span>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={{ color: 'var(--muted)', fontSize: '0.88rem', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
