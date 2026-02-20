import React from 'react';
import '../index.css';

const Leader = ({ name, title }) => (
    <div className="leader-card">
        <div className="avatar" aria-hidden>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3" stroke="#34495e" strokeWidth="1.2"/><path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" stroke="#34495e" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </div>
        <h4>{name}</h4>
        <p className="muted">{title}</p>
    </div>
);

const About = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h1 className="page-title">About Prime Source</h1>
                <p className="lead">Delivering secure, mission-critical technology solutions to the U.S. Government and defense sectors.</p>

                <section className="company-section">
                    <h2>Mission</h2>
                    <p>To provide secure, reliable, and scalable systems that enable mission success for federal and defense customers.</p>

                    <h2>Vision</h2>
                    <p>To be the trusted partner for agencies and military branches seeking resilient and compliant technology solutions.</p>

                    <h2>Core Values</h2>
                    <ul className="values-list">
                        <li>Security & Compliance</li>
                        <li>Integrity</li>
                        <li>Operational Excellence</li>
                        <li>Customer Focus</li>
                    </ul>
                </section>

                <section className="leadership-section">
                    <h2>Leadership</h2>
                    <div className="leaders-grid">
                        <Leader name="Jane Doe" title="CEO" />
                        <Leader name="John Smith" title="CTO" />
                        <Leader name="Alex Johnson" title="VP, Programs" />
                    </div>
                </section>

                <section className="compliance-section">
                    <h2>Security & Compliance</h2>
                    <p>We maintain strict adherence to NIST frameworks and support FedRAMP, FISMA, and other federal compliance requirements. Our processes, personnel, and infrastructure are aligned with government standards.</p>
                </section>
            </div>
        </div>
    );
};

export default About;
