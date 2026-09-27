// src/components/Projects.jsx

import React, { useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import '../styles/Projects.css';

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaImage,
  FaPause,
  FaPlay,
} from 'react-icons/fa';

const PROJECT_DURATION = 16000;
const SCREENSHOT_DURATION = 3500;

const projectData = [
  {
    number: '01',
    name: 'NexaERP',
    category: 'Enterprise Resource Planning',
    title: 'NexaERP - Enterprise Resource Planning System',
    description:
      'An 11-module enterprise resource planning system developed using React, TypeScript, Java, Spring Boot, and PostgreSQL. Contributed to backend business logic, RESTful APIs, database operations, authentication, and the HR & Payroll module.',
    tags: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'REST APIs',
      'JWT',
    ],
    github: 'https://github.com/sudeesharavisara2-sys/Erp_Backend.git',
    liveDemo: 'https://nexaerp-frontend.vercel.app/login',
    images: [
      '/projects/nexaerp1.png',
      '/projects/nexaerp2.png',
      '/projects/nexaerp3.png',
      '/projects/nexaerp4.png',
    ],
  },
  {
    number: '02',
    name: 'HirePath AI',
    category: 'Recruitment & Talent Management',
    title: 'HirePath AI - Recruitment & Talent Management Platform',
    description:
      'A recruitment and talent management platform built with ASP.NET Core 8, React, SQL Server, and Entity Framework Core. Contributed to candidate management, RESTful APIs, frontend-backend integration, authentication, debugging, and workflow testing.',
    tags: [
      'ASP.NET Core',
      'React',
      'SQL Server',
      'Entity Framework',
      'REST APIs',
      'JWT',
    ],
    github: 'https://github.com/sudeesharavisara2-sys/HirePath.git',
    images: [
      '/projects/hirepath1.png',
      '/projects/hirepath2.png',
      '/projects/hirepath3.png',
    ],
  },
  {
    number: '03',
    name: 'NextStep',
    category: 'University Management',
    title: 'NextStep - University Management Platform',
    description:
      'A full-stack university platform developed using React, Spring Boot, and MySQL to support university logistics, shuttle tracking, and resource management. Implemented RESTful APIs and integrated frontend, backend, and relational database components.',
    tags: [
      'Java',
      'Spring Boot',
      'React',
      'MySQL',
      'REST APIs',
    ],
    github: 'https://github.com/sudeesharavisara2-sys/NextStep.git',
    images: [
      '/projects/nextstep1.png',
      '/projects/nextstep2.png',
      '/projects/nextstep3.png',
      '/projects/nextstep4.png',
    ],
  },
  {
    number: '04',
    name: 'SpareHubLK',
    category: 'Automotive Parts E-Commerce',
    title: 'SpareHubLK - Automotive Parts E-Commerce',
    description:
      'A full-stack e-commerce platform for automotive parts developed using PHP, MySQL, HTML, CSS, and JavaScript. Implemented product management, user management, search functionality, database operations, and responsive interfaces.',
    tags: [
      'PHP',
      'MySQL',
      'JavaScript',
      'HTML5',
      'CSS3',
      'E-Commerce',
    ],
    github: 'https://github.com/sudeesharavisara2-sys/sparehublk.com.git',
    images: [
      '/projects/sparehub1.png',
      '/projects/sparehub2.png',
      '/projects/sparehub3.png',
    ],
  },
  {
    number: '05',
    name: 'CarPriceLK',
    category: 'Vehicle Price Prediction',
    title: 'CarPriceLK - Vehicle Price Prediction Platform',
    description:
      'A vehicle market value prediction platform built with Python. The system collects and processes vehicle listing data, trains a Random Forest regression model, and provides price predictions through RESTful APIs with a web dashboard.',
    tags: [
      'Python',
      'Flask',
      'Machine Learning',
      'MySQL',
      'REST API',
      'Web Scraping',
    ],
    github: 'https://github.com/sudeesharavisara2-sys/CarPriceLK.git',
    images: [
      '/projects/carpricelk1.png',
      '/projects/carpricelk2.png',
      '/projects/carpricelk3.png',
      '/projects/carpricelk4.png',
    ],
  },
];

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updatePreference = () => {
      setReducedMotion(query.matches);
    };

    updatePreference();
    query.addEventListener('change', updatePreference);

    return () => {
      query.removeEventListener('change', updatePreference);
    };
  }, []);

  return reducedMotion;
}

function usePageVisible() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(document.visibilityState === 'visible');
    };

    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);

    return () => {
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  return visible;
}

function ProjectScreenshot({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="project-image-fallback" role="img" aria-label={alt}>
        <FaImage aria-hidden="true" />
        <span>Preview unavailable</span>
      </div>
    );
  }

  return (
    <img
      className="project-screenshot"
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}

