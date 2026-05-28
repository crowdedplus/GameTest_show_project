import React, { useRef, useState, useEffect } from 'react';

function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function PodcastPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onProgress = () => {
      if (audio.buffered.length > 0) {
        setBuffered(audio.buffered.end(audio.buffered.length - 1));
      }
    };
    const onEnded = () => setPlaying(false);
    const onError = () => setError(true);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('progress', onProgress);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('progress', onProgress);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [src]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || error) return;
    if (playing) audio.pause();
    else audio.play();
    setPlaying(!playing);
  };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio || error) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setCurrentTime(audio.currentTime);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bufferedPercent = duration > 0 ? (buffered / duration) * 100 : 0;

  return (
    <div className={`podcast-player${error ? ' error' : ''}`}>
      <audio ref={audioRef} src={src} preload="metadata" />

      {error ? (
        <span className="podcast-error">无法加载播客音频</span>
      ) : (
        <>
          <button className="podcast-play-btn" onClick={toggle} aria-label={playing ? '暂停' : '播放'}>
            {playing ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>

          <div className="podcast-progress-bar" onClick={seek}>
            <div className="podcast-progress-bg">
              <div className="podcast-progress-buffered" style={{ width: `${bufferedPercent}%` }} />
              <div className="podcast-progress-current" style={{ width: `${progress}%` }} />
              <div className="podcast-progress-thumb" style={{ left: `${progress}%` }} />
            </div>
          </div>

          <span className="podcast-time">{formatTime(currentTime)} / {formatTime(duration)}</span>
        </>
      )}
    </div>
  );
}
