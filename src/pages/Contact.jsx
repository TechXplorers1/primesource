import React from 'react';
import '../index.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you — your inquiry has been received. Our team will contact you shortly.');
    };

    return (
        <div className="page-container">
            <div className="contact-hero">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p style={{ color: 'white', maxWidth: '600px' }}>Partner with us for mission-critical solutions and secure federal integrations.</p>
                </div>
            </div>

            <div className="container contact-main-content" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 400px) 1fr', background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                    <div className="contact-info-panel" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', color: 'var(--white)', padding: '50px 40px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--white)' }}>Federal & Defense Inquiries</h2>
                        <p className="info-desc" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '40px' }}>For proposals, teaming agreements, and classified engagements, please indicate your clearance requirements directly in your message or contact our secure line.</p>



                        <div className="info-items" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                <div className="info-icon" style={{ color: 'var(--accent-color)', marginTop: '5px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div className="info-text">
                                    <h4 style={{ color: 'var(--white)', marginBottom: '5px', fontSize: '1.1rem' }}>Headquarters</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>309 Benthic Ln<br />Laurel, MD 20724</p>
                                </div>
                            </div>

                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                <div className="info-icon" style={{ color: 'var(--accent-color)', marginTop: '5px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="info-text">
                                    <h4 style={{ color: 'var(--white)', marginBottom: '5px', fontSize: '1.1rem' }}>Email Us</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>gov-procurement@primesource.com</p>
                                </div>
                            </div>

                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                <div className="info-icon" style={{ color: 'var(--accent-color)', marginTop: '5px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div className="info-text">
                                    <h4 style={{ color: 'var(--white)', marginBottom: '5px', fontSize: '1.1rem' }}>Call Us</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel" style={{ padding: '50px 60px', background: 'var(--white)' }}>
                        <div className="form-card">
                            <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '30px' }}>Send a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="modern-form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="modern-form-group">
                                        <label htmlFor="email">Work Email *</label>
                                        <input type="email" id="email" name="email" placeholder="john@agency.gov" required />
                                    </div>
                                </div>
                                <div className="modern-form-group">
                                    <label htmlFor="company">Company / Agency *</label>
                                    <input type="text" id="company" name="company" placeholder="Organization name" required />
                                </div>
                                <div className="modern-form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="How can we help?" />
                                </div>
                                <div className="modern-form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Include any specific facility clearance requirements..." required></textarea>
                                </div>
                                <button type="submit" className="modern-submit-btn" style={{ marginTop: '10px' }}>
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
