import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

// Shared styles for input fields
const inputStyle = {
  background: 'rgba(15,28,46,0.6)', 
  border: '1px solid var(--border)',
  borderRadius: 6, 
  padding: '10px 14px', 
  color: 'var(--text)',
  fontFamily: "'DM Sans', sans-serif", 
  fontSize: '0.9rem',
  outline: 'none', 
  width: '100%', 
  transition: 'border-color 0.2s',
};

/**
 * Reusable Input component with focus states
 */
function Input({ label, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: '1rem' }}>
      <label style={{ fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {label}
      </label>
      {props.textarea ? (
        <textarea
          {...props}
          textarea={undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ 
            ...inputStyle, 
            borderColor: focused ? 'var(--gold)' : 'var(--border)', 
            resize: 'none' 
          }}
        />
      ) : (
        <input
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ 
            ...inputStyle, 
            borderColor: focused ? 'var(--gold)' : 'var(--border)' 
          }}
        />
      )}
    </div>
  );
}

export default function Contact({ data }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  // State to track if screen size matches mobile responsive breakpoints
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Initialize width checks on component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '290df105-3f3c-4c64-a210-db7bbc0af7b7',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ 
      padding: isMobile ? '4rem 1.5rem' : '6rem 2rem', 
      background: 'var(--navy2)' 
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Animate Header */}
        <FadeIn from="bottom">
          <SectionHeader label="Get in touch" title="Let's Connect" />
        </FadeIn>

        <div style={{ 
          display: 'grid', 
          // Drop layout grid columns into a singular stack structure automatically on mobile
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', 
          gap: isMobile ? '2.5rem' : '4rem', 
          alignItems: 'start',
          marginTop: '3rem' 
        }}>

          {/* Left Column: Contact Info - Animates from Left */}
          <FadeIn from={isMobile ? "bottom" : "left"} delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ 
                color: 'var(--muted)', 
                fontWeight: 300, 
                lineHeight: 1.7,
                textAlign: isMobile ? 'center' : 'left' 
              }}>
                I'm open to internship opportunities, collaborations, and interesting projects.
                Feel free to reach out — I'll get back to you as soon as I can.
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                alignItems: isMobile ? 'center' : 'flex-start'
              }}>
                {[
                  { icon: '✉', label: 'Email', value: data?.email || 'sudeesharavisara2@email.com' },
                  { icon: '📍', label: 'Location', value: data?.location || 'Nittambuwa, Sri Lanka' },
                  { icon: '🕐', label: 'Availability', value: 'Open to internships' },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, width: isMobile ? '100%' : 'auto', maxWidth: 320 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8, background: 'var(--card)',
                      border: '1px solid var(--border)', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: 16, flexShrink: 0,
                    }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--text)' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>Find me on</div>
                <div style={{ 
                  display: 'flex', 
                  gap: 10,
                  justifyContent: isMobile ? 'center' : 'flex-start' 
                }}>
                  {[
                    { 
                      label: 'GitHub', 
                      href: data?.github || 'https://github.com/sudeesharavisara2-sys',
                      icon: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )
                    }, 
                    { 
                      label: 'LinkedIn', 
                      href: data?.linkedin || 'https://www.linkedin.com/in/sudeesha-ravisara/',
                      icon: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )
                    }
                  ].map(({ label, href, icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '8px 16px', background: 'var(--card)', border: '1px solid var(--border)',
                        borderRadius: 6, color: 'var(--muted)', fontSize: '0.82rem', transition: 'all 0.2s', textDecoration: 'none'
                      }}
                      onMouseEnter={e => { 
                        e.currentTarget.style.borderColor = 'var(--gold)'; 
                        e.currentTarget.style.color = 'var(--gold)'; 
                      }}
                      onMouseLeave={e => { 
                        e.currentTarget.style.borderColor = 'var(--border)'; 
                        e.currentTarget.style.color = 'var(--muted)'; 
                      }}>
                      {icon} {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Contact Form - Animates from Right with slight delay */}
          <FadeIn from={isMobile ? "bottom" : "right"} delay={300}>
            <div style={{ 
              background: 'var(--card)', 
              border: '1px solid var(--border)', 
              borderRadius: 14, 
              padding: isMobile ? '1.5rem' : '2rem' 
            }}>
              {/* Stack Name and Email fields vertically on mobile screen form rows */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                gap: isMobile ? '0rem' : '1rem' 
              }}>
                <Input label="Your name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} />
                <Input label="Email address" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={handleChange} />
              </div>
              <Input label="Subject" name="subject" type="text" placeholder="Internship / Collaboration / etc." value={form.subject} onChange={handleChange} />
              <Input label="Message" name="message" textarea rows={5} placeholder={`Hi Sudeesha, I'd love to connect about...`} value={form.message} onChange={handleChange} />

              {status === 'success' && (
                <p style={{ color: '#5DCAA5', fontSize: '0.88rem', marginBottom: '0.75rem' }}>✓ Message sent! I'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p style={{ color: '#F0997B', fontSize: '0.88rem', marginBottom: '0.75rem' }}>✗ Please fill in all fields and try again.</p>
              )}

              <button onClick={handleSubmit} disabled={status === 'sending'}
                style={{
                  width: '100%', padding: 13,
                  background: status === 'success' ? '#3B6D11' : 'var(--gold)',
                  color: 'var(--navy)', border: 'none', borderRadius: 6,
                  fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 500,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer', transition: 'background 0.2s',
                }}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'center', marginTop: '0.75rem' }}>
                I typically respond within 24–48 hours.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}