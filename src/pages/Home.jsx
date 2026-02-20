import React from 'react';
import '../index.css';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';

const services = [
  {
    title: 'Cybersecurity', description: 'Protection for mission-critical systems and compliance (FISMA, FedRAMP).', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5 3.8 9.8 9 11 5.2-1.2 9-6 9-11V5l-9-4z" stroke="var(--accent-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    )
  },
  {
    title: 'Cloud Infrastructure', description: 'Secure cloud architectures for classified and unclassified workloads.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 17.58A5 5 0 0018 7H7a4 4 0 00-1.5 7.78" stroke="var(--secondary-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    )
  },
  {
    title: 'IT Consulting', description: 'Advisory services for modernization, strategy and program management.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4" stroke="var(--secondary-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 10l5-5 5 5" stroke="var(--secondary-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    )
  },
  {
    title: 'Defense Systems Support', description: 'Lifecycle support for defense platforms and integration.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="var(--secondary-color)" strokeWidth="1.2" /><path d="M8 12h8" stroke="var(--secondary-color)" strokeWidth="1.2" strokeLinecap="round" /></svg>
    )
  },
  {
    title: 'Federal Contracting', description: 'Experienced proposal teams and federal procurement support.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--secondary-color)" strokeWidth="1.2" /></svg>
    )
  },
  {
    title: 'Software Development', description: 'Secure, maintainable software for mission-critical needs.', icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18l6-6-6-6" stroke="var(--accent-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 6l-6 6 6 6" stroke="var(--accent-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
          <div style={{ textAlign: 'center' }}><span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>CAGE Code</span> <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>10SN3</strong></div>
          <div style={{ textAlign: 'center' }}><span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>UEI</span> <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>NBBFD5KEJHW6</strong></div>
          <div style={{ textAlign: 'center' }}><span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>SAM.gov</span> <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>Active Registration</strong></div>
          <div style={{ textAlign: 'center' }}><span style={{ color: 'var(--accent-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '5px' }}>Clearances</span> <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>TS/SCI Facility</strong></div>
        </div>
      </section>

      <section className="container about-overview" style={{ padding: '80px 20px' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
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

      <section className="testimonials-section container" style={{ padding: '80px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: 'var(--accent-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Client Success</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginTop: '10px' }}>Past Performance Highlights</h2>
        </div>
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className="testimonial-card" style={{ background: 'var(--white)', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{ color: 'var(--accent-color)', opacity: 0.2, fontSize: '4rem', position: 'absolute', top: '10px', left: '20px', fontFamily: 'serif' }}>"</div>
            <p className="quote" style={{ fontSize: '1.1rem', color: '#334155', fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1, lineHeight: 1.7 }}>PrimeSource modernized our critical infrastructure systems ensuring 99.99% uptime and zero security incidents.</p>
            <p className="author" style={{ color: 'var(--primary-color)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>U.S. Army Base Operations</p>
          </div>
          <div className="testimonial-card" style={{ background: 'var(--white)', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{ color: 'var(--accent-color)', opacity: 0.2, fontSize: '4rem', position: 'absolute', top: '10px', left: '20px', fontFamily: 'serif' }}>"</div>
            <p className="quote" style={{ fontSize: '1.1rem', color: '#334155', fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1, lineHeight: 1.7 }}>Their DevSecOps implementation accelerated deployment cycles by 40% while ensuring strict FISMA compliance.</p>
            <p className="author" style={{ color: 'var(--primary-color)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Federal Civilian Agency</p>
          </div>
          <div className="testimonial-card" style={{ background: 'var(--white)', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{ color: 'var(--accent-color)', opacity: 0.2, fontSize: '4rem', position: 'absolute', top: '10px', left: '20px', fontFamily: 'serif' }}>"</div>
            <p className="quote" style={{ fontSize: '1.1rem', color: '#334155', fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1, lineHeight: 1.7 }}>Consistently delivers complex cybersecurity requirements under stringent budget and timeline constraints.</p>
            <p className="author" style={{ color: 'var(--primary-color)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Department of Defense</p>
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
