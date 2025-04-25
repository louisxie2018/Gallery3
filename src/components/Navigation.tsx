import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="logo text-3xl">
            Byzantine Box
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/object-biography" className="nav-link">
              Object Biography
            </Link>
            <Link href="/related-objects" className="nav-link">
              Related Objects
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
