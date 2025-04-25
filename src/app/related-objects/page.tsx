'use client';

import React from 'react';
import Navigation from '@/components/Navigation';

export default function RelatedObjects() {
  return (
    <main>
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="hero-title text-center">Related Objects</h1>
        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="content-section">
            <h2 className="text-4xl mb-6">Comparative Objects</h2>
            <p className="text-xl mb-6">
              Examining objects similar to the Byzantine Box with Hinged Lid helps contextualize both interpretations of its function. The following objects provide important comparative evidence for understanding this enigmatic artifact.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Byzantine Cosmetic Containers</h2>
            
            <div className="grid-gallery mb-12">
              <div className="object-card">
                <img 
                  src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/464046/914091/main-image" 
                  alt="Byzantine Cosmetic Box, 6th-7th century, Metropolitan Museum of Art" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl mb-2">Byzantine Cosmetic Box</h3>
                  <p className="text-lg">6th-7th century CE, Metropolitan Museum of Art</p>
                  <p className="mt-4">This ivory cosmetic box features carved decorations and a similar hinged construction, though more elaborate than the Harvard box.</p>
                </div>
              </div>
              
              <div className="object-card">
                <img 
                  src="https://d1v1c884bl9u94.cloudfront.net/asset/1924.747/1924.747_web.jpg" 
                  alt="Byzantine Ivory Pyxis, 6th century, Cleveland Museum of Art" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl mb-2">Byzantine Ivory Pyxis</h3>
                  <p className="text-lg">6th century CE, Cleveland Museum of Art</p>
                  <p className="mt-4">This cylindrical container was used for storing cosmetics or precious items, demonstrating the variety of forms Byzantine containers could take.</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl mb-6">
              Byzantine cosmetic containers came in various forms, from simple boxes to elaborately decorated pyxides. They were typically made from materials such as ivory, bone, metal, or wood. The decoration often included Christian motifs, geometric patterns, or scenes from classical mythology.
            </p>
            <p className="text-xl mb-6">
              The use of cosmetics was widespread in Byzantine society, with substances like kohl (eye makeup), rouge for cheeks and lips, and various skin treatments being commonly used. These cosmetic practices were inherited from Roman traditions and also influenced by Eastern practices.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Viking Balance Scale Containers</h2>
            
            <div className="grid-gallery mb-12">
              <div className="object-card">
                <img 
                  src="https://media.britishmuseum.org/media/Repository/Documents/2014_10/3_20/3c3cce7b_a156_4a8d_a1d3_a3b700c31f4e/preview_00035864_001.jpg" 
                  alt="Viking Folding Balance and Case, 11th century, British Museum" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl mb-2">Viking Folding Balance and Case</h3>
                  <p className="text-lg">11th century CE, British Museum</p>
                  <p className="mt-4">This complete example shows a folding balance scale with its protective case, similar in size and proportion to the Byzantine Box.</p>
                </div>
              </div>
              
              <div className="object-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Viking_scales_and_weights.jpg/800px-Viking_scales_and_weights.jpg" 
                  alt="Viking Scale Box with Weights, 10th century, National Museum of Denmark" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl mb-2">Viking Scale Box with Weights</h3>
                  <p className="text-lg">10th century CE, National Museum of Denmark</p>
                  <p className="mt-4">This bronze container from the important Viking trading center was designed specifically to house a folding balance scale and its weights.</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl mb-6">
              Viking merchants relied on portable folding balance scales to weigh silver and other precious metals used in commercial transactions. These scales needed to be protected during travel, leading to the development of specialized containers.
            </p>
            <p className="text-xl mb-6">
              The typical Viking scale container was rectangular, made of bronze or brass, and featured a hinged lid. The interior was sized precisely to accommodate the folded beam, chains, and sometimes a set of weights. These containers were essential tools for merchants operating within the weight-money economy of the Viking world.
            </p>
            <p className="text-xl mb-6">
              Archaeological finds from trading centers like Hedeby, Birka, and various sites across Scandinavia and the Baltic region have yielded numerous examples of these specialized containers, providing important comparative material for the Byzantine Box.
            </p>
          </div>
          
          <div className="content-section">
            <h2 className="text-4xl mb-6">Egyptian Cosmetic Containers</h2>
            
            <div className="grid-gallery mb-12">
              <div className="object-card">
                <img 
                  src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/544228/1088885/main-image" 
                  alt="Egyptian Cosmetic Box, New Kingdom, Metropolitan Museum of Art" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl mb-2">Egyptian Cosmetic Box</h3>
                  <p className="text-lg">New Kingdom, 1550-1070 BCE, Metropolitan Museum of Art</p>
                  <p className="mt-4">This wooden cosmetic box with sliding lid represents the long tradition of specialized containers for beauty products in Egypt.</p>
                </div>
              </div>
              
              <div className="object-card">
                <img 
                  src="https://media.britishmuseum.org/media/Repository/Documents/2014_10/16_8/6c8e9f74_a775_4f0d_a6fc_a3c000a96a5a/preview_00096252_001.jpg" 
                  alt="Egyptian Kohl Tube, Late Period, British Museum" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl mb-2">Egyptian Kohl Tube</h3>
                  <p className="text-lg">Late Period, 664-332 BCE, British Museum</p>
                  <p className="mt-4">This specialized container for eye makeup demonstrates the importance of cosmetics in Egyptian culture and the variety of container forms.</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl mb-6">
              Egyptian cosmetic containers have a history spanning thousands of years, with examples dating from the Predynastic Period through the Roman era. These containers took many forms, from simple boxes and tubes to elaborately carved vessels shaped like animals or human figures.
            </p>
            <p className="text-xl mb-6">
              The Egyptian tradition of cosmetic use was highly developed, with specialized containers for different substances: kohl for eye makeup, red ochre for lips and cheeks, and various unguents and oils for skin care. These practices influenced cosmetic traditions throughout the Mediterranean world, including the Byzantine Empire.
            </p>
            <p className="text-xl mb-6">
              While the Byzantine Box is much later than these Egyptian examples, the long-standing tradition of specialized cosmetic containers provides important context for understanding how such objects were used and valued across different cultures and time periods.
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
