// src/components/SoftwareTools.jsx

import React, { useState } from 'react';
import FadeIn from './FadeIn';
import '../styles/SoftwareTools.css';

import {
  FaGitAlt,
  FaGithub,
  FaPause,
  FaPlay,
} from 'react-icons/fa';

import {
  SiAndroidstudio,
  SiIntellijidea,
  SiMysql,
  SiPostman,
  SiSwagger,
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

const toolColumns = [
  [
    {
      name: 'VS Code',
      category: 'Code Editor',
      icon: VscVscode,
      color: '#007ACC',
    },
    {
      name: 'Git',
      category: 'Version Control',
      icon: FaGitAlt,
      color: '#F05032',
    },
    {
      name: 'Postman',
      category: 'API Testing',
      icon: SiPostman,
      color: '#FF6C37',
    },
    {
      name: 'Android Studio',
      category: 'Mobile Development',
      icon: SiAndroidstudio,
      color: '#3DDC84',
    },
  ],
  [
    {
      name: 'GitHub',
      category: 'Code Collaboration',
      icon: FaGithub,
      color: '#FFFFFF',
    },
    {
      name: 'IntelliJ IDEA',
      category: 'Development Environment',
      icon: SiIntellijidea,
      color: '#FFFFFF',
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon: SiMysql,
      color: '#4479A1',
    },
    {
      name: 'Swagger',
      category: 'API Documentation',
      icon: SiSwagger,
      color: '#85EA2D',
    },
  ],
];

function ToolColumn({ tools, index, paused }) {
  return (
    <div className={`software-column software-column-${index}`}>
      <div
        className="software-column-track"
        style={{
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="software-tool-list"
            aria-label={copy === 0 ? 'Development tools' : undefined}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {tools.map(({ name, category, icon: Icon, color }) => (
              <li
                key={`${copy}-${name}`}
                className="software-tool-card"
                style={{ '--tool-color': color }}
              >
                <span className="software-tool-icon" aria-hidden="true">
                  <Icon />
                </span>

                <div className="software-tool-details">
                  <span className="software-tool-name">{name}</span>
                  <span className="software-tool-category">
                    {category}
                  </span>
                </div>

                <span className="software-tool-dot" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function SoftwareTools() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="software"
      className="software-section"
      aria-labelledby="software-title"
    >
      <div className="software-container">
        <div className="software-layout">
          <FadeIn>
            <div className="software-content">
              <p className="software-eyebrow">
                <span aria-hidden="true" />
                MY TOOLKIT
              </p>

              <h2 id="software-title" className="software-title">
                Behind
                <br />
                every <span>build.</span>
              </h2>

              <p className="software-description">
                My everyday tools for writing code, testing ideas,
                and turning projects into working applications.
              </p>

              <div className="software-caption">
                <span className="software-caption-line" aria-hidden="true" />
                Software that I use
              </div>

              <button
                type="button"
                className="software-motion-button"
                onClick={() => setPaused((value) => !value)}
                aria-label={
                  paused
                    ? 'Resume software animation'
                    : 'Pause software animation'
                }
              >
                {paused ? (
                  <FaPlay aria-hidden="true" />
                ) : (
                  <FaPause aria-hidden="true" />
                )}

                <span>
                  {paused ? 'Resume animation' : 'Pause animation'}
                </span>
              </button>
            </div>
          </FadeIn>

          <div className="software-wall">
            <div className="software-wall-glow" aria-hidden="true" />

            <div className="software-wall-columns">
              {toolColumns.map((tools, index) => (
                <ToolColumn
                  key={index}
                  tools={tools}
                  index={index}
                  paused={paused}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}