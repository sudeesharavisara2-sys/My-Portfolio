import React from 'react';
import FadeIn from './FadeIn';
import '../styles/About.css';

const stats = [
  {
    number: '3rd',
    label: 'Year Undergraduate',
    icon: 'education',
  },
  {
    number: '3+',
    label: 'Projects',
    icon: 'code',
  },
  {
    number: '1+',
    label: 'Year Work Experience',
    icon: 'work',
  },
  {
    number: '10+',
    label: 'Technologies Learned',
    icon: 'layers',
  },
];

function StatIcon({ type }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {type === 'education' && (
        <>
          <path d="m2 9 10-5 10 5-10 5-10-5Z" />
          <path d="M6 11v6c3.5 3 8.5 3 12 0v-6" />
          <path d="M22 9v7" />
        </>
      )}

      {type === 'code' && (
        <>
          <path d="m7 7-5 5 5 5" />
          <path d="m17 7 5 5-5 5" />
          <path d="m14 4-4 16" />
        </>
      )}

      {type === 'work' && (
        <>
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12a23 23 0 0 0 18 0" />
          <path d="M12 11v4" />
        </>
      )}

      {type === 'layers' && (
        <>
          <path d="m12 3 10 5-10 5L2 8l10-5Z" />
          <path d="m2 12 10 5 10-5" />
          <path d="m2 16 10 5 10-5" />
        </>
      )}
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 16v4h14v-4" />
    </svg>
  );
}

export default function About({ data }) {
  const aboutText =
    typeof data?.about === 'string' && data.about.trim()
      ? data.about
      : 'Third-Year Software Engineering undergraduate at NSBM Green University, passionate about software development, web technologies, and problem solving.';

  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-title"
    >
      <div className="about-container">
        <div className="about-layout">
          {/* INTRODUCTION */}
          <div className="about-content">
            <FadeIn delay={0}>
              <div className="about-eyebrow">
                <span
                  className="about-eyebrow-dot"
                  aria-hidden="true"
                />
                <span>About Me</span>
              </div>

              <h2
                id="about-title"
                className="about-title"
              >
                Passionate about
                <br />
                <span>building things.</span>
              </h2>
            </FadeIn>

            <div className="about-text-wrapper">
              <FadeIn delay={100}>
                <p className="about-text about-text-lead">
                  {aboutText}
                </p>
              </FadeIn>

              <FadeIn delay={180}>
                <p className="about-text">
                  Experienced in Java, Spring Boot, React,
                  ASP.NET Core, PHP, SQL, RESTful APIs, and
                  database development through academic
                  and personal projects.
                </p>
              </FadeIn>

              <FadeIn delay={250}>
                <p className="about-text">
                  A fast learner with strong analytical,
                  debugging, and teamwork skills, eager to
                  gain industry experience and contribute
                  to real-world IT projects.
                </p>
              </FadeIn>
            </div>

            {/* RESUME BUTTON */}
            <FadeIn delay={320}>
              <div className="about-actions">
                <a
                  href="/Sudeesha-Resume.pdf"
                  download="Sudeesha-Resume.pdf"
                  className="about-resume-button"
                >
                  <span className="about-resume-label">
                    Download Resume
                  </span>

                  <span className="about-resume-icon">
                    <DownloadIcon />
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* STANDALONE STAT CARDS */}
          <div className="about-stats-column">
            <FadeIn delay={160} from="right">
              <dl
                className="about-stats-grid"
                aria-label="Education and experience statistics"
              >
                {stats.map((stat, index) => (
                  <div
                    className="about-stat-card"
                    key={stat.label}
                  >
                    <div
                      className="about-stat-top"
                      aria-hidden="true"
                    >
                      <span className="about-stat-icon">
                        <StatIcon type={stat.icon} />
                      </span>

                      <span className="about-stat-index">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <dt className="about-stat-label">
                      {stat.label}
                    </dt>

                    <dd className="about-stat-number">
                      {stat.number}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}