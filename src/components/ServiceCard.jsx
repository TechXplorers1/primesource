import React from 'react';
import '../index.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden>
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </article>
  );
};

export default ServiceCard;
