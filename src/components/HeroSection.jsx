import React from 'react';

const HeroSection = ({ title, subtitle, ctaText }) => {
  return (
    <section className="hero">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', maxWidth: '800px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '20px', fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>{title}</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '35px', opacity: 0.9, lineHeight: 1.6 }}>{subtitle}</p>
          <a href="/contact" className="cta-button">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;