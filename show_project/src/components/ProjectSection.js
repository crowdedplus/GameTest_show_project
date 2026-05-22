import React from 'react';
import { projectData } from '../data/teamData';

const featureIcons = {
  control: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  layout: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  capture: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  calibrate: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
};

export default function ProjectSection() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <div className="section-label">Projects</div>
          <h2 className="section-heading">核心项目</h2>
          <p className="section-subheading">
            探索非侵入式移动游戏自动化测试的技术前沿
          </p>
        </div>

        <div className="project-main reveal">
          <div className="project-main-badge">CORE PROJECT</div>
          <h3 className="project-main-title">{projectData.name}</h3>
          <p className="project-main-desc">{projectData.description}</p>
          <div className="project-meta">
            <div className="project-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              </svg>
              {projectData.organization}
            </div>
            <div className="project-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
              联合 {projectData.partner}
            </div>
          </div>
          <div className="project-main-actions">
            <a href={projectData.links.landingPage} target="_blank" rel="noopener noreferrer" className="btn-project primary">
              项目主页
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
            <a href="#demos" className="btn-project">
              查看演示
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </a>
            <a href={projectData.links.segGroup} target="_blank" rel="noopener noreferrer" className="btn-project">
              SEG 研究组
            </a>
          </div>
        </div>

        <div className="feature-grid">
          {projectData.features.map((feature, index) => (
            <div className="feature-card reveal" key={index}>
              <div className="feature-icon">
                {featureIcons[feature.icon]}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
