// src/components/Projects.jsx
// Replace this entire file. Keep your existing Projects.css.
//
// Each screenshot displays for 2 seconds.
// After the last screenshot, the next project starts.
// After the last project, the slideshow returns to the first.
// Pause stops autoplay. Hidden tabs and reduced-motion settings also stop it.
// Only clicking a project thumbnail triggers scrolling.

import React, { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn';
import '../styles/Projects.css';

import {
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaExternalLinkAlt,
  FaFigma,
  FaGithub,
  FaImage,
  FaPause,
  FaPlay,
} from 'react-icons/fa';

const SCREENSHOT_DURATION = 2000;

const projectData = [
  {
    id: 'nexaerp',
    number: '01',
    name: 'NexaERP',
    category: 'Enterprise Resource Planning',
    date: 'Jul 2026',
    type: 'Development',
    thumbnail: '/projects/NexaERP.png',
    description:
      'Contributed to an 11-module ERP system, developing business functionality using Java, Spring Boot, React, and PostgreSQL.',
    highlights: [
      'Developed the HR & Payroll module, covering employee, leave, salary, and payroll management.',
      'Implemented RESTful APIs, validation, database operations, JWT authentication, and role-based access control.',
      'Collaborated on module integration, database migrations, debugging, and Git-based development.',
    ],
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
      '/projects/NexaERP.png',
      '/projects/nexaerp1.png',
      '/projects/nexaerp2.png',
      '/projects/nexaerp3.png',
      '/projects/nexaerp4.png',
    ],
  },
  {
    id: 'agroo',
    number: '02',
    name: 'Agroo',
    category: 'Agricultural Marketplace',
    date: 'Aug 2026',
    type: 'Development',
    thumbnail: '/projects/Agroo_thumbnail.jpg',
    description:
      'Developed a full-stack agricultural marketplace platform using Spring Boot, React, TypeScript, and PostgreSQL.',
    highlights: [
      'Implemented RESTful APIs, JWT authentication, email OTP verification, and role-based access control.',
      'Integrated real-time group messaging using WebSocket and an AI chatbot using the OpenAI API.',
      'Implemented real-time weather information, market prices, alerts, product management, and administrative features.',
      'Configured Azure PostgreSQL integration with environment-based database credentials.',
    ],
    tags: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'JWT',
      'WebSocket',
      'OpenAI API',
    ],
    github:
      'https://github.com/sudeesharavisara2-sys/AgrooWebApp-backend.git',
    liveDemo: 'https://agroo-web-app-frontend.vercel.app/',
    images: [
      '/projects/Agroo_thumbnail.jpg',
      '/projects/agroo1.png',
      '/projects/agroo2.png',
      '/projects/agroo3.png',
      '/projects/agroo4.png',
      '/projects/agroo5.png',
      '/projects/agroo6.png',
      '/projects/agroo7.png',
      '/projects/agroo8.png',
      '/projects/agroo9.png',
      '/projects/agroo10.png',
      '/projects/agroo11.png',
      '/projects/agroo12.png',
      '/projects/agroo13.png',
      '/projects/agroo14.png',
      '/projects/agroo15.png',
      '/projects/agroo16.png',
      '/projects/agroo17.png',
      '/projects/agroo18.png',
    ],
  },
  {
    id: 'fivesamath',
    number: '03',
    name: 'FiveSamath',
    category: 'Grade 5 Scholarship Learning',
    date: 'Jun 2026',
    status: 'In Development',
    type: 'Development',
    thumbnail: '/projects/FiveSamath.png',
    description:
      'Developing a full-stack learning platform for Sri Lankan Grade 5 Scholarship students using ASP.NET Core, React, TypeScript, and SQL Server.',
    highlights: [
      'Implemented JWT authentication, email OTP verification, protected routes, and role-based access for students, parents, and administrators.',
      'Developed quizzes, mock exams, progress tracking, gamification features, multilingual support, and RESTful API integration.',
    ],
    tags: [
      'ASP.NET Core',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'SQL Server',
      'JWT',
    ],
    github:
      'https://github.com/sudeesharavisara2-sys/FiveSamath.API-Frontend.git',
    liveDemo:
      'https://fivesamath-api-frontend.sudeesharavisara2.workers.dev/',
    images: [
      '/projects/FiveSamath.png',
      '/projects/FiveSamath1.png',
      '/projects/FiveSamath2.png',
      '/projects/FiveSamath3.png',
      '/projects/FiveSamath4.png',
      '/projects/FiveSamath5.png',
      '/projects/FiveSamath6.png',
      '/projects/FiveSamath7.png',
      '/projects/FiveSamath8.png',
      '/projects/FiveSamath9.png',
      '/projects/FiveSamath10.png',
      '/projects/FiveSamath11.png',
      '/projects/FiveSamath12.png',
      '/projects/FiveSamath13.png',
      '/projects/FiveSamath14.png',
    ],
  },
  {
    id: 'nextstep',
    number: '04',
    name: 'NextStep',
    category: 'University Management',
    date: 'Jan 2026',
    type: 'Development',
    thumbnail: '/projects/NextStep.png',
    description:
      'Developed a full-stack university platform for logistics, shuttle tracking, and resource management.',
    highlights: [
      'Built RESTful APIs and integrated a MySQL relational database with the React frontend.',
      'Implemented backend services, relational data management, and frontend-backend integration.',
      'Applied software architecture and Git-based collaborative development practices.',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
    github: 'https://github.com/sudeesharavisara2-sys/NextStep.git',
    images: [
      '/projects/NextStep.png',
      '/projects/nextstep1.png',
      '/projects/nextstep2.png',
      '/projects/nextstep3.png',
      '/projects/nextstep4.png',
    ],
  },
  {
    id: 'nsbmdays',
    number: '05',
    name: 'NSBMDAYS',
    category: 'University Digital Platform',
    date: 'Oct 2025',
    type: 'UI/UX Design',
    thumbnail: '/projects/HCI.png',
    description:
      'Designed a university digital platform prototype integrating academic and student services using Figma.',
    highlights: [
      'Applied HCI principles to design user flows, information architecture, navigation, and accessible interfaces.',
      'Conducted usability-focused design and iterated interfaces based on user needs and feedback.',
    ],
    tags: [
      'Figma',
      'HCI',
      'UI/UX',
      'Prototyping',
      'Wireframing',
      'Usability',
    ],
    figma:
      'https://www.figma.com/design/2jPpx0t81FkPxJIXhMVcUJ/NSBMDAYS-UI?node-id=1-3&p=f',
    images: [
      '/projects/HCI.png',
      '/projects/HCI1.jpg',
      '/projects/HCI2.jpg',
      '/projects/HCI3.jpg',
      '/projects/HCI4.jpg',
    ],
  },
  {
    id: 'hirepath',
    number: '06',
    name: 'HirePath AI',
    category: 'Recruitment & Talent Management',
    date: 'Jul 2026',
    type: 'Development',
    thumbnail: '/projects/HireParth.png',
    description:
      'Contributed to a recruitment platform for managing candidates, skills, experience, resumes, and job searches.',
    highlights: [
      'Developed RESTful APIs and application functionality using ASP.NET Core 8, Entity Framework Core, and SQL Server.',
      'Implemented API integration, validation, error handling, debugging, and workflow testing.',
      'Applied layered architecture, Repository/Service patterns, JWT authentication, and Git.',
    ],
    tags: [
      'ASP.NET Core',
      'React',
      'SQL Server',
      'Entity Framework Core',
      'JWT',
      'REST APIs',
    ],
    github: 'https://github.com/sudeesharavisara2-sys/HirePath.git',
    images: [
      '/projects/HireParth.png',
      '/projects/hirepath1.png',
      '/projects/hirepath2.png',
      '/projects/hirepath3.png',
    ],
  },
  {
    id: 'sparehublk',
    number: '07',
    name: 'SpareHubLK',
    category: 'Automotive Parts E-Commerce',
    date: 'Oct 2025',
    type: 'Development',
    thumbnail: '/projects/SpareHub.png',
    description:
      'Developed a web-based automotive parts e-commerce application using PHP, MySQL, HTML, and CSS.',
    highlights: [
      'Implemented product management, user management, search functionality, and CRUD operations.',
      'Designed relational database operations and optimized queries for efficient data retrieval.',
    ],
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'CRUD', 'E-Commerce'],
    github:
      'https://github.com/sudeesharavisara2-sys/sparehublk.com.git',
    images: [
      '/projects/SpareHub.png',
      '/projects/sparehub1.png',
      '/projects/sparehub2.png',
      '/projects/sparehub3.png',
    ],
  },
  {
    id: 'carpricelk',
    number: '08',
    name: 'CarPriceLK',
    category: 'Vehicle Price Prediction',
    date: 'Jun 2026',
    type: 'Development',
    thumbnail: '/projects/CarPrice.jpg',
    description:
      'Developed a vehicle price prediction system using Python, Flask, MySQL, and machine learning.',
    highlights: [
      'Built web scraping and data preprocessing pipelines to collect, clean, and normalize Sri Lankan vehicle listings.',
      'Trained a Random Forest regression model to predict vehicle prices and generate market price ranges.',
      'Developed a Flask REST API and web dashboard with vehicle suggestions, price predictions, and market verdicts.',
    ],
    tags: [
      'Python',
      'Flask',
      'MySQL',
      'HTML',
      'CSS',
      'Random Forest',
      'Web Scraping',
    ],
    github: 'https://github.com/sudeesharavisara2-sys/CarPriceLK.git',
    images: [
      '/projects/CarPrice.jpg',
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
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener('change', update);

    return () => query.removeEventListener('change', update);
  }, []);

  return reducedMotion;
}

