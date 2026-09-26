import React from 'react';
import FadeIn from './FadeIn';
import '../styles/Skills.css';


import {
  FaJava,
  FaPython,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa';

import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiSwagger,
  SiDotnet,
  SiTypescript,
} from 'react-icons/si';

const skillGroups = [
  {
    category: 'Programming',
    items: [
      {
        name: 'Java',
        icon: <FaJava />,
        color: '#f89820',
        glow: 'rgba(248, 152, 32, 0.35)',
      },
      {
        name: 'JavaScript',
        icon: <FaJsSquare />,
        color: '#f7df1e',
        glow: 'rgba(247, 223, 30, 0.35)',
      },
      {
        name: 'SQL',
        icon: <FaDatabase />,
        color: '#38bdf8',
        glow: 'rgba(56, 189, 248, 0.35)',
      },
      {
        name: 'Python',
        icon: <FaPython />,
        color: '#3776ab',
        glow: 'rgba(55, 118, 171, 0.35)',
      },
      {
        name: 'C#',
        icon: <SiDotnet />,
        color: '#8b5cf6',
        glow: 'rgba(139, 92, 246, 0.35)',
      },
      {
        name: 'PHP',
        icon: <FaPhp />,
        color: '#777bb4',
        glow: 'rgba(119, 123, 180, 0.35)',
      },
    ],
  },

  {
    category: 'Development',
    items: [
      {
        name: 'Spring Boot',
        icon: <SiSpringboot />,
        color: '#6db33f',
        glow: 'rgba(109, 179, 63, 0.35)',
      },
      {
        name: 'React.js',
        icon: <FaReact />,
        color: '#61dafb',
        glow: 'rgba(97, 218, 251, 0.35)',
      },
      {
        name: 'RESTful APIs',
        icon: <FaDatabase />,
        color: '#38bdf8',
        glow: 'rgba(56, 189, 248, 0.35)',
      },
      {
        name: 'ASP.NET Core',
        icon: <SiDotnet />,
        color: '#8b5cf6',
        glow: 'rgba(139, 92, 246, 0.35)',
      },
      {
        name: 'Node.js',
        icon: <FaNodeJs />,
        color: '#339933',
        glow: 'rgba(51, 153, 51, 0.35)',
      },
      {
        name: 'HTML5',
        icon: <FaHtml5 />,
        color: '#e34f26',
        glow: 'rgba(227, 79, 38, 0.35)',
      },
      {
        name: 'CSS3',
        icon: <FaCss3Alt />,
        color: '#1572b6',
        glow: 'rgba(21, 114, 182, 0.35)',
      },
    ],
  },

  {
    category: 'Databases',
    items: [
      {
        name: 'MySQL',
        icon: <SiMysql />,
        color: '#4479a1',
        glow: 'rgba(68, 121, 161, 0.35)',
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql />,
        color: '#4169e1',
        glow: 'rgba(65, 105, 225, 0.35)',
      },
      {
        name: 'SQL Server',
        icon: <FaDatabase />,
        color: '#cc2927',
        glow: 'rgba(204, 41, 39, 0.35)',
      },
    ],
  },

  {
    category: 'Tools',
    items: [
      {
        name: 'Git',
        icon: <FaGitAlt />,
        color: '#f05032',
        glow: 'rgba(240, 80, 50, 0.35)',
      },
      {
        name: 'GitHub',
        icon: <FaGithub />,
        color: '#ffffff',
        glow: 'rgba(255, 255, 255, 0.25)',
      },
      {
        name: 'Postman',
        icon: <SiPostman />,
        color: '#ff6c37',
        glow: 'rgba(255, 108, 55, 0.35)',
      },
      {
        name: 'Swagger',
        icon: <SiSwagger />,
        color: '#85ea2d',
        glow: 'rgba(133, 234, 45, 0.35)',
      },
    ],
  },
];

