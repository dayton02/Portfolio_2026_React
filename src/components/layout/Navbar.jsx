import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        background: scrolled ? 'rgba(5, 11, 20, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>
        <span className="text-gradient">D</span>
        <span style={{ color: 'var(--text-muted)', margin: '0 8px' }}>|</span>
        <span className="text-gradient">N</span>
      </div>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        <li><a href="#about" style={{ color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>About</a></li>
        <li><a href="#projects" style={{ color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
