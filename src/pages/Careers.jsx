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

                <div className="premium-card" style={{ marginBottom: '50px', padding: '50px' }}>
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

                <div className="premium-card" style={{ marginBottom: '50px', padding: '50px' }}>
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', borderBottom: '3px solid var(--accent-color)', paddingBottom: '15px', marginBottom: '25px', display: 'inline-block' }}>Current Opportunities</h2>
                    <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '30px' }}>We are continuously seeking cleared talent holding Secret, Top Secret, and TS/SCI clearances.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'var(--white)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', transition: 'box-shadow 0.3s' }} className="job-card">
                            <div>
                                <h3 style={{ margin: '0 0 10px 0', color: 'var(--primary-color)', fontSize: '1.4rem' }}>Senior Cloud Architect (AWS GovCloud)</h3>
                                <div style={{ display: 'flex', gap: '20px', color: '#64748b', fontSize: '0.95rem' }}>
                                    <span><strong style={{ color: '#334155' }}>Location:</strong> Laurel, MD (Hybrid)</span>
                                    <span><strong style={{ color: 'var(--accent-color)' }}>Clearance:</strong> TS/SCI Required</span>
                                </div>
                            </div>
                            <a href="#apply" className="cta-button" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>Apply Now</a>
                        </div>
                        <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'var(--white)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', transition: 'box-shadow 0.3s' }} className="job-card">
                            <div>
                                <h3 style={{ margin: '0 0 10px 0', color: 'var(--primary-color)', fontSize: '1.4rem' }}>Cybersecurity Analyst (RMF)</h3>
                                <div style={{ display: 'flex', gap: '20px', color: '#64748b', fontSize: '0.95rem' }}>
                                    <span><strong style={{ color: '#334155' }}>Location:</strong> Washington D.C.</span>
                                    <span><strong style={{ color: 'var(--accent-color)' }}>Clearance:</strong> Secret Required</span>
                                </div>
                            </div>
                            <a href="#apply" className="cta-button" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>Apply Now</a>
                        </div>
                        <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'var(--white)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', transition: 'box-shadow 0.3s' }} className="job-card">
                            <div>
                                <h3 style={{ margin: '0 0 10px 0', color: 'var(--primary-color)', fontSize: '1.4rem' }}>Full Stack Engineer (React/Node)</h3>
                                <div style={{ display: 'flex', gap: '20px', color: '#64748b', fontSize: '0.95rem' }}>
                                    <span><strong style={{ color: '#334155' }}>Location:</strong> Remote (US Citizens Only)</span>
                                    <span><strong style={{ color: 'var(--accent-color)' }}>Clearance:</strong> Public Trust Eligible</span>
                                </div>
                            </div>
                            <a href="#apply" className="cta-button" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>Apply Now</a>
                        </div>
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
