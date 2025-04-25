import React from 'react';
import Navigation from '../components/Navigation';
import Intro from '../components/Intro';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Intro />
      <footer className="footer">
        <p>© 2025 Weighing Nordic Trade Digital Gallery | Harvard GENED 1160: Harvard Gets Medieval</p>
      </footer>
    </main>
  );
}