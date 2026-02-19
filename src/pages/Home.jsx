import React from 'react';
import '../index.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="container hero-content">
                    <h1>Welcome to Prime Source</h1>
                    <p>Delivering excellence in every service required.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>
            <section className="features container">
                <div className="feature-card">
                    <h2>Quality</h2>
                    <p>We ensure top-notch quality in all our deliverables.</p>
                </div>
                <div className="feature-card">
                    <h2>Reliability</h2>
                    <p>Count on us to be there when you need us most.</p>
                </div>
                <div className="feature-card">
                    <h2>Innovation</h2>
                    <p>Using the latest technologies to solve your problems.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
