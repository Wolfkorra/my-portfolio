import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Close mobile menu when navigating
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container container-fluid d-flex justify-content-between align-items-center w-100 page-columns" style={{ position: 'relative' }}>
        <div className="navbar-brand-container">
          <Link className="navbar-brand" to="/#home" onClick={() => setIsMenuOpen(false)}>abdullah.</Link>
        </div>
        
        {/* Hamburger Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={isMenuOpen ? "bi bi-x" : "bi bi-list"}></i>
        </button>

        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/#home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#social-icons">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link resume-btn" to="/resume">Resume</Link>
            </li>
            <li className="nav-item theme-toggle-item">
              <button 
                onClick={toggleTheme} 
                aria-label="Toggle dark mode"
                className="theme-toggle-btn"
              >
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}