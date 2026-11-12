import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FadeInSection from './FadeInSection';

export default function Fabrication() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Intermediate Axis Theorem Model",
      description: "A mechanical model designed to demonstrate the intermediate axis theorem (Dzhanibekov effect). The design focuses on balanced mass distribution and low-friction rotation.",
      assets: [
        { type: "video", src: "/images/projects/3D_design/intermediate_axis.mp4", label: "Motion Simulation" },
        { type: "image", src: "/images/projects/3D_design/intermediate_axis.jpg", label: "CAD Overview" }
      ]
    },
    {
      title: "Telescope Mounting System",
      description: "Structural design for a telescope pole and mounting system, including upgrades for stability and precision tracking.",
      assets: [
        { type: "video", src: "/images/projects/3D_design/tele-pole first demo v5.mp4", label: "Motion Simulation Demo" },
        { type: "image", src: "/images/projects/3D_design/tele-pole first_upgrade.jpg", label: "First Upgrade (Photo)" },
        { type: "image", src: "/images/projects/3D_design/tele-pole first_upgrade.png", label: "First Upgrade (Render)" },
        { type: "image", src: "/images/projects/3D_design/telescope pole copy v3.jpg", label: "V3 Assembly" },
        { type: "image", src: "/images/projects/3D_design/telescope pole copy v3_solid.png", label: "Solid Model Render" }
      ]
    },
    {
      title: "Aerial Drone & Brushless Motor Designs",
      description: "CAD modeling of multi-rotor UAV airframes, aerodynamic enclosures with internal avionics packaging, and a custom brushless DC (BLDC) motor stator with copper coil windings.",
      minCardWidth: "450px",
      imageHeight: "340px",
      assets: [
        { type: "image", src: "/images/projects/3D_design/drone_project 1.png", label: "Dual-Boom Quadrotor Concept", scale: 1.25 },
        { type: "image", src: "/images/projects/3D_design/drone_projrct_2.jpg", label: "Compact Camera Drone (CAD View)", scale: 1.35 },
        { type: "image", src: "/images/projects/3D_design/drone_project_2_1.png", label: "Translucent Shell & Internal Layout", scale: 1.35 },
        { type: "image", src: "/images/projects/3D_design/Mini Flying Drone_ v3.jpg", label: "Brushless Motor Stator & Windings", scale: 1.65 }
      ]
    },
    {
      title: "3-Phase Electricity Generator",
      description: "Mechanical and electromagnetic layout for a 3-phase rotary generator, featuring a geared central rotor and radial permanent magnet pole arrays.",
      assets: [
        { type: "image", src: "/images/projects/3D_design/3 Phase Electricity Generator. v3.png", label: "Rotor-Stator Prototype Concept" },
        { type: "image", src: "/images/projects/3D_design/3 Phase Electricity v3.jpg", label: "Multi-Pole Magnetic Array & Gear Assembly" }
      ]
    },
    {
      title: "Photoelectric Effect Experimental Setup",
      description: "CAD modeling of an experimental chamber for demonstrating the photoelectric effect, designed for precise alignment of light sources and sensors.",
      minCardWidth: "450px",
      imageHeight: "340px",
      assets: [
        { type: "image", src: "/images/projects/3D_design/photoelectric diagram v1.jpg", label: "System Diagram", scale: 1.2 },
        { type: "image", src: "/images/projects/3D_design/Photoelectric effect v24.jpg", label: "Final Design", scale: 1.55 },
        { type: "image", src: "/images/projects/3D_design/Photoelectric effect_view.jpg", label: "Internal Chamber View", scale: 1.2 }
      ]
    },
    {
      title: "Electromagnetic Coil Gun",
      description: "A conceptual model for an electromagnetic projectile launcher, focusing on coil placement and barrel alignment.",
      assets: [
        { type: "image", src: "/images/projects/3D_design/The coil_gun_model.jpg", label: "Model Preview" }
      ]
    },
    {
      title: "Magnetic Ball Accelerator",
      description: "A mechanical design for a magnetic ball accelerator, focusing on circular track alignment and acceleration stages using permanent magnets.",
      assets: [
        { type: "image", src: "/images/projects/3D_design/First Lab v1.png", label: "Circular Magnetic Ring Concept" },
        { type: "image", src: "/images/projects/3D_design/Praticale_project v10.jpg", label: "Multi-Stage Slotted Track Design" }
      ]
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
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>Fusion 360 & Fabrication</h1>
          <p className="hero-description" style={{ margin: '0 auto', maxWidth: '600px' }}>
            A collection of CAD models, mechanical designs, and fabrication-ready projects built using Fusion 360.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="about-section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="page-columns about-content" style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto' }}>
          
          <FadeInSection>
            <h2 className="section-title-left" style={{ fontSize: '2rem' }}>Overview</h2>
            <p>
              My work in Fusion 360 bridges the gap between theoretical physics concepts and physical reality. I use CAD as a tool for both visualization and preparation for fabrication, whether through 3D printing, CNC machining, or manual assembly. This gallery highlights several key projects where digital design played a crucial role in the development process.
            </p>
          </FadeInSection>

          {projects.map((project, pIndex) => (
            <FadeInSection key={pIndex}>
              <div style={{ marginTop: '4rem' }}>
                <h2 className="section-title-left" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{project.title}</h2>
                <p style={{ marginBottom: '2rem' }}>{project.description}</p>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: `repeat(auto-fit, minmax(${project.minCardWidth || '300px'}, 1fr))`, 
                  gap: '1.5rem' 
                }}>
                  {project.assets.map((asset, aIndex) => (
                    <div key={aIndex} style={{ 
                      backgroundColor: 'var(--card-bg)', 
                      padding: '1rem', 
                      borderRadius: '12px', 
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      {asset.type === "video" ? (
                        <video controls style={{ width: '100%', borderRadius: '8px' }}>
                          <source src={asset.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div style={{
                          width: '100%',
                          minHeight: project.imageHeight || 'auto',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          flexGrow: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <img 
                            src={asset.src} 
                            alt={asset.label} 
                            style={{ 
                              width: '100%', 
                              height: '100%',
                              borderRadius: '8px', 
                              objectFit: 'contain',
                              transform: asset.scale ? `scale(${asset.scale})` : 'none'
                            }} 
                            loading="lazy" 
                          />
                        </div>
                      )}
                      <p style={{ marginTop: '0.75rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                        {asset.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}

        </div>
      </div>
    </div>
  );
}
