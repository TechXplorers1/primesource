import React from 'react';
import '../index.css';

const Capabilities = () => {
    return (
        <div className="page-container">
            <div className="container" style={{ padding: '80px 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="page-title" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '20px' }}>Capability Statement</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', color: '#475569', lineHeight: 1.8 }}>PrimeSource is a trusted technology partner delivering secure, scalable, and mission-critical solutions to U.S. Federal, Army, Navy, and civilian agencies.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '50px', alignItems: 'start' }}>
                    <div className="capabilities-main premium-card" style={{ padding: '50px' }}>
                        <section style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', borderBottom: '3px solid var(--accent-color)', paddingBottom: '15px', marginBottom: '25px', display: 'inline-block' }}>Core Competencies</h2>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Cybersecurity & Risk Management:</strong> RMF Support, NIST Compliance, Vulnerability Management, Zero Trust Architecture.</span></li>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>IT Infrastructure Services:</strong> Network Management, Enterprise IT Support, Help Desk Operations, Systems Administration.</span></li>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Cloud Solutions:</strong> Secure Cloud Migration, multi-cloud strategy (AWS GovCloud, Azure Government).</span></li>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Software Development:</strong> Custom Application Development, Secure DevSecOps Pipelines, Legacy Modernization.</span></li>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Data Analytics:</strong> Systems Engineering, Data Systems Integration, BI and Reporting.</span></li>
                            </ul>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', borderBottom: '3px solid var(--accent-color)', paddingBottom: '15px', marginBottom: '25px', display: 'inline-block' }}>Differentiators</h2>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Agile Execution:</strong> Rapid deployment and iterative delivery tailored to mission objectives.</span></li>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Security-First Approach:</strong> Secure development lifecycle baked into every project.</span></li>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Compliance-Driven Delivery:</strong> Adherence to FAR/DFARS and NIST standards.</span></li>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Cleared Professionals:</strong> Facility clearance with highly trained TS/SCI personnel.</span></li>
                                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent-color)', marginRight: '15px', fontSize: '1.2rem', marginTop: '2px' }}>✓</span><span><strong style={{ color: 'var(--primary-color)' }}>Federal Acquisition Knowledge:</strong> Deep understanding of federal procurement processes and contract compliance.</span></li>
                            </ul>
                        </section>
                    </div>

                    <div className="capabilities-sidebar" style={{ position: 'sticky', top: '100px' }}>
                        <div style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', color: 'var(--white)', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginTop: '0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px', marginBottom: '20px' }}>Company Data</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(255,255,255,0.8)' }}>
                                <p style={{ margin: 0 }}><strong style={{ color: 'var(--white)' }}>Legal Name:</strong><br /> PrimeSource LLC</p>
                                <p style={{ margin: 0 }}><strong style={{ color: 'var(--white)' }}>CAGE Code:</strong><br /> <span style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem' }}>10SN3</span></p>
                                <p style={{ margin: 0 }}><strong style={{ color: 'var(--white)' }}>UEI:</strong><br /> <span style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem' }}>NBBFD5KEJHW6</span></p>
                                <p style={{ margin: 0 }}><strong style={{ color: 'var(--white)' }}>Business Type:</strong><br /> Small Business</p>
                            </div>

                            <h4 style={{ fontSize: '1.2rem', marginTop: '30px', marginBottom: '15px', color: 'var(--white)' }}>NAICS Codes</h4>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '10px', color: 'rgba(255,255,255,0.8)' }}>
                                <li><strong style={{ color: 'var(--accent-color)', marginRight: '10px' }}>541511</strong> Custom Computer Programming</li>
                                <li><strong style={{ color: 'var(--accent-color)', marginRight: '10px' }}>541512</strong> Computer Systems Design</li>
                                <li><strong style={{ color: 'var(--accent-color)', marginRight: '10px' }}>541513</strong> Computer Facilities Management</li>
                                <li><strong style={{ color: 'var(--accent-color)', marginRight: '10px' }}>541519</strong> Other Computer Related Services</li>
                                <li><strong style={{ color: 'var(--accent-color)', marginRight: '10px' }}>541330</strong> Engineering Services</li>
                                <li><strong style={{ color: 'var(--accent-color)', marginRight: '10px' }}>541990</strong> Professional Services</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <a href="/PrimeSource_Capability_Statement.pdf" target="_blank" className="cta-button" style={{ width: '100%', textAlign: 'center', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '16px' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                Download PDF Version
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;
