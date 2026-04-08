import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 10 }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}
      >
        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <div className="glass-panel" style={{ padding: '1rem', borderRadius: '24px' }}>
            <img 
              src="/images/profile.jpg" 
              alt="Dayton Ng" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} 
            />
          </div>
        </div>
        
        <div style={{ flex: '2 1 400px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            Developer, Designer,<br/>Gamer, <span className="text-gradient">Adventurer</span>
          </h2>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Hello! I'm Dayton. Most days, you'll find me deep in VS or refining gameplay mechanics, all driven by a goal to create experiences that people truly love to play.
          </p>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            My journey started back when I was a kid, constantly trying to keep up with my sister in whatever game we were playing. Those hours in front of the monitor didn't just make me a gamer but they also sparked a curiosity about how those worlds were built and I haven't stopped thinking since.
          </p>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            When I'm not behind a monitor, I'm usually chasing a different kind of precision or immersion. Whether I'm focusing on a target at the archery range or exploring a reef while scuba diving, I love the chill and relaxation that comes with outdoor adventures. I try to bring that same sense of focus and discovery back to my work in game design.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
