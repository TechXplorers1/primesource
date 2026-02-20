import React from 'react';
import '../index.css';

const Leader = ({ name, title, bio }) => (
  <div className="leader-card">
    <div className="avatar" aria-hidden>
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3" stroke="var(--secondary-color)" strokeWidth="1.2" /><path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" stroke="var(--secondary-color)" strokeWidth="1.2" strokeLinecap="round" /></svg>
    </div>
    <h4>{name}</h4>
    <p className="muted">{title}</p>
    {bio && <p className="leader-bio">{bio}</p>}
  </div>
);

const About = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">About PrimeSource</h1>
        <p>Delivering secure, mission-critical technology solutions to the U.S. Government and defense sectors.</p>

        <section className="company-section">
          <h2>Mission</h2>
          <p>To provide secure, reliable, and scalable systems that enable mission success for federal and defense customers.</p>

          <h2>Vision</h2>
          <p>To be the trusted partner for agencies and military branches seeking resilient and compliant technology solutions.</p>

          <h2>Core Values</h2>
          <ul className="values-list">
            <li><strong>Security & Compliance:</strong> Rigorous adherence to federal standards and best practices</li>
            <li><strong>Integrity:</strong> Honest partnerships built on transparency and accountability</li>
            <li><strong>Operational Excellence:</strong> Delivering results on-time and under-budget</li>
            <li><strong>Customer Focus:</strong> Deep understanding of mission-critical requirements</li>
          </ul>
        </section>

        <section className="location-section" style={{ marginTop: '40px' }}>
          <h2>Location & Proximity</h2>
          <p><strong>Headquarters:</strong><br />
            309 Benthic Ln<br />
            Laurel, MD 20724<br />
            United States</p>
          <p style={{ marginTop: '15px' }}>Strategically located in the Maryland/DC/Fort Meade corridor, PrimeSource is perfectly positioned to rapidly support intelligence agencies, DoD commands, and federal civilian departments across the National Capital Region.</p>
        </section>

        <section className="leadership-section" style={{ marginTop: '40px' }}>
          <h2>Leadership Team</h2>
          <div className="leaders-grid">
            <Leader
              name="Jane Doe"
              title="CEO & Founder"
              bio="20+ years in federal technology with prior Army experience. MBA from Georgetown University."
            />
            <Leader
              name="John Smith"
              title="CTO"
              bio="Former Naval architect. Expertise in cloud security and zero-trust infrastructure design."
            />
            <Leader
              name="Alex Johnson"
              title="VP, Government Programs"
              bio="15-year track record securing and executing federal contracts for DoD and civilian agencies."
            />
          </div>
        </section>

        <section className="certifications-section" style={{ marginTop: '40px' }}>
          <h3>Certifications & Compliance</h3>
          <p style={{ marginBottom: '18px', color: '#666' }}>PrimeSource maintains strict adherence to government standards and holds the following certifications:</p>
          <div className="certifications-grid">
            <div className="cert-badge" style={{ background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)' }}>FedRAMP Authorized</div>
            <div className="cert-badge" style={{ background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)' }}>FISMA Compliant</div>
            <div className="cert-badge" style={{ background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)' }}>CMMC Level 2</div>
            <div className="cert-badge" style={{ background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)' }}>ISO 27001</div>
            <div className="cert-badge" style={{ background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)' }}>SOC 2 Type II</div>
            <div className="cert-badge" style={{ background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%)' }}>NIST Aligned</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
