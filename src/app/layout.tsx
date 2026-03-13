import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'devroast',
  description: 'paste your code. get roasted.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg-page min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
