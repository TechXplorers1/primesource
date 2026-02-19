import React from 'react';
import '../index.css';

const Service = () => {
    return (
        <div className="page-container container">
            <h1 className="page-title">Our Services</h1>
            <div className="service-grid">
                <div className="service-item">
                    <h2>Service One</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="service-item">
                    <h2>Service Two</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="service-item">
                    <h2>Service Three</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="service-item">
                    <h2>Service Four</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
