import React from 'react';
import '../index.css';

const Contact = () => {
    return (
        <div className="page-container container">
            <h1 className="page-title">Contact Us</h1>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p><strong>Address:</strong> 123 Prime Street, Source City, Country</p>
                    <p><strong>Email:</strong> info@primesource.com</p>
                    <p><strong>Phone:</strong> +1 234 567 890</p>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
