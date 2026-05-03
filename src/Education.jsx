import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Education() {
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
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>Education</h1>
          <p className="hero-description" style={{ margin: '0 auto', maxWidth: '600px' }}>Academic background, formal training, and apprenticeships.</p>
        </div>
      </div>

      {/* Content */}
      <div className="about-section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="page-columns about-content" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--card-bg)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px var(--card-shadow)' }}>
          
          <h2 className="section-title-left" style={{ fontSize: '2rem' }}>Formal Education</h2>
          
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>The College of Idaho</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>Bachelor of Science in Math-Physics (Major)</p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted-light)', marginBottom: '1rem' }}>August 2022 – Present | Caldwell, Idaho, United States</p>
            <p style={{ lineHeight: '1.6' }}>
              My undergraduate experience is rooted in a Liberal Arts education, which is designed to develop critical thinking, creativity, and problem-solving abilities. By combining this foundation with general mathematics and physics, I am gaining the comprehensive understanding necessary for a career in engineering. Additionally, my specialization in data science equips me with the skills to analyze and interpret complex data across various fields. I am currently studying here as a Shelby M.C. Davis Scholar.
            </p>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>United World College Adriatic (UWCAD)</h3>
            <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>International Baccalaureate (IB) Diploma</p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted-light)', marginBottom: '1rem' }}>September 2019 – April 2021 | Duino, Italy</p>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Attending UWCAD on a prestigious scholarship provided me with a rigorous education focused on intercultural understanding and social responsibility. The multicultural environment taught me to communicate effectively, build bridges across cultural differences, and work collaboratively in diverse groups.
            </p>
            <div style={{ position: 'relative', width: '100%', height: '600px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E4E1DA', marginBottom: '1rem' }}>
              <iframe src="/assets/documents/Abdullah_IB_Diploma.pdf" width="100%" height="100%" style={{ border: 'none' }} title="IB Diploma"></iframe>
            </div>
            <a href="/assets/documents/Abdullah_IB_Diploma.pdf" target="_blank" rel="noreferrer" className="site-btn site-btn-secondary" style={{ display: 'inline-block' }}>Open PDF in new tab</a>
          </div>

          <hr style={{ borderTop: '1px solid #E4E1DA', marginBottom: '3rem' }} />

          <h2 className="section-title-left" style={{ fontSize: '2rem' }}>Technical Apprenticeships & Trade Skills</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Before pursuing traditional higher education, I spent over a decade gaining hands-on, practical engineering and construction experience through various trade apprenticeships.
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            <li style={{ marginBottom: '1rem' }}><strong>Building Electrician (2016 – 2018 | Palermo, Italy):</strong> Acquired a strong foundation in electrical construction and lighting fixture installation under the mentorship of Giuseppe Bruccolieri.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Construction Painter (2016 – 2018 | Palermo, Italy):</strong> Acquired knowledge in painting buildings and color mixing.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Plumber (2016 – 2018 | Palermo, Italy):</strong> Gained comprehensive expertise in resolving plumbing issues, replacing valves, and testing restored systems.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Automotive Mechanic (2006 – 2016 | Kerr Sering, The Gambia):</strong> Completed a six-year apprenticeship focused on diagnosing and repairing vehicles, performing routine maintenance, rebuilding engines, and conducting wheel alignments.</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
