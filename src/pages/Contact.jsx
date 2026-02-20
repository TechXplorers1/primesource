import React from 'react';
import '../index.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you — your message has been received.');
    };

    return (
        <div className="page-container">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Federal & Defense Inquiries</h2>
                        <p>For proposals and classified engagements please indicate clearance requirements in your message.</p>
                        <p><strong>Address:</strong> 100 Government Way, Washington, DC</p>
                        <p><strong>Email:</strong> gov-procurement@primesource.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <div className="map-placeholder" aria-hidden>
                            <p>Google Map Placeholder</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input type="text" id="company" name="company" placeholder="Company / Agency" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Brief description of request and any clearance needs" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
