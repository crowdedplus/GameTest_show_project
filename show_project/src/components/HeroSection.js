import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-circuit"></div>
      <div className="hero-glow tl"></div>
      <div className="hero-glow br"></div>

      <div className="hero-content">
        <div className="hero-badge">NJU · SEG · HUAWEI</div>
        <h1 className="hero-title">
          <span>非侵入式自动化移动游戏测试</span>
        </h1>
        <p className="hero-desc">
          南京大学软件工程研究组联合华为鸿蒙团队，探索游戏自动化测试的技术无人区。
          自动化 · 非侵入 · 智能决策
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            查看项目
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#team" className="btn btn-outline">
            团队成员
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-mouse"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
}
