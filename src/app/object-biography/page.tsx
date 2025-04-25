'use client';

import React from 'react';
import Navigation from '@/components/Navigation';

export default function ObjectBiography() {
  return (
    <main>
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="hero-title text-center">Object Biography</h1>
        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="image-container">
            <img 
              src="https://ids.lib.harvard.edu/ids/view/47174897" 
              alt="Byzantine Box with Hinged Lid, open view showing interior, 6th-7th century CE, Harvard Art Museums" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Physical Characteristics</h2>
            <p className="text-xl mb-6">
              The Byzantine Box with Hinged Lid (Harvard Art Museums ref. No. 1975.41.146) is a small, rectangular container made primarily of copper alloy (bronze) with tin decoration on the lid. It measures 2.5 × 7.3 × 4.5 cm (1 × 2 7/8 × 1 3/4 in.) and dates to the 6th-7th century CE.
            </p>
            <p className="text-xl mb-6">
              The box features a hinged lid with a decorative pattern consisting of a Greek cross within a radiating star or flower motif. This pattern is created through the application of tin to the bronze surface. The container has a rectangular shape with slightly rounded corners and sits on a flat base.
            </p>
            <p className="text-xl mb-6">
              The construction technique involves cast bronze with applied tin decoration. The hinge mechanism allows the lid to open fully, providing access to a hollow interior compartment. The craftsmanship demonstrates skilled metalworking typical of Byzantine production.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Cosmetics Container Interpretation</h2>
            <p className="text-xl mb-6">
              The Harvard Art Museums catalog suggests that while the purpose of this container is unknown, small boxes like this one could be used in a number of ways, including as cosmetics containers. This interpretation draws upon the similarity of its design pattern and shape to objects documented in Petrie's (1927) findings.
            </p>
            <p className="text-xl mb-6">
              Cosmetics were widely used in the Byzantine world, with both men and women applying various substances for aesthetic, hygienic, and medicinal purposes. Small containers for holding cosmetic substances were common possessions, particularly among the upper classes.
            </p>
            <p className="text-xl mb-6">
              The size and form of this box would have been suitable for storing small amounts of cosmetic substances such as kohl (eye makeup), rouge, or scented oils. The hinged lid would have provided convenient access while keeping the contents secure.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Viking Balance Scale Container Interpretation</h2>
            <p className="text-xl mb-6">
              An alternative interpretation proposes that the object functioned as a container for a folding Viking balance scale. This reinterpretation is supported by close comparisons with Viking Age finds from Scandinavia, where similar brass or bronze containers were used to house portable weighing instruments.
            </p>
            <p className="text-xl mb-6">
              The dimensions and form of the Byzantine Box closely match those of documented Viking scale containers. The interior space would have been sufficient to hold the folded beam, suspension chains, and possibly some weights of a small balance scale.
            </p>
            <p className="text-xl mb-6">
              If this interpretation is correct, the object represents an interesting case of cross-cultural adaptation, where a Byzantine-manufactured item was repurposed for use within the Viking economic system, which relied heavily on weighing silver and other precious metals for commercial transactions.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Provenance and Acquisition</h2>
            <p className="text-xl mb-6">
              The Byzantine Box with Hinged Lid was acquired by the Harvard Art Museums in 1975 (accession number 1975.41.146). Unfortunately, detailed provenance information about where the object was found and its journey before entering the museum's collection is limited in the available documentation.
            </p>
            <p className="text-xl mb-6">
              This lack of specific provenance information is not uncommon for objects acquired before the more stringent documentation standards that became prevalent in later decades. Without clear archaeological context, determining the object's original use and cultural setting relies more heavily on comparative analysis with similar objects.
            </p>
            <p className="text-xl mb-6">
              The object is currently part of the Harvard Art Museums' Byzantine collection, where it serves as an example of early medieval metalwork and contributes to scholarly understanding of material culture from this period.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Material Analysis</h2>
            <p className="text-xl mb-6">
              The box is primarily composed of copper alloy (bronze), a material commonly used in Byzantine metalwork. The decorative elements on the lid are created with tin, which provides a contrasting lighter color against the darker bronze background.
            </p>
            <p className="text-xl mb-6">
              The use of tin is significant, as it was a valuable material in the early medieval period. Major sources of tin in this era included Cornwall in Britain and the Erzgebirge region in Central Europe. The presence of tin decoration might indicate connections to these regions or to trade networks that distributed tin throughout the medieval world.
            </p>
            <p className="text-xl mb-6">
              The combination of bronze and tin represents a deliberate aesthetic choice, creating a visually striking object that would have been relatively valuable. The durability of these materials has allowed the object to survive in good condition for over a millennium.
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
