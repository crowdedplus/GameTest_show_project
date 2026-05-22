import React from 'react';
import { projectData } from '../data/teamData';

export default function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="container reveal">
        <div className="section-label">Contact</div>
        <h2 className="section-heading">联系我们</h2>
        <p className="section-subheading">
          如有任何疑问或合作意向，欢迎通过以下方式联系我们
        </p>

        <div className="contact-links">
          <a
            href={projectData.links.segGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            访问 SEG 研究组
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
          <a
            href={projectData.links.landingPage}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            查看项目主页
          </a>
        </div>
      </div>
    </section>
  );
}
