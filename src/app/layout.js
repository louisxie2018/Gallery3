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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
