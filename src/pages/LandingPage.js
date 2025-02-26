// src/pages/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import aiImage1 from './assets/a.jpg';
import aiImage2 from './assets/b.jpg';
import aiImage3 from './assets/c.jpg';
import aiImage4 from './assets/e.jpg';
import naiLogo from './assets/nai.png';
import morggyLogo from './assets/morggy.jpg';
import kenyaLogo from './assets/ke.png';
import siteLogo from './assets/logo.png'; // Correct path to the logo
import transparentBg from './assets/logo.png'; // Transparent image for hero section

const LandingPage = () => {
    const navigate = useNavigate();
 {/* Logo Section */}
 <header className="logo-section">
 <img src={siteLogo} alt="Charlady Logo" className="site-logo" />
</header>
    return (
        
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${transparentBg})` }}>
                <div className="hero-content">
                    {/* Header with Logo */}
                    <h1>Welcome to CHARLADY</h1>
                    <p>Connecting households and housekeepers in Kenya.</p>
                    <div className="cta-buttons">
                        <button onClick={() => navigate('/register-worker')}>Register as Worker</button>
                        <button onClick={() => navigate('/register-employer')}>Register as Employer</button>
                
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us-section">
                <h2>About Us</h2>
                <p>At CHARLADY, we aim to bridge the gap between households and skilled housekeepers. Our platform ensures safe, reliable, and professional services for all types of domestic work, from housekeeping to nanny and laundry services.</p>
            </section>

            {/* AI-Generated Visuals Section */}
            <section className="ai-visuals-section">
                <h2>Our Visuals</h2>
                <div className="ai-visuals">
                    <img src={aiImage1} alt="nanny at work" />
                    <img src={aiImage2} alt="Housekeeper at work" />
                    <img src={aiImage3} alt="Housekeeper " />
                    <img src={aiImage4} alt="Housekeeper at work" />
                </div>
            </section>

            {/* Registration Section */}
            <section className="registration-section">
                <h2>Get Started Today</h2>
                <div className="registration-options">
                    <div className="registration-card" onClick={() => navigate('/register-worker')}>
                        <h3>Register as a Worker</h3>
                        <p>Find housekeeping, nanny, and mama fua jobs near you.</p>
                    </div>
                    <div className="registration-card" onClick={() => navigate('/register-employer')}>
                        <h3>Register as an Employer</h3>
                        <p>Hire trusted professionals for your home.</p>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="services-section">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Housekeeping</h3>
                        <p>Professional cleaning services for your home with guaranteed security and trustworthiness.</p>
                    </div>
                    <div className="service-card">
                        <h3>Nanny Services</h3>
                        <p>Experienced and caring nannies for your children.</p>
                    </div>
                    <div className="service-card">
                        <h3>Mama Fua</h3>
                        <p>Reliable laundry services at your doorstep.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h3>How do I register?</h3>
                    <p>You can register as either a worker or employer by clicking the "Register" buttons on the homepage.</p>
                </div>
                <div className="faq-item">
                    <h3>Is CHARLADY trustworthy?</h3>
                    <p>Yes, we ensure all workers are thoroughly vetted and background checked before joining our platform.</p>
                </div>
                <div className="faq-item">
                    <h3>What services are available?</h3>
                    <p>We provide housekeeping, nanny services, and mama fua (laundry) services.</p>
                </div>
            </section>

            {/* How to Start Section */}
            <section className="how-to-start-section">
                <h2>How to Get Started</h2>
                <div className="steps-grid">
                    <div className="step-card">
                        <h3>Step 1: Register</h3>
                        <p>Sign up as a worker or employer. Get Verified.</p>
                    </div>
                    <div className="step-card">
                        <h3>Step 2: Post or Apply</h3>
                        <p>Employers post jobs, and workers apply.</p>
                    </div>
                    <div className="step-card">
                        <h3>Step 3: Connect</h3>
                        <p>Communicate and agree on terms.</p>
                    </div>
                    <div className="step-card">
                        <h3>Step 4: Get to Work</h3>
                        <p>Start working or hire your preferred professional.</p>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="partners-section">
    <h2>Our Partners</h2>
    <div className="partners-grid">
        <div className="partner-card">
            <img src={naiLogo} alt="Nairobi County" />
            <p>Nairobi County</p>
        </div>
        <div className="partner-card">
            <img src={kenyaLogo} alt="Kenyan Government" />
            <p>Kenyan Government</p>
        </div>
        <div className="partner-card">
            <img src={morggyLogo} alt="Morggy Technologies" />
            <p>Morggy Technologies</p>
        </div>
    </div>
</section>
            {/* Footer */}
            <footer className="footer">
                <p>Contact us: info@charlady.co.ke | +254 714 042 946</p>
                <p>&copy; 2023 CHARLADY. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
