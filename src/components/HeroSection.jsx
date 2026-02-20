import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const HeroSection = ({ title, subtitle, ctaText = 'Explore Services', ctaLink = '/service' }) => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>{title}</h1>
        <p className="hero-sub">{subtitle}</p>
        <Link to={ctaLink} className="cta-button" aria-label={ctaText}>{ctaText}</Link>
      </div>
    </section>
  );
};

export default HeroSection;
