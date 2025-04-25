import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation';

export default function RelatedObjects() {
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
          <h1 className="hero-title fade-in">Related Objects</h1>
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
      
      <section className="content-section section-orange">
        <div className="container">
          <h2 className="fade-in">Byzantine Cosmetic Containers</h2>
          <div className="gallery-grid">
            <div className="gallery-item fade-in">
              <img 
                src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/464046/914091/main-image" 
                alt="Byzantine Cosmetic Box, 6th-7th century, Metropolitan Museum of Art" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Byzantine Cosmetic Box</h3>
              <p className="gallery-subtitle">6th-7th century CE</p>
              <p className="gallery-description">This ivory cosmetic box from the Metropolitan Museum of Art features carved decorations and a similar hinged construction.</p>
            </div>
            
            <div className="gallery-item fade-in">
              <img 
                src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/466273/924353/main-image" 
                alt="Byzantine Pyxis, 10th-11th century, Metropolitan Museum of Art" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Byzantine Pyxis</h3>
              <p className="gallery-subtitle">10th-11th century CE</p>
              <p className="gallery-description">A cylindrical container used for storing cosmetics, medicines, or precious items in the Byzantine world.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="content-section section-pink">
        <div className="container">
          <h2 className="fade-in">Viking Balance Scale Containers</h2>
          <div className="gallery-grid">
            <div className="gallery-item fade-in">
              <img 
                src="https://media.britishmuseum.org/media/Repository/Documents/2014_10/3_20/3c3cce7b_a156_4a8d_a1d3_a3b700c31f4e/preview_00035864_001.jpg" 
                alt="Viking Folding Balance and Case, 11th century, British Museum" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Viking Folding Balance</h3>
              <p className="gallery-subtitle">11th century CE</p>
              <p className="gallery-description">A complete example from the British Museum showing a folding balance scale with its protective case.</p>
            </div>
            
            <div className="gallery-item fade-in">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Viking_scales_and_weights.jpg/800px-Viking_scales_and_weights.jpg" 
                alt="Viking Scale Box with Weights, 10th century, National Museum of Denmark" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Viking Scale Set</h3>
              <p className="gallery-subtitle">10th century CE</p>
              <p className="gallery-description">A complete set of Viking weighing equipment including a folding scale, weights, and a protective container.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="content-section section-blue">
        <div className="container">
          <h2 className="fade-in">Egyptian Cosmetic Cases</h2>
          <div className="gallery-grid">
            <div className="gallery-item fade-in">
              <img 
                src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/544228/1088885/main-image" 
                alt="Egyptian Cosmetic Box, New Kingdom, Metropolitan Museum of Art" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Egyptian Cosmetic Box</h3>
              <p className="gallery-subtitle">New Kingdom, 1550-1070 BCE</p>
              <p className="gallery-description">An ancient Egyptian wooden cosmetic box with sliding lid, used for storing kohl and other cosmetic materials.</p>
            </div>
            
            <div className="gallery-item fade-in">
              <img 
                src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/547802/1204157/main-image" 
                alt="Egyptian Cosmetic Spoon, New Kingdom, Metropolitan Museum of Art" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Egyptian Cosmetic Spoon</h3>
              <p className="gallery-subtitle">New Kingdom, 1550-1070 BCE</p>
              <p className="gallery-description">A decorative cosmetic spoon used for applying cosmetics, showing the importance of beauty preparations in ancient Egypt.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="content-section section-orange">
        <div className="container">
          <h2 className="fade-in">Norman-Byzantine Connections</h2>
          <div className="gallery-grid">
            <div className="gallery-item fade-in">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Martorana_RogerII_2008.jpg/800px-Martorana_RogerII_2008.jpg" 
                alt="Mosaic of King Roger II being crowned by Christ, Palermo, Sicily" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Norman-Byzantine Art</h3>
              <p className="gallery-subtitle">12th century CE, Sicily</p>
              <p className="gallery-description">Mosaic showing Norman King Roger II of Sicily being crowned by Christ in Byzantine style, demonstrating cultural exchange.</p>
            </div>
            
            <div className="gallery-item fade-in">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Cappella_Palatina_Palermo_Italy._Detail_of_the_Byzantine_mosaics.jpg/800px-Cappella_Palatina_Palermo_Italy._Detail_of_the_Byzantine_mosaics.jpg" 
                alt="Byzantine mosaics in the Cappella Palatina, Palermo, Sicily" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Cappella Palatina</h3>
              <p className="gallery-subtitle">12th century CE, Sicily</p>
              <p className="gallery-description">Byzantine mosaics in the Norman palace chapel in Palermo, showing the fusion of Norman and Byzantine artistic traditions.</p>
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
