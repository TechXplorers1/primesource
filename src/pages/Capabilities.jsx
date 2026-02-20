import React from 'react';
import '../index.css';

const Capabilities = () => {
    return (
        <div className="page-container">
            <div className="container" style={{ padding: '60px 0' }}>
                <h1 className="page-title">Capability Statement</h1>
                <p style={{ maxWidth: '800px', marginBottom: '40px' }}>PrimeSource is a trusted technology partner delivering secure, scalable, and mission-critical solutions to U.S. Federal, Army, Navy, and civilian agencies.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '40px' }}>
                    <div className="capabilities-main">
                        <section style={{ marginBottom: '40px' }}>
                            <h2 style={{ borderBottom: '2px solid var(--accent-color)', paddingBottom: '10px' }}>Core Competencies</h2>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Cybersecurity & Risk Management:</strong> RMF Support, NIST Compliance, Vulnerability Management, Zero Trust Architecture.</li>
                                <li><strong>IT Infrastructure Services:</strong> Network Management, Enterprise IT Support, Help Desk Operations, Systems Administration.</li>
                                <li><strong>Cloud Solutions:</strong> Secure Cloud Migration, multi-cloud strategy (AWS GovCloud, Azure Government).</li>
                                <li><strong>Software Development:</strong> Custom Application Development, Secure DevSecOps Pipelines, Legacy Modernization.</li>
                                <li><strong>Data Analytics:</strong> Systems Engineering, Data Systems Integration, BI and Reporting.</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '40px' }}>
                            <h2 style={{ borderBottom: '2px solid var(--accent-color)', paddingBottom: '10px' }}>Differentiators</h2>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Agile Execution:</strong> Rapid deployment and iterative delivery tailored to mission objectives.</li>
                                <li><strong>Security-First Approach:</strong> Secure development lifecycle baked into every project.</li>
                                <li><strong>Compliance-Driven Delivery:</strong> Adherence to FAR/DFARS and NIST standards.</li>
                                <li><strong>Cleared Professionals:</strong> Facility clearance with highly trained TS/SCI personnel.</li>
                                <li><strong>Federal Acquisition Knowledge:</strong> Deep understanding of federal procurement processes and contract compliance.</li>
                            </ul>
                        </section>
                    </div>

                    <div className="capabilities-sidebar">
                        <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '4px', borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ marginTop: '0', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Company Data</h3>
                            <p style={{ margin: '10px 0' }}><strong>Legal Name:</strong> PrimeSource LLC</p>
                            <p style={{ margin: '10px 0' }}><strong>CAGE Code:</strong> 10SN3</p>
                            <p style={{ margin: '10px 0' }}><strong>UEI:</strong> NBBFD5KEJHW6</p>
                            <p style={{ margin: '10px 0' }}><strong>Business Type:</strong> Small Business</p>

                            <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>NAICS Codes</h4>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '0.9rem' }}>
                                <li><strong>541511</strong> – Custom Computer Programming</li>
                                <li><strong>541512</strong> – Computer Systems Design</li>
                                <li><strong>541513</strong> – Computer Facilities Management</li>
                                <li><strong>541519</strong> – Other Computer Related Services</li>
                                <li><strong>541330</strong> – Engineering Services</li>
                                <li><strong>541990</strong> – Professional Services</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <a href="/PrimeSource_Capability_Statement.pdf" target="_blank" className="cta-button" style={{ width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>Download PDF Capability Statement</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;
