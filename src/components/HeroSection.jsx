import React from 'react';

const HeroSection = ({ title, subtitle, ctaText }) => {
  return (
    <section className="hero">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="glass-panel" style={{ padding: '50px 30px', maxWidth: '900px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '15px', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>{title}</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9, lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 30px' }}>{subtitle}</p>
          <a href="/contact" className="cta-button">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;