function ProjectGallery({ project, stopped }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (stopped || project.images.length < 2) return undefined;

    const timer = window.setTimeout(() => {
      setImageIndex((current) => (current + 1) % project.images.length);
    }, SCREENSHOT_DURATION);

    return () => window.clearTimeout(timer);
  }, [imageIndex, stopped, project.images]);

  return (
    <div className="project-gallery">
      <div className="project-browser">
        <div className="project-browser-bar">
          <span className="project-browser-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>

          <span className="project-browser-title">
            {project.name}
          </span>

          <span className="project-browser-badge">
            PREVIEW
          </span>
        </div>

        <div className="project-image-stage">
          <ProjectScreenshot
            key={project.images[imageIndex]}
            src={project.images[imageIndex]}
            alt={`${project.name} screenshot ${imageIndex + 1}`}
          />
        </div>
      </div>

      <div className="project-gallery-footer">
        <span className="project-image-counter">
          Screenshot {imageIndex + 1}
          <span> / {project.images.length}</span>
        </span>

        <div
          className="project-image-pagination"
          role="group"
          aria-label={`${project.name} screenshots`}
        >
          {project.images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`project-image-dot ${
                imageIndex === index ? 'is-active' : ''
              }`}
              onClick={() => setImageIndex(index)}
              aria-label={`Show screenshot ${index + 1} of ${project.name}`}
              aria-pressed={imageIndex === index}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);

  const reducedMotion = useReducedMotion();
  const pageVisible = usePageVisible();

  const stopped =
    paused ||
    hovered ||
    focusWithin ||
    reducedMotion ||
    !pageVisible;

  const activeProject = projectData[activeIndex];

  useEffect(() => {
    if (stopped || projectData.length < 2) return undefined;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % projectData.length);
    }, PROJECT_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeIndex, stopped]);

  const previousProject = () => {
    setActiveIndex(
      (current) => (current - 1 + projectData.length) % projectData.length
    );
  };

  const nextProject = () => {
    setActiveIndex((current) => (current + 1) % projectData.length);
  };

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="projects-ambient" aria-hidden="true" />

      <div className="projects-container">
        <FadeIn>
          <div className="projects-heading">
            <p className="projects-eyebrow">
              <span aria-hidden="true" />
              MY PORTFOLIO
            </p>

            <h2 id="projects-title" className="projects-title">
              Featured <span>Projects</span>
            </h2>

            <p className="projects-subtitle">
              A selection of applications I have built and contributed to,
              from enterprise platforms to data-driven solutions.
            </p>
          </div>
        </FadeIn>

        <div
          className="projects-interactive"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocusWithin(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setFocusWithin(false);
            }
          }}
        >
          <div
            className="project-spotlight"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured projects"
          >
            <div className="project-spotlight-header">
              <span className="project-header-label">
                <span aria-hidden="true" />
                PROJECT SHOWCASE
              </span>

              <span className="project-header-count">
                {activeProject.number}
                <span>
                  {' / '}
                  {String(projectData.length).padStart(2, '0')}
                </span>
              </span>
            </div>

            <div
              className="project-spotlight-slide"
              key={activeProject.number}
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${projectData.length}: ${
                activeProject.title
              }`}
            >
              <div className="project-preview-column">
                <ProjectGallery
                  project={activeProject}
                  stopped={stopped}
                />
              </div>

              <div className="project-details">
                <p className="project-category">
                  {activeProject.category}
                </p>

                <h3 className="project-name">
                  {activeProject.name}
                </h3>

                <p className="project-description">
                  {activeProject.description}
                </p>

                <div className="project-stack">
                  <p className="project-stack-label">
                    TECHNOLOGIES
                  </p>

                  <ul className="project-tags" aria-label="Technologies">
                    {activeProject.tags.map((tag) => (
                      <li className="project-tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  {activeProject.liveDemo && (
                    <a
                      className="project-link project-link-primary"
                      href={activeProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${activeProject.name} live demo in a new tab`}
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}

                  {activeProject.github && (
                    <a
                      className="project-link project-link-secondary"
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${activeProject.name} on GitHub in a new tab`}
                    >
                      <FaGithub aria-hidden="true" />
                      <span>View GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-spotlight-footer">
              <div className="project-position" aria-hidden="true">
                {projectData.map((project, index) => (
                  <span
                    key={project.number}
                    className={`project-position-dot ${
                      index === activeIndex ? 'is-active' : ''
                    }`}
                  />
                ))}
              </div>

              <div className="project-navigation">
                {!reducedMotion && (
                  <button
                    type="button"
                    className="project-autoplay-button"
                    onClick={() => setPaused((current) => !current)}
                    aria-label={
                      paused
                        ? 'Enable automatic project and screenshot slideshows'
                        : 'Pause automatic project and screenshot slideshows'
                    }
                    aria-pressed={paused}
                  >
                    {paused ? (
                      <FaPlay aria-hidden="true" />
                    ) : (
                      <FaPause aria-hidden="true" />
                    )}

                    <span>{paused ? 'Resume' : 'Pause'}</span>
                  </button>
                )}

                <button
                  type="button"
                  className="project-arrow-button"
                  onClick={previousProject}
                  aria-label="Show previous project"
                >
                  <FaArrowLeft aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className="project-arrow-button"
                  onClick={nextProject}
                  aria-label="Show next project"
                >
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="project-selector"
            role="group"
            aria-label="Choose a project"
          >
            {projectData.map((project, index) => (
              <button
                type="button"
                key={project.number}
                className={`project-selector-button ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.title}`}
                aria-pressed={index === activeIndex}
              >
                <span className="project-selector-number">
                  {project.number}
                </span>

                <span className="project-selector-text">
                  <span className="project-selector-name">
                    {project.name}
                  </span>

                  <span className="project-selector-caption">
                    View project
                  </span>
                </span>

                <FaArrowRight
                  className="project-selector-arrow"
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}