export default function Contact() {
  return (
    <div className="page-columns">
      <h1 className="section-title">Contact</h1>
      <p>The best way to reach me is by email.</p>
      
      <div className="contact-page-card">
        <ul>
          <li><strong>Email:</strong> <a href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/YOUR-USERNAME">github.com/YOUR-USERNAME</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/YOUR-LINKEDIN/">linkedin.com/in/YOUR-LINKEDIN/</a></li>
        </ul>
      </div>

      <h2 className="section-title">What I am interested in</h2>
      <ul>
        <li>data science and machine learning</li>
        <li>scientific computing</li>
        <li>astronomy and research software</li>
        <li>robotics and embedded systems</li>
        <li>computational modeling and tool building</li>
      </ul>
    </div>
  );
}
