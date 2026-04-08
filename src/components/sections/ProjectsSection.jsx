import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Climb",
      label: "Featured Project",
      image: "/images/featured-project.jpg",
      description: "\"Climb\" is a 2D vertical platformer that challenges players to ascend through treacherous rock formations with timing and strategic movement. Using simple three-button control systems, players must carefully navigate between platforms... Usage of the punch mechanism to clear obstacles and collection of power-ups are helpful for achieving higher scores.",
      tech: ["C++", "Procreate", "Git", "AEngine"],
      link: "#"
    },
    // We can add more from project-* legacy files later
  ];

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 10 }}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem' }}
      >
        Latest <span className="text-gradient">Projects</span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', padding: 0 }}
          >
            <div style={{ flex: '1 1 300px', minHeight: '300px', position: 'relative' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>
            
            <div style={{ flex: '1 1 400px', padding: '3rem' }}>
              <span style={{ color: 'var(--accent-teal)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>{project.label}</span>
              <h3 style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>{project.title}</h3>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-teal)', borderRadius: '4px', border: '1px solid rgba(0,240,255,0.2)' }}>
                    {t}
                  </span>
                ))}
              </div>
              
              <a href={project.link} className="btn btn-primary">View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
