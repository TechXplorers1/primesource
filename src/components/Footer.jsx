import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>Prime Source</h3>
                        <p>Secure solutions for federal and defense missions.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>gov-procurement@primesource.com</p>
                        <p>+1 (555) 123-4567</p>
                        <p className="social">
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Prime Source. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
