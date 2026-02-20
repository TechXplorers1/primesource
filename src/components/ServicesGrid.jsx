import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesGrid = ({ services }) => {
  return (
    <section className="services-preview container">
      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
