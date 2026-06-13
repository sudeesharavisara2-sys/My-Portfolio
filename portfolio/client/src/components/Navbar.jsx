import React, { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar({ setIsPointerHovering }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'var(--navy2)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
      transition: 'all 0.3s ease-in-out',
    }}>
      <div style={{ 
        maxWidth: 1100, 
        margin: '0 auto', 
        padding: '0 2rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end', // Aligns the entire menu container to the right side
        height: 70 
      }}>
        
        {/* Navigation Links List */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
          
          {/* Home Link - Placed inside the list so it aligns perfectly next to 'About' */}
          <li>
            <a 
              href="#hero" 
              style={{
                color: 'var(--muted)',
                fontSize: '0.85rem',
                fontWeight: '500',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'none'
              }}
              onMouseEnter={e => {
                e.target.style.color = 'var(--gold)';
                if (setIsPointerHovering) setIsPointerHovering(true);
              }}
              onMouseLeave={e => {
                e.target.style.color = 'var(--muted)';
                if (setIsPointerHovering) setIsPointerHovering(false);
              }}
            >
              Home
            </a>
          </li>

          {/* Dynamic Section Links */}
          {links.map(l => (
            <li key={l}>
              <a 
                href={`#${l.toLowerCase()}`} 
                style={{ 
                  color: 'var(--muted)', 
                  fontSize: '0.85rem', 
                  fontWeight: '500',
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'none'
                }}
                onMouseEnter={e => {
                  e.target.style.color = 'var(--gold)';
                  if(setIsPointerHovering) setIsPointerHovering(true);
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'var(--muted)';
                  if(setIsPointerHovering) setIsPointerHovering(false);
                }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}