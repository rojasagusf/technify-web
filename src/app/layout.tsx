import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import 'normalize.css/normalize.css';

const monserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ['400', '700', '900'] 
});

export const metadata: Metadata = {
  title: "Technify",
  description: "App to listen techno music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
