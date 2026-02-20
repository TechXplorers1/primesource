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

            <div className="container contact-main-content">
                <div className="contact-grid">
                    <div className="contact-info-panel">
                        <h2>Federal & Defense Inquiries</h2>
                        <p className="info-desc">For proposals, teaming agreements, and classified engagements, please indicate your clearance requirements directly in your message or contact our secure line.</p>

                        <div className="business-identifiers" style={{ marginBottom: '20px', padding: '15px', background: '#f8fafc', borderLeft: '4px solid var(--accent-color)' }}>
                            <p><strong>CAGE Code:</strong> 10SN3</p>
                            <p><strong>UEI:</strong> NBBFD5KEJHW6</p>
                        </div>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div className="info-text">
                                    <h4>Headquarters</h4>
                                    <p>309 Benthic Ln<br />Laurel, MD 20724</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="info-text">
                                    <h4>Email Us</h4>
                                    <p>gov-procurement@primesource.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div className="info-text">
                                    <h4>Call Us</h4>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel">
                        <div className="form-card">
                            <h3>Send a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
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
                                <button type="submit" className="modern-submit-btn">
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
