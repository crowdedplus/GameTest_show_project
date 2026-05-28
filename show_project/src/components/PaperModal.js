import React, { useEffect } from 'react';
import PodcastPlayer from './PodcastPlayer';

export default function PaperModal({ paper, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const hasPodcast = paper.podcast && paper.podcast.audioUrl;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="关闭">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal-header">
          <span className="modal-venue">{paper.venue} · {paper.year}</span>
          <h2 className="modal-title">{paper.title}</h2>
          <p className="modal-authors">{paper.authors}</p>
        </div>

        {paper.abstract && (
          <div className="modal-section">
            <h3>摘要</h3>
            <p>{paper.abstract}</p>
          </div>
        )}

        {hasPodcast && (
          <div className="modal-section">
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
              论文播客
            </h3>
            <PodcastPlayer src={paper.podcast.audioUrl} />
          </div>
        )}

        {paper.paperUrl && (
          <div className="modal-footer">
            <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              查看论文全文
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
