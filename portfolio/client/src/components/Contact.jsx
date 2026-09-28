// src/components/Contact.jsx
// Replace your existing Contact.jsx.
// Create src/styles/Contact.css using the CSS below.

import React, { useRef, useState } from 'react';
import FadeIn from './FadeIn';
import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaSpinner,
} from 'react-icons/fa';
import '../styles/Contact.css';

const EMPTY_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ACCESS_KEY = '290df105-3f3c-4c64-a210-db7bbc0af7b7';

function ContactField({
  label,
  name,
  multiline = false,
  ...props
}) {
  const id = `contact-${name}`;

  return (
    <div className="contact-field">
      <label htmlFor={id}>{label}</label>

      {multiline ? (
        <textarea id={id} name={name} required {...props} />
      ) : (
        <input id={id} name={name} required {...props} />
      )}
    </div>
  );
}

export default function Contact({ data }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const sendingRef = useRef(false);

  // Existing contact details are preserved.
  const email = data?.email || 'sudeesharavisara2@email.com';
  const location = data?.location || 'Nittambuwa, Sri Lanka';

  const github =
    data?.github || 'https://github.com/sudeesharavisara2-sys';

  const linkedin =
    data?.linkedin ||
    'https://www.linkedin.com/in/sudeesha-ravisara/';

  const sending = status === 'sending';

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status !== 'idle') {
      setStatus('idle');
      setError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sendingRef.current) return;

    const values = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [
        key,
        value.trim(),
      ])
    );

    if (Object.values(values).some((value) => !value)) {
      setError(
        'Please complete every field before sending your message.'
      );
      setStatus('error');
      return;
    }

    sendingRef.current = true;
    setStatus('sending');
    setError('');

    const controller = new AbortController();

    const timeout = window.setTimeout(
      () => controller.abort(),
      20000
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            ...values,
          }),
          signal: controller.signal,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error('Submission failed');
      }

      setForm(EMPTY_FORM);
      setStatus('success');
    } catch (submissionError) {
      setError(
        submissionError.name === 'AbortError'
          ? 'The request timed out. Delivery could not be confirmed. Please try again later or email me directly.'
          : 'Your message could not be confirmed as sent. Please check your connection and try again, or email me directly.'
      );

      setStatus('error');
    } finally {
      window.clearTimeout(timeout);
      sendingRef.current = false;
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-ambient" aria-hidden="true" />

      <div className="contact-container">
        <FadeIn>
          <header className="contact-heading">
            <p className="contact-eyebrow">
              <span aria-hidden="true" />
              GET IN TOUCH
            </p>

            <h2 id="contact-title">
              Let's build something <span>great.</span>
            </h2>

            <p className="contact-subtitle">
              Have an opportunity or an idea in mind? I'd love
              to hear from you.
            </p>
          </header>
        </FadeIn>

        <div className="contact-layout">
          <FadeIn delay={100}>
            <div className="contact-info-panel">
              <p className="contact-availability">
                <span aria-hidden="true" />
                Open to internships
              </p>

              <h3>
                A conversation is
                <br />
                a good place to start.
              </h3>

              <p className="contact-intro">
                I'm open to internship opportunities, collaborations,
                and interesting projects. Tell me what you're working
                on and how I can contribute.
              </p>

              <div className="contact-methods">
                <a
                  className="contact-method contact-method-link"
                  href={`mailto:${email}`}
                >
                  <span className="contact-method-icon">
                    <FaEnvelope aria-hidden="true" />
                  </span>

                  <span className="contact-method-text">
                    <span className="contact-method-label">
                      EMAIL ME
                    </span>

                    <span className="contact-method-value">
                      {email}
                    </span>
                  </span>

                  <FaArrowRight
                    className="contact-method-arrow"
                    aria-hidden="true"
                  />
                </a>

                <div className="contact-method">
                  <span className="contact-method-icon">
                    <FaMapMarkerAlt aria-hidden="true" />
                  </span>

                  <span className="contact-method-text">
                    <span className="contact-method-label">
                      BASED IN
                    </span>

                    <span className="contact-method-value">
                      {location}
                    </span>
                  </span>
                </div>

                <div className="contact-method">
                  <span className="contact-method-icon">
                    <FaBriefcase aria-hidden="true" />
                  </span>

                  <span className="contact-method-text">
                    <span className="contact-method-label">
                      LET'S TALK ABOUT
                    </span>

                    <span className="contact-method-value">
                      Internships &amp; collaborations
                    </span>
                  </span>
                </div>
              </div>

              <div className="contact-social-section">
                <p>Find me online</p>

                <div className="contact-social-links">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile (opens in a new tab)"
                  >
                    <FaGithub
                      className="contact-github-icon"
                      aria-hidden="true"
                    />

                    <span>GitHub</span>

                    <FaArrowRight
                      className="contact-social-arrow"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile (opens in a new tab)"
                  >
                    <FaLinkedinIn
                      className="contact-linkedin-icon"
                      aria-hidden="true"
                    />

                    <span>LinkedIn</span>

                    <FaArrowRight
                      className="contact-social-arrow"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={180}>
            <div className="contact-form-panel">
              <div className="contact-form-heading">
                <div>
                  <p className="contact-form-eyebrow">
                    START A CONVERSATION
                  </p>

                  <h3>Send a message</h3>
                </div>

                <span className="contact-form-symbol">
                  <FaPaperPlane aria-hidden="true" />
                </span>
              </div>

              <p className="contact-form-description">
                Share a few details below. All fields are required.
              </p>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <fieldset
                  disabled={sending}
                  className="contact-fields"
                  aria-label="Message details"
                >
                  <div className="contact-form-row">
                    <ContactField
                      label="Your name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      maxLength={100}
                      value={form.name}
                      onChange={handleChange}
                    />

                    <ContactField
                      label="Email address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      maxLength={254}
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <ContactField
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Internship, collaboration, or a project idea"
                    maxLength={200}
                    value={form.subject}
                    onChange={handleChange}
                  />

                  <ContactField
                    label="Your message"
                    name="message"
                    multiline
                    rows={6}
                    placeholder="Hi Sudeesha, I'd like to connect about…"
                    maxLength={5000}
                    value={form.message}
                    onChange={handleChange}
                  />
                </fieldset>

                <div
                  className="contact-feedback"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {status === 'success' && (
                    <p className="contact-notice contact-notice-success">
                      <FaCheckCircle aria-hidden="true" />

                      <span>
                        Message sent! Thanks for reaching out.
                        I'll get back to you soon.
                      </span>
                    </p>
                  )}

                  {status === 'error' && (
                    <p className="contact-notice contact-notice-error">
                      <FaExclamationCircle aria-hidden="true" />
                      <span>{error}</span>
                    </p>
                  )}
                </div>

                <button
                  className="contact-submit"
                  type="submit"
                  disabled={sending}
                >
                  <span>
                    {sending ? 'Sending message…' : 'Send message'}
                  </span>

                  {sending ? (
                    <FaSpinner
                      className="contact-spinner"
                      aria-hidden="true"
                    />
                  ) : (
                    <FaArrowRight aria-hidden="true" />
                  )}
                </button>

                <p className="contact-response-note">
                  I typically respond within 24–48 hours.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}