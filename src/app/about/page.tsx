'use client';

import React from 'react';
import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <main>
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="hero-title text-center">About This Project</h1>
        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="image-container">
            <img 
              src="https://harvardartmuseums.org/assets/images/1975.41.146_3_CMAS.jpg" 
              alt="Byzantine Box with Hinged Lid, detail view, 6th-7th century CE, Harvard Art Museums" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Project Overview</h2>
            <p className="text-xl mb-6">
              This digital gallery explores the Byzantine Box with Hinged Lid (Harvard Art Museums ref. No. 1975.41.146), a fascinating example of early medieval metalwork whose function and cultural context have been subject to scholarly debate. The project was created as part of Harvard's GENED 1160: Harvard Gets Medieval course.
            </p>
            <p className="text-xl mb-6">
              The gallery presents both traditional and alternative interpretations of this object, examining its physical characteristics, historical context, comparative evidence, and possible travel routes. By exploring both the cosmetics container theory and the Viking balance scale container theory, we aim to demonstrate how archaeological interpretation can evolve as new comparative evidence emerges.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Research Methodology</h2>
            <p className="text-xl mb-6">
              The research for this project involved:
            </p>
            <p className="text-xl mb-6">
              1. Analysis of the Harvard Art Museums' documentation of the Byzantine Box
            </p>
            <p className="text-xl mb-6">
              2. Comparative study of similar objects from both Byzantine and Viking contexts
            </p>
            <p className="text-xl mb-6">
              3. Examination of trade routes and cultural connections between Byzantium and the Viking world
            </p>
            <p className="text-xl mb-6">
              4. Review of academic literature on medieval weighing technologies and cosmetic containers
            </p>
            <p className="text-xl mb-6">
              5. Consideration of the object's provenance and acquisition history
            </p>
            <p className="text-xl mb-6">
              This multifaceted approach allows for a more comprehensive understanding of the object beyond its physical characteristics, situating it within broader historical and cultural contexts.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Key Academic Sources</h2>
            <p className="text-xl mb-6">
              This project draws on research from numerous academic sources, including:
            </p>
            <p className="text-xl mb-6">
              • Kalavrezou, Ioli. Byzantine Women and Their World. Harvard Art Museums, 2003.
            </p>
            <p className="text-xl mb-6">
              • Flinders Petrie, W. M. Objects of Daily Use. 2023, pp. 1–110.
            </p>
            <p className="text-xl mb-6">
              • Wamers, Egon. Insularer Metallschmuck in Wikingerzeitlichen Gräbern Nordeuropas: Untersuchungen zur Skandinavischen Westexpansion. Wachholtz, 1985.
            </p>
            <p className="text-xl mb-6">
              • Steuer, Heiko. Waagen und Gewichte aus dem Mittelalterlichen Schleswig: Funde des 11. bis 13. Jahrhunderts aus Europa als Quellen zur Handels- und Währungsgeschichte. Rheinland-Verlag, 1997.
            </p>
            <p className="text-xl mb-6">
              • Mikkelsen, Egil. Looting or Missioning: Insular and Continental Sacred Objects in Viking Age Contexts in Norway. 2019, pp. 1–288.
            </p>
            <p className="text-xl mb-6">
              • Pettersen, Aina Margrethe Heen. Mellom De Britiske Øyer og Midt-Norge: En Arkeologisk Analyse av Insulær Kontakt og Gjenstandsfunn fra Vikingtidsgraver i Trøndelag. Master's thesis, 2013.
            </p>
            <p className="text-xl mb-6">
              • Rahmstorf, Lorenz, et al. Merchants, Measures and Money: Understanding Technologies of Early Trade in a Comparative Perspective. 2021.
            </p>
            <p className="text-xl mb-6">
              • Cartwright, Mark. Cosmetics in the Ancient World. World History Encyclopedia, 2019.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Acknowledgments</h2>
            <p className="text-xl mb-6">
              We would like to thank:
            </p>
            <p className="text-xl mb-6">
              • Harvard Art Museums for providing access to the Byzantine Box with Hinged Lid and its documentation
            </p>
            <p className="text-xl mb-6">
              • The instructors and teaching staff of GENED 1160: Harvard Gets Medieval for their guidance and support
            </p>
            <p className="text-xl mb-6">
              • The scholars whose research has contributed to our understanding of Byzantine and Viking material culture
            </p>
            <p className="text-xl mb-6">
              • The British Museum, Victoria and Albert Museum, Cleveland Museum of Art, and other institutions whose collections provided comparative objects for this study
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Contact Information</h2>
            <p className="text-xl mb-6">
              For questions, comments, or additional information about this project, please contact:
            </p>
            <p className="text-xl mb-6">
              Harvard GENED 1160: Harvard Gets Medieval<br />
              Harvard University<br />
              Cambridge, MA 02138<br />
              Email: gened1160@harvard.edu
            </p>
          </div>
        </div>
        
        <footer className="footer">
          <p>© 2025 Byzantine Box Digital Gallery | Harvard GENED 1160: Harvard Gets Medieval</p>
        </footer>
      </div>
    </main>
  );
}