function usePageVisible() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const update = () => {
      setVisible(document.visibilityState === 'visible');
    };

    update();
    document.addEventListener('visibilitychange', update);

    return () => {
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return visible;
}

function ProjectThumbnail({ project, selected }) {
  const [failedSources, setFailedSources] = useState([]);

  const candidates = [
    project.thumbnail,
    project.images[0],
  ].filter(Boolean);

  const imageSource = candidates.find(
    (source) => !failedSources.includes(source)
  );

  const Icon = project.type === 'UI/UX Design' ? FaFigma : FaCode;

  return (
    <span className="project-selector-thumbnail" aria-hidden="true">
      {imageSource ? (
        <img
          key={imageSource}
          className="project-selector-image"
          src={imageSource}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            objectPosition: project.thumbnailPosition || 'center',
          }}
          onError={() => {
            setFailedSources((current) =>
              current.includes(imageSource)
                ? current
                : [...current, imageSource]
            );
          }}
        />
      ) : (
        <span className="project-thumbnail-fallback">
          <Icon />
          <span>{project.name}</span>
        </span>
      )}

      <span className="project-selector-number">
        {project.number}
      </span>

      {selected && (
        <span className="project-thumbnail-active">
          Selected
        </span>
      )}
    </span>
  );
}

function ProjectCover({ project }) {
  const Icon = project.type === 'UI/UX Design' ? FaFigma : FaCode;

  return (
    <div className="project-cover">
      <span className="project-cover-icon" aria-hidden="true">
        <Icon />
      </span>

      <span className="project-cover-name">{project.name}</span>
      <span className="project-cover-category">{project.category}</span>
      <span className="project-cover-type">{project.type}</span>
    </div>
  );
}

