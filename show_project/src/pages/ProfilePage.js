import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { profileData } from '../data/profileData';

export default function ProfilePage() {
  const { id } = useParams();
  const profile = profileData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!profile) {
    return (
      <div className="profile-not-found">
        <h2>未找到该成员信息</h2>
        <Link to="/" className="btn btn-primary">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="profile-page">
      {/* Header */}
      <section className="profile-hero">
        <Link to="/" className="profile-back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          返回团队主页
        </Link>

        <div className="profile-hero-content">
          <div className="profile-avatar-large">
            {profile.nameEn
              .split(' ')
              .map((s) => s[0])
              .join('')}
          </div>
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-name-en">{profile.nameEn}</p>
          <div className="profile-title">{profile.title}</div>
          <p className="profile-affiliation">{profile.affiliation}</p>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-num">{profile.stats.papers}+</span>
            <span className="profile-stat-label">论文</span>
          </div>
          <div className="profile-stat-divider" />
          <div className="profile-stat">
            <span className="profile-stat-num">{profile.stats.ccfA}+</span>
            <span className="profile-stat-label">CCF-A</span>
          </div>
          <div className="profile-stat-divider" />
          <div className="profile-stat">
            <span className="profile-stat-num">{profile.stats.ccfB}+</span>
            <span className="profile-stat-label">CCF-B</span>
          </div>
          <div className="profile-stat-divider" />
          <div className="profile-stat">
            <span className="profile-stat-num">{profile.stats.patents}</span>
            <span className="profile-stat-label">专利</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="profile-body">
        <div className="container">
          <div className="profile-layout">
            <div className="profile-main">
              {/* Bio */}
              <div className="profile-section">
                <h2 className="profile-section-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4-4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  个人简介
                </h2>
                <p className="profile-bio">{profile.bio}</p>
              </div>

              {/* Research Interests */}
              <div className="profile-section">
                <h2 className="profile-section-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                  研究兴趣
                </h2>
                <div className="profile-interests">
                  {profile.researchInterests.map((item, i) => (
                    <div className="profile-interest-card" key={i}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journal Papers */}
              <div className="profile-section">
                <h2 className="profile-section-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                  </svg>
                  期刊论文
                </h2>
                <ul className="profile-pub-list">
                  {profile.journals.map((paper, i) => (
                    <li key={i}>
                      {paper.url ? (
                        <a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.text}</a>
                      ) : paper.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conference Papers */}
              <div className="profile-section">
                <h2 className="profile-section-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  会议论文
                </h2>
                <ul className="profile-pub-list">
                  {profile.conferences.map((paper, i) => (
                    <li key={i}>
                      {paper.url ? (
                        <a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.text}</a>
                      ) : paper.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="profile-sidebar">
              {/* Group */}
              <div className="profile-sidebar-card">
                <h3>所属团队</h3>
                <p>{profile.group}</p>
              </div>

              {/* Research Projects */}
              {profile.projects.length > 0 && (
                <div className="profile-sidebar-card">
                  <h3>研究项目</h3>
                  <ul className="profile-sidebar-list">
                    {profile.projects.map((proj, i) => (
                      <li key={i}>{proj}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Teaching */}
              {profile.teaching.length > 0 && (
                <div className="profile-sidebar-card">
                  <h3>课程教学</h3>
                  <ul className="profile-sidebar-list">
                    {profile.teaching.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Links */}
              {profile.links && (
                <div className="profile-sidebar-card">
                  <h3>外部链接</h3>
                  <div className="profile-social-links">
                    {profile.links.website && (
                      <a href={profile.links.website} target="_blank" rel="noopener noreferrer" className="profile-social-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                        个人主页
                      </a>
                    )}
                    {profile.links.scholar && (
                      <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer" className="profile-social-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        Google Scholar
                      </a>
                    )}
                    {profile.links.github && (
                      <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="profile-social-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* SEG Link */}
              <div className="profile-sidebar-card">
                <a
                  href="https://seg-models.group/#/pages/team_profile/introduction?id=636fb16188f51200013f59bc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-seg-link"
                >
                  查看 SEG 主页
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
