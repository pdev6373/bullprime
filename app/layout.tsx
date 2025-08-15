import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mona_Sans } from 'next/font/google';

const monaSans = Mona_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title:
    'Bull Prime Services Ltd, we specialise in connecting skilled workers with leading businesses in the construction and warehousing sectors.',
  description:
    'Connecting Skilled Workers with Businesses in Construction & Warehousing We provide reliable workforce solutions tailored to meet your needs – helping businesses grow and workers succeed. Contact Us Who We Are At Bull Prime Services Ltd, we specialise in matching skilled professionals with businesses in the construction and warehousing industries. With a focus on training.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
