import React from 'react';
import '../index.css';

const Leader = ({ name, title, bio }) => (
  <div className="premium-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px' }}>
    <div className="avatar" aria-hidden style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="4" stroke="var(--accent-color)" strokeWidth="1.5" /><path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" /></svg>
    </div>
    <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '5px' }}>{name}</h4>
    <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>{title}</p>
    {bio && <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{bio}</p>}
  </div>
);

const About = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">About PrimeSource</h1>
        <p>Delivering secure, mission-critical technology solutions to the U.S. Government and defense sectors.</p>

        <section className="company-section" style={{ padding: '60px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div className="premium-card">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '15px', borderBottom: '3px solid var(--accent-color)', display: 'inline-block', paddingBottom: '5px' }}>Mission</h2>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>To provide secure, reliable, and scalable systems that enable mission success for federal and defense customers.</p>
            </div>
            <div className="premium-card">
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '15px', borderBottom: '3px solid var(--accent-color)', display: 'inline-block', paddingBottom: '5px' }}>Vision</h2>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>To be the trusted partner for agencies and military branches seeking resilient and compliant technology solutions.</p>
            </div>
          </div>

          <div className="premium-card" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '30px', textAlign: 'center' }}>Core Values</h2>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', listStyleType: 'none', padding: 0 }}>
              <li style={{ padding: '20px', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <strong style={{ color: 'var(--accent-color)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>Security & Compliance</strong>
                <span style={{ color: '#475569', fontSize: '0.95rem' }}>Rigorous adherence to federal standards and best practices</span>
              </li>
              <li style={{ padding: '20px', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <strong style={{ color: 'var(--accent-color)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>Integrity</strong>
                <span style={{ color: '#475569', fontSize: '0.95rem' }}>Honest partnerships built on transparency and accountability</span>
              </li>
              <li style={{ padding: '20px', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <strong style={{ color: 'var(--accent-color)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>Operational Excellence</strong>
                <span style={{ color: '#475569', fontSize: '0.95rem' }}>Delivering results on-time and under-budget</span>
              </li>
              <li style={{ padding: '20px', background: 'var(--white)', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <strong style={{ color: 'var(--accent-color)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>Customer Focus</strong>
                <span style={{ color: '#475569', fontSize: '0.95rem' }}>Deep understanding of mission-critical requirements</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="location-section premium-card" style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '20px' }}>Location & Proximity</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>Strategically located in the Maryland/DC/Fort Meade corridor, PrimeSource is perfectly positioned to rapidly support intelligence agencies, DoD commands, and federal civilian departments across the National Capital Region.</p>
          </div>
          <div style={{ flex: '0 0 300px', background: '#e0e7ff', padding: '30px', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Headquarters</h3>
            <p style={{ color: '#334155', lineHeight: 1.6 }}>
              309 Benthic Ln<br />
              Laurel, MD 20724<br />
              United States
            </p>
          </div>
        </section>

        <section className="leadership-section" style={{ marginTop: '40px' }}>
          <h2>Leadership Team</h2>
          <div className="leaders-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '30px' }}>
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
          <div className="certifications-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '25px' }}>
            <div style={{ padding: '10px 20px', background: 'var(--white)', border: '1px solid #cbd5e1', borderRadius: '50px', color: 'var(--primary-color)', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>FedRAMP Authorized</div>
            <div style={{ padding: '10px 20px', background: 'var(--white)', border: '1px solid #cbd5e1', borderRadius: '50px', color: 'var(--primary-color)', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>FISMA Compliant</div>
            <div style={{ padding: '10px 20px', background: 'var(--white)', border: '1px solid #cbd5e1', borderRadius: '50px', color: 'var(--primary-color)', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>CMMC Level 2</div>
            <div style={{ padding: '10px 20px', background: 'var(--white)', border: '1px solid #cbd5e1', borderRadius: '50px', color: 'var(--primary-color)', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>ISO 27001</div>
            <div style={{ padding: '10px 20px', background: 'var(--white)', border: '1px solid #cbd5e1', borderRadius: '50px', color: 'var(--primary-color)', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>SOC 2 Type II</div>
            <div style={{ padding: '10px 20px', background: 'var(--white)', border: '1px solid #cbd5e1', borderRadius: '50px', color: 'var(--primary-color)', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>NIST Aligned</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
