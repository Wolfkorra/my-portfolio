import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import FadeInSection from './FadeInSection';

export default function Home() {
  return (
    <div className="home-container">
      {/* Cover Photo */}
      <div id="home" style={{ width: '100%', height: '35vh', minHeight: '250px', maxHeight: '450px', overflow: 'hidden', scrollSnapAlign: 'start' }}>
        <img 
          src="/images/home-cover.jpg" 
          alt="Cover" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} 
        />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <FadeInSection>
          <div className="page-columns hero-panel">
            <div className="hero-copy">
              <div className="hero-kicker">Hello, I'm</div>
              <h1>Abdullah Korra</h1>
              <div className="typewriter-container">
                <Typewriter
                  options={{
                    strings: ['I Engineer.', 'I Analyze Data.', 'I Build Robotics.', 'I Solve Problems.'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'typewriter-text',
                    cursorClassName: 'typewriter-cursor'
                  }}
                />
              </div>
              <p className="hero-description">
                Senior at College of Idaho. I build technical work across astronomy software, scientific computing, robotics, and reproducible analysis. Connecting physical systems with computation.
              </p>
              <div className="hero-actions">
                <Link to="/resume" className="site-btn site-btn-primary">Hire Me</Link>
                <div id="social-icons" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginLeft: '1rem' }}>
                  <a href="mailto:koraabdoulie@gmil.com" style={{ color: 'var(--primary)', fontSize: '1.6rem', display: 'flex', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                  <a href="https://github.com/Wolfkorra" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontSize: '1.6rem', display: 'flex', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/YOUR-LINKEDIN/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontSize: '1.6rem', display: 'flex', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <img src="/images/Korra.Abdullah.CollegeofIdaho.02.jpg" alt="Abdullah Korra" className="hero-avatar" />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="about-skills-section">
        <FadeInSection>
          <div className="page-columns">
            <div className="about-skills-container">
              <div className="about-col">
                <h2 className="section-title-left">About Me</h2>
                <div className="subsection-card about-content">
                  <p>
                    I am a Math-Physics student with a strong drive for engineering innovations for the future. My projects connect physical systems, computation, and real-world design constraints. 
                  </p>
                  <p>
                    Whether it's building automated spectroscopic wavelength calibration pipelines or low-cost agricultural robots, I'm always looking for ways to bridge the gap between abstract physics and tangible solutions. When I'm not coding or doing research, you might find me working on Fusion 360 fabrication or pottery.
                  </p>
                </div>

                <h2 className="section-title-left">Published Research</h2>
                <div className="subsection-card about-content">
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--primary)' }}>Automated Spectroscopic Wavelength Calibration using Dynamic Time Warping</h3>
                  <p style={{ fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: '1.5' }}>
                    We present an automated method for wavelength calibration of 1D spectra using Dynamic Time Warping (DTW). This approach recovers non-linear dispersion solutions without initial guesses and is robust against varying spectral resolutions. We also introduce the <strong>PyKOSMOS</strong> toolkit, which implements these methods.
                  </p>
                  <a href="https://arxiv.org/abs/2508.05862" target="_blank" rel="noreferrer" className="site-btn site-btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>View on arXiv</a>
                </div>
              </div>
              <div className="skills-col" id="skills">
                <h2 className="section-title-left">Skills</h2>
                <div className="skills-list">
                    <div className="skill-category">
                      <h3>Languages & Frameworks</h3>
                      <div className="skill-pills">
                        <span className="skill-pill">Python</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h3>Data & Science</h3>
                      <div className="skill-pills">
                        <span className="skill-pill">numpy</span>
                        <span className="skill-pill">pandas</span>
                        <span className="skill-pill">scikit-learn</span>
                        <span className="skill-pill">astropy</span>
                        <span className="skill-pill">photutils</span>
                        <span className="skill-pill">Astronomy Software</span>
                        <span className="skill-pill">Data Reduction</span>
                        <span className="skill-pill">Reproducible Analysis</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h3>Hardware & Tools</h3>
                      <div className="skill-pills">
                        <span className="skill-pill">Arduino</span>
                        <span className="skill-pill">Raspberry Pi</span>
                        <span className="skill-pill">Fusion 360 (CAD)</span>
                        <span className="skill-pill">Git</span>
                        <span className="skill-pill">Robotics (ROS2)</span>
                        <span className="skill-pill">Electrical Test Tools (Oscilloscope, etc.)</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <FadeInSection>
          <div className="page-columns">
            <h2 className="section-title">Projects</h2>
            <div className="showcase-grid">
              <div className="showcase-card">
                <img src="/images/projects/agribot-thumb.png" className="showcase-thumb" alt="Agribot" />
                <h3>AgriBot-Assist</h3>
                <p>A low-cost agricultural robot concept focused on GPS boundaries, path planning, embedded control, and practical field automation.</p>
                <Link to="/agribot" className="project-link">View Project</Link>
              </div>
              <div className="showcase-card">
                <img src="/images/posters/calcium_fit.png" className="showcase-thumb" alt="KOSMOS pipeline" />
                <h3>KOSMOS Data Reduction</h3>
                <p>A Python and Jupyter-based workflow for multi-slit spectroscopic reduction, wavelength calibration, and usable research software design.</p>
                <a href="https://github.com/mwbest/CofI_2025" target="_blank" rel="noreferrer" className="project-link">GitHub</a>
              </div>
              <div className="showcase-card">
                <img src="/images/projects/churn-thumb.png" className="showcase-thumb" alt="Machine Learning" />
                <h3>Machine Learning Analysis</h3>
                <p>A data analysis project focused on predicting customer churn. It demonstrates a complete machine learning workflow designed to provide clear, actionable business insights.</p>
                <Link to="/churn" className="project-link">Open Report</Link>
              </div>
              <div className="showcase-card">
                <img src="/images/projects/bruneau-thumb.png" className="showcase-thumb" alt="Bruneau Pipeline" />
                <h3>Bruneau Data Reduction</h3>
                <p>An automated astronomical imaging pipeline handling Bayer matrix patterns and calibration workflows for science-ready data products.</p>
                <Link to="/bruneau" className="project-link">View Project</Link>
              </div>
              <div className="showcase-card">
                <img src="/images/posters/reducing-observational-astronomy-time-costs-with-multi-slit-spectrographs.png" className="showcase-thumb" alt="Research Posters" />
                <h3>Research Posters</h3>
                <p>Poster-based communication for the KOSMOS pipeline, RV validation, and observational astronomy workflows.</p>
                <Link to="/posters" className="project-link">View Posters</Link>
              </div>
              <div className="showcase-card">
                <img src="/images/projects/fusion360-thumb.png" className="showcase-thumb" alt="Fusion 360" />
                <h3>Fusion 360 & Fabrication</h3>
                <p>CAD modeling, prototyping, and design-for-making work that supports robotics, mechanism design, and physical build planning.</p>
                <Link to="/fabrication" className="project-link">View Project</Link>
              </div>
              <div className="showcase-card">
                <div className="thumb-placeholder">Math + Physics</div>
                <h3>Physics-Math Explorations</h3>
                <p>A place for computational notebooks, visualizations, and smaller investigations that sit between coursework and technical curiosity.</p>
                <a href="#" className="project-link">More Work</a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

    </div>
  );
}

