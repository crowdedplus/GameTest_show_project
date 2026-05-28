import React, { useState } from 'react';
import { teamMembers } from '../data/teamData';
import PaperModal from './PaperModal';

function MemberCard({ member }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const initials = member.nameEn
    .split(' ')
    .map((s) => s[0])
    .join('');
  const hasHighlights = member.highlights && member.highlights.length > 0;

  return (
    <div className="member-card reveal" style={{ '--card-accent': member.color }}>
      <div className="member-top">
        <div
          className="member-avatar"
          style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}DD)` }}
        >
          {initials}
        </div>
        <div className="member-info">
          <h3>{member.name}</h3>
          <div className="member-role">{member.role}</div>
        </div>
      </div>
      <p className="member-desc">{member.description}</p>
      <div className="member-skills">
        {member.skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>

      {hasHighlights && (
        <div className="member-highlights">
          <button
            className={`highlights-toggle${expanded ? ' active' : ''}`}
            onClick={() => setExpanded(!expanded)}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            研究成果
            <span className="highlights-count">{member.highlights.length}</span>
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              className={`chevron${expanded ? ' rotated' : ''}`}
              style={{ marginLeft: 'auto', transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : '' }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {expanded && (
            <ul className="highlights-list">
              {member.highlights.map((item, i) => (
                <li
                  key={i}
                  className="highlights-item"
                  onClick={() => setSelectedPaper(item)}
                >
                  <span className="highlight-type">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </span>
                  <div className="highlight-body">
                    <span className="highlight-title">{item.title}</span>
                    <span className="highlight-venue">{item.venue} · {item.year}</span>
                  </div>
                  {item.podcast && item.podcast.audioUrl && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: 'var(--primary-light)', marginTop: 2 }}>
                      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/>
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {member.profileUrl && (
        <a
          href={member.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="member-link"
        >
          个人主页
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10"/>
          </svg>
        </a>
      )}

      {selectedPaper && (
        <PaperModal paper={selectedPaper} onClose={() => setSelectedPaper(null)} />
      )}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="team-header reveal">
          <div className="section-label">Our Team</div>
          <h2 className="section-heading">团队成员</h2>
          <p className="section-subheading">
            一群热爱技术、敢于挑战的软件工程研究者，共同打造业界领先的游戏自动化测试方案。
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
