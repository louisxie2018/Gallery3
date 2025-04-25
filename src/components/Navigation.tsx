import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      {/* Navigation Bar */}
      <header className="py-6 bg-primary-bg text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="logo text-3xl font-bold">
              Byzantine Box
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="#object-biography" className="nav-link">
                Object Biography
              </Link>
              <Link href="#gallery" className="nav-link">
                Related Objects
              </Link>
              <Link href="#footer" className="nav-link">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section bg-primary-bg text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-6">The Box with a Hinged Lid</h1>
          <p className="text-lg mb-8">
            Explore the rich history of medieval objects and their significance in daily life.
          </p>
          <div className="hero-image-container">
            <img
              src="https://ids.lib.harvard.edu/ids/view/47174896"
              alt="The Box with a Hinged Lid, 6th-7th century CE, Harvard Art Museums"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold mb-10">Related Objects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Gallery Item */}
            <div className="gallery-item group">
              <img
                src="https://ids.lib.harvard.edu/ids/view/47174896"
                alt="The Box with a Hinged Lid, closed view"
                className="w-full h-auto rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold">The Box with a Hinged Lid</h3>
                <p className="text-gray-600">6th-7th century CE, Byzantine</p>
                <p className="text-gray-700 mt-2">
                  A small bronze container with tin decoration featuring a Greek cross within a radiating star motif, possibly used for storing a folding balance scale or cosmetics.
                </p>
              </div>
            </div>
            {/* Add more gallery items here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-primary-bg text-white py-10">
        <div className="container mx-auto text-center">
          <p>© 2025 The Box with a Hinged Lid Digital Gallery</p>
          <p>Harvard GENED 1160: Harvard Gets Medieval</p>
        </div>
      </footer>
    </>
  );
};

export default Navigation;
