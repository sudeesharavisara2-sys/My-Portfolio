import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

var links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar(props) {
  var setIsPointerHovering = props.setIsPointerHovering;

  var scrolledState = useState(false);
  var scrolled = scrolledState[0];
  var setScrolled = scrolledState[1];

  var menuState = useState(false);
  var menuOpen = menuState[0];
  var setMenuOpen = menuState[1];

  useEffect(function () {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  function handleEnter() {
    if (setIsPointerHovering) {
      setIsPointerHovering(true);
    }
  }

  function handleLeave() {
    if (setIsPointerHovering) {
      setIsPointerHovering(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  var navClass = 'navbar';
  if (scrolled) {
    navClass = navClass + ' navbar-scrolled';
  }

  var linksClass = 'navbar-links';
  if (menuOpen) {
    linksClass = linksClass + ' navbar-links-open';
  }

  return (
    <nav className={navClass}>
      <div className="navbar-inner">
        <a
          href="#hero"
          className="navbar-logo"
          onClick={closeMenu}
        >
          Sudeesha<span className="navbar-logo-dot">.</span>
        </a>

        <ul className={linksClass}>
          <li>
            <a
              href="#hero"
              className="navbar-link"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>

          {links.map(function (l) {
            return (
              <li key={l}>
                <a
                  href={'#' + l.toLowerCase()}
                  className="navbar-link"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  onClick={closeMenu}
                >
                  {l}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={function () {
            setMenuOpen(!menuOpen);
          }}
        >
          <span className={menuOpen ? 'navbar-bar navbar-bar-1-open' : 'navbar-bar'}></span>
          <span className={menuOpen ? 'navbar-bar navbar-bar-2-open' : 'navbar-bar'}></span>
          <span className={menuOpen ? 'navbar-bar navbar-bar-3-open' : 'navbar-bar'}></span>
        </button>
      </div>
    </nav>
  );
}