import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with Subtitle */}
          <div>
            <Link href="/" className="logo text-3xl font-bold">
              Weighing Nordic Trade
            </Link>
            <p className="text-sm text-gray-500 mt-1">Measuring medieval commerce through coins, scale, and other objects</p>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/Gallery" className="nav-link">
              Gallery
            </Link>
            <Link href="/About" className="nav-link">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;