import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Agribot() {
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
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>AgriBot-Assist</h1>
          <p className="hero-description" style={{ margin: '0 auto', maxWidth: '600px' }}>A low-cost solar-powered farming robot for small agricultural plots.</p>
        </div>
      </div>

      {/* Content */}
      <div className="about-section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="page-columns about-content" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 className="section-title-left" style={{ fontSize: '2rem' }}>Overview</h2>
          <p>
            AgriBot-Assist is a low-cost, solar-powered farming robot designed for small agricultural plots. The project is aimed at reducing the physical burden of plowing and related field work for low-income farming families who do not have access to expensive modern equipment. The current concept combines a Raspberry Pi, Arduino controllers, LoRa communication, GPS, solar power, and onboard sensing to create a practical autonomous field assistant.
          </p>
          <p>
            What makes this project important to me is that it grows out of a real problem I know personally. In my personal statement, I explain that I grew up in a farming village where hard physical labor shaped daily life, and where affordable agricultural automation could create more room for education, creativity, and long-term community growth. That motivation is the reason this project exists.
          </p>

          <h2 className="section-title-left" style={{ marginTop: '3rem', fontSize: '2rem' }}>Why this project matters</h2>
          <p>
            Many smallholder farmers still rely on manual labor and animal traction because tractors and other modern machines are too expensive. The proposal frames that problem in practical terms: physical strain, time loss, limited efficiency, and the way economic pressure can pull children into farm labor instead of school. AgriBot-Assist is meant to address one part of that problem by automating plowing on small plots with a design built around affordability and accessible parts.
          </p>
          <p>
            The larger goal is not just to build a robot that moves. It is to design a system that can work under the constraints that matter in the real world: limited budgets, off-grid power, simple interfaces, and field boundaries that are not already digitized. The proposal sets that goal clearly as a functional prototype that can autonomously plow within GPS-defined small farm boundaries.
          </p>

          <h2 className="section-title-left" style={{ marginTop: '3rem', fontSize: '2rem' }}>Project goals</h2>
          <p>The current project goals are:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>finalize a low-cost mechanical and electronic design</li>
            <li style={{ marginBottom: '0.5rem' }}>build and integrate the prototype chassis, drive system, plow mechanism, solar power system, and control electronics</li>
            <li style={{ marginBottom: '0.5rem' }}>develop Raspberry Pi software for boundary calculation, interface logic, and communication</li>
            <li style={{ marginBottom: '0.5rem' }}>develop Arduino software for navigation, motor control, obstacle avoidance, and plowing logic</li>
            <li style={{ marginBottom: '0.5rem' }}>test the robot in controlled field-like conditions</li>
            <li style={{ marginBottom: '0.5rem' }}>document the build, code, and performance of the prototype</li>
          </ul>

          <h2 className="section-title-left" style={{ marginTop: '3rem', fontSize: '2rem' }}>System architecture</h2>
          <p>The robot is designed around a split-control architecture.</p>
          
          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Raspberry Pi responsibilities</h3>
          <p>The Raspberry Pi acts as the central brain. It is intended to handle:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>GPS parsing</li>
            <li style={{ marginBottom: '0.5rem' }}>boundary creation from coordinate points</li>
            <li style={{ marginBottom: '0.5rem' }}>path planning</li>
            <li style={{ marginBottom: '0.5rem' }}>task coordination</li>
            <li style={{ marginBottom: '0.5rem' }}>obstacle avoidance</li>
            <li style={{ marginBottom: '0.5rem' }}>communication with the Arduino Mega through serial</li>
            <li style={{ marginBottom: '0.5rem' }}>user interface logic</li>
          </ul>
          
          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Arduino responsibilities</h3>
          <p>The Arduino Mega is responsible for the real-time control layer. Its main role is to receive commands from the Pi and drive the wheel motors and the plowing motor through motor drivers. This separation keeps timing-critical hardware control on the microcontroller while leaving higher-level planning on the Pi.</p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Boundary definition and communication</h3>
          <p>The communication plan uses LoRa and GPS in stages:</p>
          <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>A GPS and LoRa pair connected to an Arduino Uno collects coordinate points.</li>
            <li style={{ marginBottom: '0.5rem' }}>Those coordinates are sent to the Raspberry Pi.</li>
            <li style={{ marginBottom: '0.5rem' }}>The Pi builds the polygonal boundary of the farm.</li>
            <li style={{ marginBottom: '0.5rem' }}>A starting point is selected.</li>
            <li style={{ marginBottom: '0.5rem' }}>The Pi sends guidance and control information to the Arduino Mega.</li>
            <li style={{ marginBottom: '0.5rem' }}>The Mega drives the motors while the Pi handles navigation logic and task coordination.</li>
          </ol>

          <h2 className="section-title-left" style={{ marginTop: '3rem', fontSize: '2rem' }}>Hardware stack</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Raspberry Pi 5 with Raspberry Pi OS and NVMe storage</li>
            <li style={{ marginBottom: '0.5rem' }}>Arduino Uno & Mega</li>
            <li style={{ marginBottom: '0.5rem' }}>2 LoRa modules</li>
            <li style={{ marginBottom: '0.5rem' }}>2 NEO-6M GPS modules</li>
            <li style={{ marginBottom: '0.5rem' }}>RCWL-1601 ultrasonic sensor & MG995 servo motor</li>
            <li style={{ marginBottom: '0.5rem' }}>MPU-6050 gyroscope / accelerometer</li>
            <li style={{ marginBottom: '0.5rem' }}>4 geared DC wheel motors with encoders & BTS7960 motor drivers</li>
            <li style={{ marginBottom: '0.5rem' }}>1 geared motor for raising and lowering the plowing tool</li>
            <li style={{ marginBottom: '0.5rem' }}>12V lithium-ion battery packs</li>
          </ul>

          <h2 className="section-title-left" style={{ marginTop: '3rem', fontSize: '2rem' }}>Expected impact</h2>
          <p>
            The long-term goal is to reduce physical strain, save time, support education by reducing child labor pressure, improve farming efficiency, and promote renewable energy use in agriculture. The project is also meant to be a step toward locally meaningful technology, not just a copy of equipment built for a different environment and different economic conditions.
          </p>

          <div style={{ marginTop: '4rem' }}>
            <h2 className="section-title-left" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Build Process & Testing</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* Videos */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <video controls style={{ width: '100%', borderRadius: '8px' }}>
                    <source src="/images/projects/Aribot-Assist_photos_and_videos/ea2b5fc5-788a-402e-955e-829e78fd23b3-VIDEO_HIGHLIGHT.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p style={{ marginTop: '0.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>Highlight Video</p>
                </div>
                <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <video controls style={{ width: '100%', borderRadius: '8px' }}>
                    <source src="/images/projects/Aribot-Assist_photos_and_videos/PXL_20250820_195644960.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p style={{ marginTop: '0.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>Component Test 1</p>
                </div>
                <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <video controls style={{ width: '100%', borderRadius: '8px' }}>
                    <source src="/images/projects/Aribot-Assist_photos_and_videos/PXL_20250823_181235029.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p style={{ marginTop: '0.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>Component Test 2</p>
                </div>
              </div>

              {/* Images Gallery */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {[
                  "PXL_20250821_211408200.RAW-01.COVER.jpg",
                  "PXL_20250823_013604592.RAW-01.COVER.jpg",
                  "PXL_20250823_013610461.RAW-01.COVER.jpg",
                  "PXL_20250823_185937185.RAW-01.COVER.jpg",
                  "PXL_20250827_234037567.RAW-01.COVER.jpg",
                  "PXL_20250827_234044404.RAW-01.COVER.jpg",
                  "PXL_20260429_150647435.RAW-01.COVER.jpg",
                  "PXL_20260429_153551638.NIGHT.RAW-01.COVER.jpg",
                  "PXL_20260429_153716509.RAW-01.COVER.jpg",
                  "PXL_20260429_153724200.RAW-01.COVER.jpg",
                  "PXL_20260429_153832936.RAW-01.COVER.jpg",
                  "PXL_20260429_154008906.NIGHT.RAW-01.COVER.jpg",
                  "PXL_20260429_154021101.NIGHT.RAW-01.COVER.jpg",
                  "PXL_20260429_154100310.NIGHT.RAW-01.COVER.jpg",
                  "PXL_20260429_154123671.NIGHT.RAW-01.COVER.jpg",
                  "PXL_20260429_154152339.NIGHT.RAW-01.COVER.jpg"
                ].map((img, index) => (
                  <div key={index} style={{ backgroundColor: 'var(--card-bg)', padding: '0.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <img src={`/images/projects/Aribot-Assist_photos_and_videos/${img}`} alt={`Build Process ${index + 1}`} style={{ width: '100%', borderRadius: '8px', display: 'block' }} loading="lazy" />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

