import './globals.css';
import 'normalize.css/normalize.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';

const monserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  description: 'App to listen techno music',
  title: 'Technify',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased h-screen bg-absoluteDark text-absoluteLight grid grid-cols-8 grid-rows-12 gap-2 p-2`}>
        {children}
      </body>
    </html>
  );
}
