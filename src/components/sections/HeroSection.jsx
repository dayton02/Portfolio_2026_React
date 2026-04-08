import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative', 
      zIndex: 10,
      pointerEvents: 'none' // Let clicks pass through to the 3D canvas behind
    }}>
      <div style={{ 
        maxWidth: '600px', 
        pointerEvents: 'auto' // Re-enable pointer events for the text area
      }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: 'var(--accent-teal)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          Welcome to my mini space
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: '4rem', marginBottom: '1rem' }}
        >
          I'm <span className="text-gradient">Dayton Ng</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}
        >
          <span style={{ padding: '0.5rem 1rem', background: 'var(--surface)', borderRadius: '20px', border: '1px solid var(--accent-teal)' }}>Game Developer</span>
          <span style={{ padding: '0.5rem 1rem', background: 'var(--surface)', borderRadius: '20px', border: '1px solid var(--border)' }}>Software Engineer</span>
          <span style={{ padding: '0.5rem 1rem', background: 'var(--surface)', borderRadius: '20px', border: '1px solid var(--border)' }}>Outdoor Enthusiast</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px' }}
        >
          I build robust game systems, craft immersive user tools, and create visually stunning interactive web experiences. Let's make something awesome together.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem' }}
        >
          <a href="#about" className="btn btn-primary">About Me</a>
          <a href="#projects" className="btn btn-secondary">View Work</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
