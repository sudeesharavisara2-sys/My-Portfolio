import React from 'react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import useInView from '../hooks/useInView';

const skills = [
  {
    category: "Programming",
    items: [
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 80 },
      { name: "Python", level: 70 },
      { name: "C#", level: 65 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Spring Boot", level: 80 },
      { name: "React.js", level: 75 },
      { name: "RESTful APIs", level: 80 },
      { name: "ASP.NET Core", level: 65 },
      { name: "Node.js", level: 65 },
      { name: "HTML5 & CSS3", level: 80 },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQL Server", level: 70 },
      { name: "Git & GitHub", level: 80 },
      { name: "Postman", level: 80 },
      { name: "Swagger", level: 75 },
    ],
  },
  
];

function AnimatedBar({ level }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        width: 80,
        height: 4,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 2,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: inView ? `${level}%` : '0%',
          height: 4,
          borderRadius: 2,
          background: 'var(--gold)',
          transition: 'width 1s ease 0.2s',
        }}
      />
    </div>
  );
}

function SkillCard({ category, items, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '1.5rem',
          height: '100%',
        }}
      >
        <div
          style={{
            fontSize: '0.82rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}
        >
          {category}
        </div>

        {items.map((skill, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: '1rem',
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--gold)',
                flexShrink: 0,
              }}
            />

            <span
              style={{
                fontSize: '0.92rem',
                color: 'var(--text)',
                flex: 1,
              }}
            >
              {skill.name}
            </span>

            <AnimatedBar level={skill.level} />
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '6rem 2rem',
        background: 'var(--navy)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <FadeIn>
          <SectionHeader
            label="What I know"
            title="Skills & Technologies"
          />
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skills.map((cat, i) => (
            <SkillCard
              key={i}
              category={cat.category}
              items={cat.items}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}