import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

// Auto-playing Slideshow Component
function ProjectSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div
      style={{
        width: '100%',
        height: '380px',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        background: '#000000',
        border: '1px solid var(--border)',
        boxShadow: '0 10px 30px -15px rgba(0,0,0,0.7)',
      }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Project screenshot ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
        />
      ))}

      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 10,
          }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === currentIndex ? '20px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background:
                  i === currentIndex
                    ? 'var(--gold)'
                    : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Project Row Component
function ProjectRow({
  number,
  title,
  description,
  tags,
  github,
  liveDemo,
  images,
}) {
  return (
    <FadeIn from="bottom" delay={parseInt(number) * 100}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4rem',
          marginBottom: '8rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Project Details */}
        <div style={{ flex: '1 1 350px', maxWidth: '500px' }}>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '3.5rem',
              color: 'var(--border)',
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: '0.5rem',
            }}
          >
            {number}
          </div>

          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--text)',
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted)',
              marginBottom: '1.5rem',
              lineHeight: 1.8,
            }}
          >
            {description}
          </p>

          {/* Tech Stack */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              marginBottom: '2rem',
            }}
          >
            {tags.map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  background: 'rgba(16, 185, 129, 0.06)',
                  color: 'var(--gold)',
                  border: '1px solid var(--border)',
                  padding: '5px 12px',
                  borderRadius: '4px',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--gold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                ↗ View on GitHub
              </a>
            )}

            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                ↗ Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Screenshots */}
        <div style={{ flex: '1.2 1 400px', maxWidth: '600px' }}>
          <ProjectSlideshow images={images} />
        </div>
      </div>
    </FadeIn>
  );
}

// Main Projects Section
export default function Projects() {
  const projectData = [
    {
      number: '01',
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
      
      github:
        'https://github.com/sudeesharavisara2-sys/Erp_Backend.git',
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
      github:
        'https://github.com/sudeesharavisara2-sys/HirePath.git',
      images: [
        '/projects/hirepath1.png',
        '/projects/hirepath2.png',
        '/projects/hirepath3.png',
        
      ],
    },

    {
      number: '03',
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
      github:
        'https://github.com/sudeesharavisara2-sys/NextStep.git',
      images: [
        '/projects/nextstep1.png',
        '/projects/nextstep2.png',
        '/projects/nextstep3.png',
        '/projects/nextstep4.png',
      ],
    },

    {
      number: '04',
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
      github:
        'https://github.com/sudeesharavisara2-sys/sparehublk.com.git',
      images: [
        '/projects/sparehub1.png',
        '/projects/sparehub2.png',
        '/projects/sparehub3.png',
      ],
    },

    {
    number: '05',
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
    github:
      'https://github.com/sudeesharavisara2-sys/CarPriceLK.git',
    images: [
      '/projects/carpricelk1.png',
      '/projects/carpricelk2.png',
      '/projects/carpricelk3.png',
      '/projects/carpricelk4.png',
    ],
  },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '10rem 2rem',
        background: 'var(--navy2)',
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: '0 auto',
        }}
      >
        <FadeIn>
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
          />
        </FadeIn>

        <div style={{ marginTop: '6rem' }}>
          {projectData.map((p, i) => (
            <ProjectRow key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}