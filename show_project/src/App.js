import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
      <h1>项目展示</h1>
      {/* 方案一：B站嵌入，简洁参数 */}
      <iframe
        title="演示视频"
        src="https://player.bilibili.com/player.html?bvid=BV1SURRB6ELi&page=1&autoplay=0&danmaku=0&high_quality=1"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
    </div>
  );
}

export default App;