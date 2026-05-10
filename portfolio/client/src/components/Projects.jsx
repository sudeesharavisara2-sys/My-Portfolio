import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

// 📸 Auto-playing Slideshow Component for project screenshots
function ProjectSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic: Automatically transitions to the next image every 3.5 seconds
  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [images]);

  // Return null if no images are provided to prevent rendering errors
  if (!images || images.length === 0) return null;

  return (
    <div style={{
      width: '100%',
      height: '380px', 
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative',
      background: '#000000', // Solid black background to blend with image edges and hide borders
      border: '1px solid var(--border)',
      boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'
    }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Screenshot ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // Ensures the full image is visible without zooming/cropping
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0, 
            transition: 'opacity 0.8s ease-in-out', 
          }}
        />
      ))}
      
      {/* 🟢 Slide Indicators (Navigation Dots) */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 10
        }}>
          {images.map((_, i) => (
            <div key={i} style={{
              width: i === currentIndex ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === currentIndex ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease'
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

// 🏢 Row Component to display individual project data and its gallery
function ProjectRow({ number, title, description, tags, github, images }) {
  return (
    <FadeIn from="bottom" delay={parseInt(number) * 100}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        gap: '4rem',
        marginBottom: '8rem',
        flexWrap: 'wrap',
      }}>
        
        {/* 📝 Left Side: Project Details and Links */}
        <div style={{ flex: '1 1 350px', maxWidth: '500px' }}>
          <div style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '3.5rem', 
            color: 'rgba(201,168,76,0.12)', 
            fontWeight: 700, 
            lineHeight: 1, 
            marginBottom: '0.5rem' 
          }}>
            {number}
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text)' }}>
            {title}
          </h3>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--muted)', 
            marginBottom: '1.5rem', 
            lineHeight: 1.8 
          }}>
            {description}
          </p>
          
          {/* Tech Stack Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: '2rem' }}>
            {tags.map((t, i) => (
              <span key={i} style={{
                fontSize: '0.75rem', fontWeight: 500,
                background: 'rgba(201,168,76,0.08)', color: 'var(--gold)',
                border: '1px solid rgba(201,168,76,0.25)', padding: '5px 12px', borderRadius: '4px',
              }}>{t}</span>
            ))}
          </div>

          {/* GitHub Repository Link */}
          {github && (
            <a href={github} target="_blank" rel="noreferrer"
              style={{ fontSize: '0.9rem', color: 'var(--gold)', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontWeight: 600 }}>
              ↗ View on GitHub
            </a>
          )}
        </div>

        {/* 📸 Right Side: Automated Slideshow Gallery */}
        <div style={{ flex: '1.2 1 400px', maxWidth: '600px' }}>
          <ProjectSlideshow images={images} />
        </div>

      </div>
    </FadeIn>
  );
}

// 🚀 Main Projects Section Component
export default function Projects() {
  const projectData = [
    {
      number: "01",
      title: "NextStep - University Management",
      description: "A comprehensive student service platform developed for NSBM. It features a React-based frontend and Spring Boot backend, facilitating shuttle tracking, room bookings, and resource management.",
      tags: ["React", "Spring Boot", "MySQL", "State Management"],
      github: "https://github.com/sudeesharavisara2-sys/nextstep-frontend",
      images: [
        "/projects/nextstep1.png",
        "/projects/nextstep2.png",
        "/projects/nextstep3.png",
        "/projects/nextstep4.png"
      ]
    },
    {
      number: "02",
      title: "SpareHubLK - Vehicle Parts E-Commerce",
      description: "A specialized e-commerce platform developed using PHP to bridge the gap between vehicle part suppliers and owners. Features a custom-built database schema to manage diverse inventory.",
      tags: ["PHP", "MySQL", "JavaScript", "E-Commerce"],
      github: "https://github.com/sudeesharavisara2-sys/sparehublk",
      images: [
        "/projects/sparehub1.png",
        "/projects/sparehub2.png",
        "/projects/sparehub3.png"
      ]
    },
    {
      number: "03",
      title: "Student Hub Portal",
      description: "An interactive web portal designed to centralize student activities and information. Built with a focus on responsive design and seamless navigation.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/sudeesharavisara2-sys/nsbm_student_hub",
      images: [
        "/projects/studenthub1.png",
        "/projects/studenthub2.png"
      ]
    },
    {
      number: "04",
      title: "University Management Module",
      description: "A backend-focused project dealing with academic data structures and university workflow automation. Highlights experience in structuring relational databases.",
      tags: ["Java", "SQL", "Database Design", "Backend Development"],
      github: "https://github.com/sudeesharavisara2-sys/university",
      images: [
        "/projects/university1.png",
        "/projects/university2.png",
        "/projects/university3.png",
        "/projects/university4.png"
      ]
    }
  ];

  return (
    <section id="projects" style={{ padding: '10rem 2rem', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: 1150, margin: '0 auto' }}>
        <FadeIn>
          <SectionHeader label="Portfolio" title="Featured Projects" />
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