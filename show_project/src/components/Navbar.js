import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          NJU SEG
        </a>

        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#hero" onClick={closeMenu}>首页</a></li>
          <li><a href="#about" onClick={closeMenu}>关于</a></li>
          <li><a href="#team" onClick={closeMenu}>团队成员</a></li>
          <li><a href="#projects" onClick={closeMenu}>项目</a></li>
          <li><a href="#contact" onClick={closeMenu}>联系我们</a></li>
        </ul>
      </div>
    </nav>
  );
}
