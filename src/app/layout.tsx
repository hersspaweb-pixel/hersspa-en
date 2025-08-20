import type { Metadata } from 'next';
import { Prata } from 'next/font/google';
import './globals.css';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const prata = Prata({
  variable: '--font-prata',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Her S Spa',
  description: 'Her S Spa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prata.variable}`}>
      <body className="antialiased">
        <Header />
        <div className="bg-gradient-to-br from-amber-50 to-orange-50">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