function ProjectScreenshot({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
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

// The parent controls the current screenshot.
// This component does not run a separate timer.
function ProjectGallery({ project, imageIndex, onSelectImage }) {
  const images = project.images;
  const hasImages = images.length > 0;

  return (
    <div className="project-gallery">
      <div className="project-browser">
        <div className="project-browser-bar">
          <span className="project-browser-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>

          <span className="project-browser-title">{project.name}</span>

          <span className="project-browser-badge">
            {hasImages ? 'PREVIEW' : 'PROJECT'}
          </span>
        </div>

        <div className="project-image-stage">
          {hasImages ? (
            <ProjectScreenshot
              key={images[imageIndex]}
              src={images[imageIndex]}
              alt={`${project.name} screenshot ${imageIndex + 1}`}
            />
          ) : (
            <ProjectCover project={project} />
          )}
        </div>
      </div>

      {hasImages && (
        <div className="project-gallery-footer">
          <span className="project-image-counter">
            Screenshot {imageIndex + 1}
            <span> / {images.length}</span>
          </span>

          <div
            className="project-image-pagination"
            role="group"
            aria-label={`${project.name} screenshots`}
          >
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`project-image-dot ${
                  index === imageIndex ? 'is-active' : ''
                }`}
                onClick={() => onSelectImage(index)}
                aria-label={`Show screenshot ${index + 1} of ${project.name}`}
                aria-pressed={index === imageIndex}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="project-preview-meta">
        <span>{project.type}</span>
        <span>{project.date}</span>
      </div>
    </div>
  );
}

// Advance through every image before moving to the next project.
// Projects without images display their cover for one interval.
function advanceSlide(current) {
  const imageCount = projectData[current.projectIndex].images.length;

  if (current.imageIndex + 1 < imageCount) {
    return {
      ...current,
      imageIndex: current.imageIndex + 1,
    };
  }

  return {
    projectIndex: (current.projectIndex + 1) % projectData.length,
    imageIndex: 0,
  };
}

export default function Projects() {
  const [slide, setSlide] = useState({
    projectIndex: 0,
    imageIndex: 0,
  });

  const [paused, setPaused] = useState(false);
  const [showcaseRequest, setShowcaseRequest] = useState(0);

  const showcaseRef = useRef(null);
  const pendingShowcaseScroll = useRef(false);

  const reducedMotion = useReducedMotion();
  const pageVisible = usePageVisible();

  const stopped = paused || reducedMotion || !pageVisible;
  const activeIndex = slide.projectIndex;
  const activeProject = projectData[activeIndex];

  // One timer controls screenshots and project changes.
  // Every screenshot, including the last, gets a two-second interval.
  // Manual navigation and Resume restart the interval.
  useEffect(() => {
    if (stopped) return undefined;

    const timer = window.setTimeout(() => {
      setSlide(advanceSlide);
    }, SCREENSHOT_DURATION);

    return () => window.clearTimeout(timer);
  }, [slide, stopped]);

  // Scroll only when a thumbnail card is clicked.
  useEffect(() => {
    if (!pendingShowcaseScroll.current) return;

    const showcase = showcaseRef.current;
    if (!showcase) return;

    pendingShowcaseScroll.current = false;

    showcase.focus({ preventScroll: true });

    showcase.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }, [activeIndex, showcaseRequest, reducedMotion]);

  // Selecting a project starts from its first screenshot.
  const selectProject = (index) => {
    pendingShowcaseScroll.current = true;

    setSlide({
      projectIndex: index,
      imageIndex: 0,
    });

    setShowcaseRequest((current) => current + 1);
  };

  const previousProject = () => {
    setSlide((current) => ({
      projectIndex:
        (current.projectIndex - 1 + projectData.length) % projectData.length,
      imageIndex: 0,
    }));
  };

  const nextProject = () => {
    setSlide((current) => ({
      projectIndex: (current.projectIndex + 1) % projectData.length,
      imageIndex: 0,
    }));
  };

  const selectImage = (index) => {
    setSlide((current) => ({
      ...current,
      imageIndex: index,
    }));
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
              Selected <span>Projects</span>
            </h2>

            <p className="projects-subtitle">
              Applications I have built and contributed to, alongside
              interface designs focused on real user needs.
            </p>
          </div>
        </FadeIn>

        <div className="projects-interactive">
          <div
            id="project-showcase"
            ref={showcaseRef}
            className="project-spotlight"
            role="region"
            aria-roledescription="carousel"
            aria-label={`Project showcase: ${activeProject.name}`}
            tabIndex={-1}
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
              key={activeProject.id}
              className="project-spotlight-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${projectData.length}: ${
                activeProject.name
              }`}
            >
              <div className="project-preview-column">
                <ProjectGallery
                  project={activeProject}
                  imageIndex={slide.imageIndex}
                  onSelectImage={selectImage}
                />
              </div>

              <div className="project-details">
                <div className="project-detail-heading">
                  <p className="project-category">
                    {activeProject.category}
                  </p>

                  {activeProject.status && (
                    <span className="project-status">
                      {activeProject.status}
                    </span>
                  )}
                </div>

                <h3 className="project-name">
                  {activeProject.name}
                </h3>

                <p className="project-description">
                  {activeProject.description}
                </p>

                <ul className="project-highlights">
                  {activeProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-stack">
                  <p className="project-stack-label">
                    {activeProject.type === 'UI/UX Design'
                      ? 'TOOLS & METHODS'
                      : 'TECHNOLOGIES'}
                  </p>

                  <ul className="project-tags">
                    {activeProject.tags.map((tag) => (
                      <li className="project-tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {(activeProject.liveDemo ||
                  activeProject.github ||
                  activeProject.figma) && (
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

                    {activeProject.figma && (
                      <a
                        className="project-link project-link-primary"
                        href={activeProject.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${activeProject.name} in Figma in a new tab`}
                      >
                        <FaFigma aria-hidden="true" />
                        <span>View Figma</span>
                        <FaExternalLinkAlt aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="project-spotlight-footer">
              <div className="project-position" aria-hidden="true">
                {projectData.map((project, index) => (
                  <span
                    key={project.id}
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
                        ? 'Enable automatic slideshows'
                        : 'Pause automatic slideshows'
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
                key={project.id}
                type="button"
                className={`project-selector-button ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                onClick={() => selectProject(index)}
                aria-label={`Show ${project.name} in the project showcase`}
                aria-controls="project-showcase"
                aria-pressed={index === activeIndex}
              >
                <ProjectThumbnail
                  key={`${project.id}-${project.thumbnail}-${project.images[0]}`}
                  project={project}
                  selected={index === activeIndex}
                />

                <span className="project-selector-info">
                  <span className="project-selector-text">
                    <span className="project-selector-name">
                      {project.name}
                    </span>

                    <span className="project-selector-caption">
                      {project.type}
                    </span>
                  </span>

                  <span
                    className="project-selector-arrow"
                    aria-hidden="true"
                  >
                    <FaArrowRight />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}