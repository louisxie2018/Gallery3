import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Gallery />
      <Footer />
    </main>
  );
}
