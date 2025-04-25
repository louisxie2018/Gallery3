import React from 'react';
import Navigation from '../components/Navigation';
import Intro from '../components/Intro';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Intro />
      <Footer />
    </main>
  );
}
