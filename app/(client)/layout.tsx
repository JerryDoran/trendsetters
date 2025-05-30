import type { Metadata } from 'next';
import { Roboto, Raleway } from 'next/font/google';

import '../globals.css';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { ClerkProvider } from '@clerk/nextjs';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'TrendSetters',
  description: 'Ecommerce website for fashion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={`${raleway.className} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
