import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">NJU SEG Research Group</div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} 南京大学软件工程研究组 &nbsp;|&nbsp;
          <a href="https://seg-models.group/#/" target="_blank" rel="noopener noreferrer">SEG Group</a>
        </p>
      </div>
    </footer>
  );
}
