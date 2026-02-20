import React, { useState, useEffect } from 'react';
import '../index.css';
import {
  FederalITImage,
  CybersecurityImage,
  CloudImage,
  DefenseImage,
  AnalyticsImage,
  SoftwareDevelImage,
} from '../components/ServiceImages';

const ServiceDetailCard = ({ title, description, features, ImageComponent }) => (
  <article className="service-detailed-card">
    <div className="service-image">
      <div className="service-image-container">
        <ImageComponent />
      </div>
    </div>
    <div className="service-content-wrap">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="service-features">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  </article>
);

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: 'Federal IT Services',
      description: 'End-to-end IT solutions designed specifically for federal agencies and departments. We provide systems engineering, program management, and enterprise modernization services.',
      features: [
        'Legacy system modernization',
        'Enterprise architecture',
        'COTS/GOTS integration',
        'Program management oversight',
      ],
      ImageComponent: FederalITImage,
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions tailored for government and defense requirements. We ensure compliance with NIST, FISMA, and FedRAMP standards while protecting critical infrastructure.',
      features: [
        'Risk assessments & penetration testing',
        'NIST/FISMA compliance readiness',
        'Zero-trust architecture design',
        'Incident response & forensics',
      ],
      ImageComponent: CybersecurityImage,
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Secure cloud solutions for both classified and unclassified workloads. Hybrid architectures, containerization, and managed hosting with strict government controls.',
      features: [
        'FedRAMP-authorized cloud migration',
        'Hybrid cloud architectures',
        'Kubernetes & containerization',
        'Infrastructure-as-Code (IaC)',
      ],
      ImageComponent: CloudImage,
    },
    {
      title: 'Defense Systems Support',
      description: 'Lifecycle support and sustainment services for military platforms, including integration, testing, and field support for Army and Navy systems.',
      features: [
        'Platform sustainment & patches',
        'System integration & testing',
        'Field support & maintenance',
        'Interoperability solutions',
      ],
      ImageComponent: DefenseImage,
    },
    {
      title: 'Data Analytics & Integration',
      description: 'Advanced analytics platforms and system-of-systems integration to drive operational insights and decision-making for federal missions.',
      features: [
        'Big data pipelines & processing',
        'Real-time analytics dashboards',
        'System-of-systems integration',
        'Data governance frameworks',
      ],
      ImageComponent: AnalyticsImage,
    },
    {
      title: 'Software Development',
      description: 'Secure, maintainable, and compliant software solutions built for mission-critical federal and defense applications with rigorous QA.',
      features: [
        'Custom application development',
        'Security-by-design practices',
        'Agile/DevSecOps methodologies',
        'Software supply chain security',
      ],
      ImageComponent: SoftwareDevelImage,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Services</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px' }}>Comprehensive offerings tailored for federal and defense missions</p>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '20px 0' }}>
          <button
            onClick={prevSlide}
            style={{ position: 'absolute', left: '-40px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', fontSize: '3rem', cursor: 'pointer', color: 'var(--primary-color)' }}>
            &#10094;
          </button>

          <div style={{ minHeight: '400px' }}>
            <ServiceDetailCard
              title={services[currentIndex].title}
              description={services[currentIndex].description}
              features={services[currentIndex].features}
              ImageComponent={services[currentIndex].ImageComponent}
            />
          </div>

          <button
            onClick={nextSlide}
            style={{ position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', fontSize: '3rem', cursor: 'pointer', color: 'var(--primary-color)' }}>
            &#10095;
          </button>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            {services.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  height: '12px', width: '12px', margin: '0 8px',
                  backgroundColor: idx === currentIndex ? 'var(--primary-color)' : '#cbd5e1',
                  borderRadius: '50%', display: 'inline-block', cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        <section className="container contact-cta" style={{ marginTop: '60px' }}>
          <h3>Request a Proposal</h3>
          <p>Contact our team for statements of work, pricing, and cleared personnel availability.</p>
          <a className="cta-button" href="/contact">Contact Us</a>
        </section>
      </div>
    </div>
  );
};

export default Service;
