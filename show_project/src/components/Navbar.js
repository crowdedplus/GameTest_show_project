import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = (() => {
    const h = window.location.hash;
    return h === '#/' || h === '' || !h;
  })();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (section) => {
    closeMenu();
    const el = document.getElementById(section);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled || !isHome ? ' scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          NJU SEG
        </Link>

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
          <li><button className="nav-link-btn" onClick={() => scrollTo('hero')}>首页</button></li>
          <li><button className="nav-link-btn" onClick={() => scrollTo('about')}>关于</button></li>
          <li><button className="nav-link-btn" onClick={() => scrollTo('team')}>团队成员</button></li>
          <li><button className="nav-link-btn" onClick={() => scrollTo('projects')}>项目</button></li>
          <li><button className="nav-link-btn" onClick={() => scrollTo('contact')}>联系我们</button></li>
        </ul>
      </div>
    </nav>
  );
}
