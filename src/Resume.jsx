import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <div className="hero-section" style={{ minHeight: '25vh', paddingTop: '6rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="page-columns">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <Link to="/" className="site-btn site-btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'var(--btn-text)', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
            <a href="/assets/Abdullah_Korra_Resume.pdf" target="_blank" rel="noreferrer" className="site-btn site-btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'var(--btn-text)', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Download PDF</a>
            {/* <a href="/assets/abdullah-korra-cover-letter.pdf" target="_blank" rel="noreferrer" className="site-btn site-btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'var(--btn-text)', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Cover Letter for Math-4025</a> */}
            {/* <a href="/assets/Job-Advertisement-for-Math-4025.pdf" target="_blank" rel="noreferrer" className="site-btn site-btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'var(--btn-text)', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Job Advertisement for Math-4025</a> */}
          </div>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>Resume</h1>
        </div>
      </div>

      {/* Viewer Content */}
      <div className="about-section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="page-columns" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="resume-viewer" style={{ 
            width: '100%', 
            height: '80vh', 
            minHeight: '800px', 
            border: '1px solid #e5e5e5', 
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <object 
              data="/assets/Abdullah_Korra_Resume.pdf" 
              type="application/pdf" 
              width="100%" 
              height="100%"
            >
              <div style={{ padding: '3rem', textAlign: 'center' }}>
                <p>Your browser does not support inline PDFs.</p>
                <a href="/assets/Abdullah_Korra_Resume.pdf" className="site-btn site-btn-secondary" style={{ marginTop: '1rem' }}>
                  Click here to download the PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}
