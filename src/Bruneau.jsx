import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Bruneau() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <div className="hero-section" style={{ minHeight: '30vh', paddingTop: '6rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="page-columns">
          <div style={{ marginBottom: '2rem' }}>
            <Link to="/" className="site-btn site-btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'var(--btn-text)', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          </div>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>Bruneau Data Reduction Pipeline</h1>
          <p className="hero-description" style={{ margin: '0 auto', maxWidth: '600px' }}>Automated Astronomical Imaging Calibration and Reduction.</p>
        </div>
      </div>

      {/* Content */}
      <div className="about-section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="page-columns" style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: 'var(--card-bg)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px var(--card-shadow)' }}>
          <div style={{ position: 'relative', width: '100%', height: '80vh', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px var(--card-shadow)' }}>
            <iframe 
              src="/analysis/bruneau/index.html" 
              title="Bruneau Notebook" 
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
            ></iframe>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted-light)' }}>
              This pipeline handles the full reduction workflow for astronomical images, including Bayer matrix demosaicing, calibration frame application, and science-ready data production.
            </p>
            <a href="/analysis/bruneau/index.html" target="_blank" rel="noreferrer" className="site-btn site-btn-secondary" style={{ marginTop: '1rem' }}>Open in New Tab</a>
          </div>
        </div>
      </div>
    </div>
  );
}
