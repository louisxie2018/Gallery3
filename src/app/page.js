import React from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="hero-section content-section section-blue">
        <div className="container">
          <h1 className="hero-title fade-in">The Box with a Hinged Lid</h1>
          <div className="hero-image-container fade-in">
            <img 
              src="https://ids.lib.harvard.edu/ids/view/47174896" 
              alt="The Box with a Hinged Lid, 6th-7th century CE, Harvard Art Museums" 
              className="hero-image"
            />
          </div>
          <div className="scroll-indicator">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 The Box with a Hinged Lid Digital Gallery | Harvard GENED 1160: Harvard Gets Medieval</p>
      </footer>
    </main>
  );
}
