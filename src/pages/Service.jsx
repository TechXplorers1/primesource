import React from 'react';
import '../index.css';

const Section = ({ title, children }) => (
    <section className="service-section container">
        <h2>{title}</h2>
        <div className="service-content">{children}</div>
    </section>
);

const Service = () => {
    return (
        <div className="page-container">
            <header className="container">
                <h1 className="page-title">Services</h1>
                <p className="lead">Comprehensive offerings tailored for federal and defense missions.</p>
            </header>

            <Section title="Federal IT Services">
                <p>Systems engineering, program management, and enterprise IT modernization for federal agencies. We provide COTS/GOTS integration and sustainment services.</p>
            </Section>

            <Section title="Cybersecurity & Compliance">
                <p>Risk management, penetration testing, continuous monitoring, and compliance readiness (NIST, FISMA, FedRAMP). We design zero-trust architectures and incident response playbooks.</p>
            </Section>

            <Section title="Cloud & Infrastructure">
                <p>Secure cloud migration, hybrid architectures, containerization, and managed hosting with strict controls for sensitive workloads.</p>
            </Section>

            <Section title="Defense & Military Tech Support">
                <p>Platform sustainment, interoperability, mission systems integration, and field support for Army and Navy programs.</p>
            </Section>

            <Section title="Data Analytics & Systems Integration">
                <p>Data pipelines, analytics, and system-of-systems integration to drive actionable insights and operational advantage.</p>
            </Section>

            <section className="container contact-cta">
                <h3>Request a Proposal</h3>
                <p>Contact our team for statements of work, pricing, and cleared personnel availability.</p>
                <a className="cta-button" href="/contact">Contact Us</a>
            </section>
        </div>
    );
};

export default Service;
