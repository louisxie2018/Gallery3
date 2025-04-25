import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="nav-link logo">
            The Box
          </Link>
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
    </header>
  );
}
