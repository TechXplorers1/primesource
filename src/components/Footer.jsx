import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <h3>Prime Source</h3>
                    <p>Your trusted partner for quality solutions.</p>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Prime Source. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
