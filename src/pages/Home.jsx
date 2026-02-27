import React from 'react';
import '../index.css';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';

const services = [
  {
    title: 'Cybersecurity', description: 'Protection for mission-critical systems and compliance (FISMA, FedRAMP).', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
    )
  },
  {
    title: 'Cloud Infrastructure', description: 'Secure cloud architectures for classified and unclassified workloads.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z" /><path d="M12 12v7" /><path d="M9 16l3 3 3-3" /></svg>
    )
  },
  {
    title: 'IT Consulting', description: 'Advisory services for modernization, strategy and program management.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
    )
  },
  {
    title: 'Defense Systems Support', description: 'Lifecycle support for defense platforms and integration.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M2 12h2" /><path d="M20 12h2" /></svg>
    )
  },
  {
    title: 'Federal Contracting', description: 'Experienced proposal teams and federal procurement support.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
    )
  },
  {
    title: 'Software Development', description: 'Secure, maintainable software for mission-critical needs.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    )
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection
        title={"PrimeSource – Trusted Technology Partner for Federal & Defense Agencies"}
        subtitle={"Delivering secure, scalable, and mission-critical solutions compliant with strict government standards."}
        ctaText={"Partner With Us"}
      />

      <section className="company-data-banner" style={{ marginTop: '-40px', position: 'relative', zIndex: 10, padding: '0 20px' }}>
        <div className="container" style={{ background: 'var(--white)', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', padding: '30px', borderTop: '4px solid var(--accent-color)' }}>
          <div style={{ textAlign: 'center' }}><span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>SAM.gov</span> <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>Active Registration</strong></div>
          <div style={{ textAlign: 'center' }}><span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>Clearances</span> <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>TS/SCI Facility</strong></div>
        </div>
      </section>

      <section className="container about-overview" style={{ padding: '80px 20px' }}>
        <div className="about-grid">
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px', lineHeight: 1.2 }}>About PrimeSource</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>PrimeSource delivers secure, scalable, and mission-critical technology solutions focused on federal and defense customers. We prioritize security, compliance, and operational readiness to ensure mission success for our government partners.</p>
            <a href="/about" style={{ color: 'var(--accent-color)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Learn more about our mission <span style={{ marginLeft: '5px' }}>&rarr;</span></a>
          </div>
          <div style={{ background: '#e0e7ff', padding: '40px', borderRadius: '12px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '15px' }}>Security-First & Compliant</h3>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>We strictly follow FAR and DFARS requirements, engaging in government-compliant practices and supporting accreditation efforts including FedRAMP, FISMA, and NIST frameworks.</p>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: 'var(--accent-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Our Expertise</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginTop: '10px' }}>Core Capabilities</h2>
        </div>
        <ServicesGrid services={services} />
      </div>

      <section className="why-choose-us container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '50px' }}>Why Federal Agencies Choose PrimeSource</h2>
        <div className="reasons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div className="reason-card" style={{ background: 'var(--white)', padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="var(--accent-color)" strokeWidth="1.5" /><path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" stroke="var(--accent-color)" strokeWidth="1.5" fill="currentColor" />
              </svg>
            </div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', marginBottom: '15px' }}>Proven Track Record</h4>
            <p style={{ color: '#475569', lineHeight: 1.6 }}>500+ federal projects successfully delivered ensuring on-time and on-budget performance.</p>
          </div>
          <div className="reason-card" style={{ background: 'var(--white)', padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1z" stroke="var(--secondary-color)" strokeWidth="1.5" /><path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" stroke="var(--secondary-color)" strokeWidth="1.5" />
              </svg>
            </div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', marginBottom: '15px' }}>Cleared Personnel</h4>
            <p style={{ color: '#475569', lineHeight: 1.6 }}>Dedicated team of professionals with active security clearances ready to deploy.</p>
          </div>
          <div className="reason-card" style={{ background: 'var(--white)', padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" stroke="var(--secondary-color)" strokeWidth="1.5" /><circle cx="9" cy="8" r="3" stroke="var(--secondary-color)" strokeWidth="1.5" /><path d="M9 11c-4.42 0-8 1.79-8 4v3h16v-3c0-2.21-3.58-4-8-4z" stroke="var(--secondary-color)" strokeWidth="1.5" />
              </svg>
            </div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', marginBottom: '15px' }}>Strict Compliance</h4>
            <p style={{ color: '#475569', lineHeight: 1.6 }}>Adherence to FAR/DFARS clauses, NIST SP 800-171, and robust ISO quality management.</p>
          </div>
        </div>
      </section>



      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready to Partner?</h2>
          <p>Contact our government programs team for teaming agreements, proposals, and capabilities briefings.</p>
          <a href="/contact" className="cta-button">Contact Our Team</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
