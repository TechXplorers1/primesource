import React from 'react';
import '../index.css';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';

const services = [
    { title: 'Cybersecurity', description: 'Protection for mission-critical systems and compliance (FISMA, FedRAMP).', icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5 3.8 9.8 9 11 5.2-1.2 9-6 9-11V5l-9-4z" stroke="#e74c3c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) },
    { title: 'Cloud Infrastructure', description: 'Secure cloud architectures for classified and unclassified workloads.', icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 17.58A5 5 0 0018 7H7a4 4 0 00-1.5 7.78" stroke="#2c3e50" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) },
    { title: 'IT Consulting', description: 'Advisory services for modernization, strategy and program management.', icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4" stroke="#34495e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l5-5 5 5" stroke="#34495e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) },
    { title: 'Defense Systems Support', description: 'Lifecycle support for defense platforms and integration.', icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#2c3e50" strokeWidth="1.2"/><path d="M8 12h8" stroke="#2c3e50" strokeWidth="1.2" strokeLinecap="round"/></svg>
    ) },
    { title: 'Federal Contracting', description: 'Experienced proposal teams and federal procurement support.', icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#2c3e50" strokeWidth="1.2"/></svg>
    ) },
    { title: 'Software Development', description: 'Secure, maintainable software for mission-critical needs.', icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18l6-6-6-6" stroke="#e74c3c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 6l-6 6 6 6" stroke="#e74c3c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) },
];

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection 
                title={"Delivering Mission‑Critical Technology Solutions"}
                subtitle={"Secure, scalable solutions for U.S. Government, Federal, Army and Navy programs."}
                ctaText={"Explore Services"}
            />

            <section className="container about-overview">
                <div className="about-grid">
                    <div>
                        <h2>About Prime Source</h2>
                        <p>Prime Source delivers secure, scalable, and mission-critical technology solutions focused on federal and defense customers. We prioritize security, compliance, and operational readiness.</p>
                    </div>
                    <div>
                        <h3>Security-First</h3>
                        <p>We follow government-compliant practices and support accreditation efforts including FedRAMP, FISMA, and NIST frameworks.</p>
                    </div>
                </div>
            </section>

            <ServicesGrid services={services} />

            <section className="gov-focus container">
                <h2>Government & Defense Focus</h2>
                <p>Experienced teams delivering on Army, Navy and civilian agency requirements with cleared personnel and secure processes.</p>
            </section>

            <section className="cta-section">
                <div className="container cta-inner">
                    <h2>Partner With Prime Source</h2>
                    <p>Let us support your mission—request a proposal or contact our government programs team today.</p>
                    <a href="/contact" className="cta-button">Contact Us</a>
                </div>
            </section>
        </div>
    );
};

export default Home;
