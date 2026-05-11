import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import FadeInSection from './FadeInSection';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section">
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
                <a href="#contact" className="site-btn site-btn-primary">Hire Me</a>
                <Link to="/resume" className="site-btn site-btn-secondary">Resume</Link>
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
                <div className="about-content">
                  <p>
                    I am a Math-Physics student with a strong drive for engineering innovations for the future. My projects connect physical systems, computation, and real-world design constraints. 
                  </p>
                  <p>
                    Whether it's building automated spectroscopic wavelength calibration pipelines or low-cost agricultural robots, I'm always looking for ways to bridge the gap between abstract physics and tangible solutions. When I'm not coding or doing research, you might find me working on Fusion 360 fabrication or taking photos.
                  </p>
                </div>

                <h2 className="section-title-left" style={{ marginTop: '2.5rem' }}>Published Research</h2>
                <div className="about-content" style={{ padding: '1.2rem', backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
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
                      <span className="skill-pill">pandas</span>
                      <span className="skill-pill">scikit-learn</span>
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
                      <span className="skill-pill">Robotics</span>
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
                <img src="/images/posters/reducing-observational-astronomy-time-costs-with-multi-slit-spectrographs.png" className="showcase-thumb" alt="Research Posters" />
                <h3>Research Posters</h3>
                <p>Poster-based communication for the KOSMOS pipeline, RV validation, and observational astronomy workflows.</p>
                <Link to="/posters" className="project-link">View Posters</Link>
              </div>
              <div className="showcase-card">
                <img src="/images/projects/fusion360-thumb.png" className="showcase-thumb" alt="Fusion 360" />
                <h3>Fusion 360 & Fabrication</h3>
                <p>CAD modeling, prototyping, and design-for-making work that supports robotics, mechanism design, and physical build planning.</p>
                <a href="#" className="project-link">Project Page</a>
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

      {/* Contact Section */}
      <section id="contact" className="contact-section" style={{ padding: '20px 0' }}>
        <FadeInSection>
          <div className="page-columns">
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Get In Touch</h2>
            <div className="contact-container" style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.5fr', 
              gap: '3rem', 
              maxWidth: '900px', 
              margin: '0 auto', 
              background: 'var(--card-bg)', 
              padding: '2rem', 
              borderRadius: '16px', 
              border: '1px solid #e5e5e5', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)' 
            }}>
              <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <a href="mailto:koraabdoulie@gmil.com" style={{ color: 'var(--primary)', fontSize: '2rem', display: 'flex' }}>
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>koraabdoulie@gmil.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <a href="https://github.com/Wolfkorra" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontSize: '2rem', display: 'flex' }}>
                    <i className="bi bi-github"></i>
                  </a>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>github.com/Wolfkorra</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <a href="https://www.linkedin.com/in/YOUR-LINKEDIN/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontSize: '2rem', display: 'flex' }}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>LinkedIn Profile</span>
                </div>
              </div>

              <div className="contact-form">
                <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box' }} />
                    <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <input type="text" placeholder="Subject" required style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <textarea placeholder="Message" rows="4" required style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontFamily: 'inherit' }}></textarea>
                  </div>
                  <button type="submit" className="site-btn site-btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
