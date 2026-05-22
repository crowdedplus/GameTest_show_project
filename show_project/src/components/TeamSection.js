import React from 'react';
import { teamMembers } from '../data/teamData';

function MemberCard({ member }) {
  const initials = member.nameEn
    .split(' ')
    .map((s) => s[0])
    .join('');

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
