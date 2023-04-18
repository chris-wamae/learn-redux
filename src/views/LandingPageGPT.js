import React from 'react';
import "./stylesheets/landing-page-gpt.css"
const LandingPageGPT = () => {
    return (
        <div className="landing-container">
            <header className="header">
                <h1>Tuinue Wasichana</h1>
            </header>
            <section className="content">
                <div className="donate-section">
                    <h2>Donate</h2>
                    <p>Help us make a difference by donating today!</p>
                    <button className="donate-btn">Donate Now</button>
                </div>
                <div className="benefits-section">
                    <h2>Benefits</h2>
                    <ul>
                        <li>Support girls' education</li>
                        <li>Provide sanitary towels</li>
                        <li>Improve water and sanitation facilities</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};
export default LandingPageGPT;