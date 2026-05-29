import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navHref = (section) => isHome ? `#${section}` : `#/${section}`;

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
          <li><a href={navHref('hero')} onClick={closeMenu}>首页</a></li>
          <li><a href={navHref('about')} onClick={closeMenu}>关于</a></li>
          <li><a href={navHref('team')} onClick={closeMenu}>团队成员</a></li>
          <li><a href={navHref('projects')} onClick={closeMenu}>项目</a></li>
          <li><a href={navHref('contact')} onClick={closeMenu}>联系我们</a></li>
        </ul>
      </div>
    </nav>
  );
}
