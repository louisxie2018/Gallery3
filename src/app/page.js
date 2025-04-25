import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Box';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Home />
      <Footer />
    </main>
  );
}
