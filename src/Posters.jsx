import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Posters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posters = [
    {
      title: "Reducing Observational Astronomy Time Costs with Multi-Slit Spectrographs",
      description: "A research poster focused on the KOSMOS reduction pipeline, wavelength calibration, and RV analysis validation against APOGEE stars.",
      file: "/assets/posters/reducing-observational-astronomy-time-costs-with-multi-slit-spectrographs.pdf",
      image: "/images/posters/reducing-observational-astronomy-time-costs-with-multi-slit-spectrographs.png"
    },
    {
      title: "Final Multi-Slit Poster",
      description: "A refined version of the multi-slit spectroscopic workflow poster with updated extraction and calibration visuals.",
      file: "/assets/posters/final-multi-slit-poster.pdf",
      image: "/images/posters/final-multi-slit-poster.png"
    }
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <div className="hero-section" style={{ minHeight: '30vh', paddingTop: '6rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="page-columns">
          <div style={{ marginBottom: '2rem' }}>
            <Link to="/" className="site-btn site-btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'var(--btn-text)', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          </div>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>Research Posters</h1>
          <p className="hero-description" style={{ margin: '0 auto', maxWidth: '600px' }}>Visual communication of astronomical data reduction and spectroscopic workflows.</p>
        </div>
      </div>

      {/* Content */}
      <div className="about-section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="page-columns" style={{ backgroundColor: 'var(--card-bg)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px var(--card-shadow)' }}>
          <div className="showcase-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {posters.map((poster, index) => (
              <div key={index} className="showcase-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <img 
                  src={poster.image} 
                  className="showcase-thumb" 
                  alt={poster.title} 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Poster+Preview'; }}
                />
                <h3>{poster.title}</h3>
                <p style={{ flexGrow: 1 }}>{poster.description}</p>
                <a href={poster.file} target="_blank" rel="noreferrer" className="site-btn site-btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
                  Open PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
