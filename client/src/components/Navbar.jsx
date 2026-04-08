import React, { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: 60 }}>
        
        {/* 'SR' කොටස සම්පූර්ණයෙන්ම ඉවත් කර ඇත. 
            එම නිසා links ටික දකුණු පැත්තට (flex-end) පෙළගස්වා ඇත. */}

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