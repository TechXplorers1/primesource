import React from 'react';
import '../index.css';

const Careers = () => {
    return (
        <div className="page-container">
            <div className="container" style={{ padding: '80px 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="page-title" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '20px' }}>Careers at PrimeSource</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', color: '#475569', lineHeight: 1.8 }}>Join a team of cleared professionals dedicated to advancing the mission of the U.S. Government through secure, innovative technology solutions.</p>
                </div>

                <div className="premium-card responsive-padded-card">
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', borderBottom: '3px solid var(--accent-color)', paddingBottom: '15px', marginBottom: '25px', display: 'inline-block' }}>Why PrimeSource?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '20px' }}>
                        <div style={{ padding: '30px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Mission Impact</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6 }}>Work on critical federal and defense projects that directly support national security and intelligence objectives.</p>
                        </div>
                        <div style={{ padding: '30px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Clearance Support</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6 }}>We actively support security clearance requirements, sponsorships, and upgrades for eligible professionals.</p>
                        </div>
                        <div style={{ padding: '30px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Career Growth</h3>
                            <p style={{ color: '#475569', lineHeight: 1.6 }}>Access continuous training, certifications (e.g., Security+, CISSP, AWS), and leadership development pathways.</p>
                        </div>
                    </div>
                </div>

                <div className="premium-card responsive-padded-card">


                    <div style={{ background: '#f0f4f8', padding: '40px', borderRadius: '8px', textAlign: 'center', marginTop: '40px' }}>
                        <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '15px', fontWeight: 600 }}>Interested in Joining PrimeSource?</h3>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '25px' }}>Send your resume and a brief introduction to our recruitment team.</p>
                        <a href="mailto:careers@primesource.com" className="cta-button" style={{ display: 'inline-block', padding: '12px 30px', fontSize: '1rem', borderRadius: '6px', wordBreak: 'break-all' }}>careers@primesource.com</a>
                    </div>
                </div>

                <section style={{ padding: '20px 30px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.95rem', color: '#64748b', borderLeft: '4px solid #cbd5e1' }}>
                    <strong style={{ color: '#334155' }}>Equal Opportunity Employer Statement:</strong> PrimeSource is an Equal Opportunity/Affirmative Action Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, pregnancy, sexual orientation, gender identity, national origin, age, protected veteran status, or disability status.
                </section>
            </div>
        </div>
    );
};

export default Careers;
