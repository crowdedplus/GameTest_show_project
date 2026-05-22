import React from 'react';
import { projectData } from '../data/teamData';

export default function DemoSection() {
  return (
    <section className="demos section" id="demos">
      <div className="container">
        <div className="demos-header reveal">
          <div className="section-label">Demos</div>
          <h2 className="section-heading">项目演示</h2>
          <p className="section-subheading">
            测试平台通过外接摄像头采集移动设备画面，决策端基于视觉AI实时生成操作指令
          </p>
        </div>

        <div className="demo-grid">
          {projectData.demos.map((demo, index) => (
            <div className="demo-card reveal" key={index}>
              <div className="demo-video-wrapper">
                <video controls preload="metadata">
                  <source src={demo.video} type="video/mp4" />
                </video>
              </div>
              <div className="demo-info">
                <h4>{demo.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
