import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="page-columns">
      <h1 className="section-title">Projects</h1>
      <p>This page highlights work in astronomy software, robotics, machine learning, and design-oriented technical making. The goal is to show range while keeping the through-line clear: building tools and analyses that are practical, readable, and grounded in real use cases.</p>

      <h2 id="kosmos" className="section-title">KOSMOS Multi-Slit Data Reduction Pipeline</h2>
      <div className="project-page-card">
        <img src="/images/projects/kosmos-thumb.png" className="page-thumb" alt="KOSMOS pipeline" />
        <h3>What it is</h3>
        <p>A Python and Jupyter-based astronomy workflow for reducing KOSMOS multi-slit spectroscopic data. The project is built around an interactive workflow that helps move from raw observations to final science products with cleaner user interaction than a loose notebook sequence.</p>
        <h3>What it shows</h3>
        <ul>
          <li>scientific computing in Python</li>
          <li>research workflow design</li>
          <li>reproducible reduction logic</li>
          <li>user-facing tooling for astronomy</li>
        </ul>
        <a href="https://github.com/mwbest/CofI_2025" target="_blank" rel="noreferrer" className="project-link">GitHub repository</a>
      </div>

      <h2 id="agribot" className="section-title">Agribot-Assist</h2>
      <div className="project-page-card">
        <img src="/images/projects/agribot-thumb.png" className="page-thumb" alt="Agribot" />
        <h3>What it is</h3>
        <p>An affordable agricultural robotics concept focused on embedded control, motion planning, sensor integration, and practical design under real-world constraints.</p>
        <h3>What it shows</h3>
        <ul>
          <li>Raspberry Pi and Arduino coordination</li>
          <li>GPS boundary planning and field logic</li>
          <li>robotics prototyping</li>
          <li>socially grounded engineering design</li>
        </ul>
      </div>

      <h2 id="churn" className="section-title">Machine Learning Analysis</h2>
      <div className="project-page-card">
        <img src="/images/projects/churn-thumb.png" className="page-thumb" alt="Machine Learning" />
        <h3>What it is</h3>
        <p>A data analysis project focused on predicting customer churn. It demonstrates a complete machine learning workflow from data exploration to model evaluation, designed to provide clear, actionable business insights while keeping key statistical metrics like ROC-AUC.</p>
        <h3>What it shows</h3>
        <ul>
          <li>Data exploration and pattern discovery</li>
          <li>Preparing mixed data for machine learning</li>
          <li>Comparing models and evaluating performance</li>
          <li>Communicating results to non-technical audiences</li>
        </ul>
        <a href="/analysis/telco-churn-report.html" target="_blank" rel="noreferrer" className="project-link">Open the report</a>
      </div>

      <h2 id="posters" className="section-title">Posters & Presentations</h2>
      <div className="publication-grid">
        <div className="publication-card">
          <h3>Reducing Observational Astronomy Time Costs with Multi-Slit Spectrographs</h3>
          <a href="/assets/posters/reducing-observational-astronomy-time-costs-with-multi-slit-spectrographs.pdf" target="_blank" rel="noreferrer" className="project-link">Open PDF</a>
        </div>
        <div className="publication-card">
          <h3>Final Multi-Slit Poster</h3>
          <a href="/assets/posters/final-multi-slit-poster.pdf" target="_blank" rel="noreferrer" className="project-link">Open PDF</a>
        </div>
      </div>

      <h2 id="fabrication" className="section-title">Fusion 360 & Fabrication</h2>
      <div className="project-page-card">
        <img src="/images/projects/fusion360-thumb.png" className="page-thumb" alt="Fusion 360" />
        <h3>What it is</h3>
        <p>A collection of CAD models, mechanical designs, and fabrication-ready projects built using Fusion 360, bridging theoretical physics and physical prototypes.</p>
        <h3>What it shows</h3>
        <ul>
          <li>Parametric CAD modeling</li>
          <li>Mechanical assembly design</li>
          <li>Design for fabrication (3D printing, machining)</li>
          <li>Technical visualization</li>
        </ul>
        <Link to="/fabrication" className="project-link">View Gallery</Link>
      </div>

      <h2 id="explorations" className="section-title">Physics-Mathematics Explorations</h2>
      <div className="project-page-card">
        <div className="thumb-placeholder large">Small computational explorations</div>
        <p>This section is reserved for smaller notebooks, maps, computational visuals, and other technical side work that does not need a full standalone page.</p>
      </div>
    </div>
  );
}
