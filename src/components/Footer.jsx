import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>PrimeSource</h3>
                        <p>Trusted Technology Partner for Federal & Defense Agencies.</p>

                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/capabilities">Capabilities</Link></li>
                            <li><Link to="/gov-contracting">Gov Contracting</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><a href="/PrimeSource_Capability_Statement.pdf" target="_blank">Capability Statement</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Use</Link></li>
                            <li><Link to="#">Accessibility Statement</Link></li>
                            <li><Link to="#">Equal Opportunity Employer</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>309 Benthic Ln<br />Laurel, MD 20724</p>
                        <p>gov-procurement@primesource.com</p>
                        <p>+1 (555) 123-4567</p>
                        <p className="social">
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} PrimeSource. All rights reserved. Registered in SAM.gov.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
