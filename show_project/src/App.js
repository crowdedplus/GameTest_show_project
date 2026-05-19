import React from 'react';
import './App.css';
import VideoCompare from './components/VideoCompare';

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">

        {/* ===== 1. 标题区 ===== */}
        <header className="hero-section">
          <h1 className="main-title">非侵入式自动化移动游戏测试</h1>
          <p className="sub-title">自动化 · 非侵入 · 智能决策</p>
        </header>

        {/* ===== 2. 项目背景 ===== */}
        <section className="card">
          <h2 className="section-title">📖 项目背景</h2>
          <p className="body-text">
            随着游戏产业的飞速发展，自动化测试成为保障游戏质量和用户体验的关键环节。然而，目前主流测试方法大多依赖于游戏内部API或人工录制操作脚本，面对商业游戏或封闭系统时往往力不从心。
          </p>
          <p className="body-text">
            为突破这一瓶颈，南京大学软件工程研究组（SEG）联合华为鸿蒙团队，共同迈入游戏自动化测试的技术无人区，提出了一种完全不依赖游戏内部API、无需人工录制的创新测试框架。我们通过模拟玩家操作行为，结合视觉感知与智能决策模块，实现对游戏的自动识别、判断与实时交互操作，真正让机器"看得懂"、"玩得动"游戏。
          </p>
          <p className="body-text">
            这项技术不仅具备高度的通用性和可扩展性，更为未来游戏测试的智能化和平台化提供了全新思路。作为业界首批探索这一方向的科研与工程团队，我们致力于将"看图打游戏"从概念变为现实，填补国内外在该领域的技术空白。
          </p>
          <a href="https://young-cloud-creator.github.io/game_test_landing_page/" target="_blank" rel="noopener noreferrer" className="link">
            更多项目细节 →
          </a>
        </section>

        {/* ===== 3. 整体方案设计 ===== */}
        <section className="card">
          <h2 className="section-title">🏗️ 整体方案设计</h2>
          <p className="body-text">
            系统由被控制终端（用于实际运行游戏的手机、平板等设备）、控制端设备、决策端设备三部分组成，其中控制端与决策端设备可以由两台电脑分别部署，也可以部署在同一台电脑上。
          </p>
          <p className="body-text">
            控制端设备捕捉被控制终端的实时画面并传输给决策端，决策端的决策模型根据实时画面产生游戏操作指令并传输至控制端设备，控制端设备将游戏操作指令转换为底层触控操作并在被控制终端执行这些操作。整个系统持续进行上面的过程，从而完成游戏场景自动化操作的目的。
          </p>
          <div className="image-container">
            <img
              src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750519450018.png"
              alt="系统架构图"
              className="content-image"
            />
          </div>
        </section>

        {/* ===== 4. 控制框架细节 ===== */}
        <section className="card">
          <h2 className="section-title">⚙️ 控制框架细节</h2>
          <p className="body-text">
            控制框架由 <strong>ControlCore</strong> 和 <strong>ControlProxy</strong> 两部分组成。ControlProxy 实现了与 ControlCore 的通信逻辑，便于决策模型集成，而无需安装与控制相关的依赖。ControlCore 是控制与画面采集的核心模块，主要实现了控制执行、画面采集、UI布局配置三个功能。
          </p>
          <p className="body-text">
            其中画面采集目前实现了基于 scrcpy 框架的软件采集逻辑，以及基于摄像头的硬件采集逻辑；控制执行目前实现了基于 scrcpy 框架的控制方案。画面采集与控制执行两部分相互独立，UI布局配置为控制执行模块定义了能执行的动作以及游戏操控UI组件在屏幕上的位置。
          </p>
        </section>

        {/* ===== 5. UI布局配置 ===== */}
        <section className="card">
          <h2 className="section-title">🎮 UI布局配置</h2>
          <p className="body-text">
            框架将游戏中的操控抽象为三种控件：<strong>按钮、虚拟摇杆、自由滑动区域</strong>。UI布局配置存储了控件在屏幕上的位置和范围。
          </p>

          {/* 三种控件卡片 */}
          <div className="control-grid">
            <div className="control-card">
              <h3>① 按钮</h3>
              <p>在一个指定的坐标执行点击或长按。例如：释放技能按钮、开火按钮、跳跃按钮。</p>
              <img src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750519541395.png" alt="按钮控件" className="control-image" />
            </div>
            <div className="control-card">
              <h3>② 虚拟摇杆</h3>
              <p>屏幕上的一个圆形，通过滑动控制角色移动，圆周运动控制方向。例如：移动角色。</p>
              <img src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750519600437.png" alt="虚拟摇杆" className="control-image" />
            </div>
            <div className="control-card">
              <h3>③ 自由滑动区域</h3>
              <p>在矩形区域内自由滑动实现操作。例如：控制视野旋转。</p>
              <img src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750519641073.png" alt="自由滑动区域" className="control-image" />
            </div>
          </div>
        </section>

        {/* ===== 6. 控制执行 ===== */}
        <section className="card">
          <h2 className="section-title">🕹️ 控制执行</h2>
          <p className="body-text">
            控制执行模块接受一个动作序列（例如 [向前移动 → 向右转视角 → 开火]），并基于UI布局配置中的定义将动作翻译成底层的手指按下、抬起、移动三种原子操作。目前，控制框架为每个控件分配一个独立的手指，基于 scrcpy 框架允许多指操控的特性，满足游戏的操作要求。
          </p>
        </section>

        {/* ===== 7. 画面采集 ===== */}
        <section className="card">
          <h2 className="section-title">📷 画面采集</h2>
          <p className="body-text">
            框架实现了两种画面采集方案，分别基于 scrcpy 框架和外部摄像头硬件。scrcpy 框架捕捉到的画面优势在于清晰度高、无环境光干扰；外部摄像头硬件的优势在于侵入性低、适配设备范围广。
          </p>
        </section>

        {/* ===== 8. 辅助工具 ===== */}
        <section className="card">
          <h2 className="section-title">🔧 辅助工具</h2>
          <p className="body-text">
            自动化移动游戏测试的核心有两个部分：画面理解、游戏控制。它们各自需要辅助工具来进行准备工作。
          </p>

          <h3 style={{ color: '#e0e0e0', marginTop: '2rem' }}>① 界面标注工具</h3>
          <p className="body-text">
            基于对游戏画面中三种基本操作的抽象，我们设计了一种界面标注的辅助工具，可以基于输入的游戏画面对三种基础控件进行标注，并将UI布局配置存储到 json 文件中。
          </p>
          <div className="image-container">
            <img src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750519826104.png" alt="界面标注工具" className="content-image" />
          </div>
          <p className="body-text" style={{ marginTop: '1rem' }}>
            由于游戏中的特定UI按钮在特定情况下才会出现，因此需要多张图片才能完整描述游戏的所有操控。对此我们添加了多图片同时标注的功能：
          </p>
          <div className="image-container">
            <img src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750519876610.png" alt="多图片标注" className="content-image" />
          </div>

          <h3 style={{ color: '#e0e0e0', marginTop: '2rem' }}>② 画面校准工具</h3>
          <p className="body-text">
            当前的自动化移动游戏测试通过摄像头获取游戏画面，需要裁切掉屏幕之外的部分，并修正因摆放问题导致的画面倾斜。我们采用边缘检测算法处理画面，在第一帧检测屏幕四角并记录，后续每一帧直接进行透视变换得到屏幕内容。
          </p>
          <div className="image-container">
            <img src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1753757350589.png" alt="画面校准" className="content-image" />
          </div>
          <p className="body-text" style={{ marginTop: '1rem' }}>
            具备设备自动解锁功能。为了排除画面内容对边缘检测的影响，画面校准工具首先会启动一个APP使设备全屏显示白色，再进行边缘检测。演示效果如下：
          </p>
          <div className="video-container">
            <video controls preload="metadata" className="demo-video">
              <source src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750520947674.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* ===== 9. 项目演示 ===== */}
        <section className="card">
          <h2 className="section-title">🎬 项目演示</h2>
          <p className="body-text">
            测试平台通过前端外接摄像头采集移动设备画面，经由网络发给决策端；决策端根据画面信息做出决策发送给前端；最终前端接受动作指令并控制移动设备进行游戏。
          </p>
          <div className="image-container">
            <img src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1751899765132.jpg" alt="硬件平台" className="content-image" />
          </div>
          <p className="body-text" style={{ marginTop: '1rem' }}>视频展示了测试平台硬件的介绍：</p>
          <div className="video-container">
            <video controls preload="metadata" className="demo-video">
              <source src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750521368806.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="body-text" style={{ marginTop: '1rem' }}>该项目的移动游戏测试过程如下：</p>
          <div className="video-container">
            <video controls preload="metadata" className="demo-video">
              <source src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750521400404.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="body-text" style={{ marginTop: '1rem' }}>
            下面两个视频展示了本非侵入式自动化移动游戏测试框架中控制端与决策端协同工作的效果，以原神为例展示了自动战斗和自动寻路。所有操作均由决策模型基于实时画面决策产生。
          </p>
          <div className="video-container">
            <video controls preload="metadata" className="demo-video">
              <source src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750522420488.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="video-container" style={{ marginTop: '1rem' }}>
            <video controls preload="metadata" className="demo-video">
              <source src="https://keming-bbs.oss-cn-shanghai.aliyuncs.com/research_group/file_1750522774263.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* ===== 10. 项目团队 ===== */}
        <section className="card">
          <h2 className="section-title">👥 项目团队</h2>
          <div className="team-links">
            <a href="https://seg-models.group/#/pages/team_profile/introduction?id=636fb16188f51200013f59bc" target="_blank" rel="noopener noreferrer">张天</a>
            <span>|</span>
            <a href="https://seg-models.group/#/pages/team_profile/introduction?id=687f554fa09a9b16db28e583" target="_blank" rel="noopener noreferrer">季瑞骅</a>
            <span>|</span>
            <a href="https://seg-models.group/#/pages/team_profile/introduction?id=687f5566f2949c1a83a21c49" target="_blank" rel="noopener noreferrer">李重</a>
            <span>|</span>
            <a href="https://seg-models.group/#/pages/team_profile/introduction?id=686f6315b9fb230b03cc0817" target="_blank" rel="noopener noreferrer">林海波</a>
            <span>|</span>
            <a href="https://seg-models.group/#/pages/team_profile/introduction?id=686f5f87286f7cb2b82f9376" target="_blank" rel="noopener noreferrer">铁诗杨</a>
            <span>|</span>
            <a href="https://seg-models.group/#/pages/team_profile/introduction?id=686f5f26fe975fd64cc6b09c" target="_blank" rel="noopener noreferrer">杨青云</a>
          </div>
        </section>

        {/* ===== 11. 视频嵌入方案对比（你的内容，放最后） ===== */}
        <section className="card highlight-card">
          <h2 className="section-title">🔬 视频嵌入方案对比</h2>
          <p className="body-text">
            拖动中间滑块，直观对比<strong>哔哩哔哩外链播放器</strong>与<strong>GitHub Releases 托管方案</strong>的播放效果差异。
          </p>
          <VideoCompare/>
        </section>

      </div>
    </div>
  );
}

export default App;