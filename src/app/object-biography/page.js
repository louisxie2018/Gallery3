import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation';

export default function ObjectBiography() {
  useEffect(() => {
    // Function to handle scroll effects
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      const fadeElements = document.querySelectorAll('.fade-in');
      
      // Check if elements are in viewport and add visible class
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
      
      // Change background color based on scroll position
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
          document.body.className = section.className.includes('section-orange') 
            ? 'bg-orange' 
            : section.className.includes('section-pink')
              ? 'bg-pink'
              : 'bg-blue';
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for elements in view
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <main>
      <Navigation />
      
      <section className="hero-section content-section section-blue">
        <div className="container">
          <h1 className="hero-title fade-in">Object Biography</h1>
          <div className="hero-image-container fade-in">
            <img 
              src="https://ids.lib.harvard.edu/ids/view/47174898" 
              alt="The Box with a Hinged Lid, detail view, 6th-7th century CE, Harvard Art Museums" 
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
      
      <section className="content-section section-orange">
        <div className="container">
          <h2 className="fade-in">Physical Characteristics</h2>
          <div className="gallery-grid">
            <div className="gallery-item fade-in">
              <img 
                src="https://ids.lib.harvard.edu/ids/view/47174896" 
                alt="The Box with a Hinged Lid, closed view" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Exterior Design</h3>
              <p className="gallery-subtitle">Bronze with tin decoration</p>
              <p className="gallery-description">The exterior features a Greek cross within a radiating star motif, created through tin inlay on the bronze surface.</p>
            </div>
            
            <div className="gallery-item fade-in">
              <img 
                src="https://ids.lib.harvard.edu/ids/view/47174897" 
                alt="The Box with a Hinged Lid, open view" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Interior Construction</h3>
              <p className="gallery-subtitle">Single compartment</p>
              <p className="gallery-description">The interior consists of a single compartment with a depth of approximately 1.5 cm, suitable for small items.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="content-section section-pink">
        <div className="container">
          <h2 className="fade-in">Material Analysis</h2>
          <div className="gallery-grid">
            <div className="gallery-item fade-in">
              <img 
                src="https://ids.lib.harvard.edu/ids/view/47174898" 
                alt="The Box with a Hinged Lid, detail of decoration" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Bronze Composition</h3>
              <p className="gallery-subtitle">Copper alloy</p>
              <p className="gallery-description">The box is made from a copper alloy typical of Byzantine metalwork, with traces of tin used for decorative inlay.</p>
            </div>
            
            <div className="gallery-item fade-in">
              <img 
                src="https://ids.lib.harvard.edu/ids/view/47174899" 
                alt="The Box with a Hinged Lid, detail of hinge mechanism" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Hinge Mechanism</h3>
              <p className="gallery-subtitle">Functional design</p>
              <p className="gallery-description">The hinge consists of interlocking loops of metal, allowing the lid to open and close securely.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="content-section section-blue">
        <div className="container">
          <h2 className="fade-in">Provenance</h2>
          <div className="gallery-grid">
            <div className="gallery-item fade-in">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Byzantine_Empire_555_AD.png/800px-Byzantine_Empire_555_AD.png" 
                alt="Map of Byzantine Empire, 6th century CE" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Origin</h3>
              <p className="gallery-subtitle">Eastern Mediterranean</p>
              <p className="gallery-description">The box is believed to have originated in the Eastern Mediterranean region during the 6th-7th century CE.</p>
            </div>
            
            <div className="gallery-item fade-in">
              <img 
                src="https://harvardartmuseums.org/assets/images/v1/collection/museums/hama/building-1.jpg" 
                alt="Harvard Art Museums exterior" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Acquisition</h3>
              <p className="gallery-subtitle">Harvard Art Museums</p>
              <p className="gallery-description">Acquired by the Harvard Art Museums in 1975 (accession number 1975.41.146) through the David M. Robinson Fund.</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>© 2025 The Box with a Hinged Lid Digital Gallery | Harvard GENED 1160: Harvard Gets Medieval</p>
      </footer>
    </main>
  );
}
