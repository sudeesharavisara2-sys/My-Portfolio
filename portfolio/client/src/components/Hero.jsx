import React, { useEffect, useState } from 'react';

import useTypewriter from '../hooks/useTypewriter';
import FadeIn from './FadeIn';

import '../styles/Hero.css';

const roles = [
  'Software Engineering Undergrad',
  'React & Spring Boot Dev',
  'REST API Builder',
];

export default function Hero({ data }) {
  const typed = useTypewriter(roles, 80, 2000);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, []);

  const badgeText =
    data?.title ||
    'Third-year Software Engineering Undergraduate';

  return (
    <section id="hero" className="hero-section">
      {/* Transparent decorations let the wireframe show. */}
      <div className="hero-glow" aria-hidden="true" />

      <div
        className="hero-watermark"
        aria-hidden="true"
      >
        PORTFOLIO
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <FadeIn delay={0}>
              <span className="hero-badge">
                {badgeText}
              </span>
            </FadeIn>

            <FadeIn delay={120}>
              <h1 className="hero-name">
                Sudeesha
                <br />

                <span className="hero-name-accent">
                  Ravisara
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={220}>
              <div className="hero-typewriter">
                <span>{typed}</span>

                <span
                  className="hero-cursor"
                  aria-hidden="true"
                />
              </div>
            </FadeIn>

            <FadeIn delay={340}>
              <p className="hero-description">
                Software Engineering undergraduate at NSBM
                Green University, passionate about building
                real-world solutions through clean,
                purposeful code.
              </p>
            </FadeIn>

            <FadeIn delay={440}>
              <div className="hero-actions">
                <a
                  href="#projects"
                  className="hero-btn-primary"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="hero-btn-secondary"
                >
                  Get in Touch
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={500}
            from={isMobile ? 'bottom' : 'right'}
          >
            <div className="hero-image-wrap">
              <div
                className="hero-image-frame"
                aria-hidden="true"
              />

              <div className="hero-image-box">
                <img
                  src="/profile.PNG"
                  alt="Sudeesha Ravisara"
                  className="hero-image"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div
        className="hero-scroll-indicator"
        aria-hidden="true"
      >
        <span className="hero-scroll-label">
          Scroll Down
        </span>

        <div className="hero-scroll-track">
          <div className="hero-scroll-progress" />
        </div>
      </div>
    </section>
  );
}