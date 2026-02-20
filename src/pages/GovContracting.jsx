import React from 'react';
import '../index.css';

const GovContracting = () => {
    return (
        <div className="page-container">
            <div className="container" style={{ padding: '60px 0' }}>
                <h1 className="page-title">Government Contracting</h1>
                <p style={{ maxWidth: '800px', marginBottom: '40px' }}>PrimeSource is committed to providing exceptional service and value to the U.S. Federal Government. We maintain strict compliance with all federal contracting regulations and possess the experience to execute complex delivery orders.</p>

                <section style={{ marginBottom: '50px' }}>
                    <h2 style={{ color: 'var(--primary-color)' }}>Our Experience</h2>
                    <p>We have successfully delivered critical technology and professional services across multiple branches of government:</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
                        <div style={{ padding: '20px', borderLeft: '4px solid var(--accent-color)', background: '#f8fafc' }}>
                            <h3>U.S. Army</h3>
                            <p>Supported base operations and critical infrastructure modernization ensuring high availability and robust security postures.</p>
                        </div>
                        <div style={{ padding: '20px', borderLeft: '4px solid var(--accent-color)', background: '#f8fafc' }}>
                            <h3>U.S. Navy</h3>
                            <p>Delivered secure system engineering and lifecycle support for classified naval programs.</p>
                        </div>
                        <div style={{ padding: '20px', borderLeft: '4px solid var(--accent-color)', background: '#f8fafc' }}>
                            <h3>Department of Defense (DoD)</h3>
                            <p>Provided enterprise-wide cybersecurity risk management and compliance support (RMF/NIST).</p>
                        </div>
                        <div style={{ padding: '20px', borderLeft: '4px solid var(--accent-color)', background: '#f8fafc' }}>
                            <h3>Federal Civilian Agencies</h3>
                            <p>Designed and deployed scalable cloud architectures and custom applications to improve citizen services.</p>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '50px', background: 'var(--secondary-color)', color: 'white', padding: '40px', borderRadius: '4px' }}>
                    <h2>Compliance & Registration</h2>
                    <p>We operate with complete transparency and adhere to all regulatory requirements mandated for federal contractors.</p>
                    <ul style={{ marginTop: '20px', fontSize: '1.1rem', lineHeight: '2', listStyleType: 'none', paddingLeft: 0 }}>
                        <li>✅ <strong>SAM.gov Active:</strong> PrimeSource is fully registered and active in the System for Award Management (SAM.gov).</li>
                        <li>✅ <strong>FAR Compliant:</strong> Our operations, accounting, and personnel practices strictly comply with the Federal Acquisition Regulation (FAR).</li>
                        <li>✅ <strong>DFARS Ready:</strong> We meet DFARS clause requirements, including incident reporting and safeguarding covered defense information.</li>
                        <li>✅ <strong>NIST SP 800-171:</strong> Continuous monitoring and adherence to NIST security controls for controlled unclassified information (CUI).</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default GovContracting;
