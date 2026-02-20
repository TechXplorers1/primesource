import React from 'react';
import '../index.css';

const GovContracting = () => {
    return (
        <div className="page-container">
            <div className="container" style={{ padding: '80px 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="page-title" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '20px' }}>Government Contracting</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', color: '#475569', lineHeight: 1.8 }}>PrimeSource is committed to providing exceptional service and value to the U.S. Federal Government. We maintain strict compliance with all federal contracting regulations and possess the experience to execute complex delivery orders.</p>
                </div>

                <div className="premium-card" style={{ marginBottom: '50px', padding: '50px' }}>
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', borderBottom: '3px solid var(--accent-color)', paddingBottom: '15px', marginBottom: '25px', display: 'inline-block' }}>Our Experience</h2>
                    <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '30px' }}>We have successfully delivered critical technology and professional services across multiple branches of government:</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        <div style={{ padding: '30px', borderLeft: '4px solid var(--accent-color)', background: '#f8fafc', borderRadius: '0 8px 8px 0', border: '1px solid #e2e8f0', borderLeftWidth: '4px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>U.S. Army</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6 }}>Supported base operations and critical infrastructure modernization ensuring high availability and robust security postures.</p>
                        </div>
                        <div style={{ padding: '30px', borderLeft: '4px solid var(--accent-color)', background: '#f8fafc', borderRadius: '0 8px 8px 0', border: '1px solid #e2e8f0', borderLeftWidth: '4px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>U.S. Navy</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6 }}>Delivered secure system engineering and lifecycle support for classified naval programs.</p>
                        </div>
                        <div style={{ padding: '30px', borderLeft: '4px solid var(--accent-color)', background: '#f8fafc', borderRadius: '0 8px 8px 0', border: '1px solid #e2e8f0', borderLeftWidth: '4px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Department of Defense (DoD)</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6 }}>Provided enterprise-wide cybersecurity risk management and compliance support (RMF/NIST).</p>
                        </div>
                        <div style={{ padding: '30px', borderLeft: '4px solid var(--accent-color)', background: '#f8fafc', borderRadius: '0 8px 8px 0', border: '1px solid #e2e8f0', borderLeftWidth: '4px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Federal Civilian Agencies</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6 }}>Designed and deployed scalable cloud architectures and custom applications to improve citizen services.</p>
                        </div>
                    </div>
                </div>

                <div className="premium-card" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', color: 'white', padding: '50px', border: 'none' }}>
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--white)', borderBottom: '3px solid var(--accent-color)', paddingBottom: '15px', marginBottom: '25px', display: 'inline-block' }}>Compliance & Registration</h2>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>We operate with complete transparency and adhere to all regulatory requirements mandated for federal contractors.</p>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', listStyleType: 'none', paddingLeft: 0 }}>
                        <li style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <strong style={{ color: 'var(--accent-color)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>✓ SAM.gov Active</strong>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>PrimeSource is fully registered and active in the System for Award Management (SAM.gov).</span>
                        </li>
                        <li style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <strong style={{ color: 'var(--accent-color)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>✓ FAR Compliant</strong>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>Our operations, accounting, and personnel practices strictly comply with the Federal Acquisition Regulation (FAR).</span>
                        </li>
                        <li style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <strong style={{ color: 'var(--accent-color)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>✓ DFARS Ready</strong>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>We meet DFARS clause requirements, including incident reporting and safeguarding covered defense information.</span>
                        </li>
                        <li style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <strong style={{ color: 'var(--accent-color)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>✓ NIST SP 800-171</strong>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>Continuous monitoring and adherence to NIST security controls for controlled unclassified information (CUI).</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GovContracting;
