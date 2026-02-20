import React from 'react';
import '../index.css';

const Careers = () => {
    return (
        <div className="page-container">
            <div className="container" style={{ padding: '60px 0' }}>
                <h1 className="page-title">Careers at PrimeSource</h1>
                <p style={{ maxWidth: '800px', marginBottom: '40px' }}>Join a team of cleared professionals dedicated to advancing the mission of the U.S. Government through secure, innovative technology solutions.</p>

                <section style={{ marginBottom: '50px' }}>
                    <h2>Why PrimeSource?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '20px' }}>
                        <div style={{ padding: '25px', background: '#f8fafc', border: '1px solid #ddd', borderRadius: '4px' }}>
                            <h3 style={{ borderBottom: '2px solid var(--accent-color)', paddingBottom: '10px' }}>Mission Impact</h3>
                            <p>Work on critical federal and defense projects that directly support national security and intelligence objectives.</p>
                        </div>
                        <div style={{ padding: '25px', background: '#f8fafc', border: '1px solid #ddd', borderRadius: '4px' }}>
                            <h3 style={{ borderBottom: '2px solid var(--accent-color)', paddingBottom: '10px' }}>Clearance Support</h3>
                            <p>We actively support security clearance requirements, sponsorships, and upgrades for eligible professionals.</p>
                        </div>
                        <div style={{ padding: '25px', background: '#f8fafc', border: '1px solid #ddd', borderRadius: '4px' }}>
                            <h3 style={{ borderBottom: '2px solid var(--accent-color)', paddingBottom: '10px' }}>Career Growth</h3>
                            <p>Access continuous training, certifications (e.g., Security+, CISSP, AWS), and leadership development pathways.</p>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '50px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
                    <h2>Current Opportunities</h2>
                    <p>We are continuously seeking cleared talent holding Secret, Top Secret, and TS/SCI clearances.</p>

                    <div style={{ border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden', marginTop: '20px' }}>
                        <div style={{ padding: '20px', borderBottom: '1px solid #ddd', background: '#fff' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: 'var(--primary-color)' }}>Senior Cloud Architect (AWS GovCloud)</h3>
                            <p style={{ margin: '0 0 10px 0' }}><strong>Location:</strong> Laurel, MD (Hybrid)</p>
                            <p style={{ margin: '0 0 10px 0' }}><strong>Clearance:</strong> TS/SCI Required</p>
                            <a href="#apply" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Apply Now &rarr;</a>
                        </div>
                        <div style={{ padding: '20px', borderBottom: '1px solid #ddd', background: '#f9fafb' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: 'var(--primary-color)' }}>Cybersecurity Analyst (RMF)</h3>
                            <p style={{ margin: '0 0 10px 0' }}><strong>Location:</strong> Washington D.C.</p>
                            <p style={{ margin: '0 0 10px 0' }}><strong>Clearance:</strong> Secret Required</p>
                            <a href="#apply" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Apply Now &rarr;</a>
                        </div>
                        <div style={{ padding: '20px', background: '#fff' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: 'var(--primary-color)' }}>Full Stack Engineer (React/Node)</h3>
                            <p style={{ margin: '0 0 10px 0' }}><strong>Location:</strong> Remote (US Citizens Only)</p>
                            <p style={{ margin: '0 0 10px 0' }}><strong>Clearance:</strong> Public Trust Eligible</p>
                            <a href="#apply" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Apply Now &rarr;</a>
                        </div>
                    </div>
                </section>

                <section style={{ padding: '20px', background: '#f4f5f7', borderRadius: '4px', fontSize: '0.9rem', color: '#555' }}>
                    <strong>Equal Opportunity Employer Statement:</strong> PrimeSource is an Equal Opportunity/Affirmative Action Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, pregnancy, sexual orientation, gender identity, national origin, age, protected veteran status, or disability status.
                </section>
            </div>
        </div>
    );
};

export default Careers;
