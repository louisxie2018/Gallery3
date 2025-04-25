import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '700']
});

export const metadata = {
  title: 'Byzantine Box with Hinged Lid | Digital Gallery',
  description: 'Explore the Byzantine Box with Hinged Lid from Harvard Art Museums, examining its physical characteristics, historical context, and competing interpretations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}