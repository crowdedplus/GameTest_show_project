import React, { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const step = () => {
            start += 16;
            const progress = Math.min(start / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="stat-number">{count}+</span>;
}

export default function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="team-header reveal">
          <div className="section-label">About Us</div>
          <h2 className="section-heading">关于我们</h2>
          <p className="section-subheading">
            我们来自南京大学软件工程研究组（NJU SEG），专注于软件工程与智能化测试的前沿研究。
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              南京大学软件工程研究组（SEG）是国内领先的软件工程科研团队，长期致力于<strong>软件测试自动化</strong>、<strong>智能化软件工程</strong>以及<strong>可信软件</strong>等方向的研究。
            </p>
            <p>
              本次项目联合<strong>华为鸿蒙团队</strong>，共同探索非侵入式移动游戏自动化测试的前沿技术方案。我们通过模拟玩家操作行为，结合视觉感知与智能决策模块，实现了完全不依赖游戏内部API的自动化测试框架。
            </p>
            <p>
              该框架具备高度的通用性和可扩展性，为未来游戏测试的智能化和平台化提供了全新思路，填补了国内外在该领域的技术空白。
            </p>
          </div>

          <div className="about-stats reveal">
            <div className="stat-card">
              <AnimatedNumber target={6} />
              <div className="stat-label">团队成员</div>
            </div>
            <div className="stat-card">
              <AnimatedNumber target={4} />
              <div className="stat-label">工具模块</div>
            </div>
            <div className="stat-card">
              <AnimatedNumber target={2} />
              <div className="stat-label">合作机构</div>
            </div>
            <div className="stat-card">
              <AnimatedNumber target={3} />
              <div className="stat-label">核心控件</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