const technologyIcons = [
  {
    name: 'React',
    icon: <FaReact />,
    color: '#61dafb',
    glow: 'rgba(97, 218, 251, 0.35)',
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot />,
    color: '#6db33f',
    glow: 'rgba(109, 179, 63, 0.35)',
  },
  {
    name: 'Java',
    icon: <FaJava />,
    color: '#f89820',
    glow: 'rgba(248, 152, 32, 0.35)',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    color: '#e34f26',
    glow: 'rgba(227, 79, 38, 0.35)',
  },

  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    color: '#1572b6',
    glow: 'rgba(21, 114, 182, 0.35)',
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
    color: '#f7df1e',
    glow: 'rgba(247, 223, 30, 0.35)',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: '#3178c6',
    glow: 'rgba(49, 120, 198, 0.35)',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    color: '#339933',
    glow: 'rgba(51, 153, 51, 0.35)',
  },

  {
    name: 'Python',
    icon: <FaPython />,
    color: '#3776ab',
    glow: 'rgba(55, 118, 171, 0.35)',
  },
  {
    name: 'ASP.NET',
    icon: <SiDotnet />,
    color: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.35)',
  },
  {
    name: 'PHP',
    icon: <FaPhp />,
    color: '#777bb4',
    glow: 'rgba(119, 123, 180, 0.35)',
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    color: '#f05032',
    glow: 'rgba(240, 80, 50, 0.35)',
  },

  {
    name: 'GitHub',
    icon: <FaGithub />,
    color: '#ffffff',
    glow: 'rgba(255, 255, 255, 0.25)',
  },
  {
    name: 'MySQL',
    icon: <SiMysql />,
    color: '#4479a1',
    glow: 'rgba(68, 121, 161, 0.35)',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    color: '#4169e1',
    glow: 'rgba(65, 105, 225, 0.35)',
  },
  {
    name: 'SQL Server',
    icon: <FaDatabase />,
    color: '#cc2927',
    glow: 'rgba(204, 41, 39, 0.35)',
  },

  {
    name: 'Postman',
    icon: <SiPostman />,
    color: '#ff6c37',
    glow: 'rgba(255, 108, 55, 0.35)',
  },
  {
    name: 'Swagger',
    icon: <SiSwagger />,
    color: '#85ea2d',
    glow: 'rgba(133, 234, 45, 0.35)',
  },
];

function SkillPill({ skill }) {
  return (
    <div
      className="skill-pill"
      style={{
        '--brand-color': skill.color,
        '--brand-glow': skill.glow,
      }}
    >
      <span className="skill-pill-icon">
        {skill.icon}
      </span>

      <span className="skill-pill-text">
        {skill.name}
      </span>
    </div>
  );
}

function SkillGroup({ group, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="skill-group">
        <div className="skill-group-title">
          <span className="skill-group-line" />
          <span>{group.category}</span>
        </div>

        <div className="skill-pill-wrapper">
          {group.items.map((skill) => (
            <SkillPill
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function TechnologyCard({ tech, index }) {
  return (
    <FadeIn delay={index * 45}>
      <div
        className="technology-card"
        style={{
          '--brand-color': tech.color,
          '--brand-glow': tech.glow,
        }}
      >
        <div className="technology-icon">
          {tech.icon}
        </div>

        <div className="technology-tooltip">
          {tech.name}
        </div>
      </div>
    </FadeIn>
  );
}

function WireframeShape() {
  return (
    <div
      className="wireframe-wrapper"
      aria-hidden="true"
    >
      <div className="wireframe-glow" />

      <div className="wireframe-ring wireframe-ring-1" />
      <div className="wireframe-ring wireframe-ring-2" />
      <div className="wireframe-ring wireframe-ring-3" />
      <div className="wireframe-ring wireframe-ring-4" />
      <div className="wireframe-ring wireframe-ring-5" />
      <div className="wireframe-ring wireframe-ring-6" />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="skills-stars" />
      <div className="skills-floor-grid" />

      <div className="skills-background-glow skills-background-glow-1" />
      <div className="skills-background-glow skills-background-glow-2" />

      <div className="skills-container">
        <FadeIn>
          <div className="skills-heading">
            <p className="skills-eyebrow">
              TECHNICAL SKILLS
            </p>

            <h2 className="skills-title">
              Skills &amp; <span>Technologies</span>
            </h2>

            <p className="skills-subtitle">
              Technologies and tools I use to build full-stack
              applications, APIs, and database-driven solutions.
            </p>
          </div>
        </FadeIn>

        <div className="skills-showcase">
          <div className="skills-left-column">
            {skillGroups.map((group, index) => (
              <SkillGroup
                key={group.category}
                group={group}
                delay={index * 100}
              />
            ))}
          </div>

          <WireframeShape />

          <FadeIn delay={180}>
            <div className="skills-tech-panel">
              <div className="technology-grid">
                {technologyIcons.map((tech, index) => (
                  <TechnologyCard
                    key={tech.name}
                    tech={tech}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}