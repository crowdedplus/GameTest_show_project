import React from 'react';

function VideoCompare() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
      <h1>哔哩哔哩外链播放器</h1>
      {/* 方案一：B站嵌入，简洁参数 */}
      <iframe
        title="演示视频"
        src="https://player.bilibili.com/player.html?bvid=BV1SURRB6ELi&page=1&autoplay=0&danmaku=0&high_quality=1&as_wide=1"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
        style={{
          width: '100%',
          height: '450px',
          border: 'none',
          display: 'block',
          margin: '0 auto',
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      />
      <h1>release方案</h1>
      <video
        controls
        preload="auto"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
        <source
          src="https://github.com/crowdedplus/GameTest_show_project/releases/download/video_optimized/2-optimized.mp4"
          type="video/mp4"
        />
        你的浏览器不支持视频播放。
      </video>
    </div>
  );
}

export default VideoCompare;