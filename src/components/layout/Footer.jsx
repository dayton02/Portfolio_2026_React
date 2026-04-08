import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-color)',
      color: 'var(--text-muted)',
      marginTop: 'auto',
      position: 'relative',
      zIndex: 10
    }}>
      <p style={{ marginBottom: '1rem' }}>&copy; {new Date().getFullYear()} Dayton Ng. All rights reserved.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="https://github.com/dayton02" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>GitHub</a>
        <a href="https://linkedin.com/in/dayton-ng" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
