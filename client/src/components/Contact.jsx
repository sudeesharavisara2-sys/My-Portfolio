import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

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

function Input({ label, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: '1rem' }}>
      <label style={{ fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {label}
      </label>
      {props.textarea ? (
        <textarea
          {...props} textarea={undefined}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...inputStyle, borderColor: focused ? 'var(--gold)' : 'var(--border)', resize: 'none' }}
        />
      ) : (
        <input
          {...props}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...inputStyle, borderColor: focused ? 'var(--gold)' : 'var(--border)' }}
        />
      )}
    </div>
  );
}

export default function Contact({ data }) {
  // State for form fields and submission status
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // Possible values: null, 'sending', 'success', 'error'

  // Update state when input values change
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  /**
   * Handles form submission to the contact API
   */
  const handleSubmit = async () => {
    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' }); // Clear form on success
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '6rem 2rem', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader label="Get in touch" title="Let's Connect" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>
              I'm open to internship opportunities, collaborations, and interesting projects.
              Feel free to reach out — I'll get back to you as soon as I can.
            </p>
            {[
              { icon: '✉', label: 'Email', value: data?.email || 'sudeesha@email.com' },
              { icon: '📍', label: 'Location', value: data?.location || 'Colombo, Sri Lanka' },
              { icon: '🕐', label: 'Availability', value: 'Open to internships' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
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
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>Find me on</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[{ label: 'GitHub', href: data?.github || '#' }, { label: 'LinkedIn', href: data?.linkedin || '#' }].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    style={{
                      padding: '8px 16px', background: 'var(--card)', border: '1px solid var(--border)',
                      borderRadius: 6, color: 'var(--muted)', fontSize: '0.82rem', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}>
                    ↗ {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
        </div>
      </div>
    </section>
  );
}