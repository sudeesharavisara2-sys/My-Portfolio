import React from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

function ProjectCard({ number, title, description, tags, github }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.5)' : 'var(--border)'}`,
        borderRadius: 12, padding: '1.75rem', transition: 'border-color 0.2s, transform 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: 'rgba(201,168,76,0.15)', fontWeight: 600, lineHeight: 1, marginBottom: '0.5rem' }}>
        {number}
      </div>
      <div style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.6rem' }}>{title}</div>
      <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontWeight: 300, marginBottom: '1.2rem', lineHeight: 1.6, flexGrow: 1 }}>{description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: github ? '1rem' : 0 }}>
        {tags.map((t, i) => (
          <span key={i} style={{
            fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.06em',
            background: 'rgba(201,168,76,0.1)', color: 'var(--gold)',
            border: '1px solid rgba(201,168,76,0.25)', padding: '4px 10px', borderRadius: 4,
          }}>{t}</span>
        ))}
      </div>
      {github && (
        <a href={github} target="_blank" rel="noreferrer"
          style={{ fontSize: '0.82rem', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4, transition: 'color 0.2s', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
          ↗ View on GitHub
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const projectData = [
    {
      number: "01",
      title: "NextStep - University Management System",
      description: "A comprehensive student service platform developed for NSBM. It features a React-based frontend and Spring Boot backend, facilitating shuttle tracking, room bookings, and resource management. This project demonstrates complex state management and RESTful API integration.",
      tags: ["React", "Spring Boot", "MySQL", "State Management"],
      github: "https://github.com/sudeesharavisara2-sys/nextstep-frontend"
    },
    {
  number: "02",
  title: "SpareHubLK - Vehicle Parts E-Commerce",
  description: "A specialized e-commerce platform developed using PHP to bridge the gap between vehicle part suppliers and owners. Features a custom-built database schema to manage diverse inventory and an intuitive interface for seamless part searching and ordering.",
  tags: ["PHP", "MySQL", "JavaScript", "E-Commerce", "UI/UX"],
  github: "https://github.com/sudeesharavisara2-sys/sparehublk"
},
    {
      number: "03",
      title: "Student Hub Portal",
      description: "An interactive web portal designed to centralize student activities and information. Built with a focus on responsive design and seamless navigation, ensuring academic resources are accessible across all devices.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/sudeesharavisara2-sys/nsbm_student_hub"
    },
    {
      number: "04",
      title: "University Management Module",
      description: "A backend-focused project dealing with academic data structures and university workflow automation. This project highlights my experience in structuring relational databases and optimizing query performance.",
      tags: ["Java", "SQL", "Database Design", "Backend Development"],
      github: "https://github.com/sudeesharavisara2-sys/university"
    }
  ];

  return (
    <section id="projects" style={{ padding: '6rem 2rem', background: 'var(--navy2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <SectionHeader label="My Work" title="Featured Projects" />
        </FadeIn>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {projectData.map((p, i) => (
            <FadeIn key={i} delay={i * 130} from="bottom">
              <ProjectCard {...p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}