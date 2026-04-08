import React from 'react';
import CanvasModel from '../components/canvas/CanvasModel';
import HeroSection from '../components/sections/HeroSection';

const Home = () => {
  return (
    <div className="home-container" style={{ position: 'relative' }}>
      <CanvasModel />
      <HeroSection />
      {/* <AboutSection /> Placeholder */}
      {/* <ProjectsSection /> Placeholder */}
    </div>
  );
};

export default Home;
