import React from 'react';
import Navigation from '../../components/Navigation';

export default function About() {
  return (
    <main>
      <Navigation />
      
      <div className="container">
        <h1 className="hero-title">About This Project</h1>
        
        <div className="decorative-shape orange">
          <img 
            src="https://ids.lib.harvard.edu/ids/view/47174898" 
            alt="Byzantine Box with Hinged Lid, detail view, 6th-7th century CE, Harvard Art Museums" 
          />
        </div>
        
        <div className="content-section">
          <h2>Project Overview</h2>
          <p>
            This digital gallery explores the Byzantine Box with Hinged Lid (Harvard Art Museums ref. No. 1975.41.146), a fascinating example of early medieval metalwork whose function and cultural context have been subject to scholarly debate. The project was created as part of Harvard&apos;s GENED 1160: Harvard Gets Medieval course.
          </p>
          <p>
            The gallery presents both traditional and alternative interpretations of this object, examining its physical characteristics, historical context, comparative evidence, and possible travel routes. By exploring both the cosmetics container theory and the Viking balance scale container theory, we aim to demonstrate how archaeological interpretation can evolve as new comparative evidence emerges.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Research Methodology</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Analysis of Museum Documentation</div>
              <p>Detailed examination of the Harvard Art Museums&apos; documentation of the Byzantine Box</p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Comparative Study</div>
              <p>Analysis of similar objects from both Byzantine and Viking contexts</p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Cultural Context Research</div>
              <p>Examination of trade routes and cultural connections between Byzantium and the Viking world</p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Literature Review</div>
              <p>Review of academic literature on medieval weighing technologies and cosmetic containers</p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Provenance Investigation</div>
              <p>Consideration of the object&apos;s provenance and acquisition history</p>
            </div>
          </div>
          
          <p>
            This multifaceted approach allows for a more comprehensive understanding of the object beyond its physical characteristics, situating it within broader historical and cultural contexts.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Key Academic Sources</h2>
          <blockquote>
            &ldquo;The material culture of the Viking Age represents a complex fusion of indigenous Scandinavian traditions with influences from the Byzantine world and beyond.&rdquo;
          </blockquote>
          
          <div className="two-column">
            <div>
              <h3>Byzantine Studies</h3>
              <ul>
                <li>Kalavrezou, Ioli. Byzantine Women and Their World. Harvard Art Museums, 2003.</li>
                <li>Flinders Petrie, W. M. Objects of Daily Use. 2023, pp. 1–110.</li>
                <li>Cartwright, Mark. Cosmetics in the Ancient World. World History Encyclopedia, 2019.</li>
              </ul>
            </div>
            
            <div>
              <h3>Viking Studies</h3>
              <ul>
                <li>Wamers, Egon. Insularer Metallschmuck in Wikingerzeitlichen Gräbern Nordeuropas. Wachholtz, 1985.</li>
                <li>Steuer, Heiko. Waagen und Gewichte aus dem Mittelalterlichen Schleswig. Rheinland-Verlag, 1997.</li>
                <li>Mikkelsen, Egil. Looting or Missioning: Insular and Continental Sacred Objects in Viking Age Contexts in Norway. 2019.</li>
                <li>Pettersen, Aina Margrethe Heen. Mellom De Britiske Øyer og Midt-Norge. Master&apos;s thesis, 2013.</li>
                <li>Rahmstorf, Lorenz, et al. Merchants, Measures and Money: Understanding Technologies of Early Trade in a Comparative Perspective. 2021.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="content-section">
          <h2>Acknowledgments</h2>
          <p>
            We would like to thank:
          </p>
          <ul>
            <li>Harvard Art Museums for providing access to the Byzantine Box with Hinged Lid and its documentation</li>
            <li>The instructors and teaching staff of GENED 1160: Harvard Gets Medieval for their guidance and support</li>
            <li>The scholars whose research has contributed to our understanding of Byzantine and Viking material culture</li>
            <li>The British Museum, Victoria and Albert Museum, Cleveland Museum of Art, and other institutions whose collections provided comparative objects for this study</li>
          </ul>
        </div>
        
        <div className="content-section">
          <h2>Contact Information</h2>
          <p>
            For questions, comments, or additional information about this project, please contact:
          </p>
          <p>
            Harvard GENED 1160: Harvard Gets Medieval<br />
            Harvard University<br />
            Cambridge, MA 02138<br />
            Email: gened1160@harvard.edu
          </p>
        </div>
        
        <footer className="footer">
          <p>© 2025 Byzantine Box Digital Gallery | Harvard GENED 1160: Harvard Gets Medieval</p>
        </footer>
      </div>
    </main>
  );
}
