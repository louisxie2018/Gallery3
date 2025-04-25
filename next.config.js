import './globals.css';
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-family',
});

export const metadata = {
  title: 'Gallery3',
  description: 'Gallery3',
};

// Move RootLayout to a separate file like app/layout.js if using Next.js 13+
// or export as a named export if you want to keep it here:
export function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable the app directory for Next.js 13+
  },
};

export default nextConfig;